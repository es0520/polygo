-- Supabase Dashboard > SQL Editor에서 한 번 실행하세요.
-- ============================================================
-- Migration 1: 초기 스키마 (decks/words/mistakes)
-- ============================================================
create table if not exists public.decks (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 100),
  language text not null default '스페인어',
  icon text not null default '📚',
  created_at timestamptz not null default now()
);
create table if not exists public.words (
  id uuid primary key default gen_random_uuid(),
  deck_id uuid not null references public.decks(id) on delete cascade,
  front text not null,
  back text not null,
  example text not null default '',
  created_at timestamptz not null default now()
);
create table if not exists public.mistakes (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  word_id uuid not null references public.words(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(owner_id, word_id)
);
alter table public.decks enable row level security;
alter table public.words enable row level security;
alter table public.mistakes enable row level security;
create policy "own decks" on public.decks for all to authenticated using ((select auth.uid()) = owner_id) with check ((select auth.uid()) = owner_id);
create policy "own deck words" on public.words for all to authenticated using (exists (select 1 from public.decks d where d.id = deck_id and d.owner_id = (select auth.uid()))) with check (exists (select 1 from public.decks d where d.id = deck_id and d.owner_id = (select auth.uid())));
create policy "own mistakes" on public.mistakes for all to authenticated using ((select auth.uid()) = owner_id) with check ((select auth.uid()) = owner_id);

-- ============================================================
-- Migration 2: 예문 뜻/동의어, 공유 링크, 오답 복습 주기, 닉네임
-- ============================================================
alter table public.words add column if not exists example_ko text not null default '';
alter table public.words add column if not exists synonyms text not null default '';
alter table public.decks add column if not exists share_token uuid unique;
alter table public.mistakes add column if not exists wrong_count int not null default 1;
alter table public.mistakes add column if not exists next_review_at timestamptz not null default now();

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nickname text not null check (char_length(nickname) between 1 and 30),
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "own profile" on public.profiles for all to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

-- 공유 링크: 소유자가 아니어도 share_token이 설정된 덱/단어는 읽을 수 있게 허용
create policy "read shared deck" on public.decks for select to authenticated using (share_token is not null);
create policy "read shared deck words" on public.words for select to authenticated using (exists (select 1 from public.decks d where d.id = deck_id and d.share_token is not null));

-- ============================================================
-- Migration 3: 중국어 병음 + 기본 스페인어 단어장 예문 뜻/동의어 백필
-- (백필은 이 9개 기본 단어에만 한 번 적용하는 것이라 다시 실행할 일 없음.
--  새로 만드는 단어의 동의어는 앱의 "다른 표현" 입력란에 직접 쓰면 됨.)
-- ============================================================
alter table public.words add column if not exists pinyin text not null default '';

update public.words set example_ko = '안녕! 어떻게 지내?' where front = 'hola' and example_ko = '';
update public.words set example_ko = '정말 고마워요.', synonyms = '감사합니다' where front = 'gracias' and example_ko = '';
update public.words set example_ko = '커피 한 잔 부탁해요.', synonyms = '부탁해요' where front = 'por favor' and example_ko = '';
update public.words set example_ko = '화장실이 어디에 있나요?' where front = '¿dónde está...?' and example_ko = '';
update public.words set example_ko = '계산서 부탁해요.', synonyms = '영수증' where front = 'la cuenta' and example_ko = '';
update public.words set example_ko = '그는 내 친구예요.' where front = 'amigo' and example_ko = '';
update public.words set example_ko = '우리 가족은 대가족이에요.' where front = 'familia' and example_ko = '';
update public.words set example_ko = '먹고 싶어요.' where front = 'comer' and example_ko = '';
update public.words set example_ko = '오늘은 월요일이에요.' where front = 'hoy' and example_ko = '';

-- ============================================================
-- Migration 4: 온보딩 (성별/나이대/언어별 레벨·목표)
-- ============================================================
alter table public.profiles add column if not exists gender text;
alter table public.profiles add column if not exists age_range text;

create table if not exists public.user_languages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  language text not null,
  level text,
  goals text not null default '',
  created_at timestamptz not null default now(),
  unique(user_id, language)
);
alter table public.user_languages enable row level security;
create policy "own user_languages" on public.user_languages for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- ============================================================
-- Migration 6: 단어장 학습 종료(완료 처리)
-- ============================================================
alter table public.decks add column if not exists completed boolean not null default false;

-- ============================================================
-- Migration 7: 오답노트를 SM-2 적응형 간격 반복으로 전환
-- (next_review_at은 최근 복습 시각 기록용으로 남겨두고,
--  실제 복습 due 여부는 next_review_date로 판단합니다)
-- ============================================================
alter table public.mistakes add column if not exists ease_factor double precision not null default 2.5;
alter table public.mistakes add column if not exists interval_days int not null default 0;
alter table public.mistakes add column if not exists repetition_count int not null default 0;
alter table public.mistakes add column if not exists next_review_date date not null default current_date;
alter table public.mistakes add constraint mistakes_ease_factor_min check (ease_factor >= 1.3) not valid;
alter table public.mistakes validate constraint mistakes_ease_factor_min;
