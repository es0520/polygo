import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from './config.js';

const configured = SUPABASE_URL.startsWith('https://') && !SUPABASE_PUBLISHABLE_KEY.startsWith('YOUR_');
const supabase = configured ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;
const GREETINGS = { '스페인어': '¡Hola', '영어': 'Hello', '중국어': '你好' };
const initialDecksByLanguage = {
  '스페인어': [
    { name: '여행 스페인어', icon: '✈️', words: [
      { front: 'hola', back: '안녕', example: '¡Hola! ¿Cómo estás?', example_ko: '안녕! 어떻게 지내?', synonyms: '' },
      { front: 'gracias', back: '고마워', example: 'Muchas gracias.', example_ko: '정말 고마워요.', synonyms: '감사합니다' },
      { front: 'por favor', back: '부탁합니다', example: 'Un café, por favor.', example_ko: '커피 한 잔 부탁해요.', synonyms: '부탁해요' },
      { front: '¿dónde está...?', back: '…은 어디에 있나요?', example: '¿Dónde está el baño?', example_ko: '화장실이 어디에 있나요?', synonyms: '' },
      { front: 'la cuenta', back: '계산서', example: 'La cuenta, por favor.', example_ko: '계산서 부탁해요.', synonyms: '영수증' }
    ]},
    { name: '기초 일상회화', icon: '☀️', words: [
      { front: 'amigo', back: '친구', example: 'Él es mi amigo.', example_ko: '그는 내 친구예요.', synonyms: '' },
      { front: 'familia', back: '가족', example: 'Mi familia es grande.', example_ko: '우리 가족은 대가족이에요.', synonyms: '' },
      { front: 'comer', back: '먹다', example: 'Quiero comer.', example_ko: '먹고 싶어요.', synonyms: '' },
      { front: 'hoy', back: '오늘', example: 'Hoy es lunes.', example_ko: '오늘은 월요일이에요.', synonyms: '' }
    ]}
  ],
  '영어': [
    { name: '여행 영어', icon: '✈️', words: [
      { front: 'hello', back: '안녕', example: 'Hello! How are you?', example_ko: '안녕! 어떻게 지내?', synonyms: '하이' },
      { front: 'thank you', back: '고마워', example: 'Thank you so much.', example_ko: '정말 고마워요.', synonyms: '감사합니다' },
      { front: 'please', back: '부탁합니다', example: 'A coffee, please.', example_ko: '커피 한 잔 부탁해요.', synonyms: '부탁해요' },
      { front: 'where is...?', back: '…은 어디에 있나요?', example: 'Where is the bathroom?', example_ko: '화장실이 어디에 있나요?', synonyms: '' },
      { front: 'the bill', back: '계산서', example: 'The bill, please.', example_ko: '계산서 부탁해요.', synonyms: '영수증' }
    ]},
    { name: '기초 일상회화', icon: '☀️', words: [
      { front: 'friend', back: '친구', example: 'He is my friend.', example_ko: '그는 내 친구예요.', synonyms: '' },
      { front: 'family', back: '가족', example: 'My family is big.', example_ko: '우리 가족은 대가족이에요.', synonyms: '' },
      { front: 'eat', back: '먹다', example: 'I want to eat.', example_ko: '먹고 싶어요.', synonyms: '' },
      { front: 'today', back: '오늘', example: 'Today is Monday.', example_ko: '오늘은 월요일이에요.', synonyms: '' }
    ]}
  ],
  '중국어': [
    { name: '여행 중국어', icon: '✈️', words: [
      { front: '你好', pinyin: 'nǐ hǎo', back: '안녕', example: '你好！你好吗？', example_ko: '안녕! 어떻게 지내?', synonyms: '' },
      { front: '谢谢', pinyin: 'xiè xiè', back: '고마워', example: '非常谢谢。', example_ko: '정말 고마워요.', synonyms: '감사합니다' },
      { front: '请', pinyin: 'qǐng', back: '부탁합니다', example: '请给我一杯咖啡。', example_ko: '커피 한 잔 부탁해요.', synonyms: '부탁해요' },
      { front: '在哪里', pinyin: 'zài nǎ lǐ', back: '어디에 있나요', example: '洗手间在哪里？', example_ko: '화장실이 어디에 있나요?', synonyms: '' },
      { front: '账单', pinyin: 'zhàng dān', back: '계산서', example: '请给我账单。', example_ko: '계산서 부탁해요.', synonyms: '영수증' }
    ]},
    { name: '기초 일상회화', icon: '☀️', words: [
      { front: '朋友', pinyin: 'péng yǒu', back: '친구', example: '他是我的朋友。', example_ko: '그는 내 친구예요.', synonyms: '' },
      { front: '家人', pinyin: 'jiā rén', back: '가족', example: '我的家人很多。', example_ko: '우리 가족은 대가족이에요.', synonyms: '' },
      { front: '吃', pinyin: 'chī', back: '먹다', example: '我想吃。', example_ko: '먹고 싶어요.', synonyms: '' },
      { front: '今天', pinyin: 'jīn tiān', back: '오늘', example: '今天是星期一。', example_ko: '오늘은 월요일이에요.', synonyms: '' }
    ]}
  ]
};

const state = {
  screen: 'home', drawer: false, language: '스페인어', deckId: null, nickname: '',
  round: [], roundIndex: 0, unknownIds: [], studyDone: false,
  revealed: false, shuffle: false,
  quizType: 'choice', quizSource: 'deck', quizIndex: 0, answered: null,
  mistakes: [], dark: localStorage.getItem('lingo-dark') === 'true', modal: null,
  user: null, authMode: 'login', pendingShare: null,
  ocrCandidates: [], ocrBusy: false, aiMessages: [], aiBusy: false, onboard: null
};
let decks = [];

const $ = (s) => document.querySelector(s);
const deck = () => decks.find(d => d.id === state.deckId) || decks.find(d => d.language === state.language) || decks[0] || { id: null, name: '', icon: '📚', words: [] };
const escape = (text) => String(text).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));
const normalise = v => v.toLowerCase().normalize('NFD').replace(/[̀-ͯ\s.,!?¿¡]/g,'');
const normalisePinyin = v => v.toLowerCase().trim().replace(/\s+/g,' ');
const shuffleArr = arr => [...arr].sort(() => .5 - Math.random());
const langFlag = l => l === '영어' ? '🇬🇧' : l === '중국어' ? '🇨🇳' : '🇪🇸';
function icon(name) { return `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#${name}" /></svg>`; }

function render() {
  document.body.classList.toggle('dark', state.dark);
  $('#app').innerHTML = `${symbols()}<main class="shell">${header()}${content()}${nav()}</main>${drawer()}${modal()}`;
  bind();
}
function symbols() { return `<svg class="symbols" xmlns="http://www.w3.org/2000/svg"><symbol id="menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol><symbol id="home" viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-6h6v6"/></symbol><symbol id="book" viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/></symbol><symbol id="plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol><symbol id="chev" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></symbol><symbol id="shuffle" viewBox="0 0 24 24"><path d="m16 3 4 4-4 4M4 7h3c4 0 5 10 10 10h3M20 17l-4 4M4 17h3c1.8 0 3-2 4.2-4"/></symbol><symbol id="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></symbol><symbol id="user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6"/></symbol><symbol id="settings" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.2 2.2-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-3.2v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2.2-2.2.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H5v-3.2h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.2-2.2.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3.5h3.2v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.2 2.2-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V13h-.2a1.7 1.7 0 0 0-1.5 2Z"/></symbol><symbol id="quiz" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.3a2.5 2.5 0 1 1 3.9 2.4c-.8.5-1.4 1-1.4 2"/><path d="M12 17h.01"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 2.6-6.3"/><path d="M3 4v5h5"/></symbol></svg>`; }
function header() {
  const name = state.nickname || state.user?.email?.split('@')[0] || '';
  const title = !state.user ? 'Lingo에 오신 걸 환영해요' : state.screen === 'onboarding' ? '시작하기' : state.screen === 'home' ? `${GREETINGS[state.language]||'안녕'}, ${escape(name)}님` : state.screen === 'study' ? deck().name : state.screen === 'quiz' ? '퀴즈' : state.screen === 'mistakes' ? '오답 노트' : state.screen === 'ai' ? 'AI 튜터' : '새 단어장';
  return `<header><div><p class="eyebrow">${!state.user ? '나만의 언어 학습 공간' : state.screen === 'onboarding' ? '거의 다 됐어요' : state.screen === 'home' ? '오늘도 한 걸음씩' : state.language}</p><h1>${title}</h1></div>${state.user && state.screen!=='onboarding'?`<button class="icon-btn" data-action="drawer">${icon('menu')}</button>`:''}</header>`;
}
function content() { return `<section class="content">${!configured ? setup() : !state.user ? auth() : state.screen === 'onboarding' ? onboarding() : state.screen === 'home' ? home() : state.screen === 'study' ? study() : state.screen === 'quiz' ? quiz() : state.screen === 'mistakes' ? mistakes() : state.screen === 'ai' ? aiChat() : create()}</section>`; }
function setup(){return `<div class="empty"><div>⚙</div><h2>서버 연결을 준비해 주세요</h2><p>config.js에 Supabase 주소와 Publishable key를 넣으면 회원가입과 클라우드 저장을 시작할 수 있어요.</p></div>`}
function auth(){const signup=state.authMode==='signup';return `<div class="auth-card"><div class="auth-mark">L</div><h2>${signup?'회원가입':'로그인'}</h2><p>${signup?'가입하면 단어장이 개인 계정에 안전하게 저장돼요.':'어디서든 내 단어장을 이어서 학습하세요.'}</p><form id="auth-form">${signup?'<label>닉네임<input type="text" name="nickname" required minlength="1" maxlength="30" placeholder="다른 사람에게 보여질 이름" /></label>':''}<label>이메일<input type="email" name="email" required autocomplete="email" placeholder="name@example.com" /></label><label>비밀번호<input type="password" name="password" required minlength="8" autocomplete="${signup?'new-password':'current-password'}" placeholder="8자 이상" /></label>${signup?'<label>비밀번호 확인<input type="password" name="passwordConfirm" required minlength="8" autocomplete="new-password" placeholder="비밀번호를 다시 입력하세요" /></label>':''}<button class="primary" type="submit">${signup?'회원가입':'로그인'}</button></form><button class="auth-switch" data-action="auth-mode">${signup?'이미 계정이 있나요? 로그인':'계정이 없나요? 회원가입'}</button><div class="oauth-row"><span>또는</span><button class="oauth-btn" data-action="oauth-google">Google로 계속하기</button><button class="oauth-btn" data-action="oauth-kakao">Kakao로 계속하기</button></div></div>`}
function languagePill(){return `<button class="language-pill" data-action="language">${langFlag(state.language)} ${state.language} ${icon('chev')}</button>`;}
function langHeroArt(l){ return l==='영어'?'Hello!':l==='중국어'?'你好!':'¡Hola!'; }
function home() {
  const langDecks = decks.filter(d=>d.language===state.language);
  const d = deck();
  return `${languagePill()}<section class="hero"><div><span>LAST STUDIED</span><h2>${escape(d.name||'단어장 없음')}</h2><p>${(d.words||[]).length}개의 단어</p></div><div class="hero-art">${langHeroArt(state.language)}<small>✦</small></div></section><div class="section-title"><h2>내 단어장</h2><button data-screen="create">+ 만들기</button></div><div class="deck-list">${langDecks.map(dk=>`<button class="deck-row" data-deck="${dk.id}"><span class="deck-icon">${dk.icon}</span><span><b>${escape(dk.name)}</b><small>${dk.words.length}개의 단어</small></span>${icon('chev')}</button>`).join('')}</div><div class="section-title"><h2>학습 도구</h2></div><div class="tools"><button data-screen="quiz"><span>✎</span><b>퀴즈 풀기</b><small>기억을 확인해요</small></button><button data-screen="mistakes"><span>◉</span><b>오답 노트</b><small>${state.mistakes.length}개 저장됨</small></button></div>`;
}
function study() {
  const d = deck();
  if (!d.words.length) return `${languagePill()}<div class="empty"><div>＋</div><h2>아직 단어가 없어요</h2><p>단어장에 첫 단어를 추가해 보세요.</p><button class="primary" data-screen="create">단어 추가하기</button></div>`;
  if (!state.round.length && !state.studyDone) startRound();
  if (state.studyDone) return `${languagePill()}<div class="empty"><div>✓</div><h2>단어장을 다 외웠어요!</h2><p>${escape(d.name)} 학습을 완료했어요.</p><button class="primary" data-action="restart-round">다시 학습하기</button></div>`;
  const word = state.round[state.roundIndex];
  const extra = [word.pinyin, word.example, word.example_ko].filter(Boolean).join(' · ');
  return `${languagePill()}<div class="study-meta"><span>${state.roundIndex + 1} / ${state.round.length}</span><div style="display:flex;gap:6px"><button class="toggle" data-action="share-deck">🔗 공유</button><button class="toggle ${state.shuffle?'on':''}" data-action="shuffle">${icon('shuffle')} 셔플</button></div></div><div class="progress"><i style="width:${((state.roundIndex+1)/state.round.length)*100}%"></i></div><button class="flashcard ${state.revealed?'revealed':''}" data-action="reveal"><span class="card-label">${state.revealed?'뜻':state.language}</span><strong>${state.revealed?word.back:word.front}</strong><em>${state.revealed?(extra||'뜻을 확인했어요'):'카드를 눌러 뜻 확인하기'}</em><small>${state.revealed?'다시 눌러 단어 보기':'탭해서 뒤집기'}</small></button><div class="answer-row"><button class="soft danger" data-action="dontknow">아직 어려워요</button><button class="primary" data-action="know">알겠어요 ${icon('chev')}</button></div><p class="hint">모르는 단어만 모아 다시 보여드려요.</p>`;
}
function buildOptions(word, field) {
  const pool = decks.filter(d=>d.language===state.language).flatMap(d=>d.words);
  const source = pool.length ? pool : (deck().words.length ? deck().words : quizWords());
  const correctVal = word[field];
  const distractors = [...new Set(source.filter(x=>x[field] && x[field]!==correctVal).map(x=>x[field]))].sort(()=>.5-Math.random()).slice(0,3);
  return [correctVal, ...distractors].sort(()=>.5-Math.random());
}
function quizWords() {
  if (state.quizSource === 'mistakes') { const now=Date.now(); return state.mistakes.filter(w=>new Date(w.next_review_at||0).getTime()<=now); }
  return deck().words;
}
function quizTypeTabs() {
  if (state.language !== '중국어') return [['choice','객관식'],['spell','직접 입력'],['voice','말하기']];
  return [['choice','한자→한국어'],['spell','한자 입력'],['pinyin','한자→병음'],['ko-pinyin','한국어→병음'],['ko-char','한국어→한자'],['voice','말하기']];
}
function quizConfig(type, word) {
  const meaningLabel = state.language === '중국어' ? '한자의 뜻은?' : `다음 ${state.language}의 뜻은?`;
  const configs = {
    choice: { field: 'back', prompt: word.front, label: meaningLabel },
    spell: { field: 'back', prompt: word.front, label: meaningLabel },
    pinyin: { field: 'pinyin', prompt: word.front, label: '한자를 보고 병음을 입력하세요' },
    'ko-pinyin': { field: 'pinyin', prompt: word.back, label: '한국어 뜻을 보고 병음을 입력하세요' },
    'ko-char': { field: 'front', prompt: word.back, label: '한국어 뜻에 맞는 한자를 고르세요' },
    voice: { field: 'front', prompt: word.back, label: `다음 뜻을 ${state.language}로 말해 보세요` }
  };
  return configs[type] || configs.choice;
}
function quiz() {
  const list = quizWords();
  if (!quizTypeTabs().some(([v])=>v===state.quizType)) state.quizType = quizTypeTabs()[0][0];
  if (!list.length) {
    return state.quizSource === 'mistakes'
      ? `${languagePill()}<div class="empty"><div>✓</div><h2>지금은 복습할 오답이 없어요</h2><p>복습 주기가 되면 다시 표시돼요.</p><button class="primary" data-action="quiz-deck-mode">단어장 퀴즈로 돌아가기</button></div>`
      : `${languagePill()}<div class="empty"><div>＋</div><h2>단어가 없어요</h2><p>단어장에 단어를 먼저 추가해 주세요.</p><button class="primary" data-screen="create">단어 추가하기</button></div>`;
  }
  const word = list[state.quizIndex % list.length];
  const type = state.quizType;
  const cfg = quizConfig(type, word);
  const expected = word[cfg.field];
  const forceChoice = type === 'choice' || type === 'ko-char';
  const a = state.answered;
  const revealLine = `${word.front}${word.pinyin?' ('+word.pinyin+')':''} · ${word.back}`;
  const body = a
    ? `<div class="quiz-card ${a.correct?'flash-correct':'flash-incorrect'}"><span class="card-label">${a.correct?'정답이에요! 🎉':'아쉬워요'}</span><strong>${escape(revealLine)}</strong>${a.correct?'':`<em>내가 답한 것: ${escape(a.value)}</em>`}<button class="primary" data-action="next-question">다음 문제 ${icon('chev')}</button></div>`
    : `<div class="quiz-card"><span class="card-label">${cfg.label}</span><strong>${escape(cfg.prompt||'')}</strong>${
        forceChoice
          ? `<div class="choices">${buildOptions(word,cfg.field).map(o=>`<button data-answer="${escape(o)}">${escape(o)}</button>`).join('')}</div>`
          : type === 'voice'
            ? `<button class="voice-btn" data-action="voice">🎙 말하기 시작</button><p id="voice-result" class="hint"></p>`
            : `<form id="spell-form"><input autocomplete="off" placeholder="${cfg.field==='pinyin'?'성조까지 정확히 입력 (예: nǐ hǎo)':'한국어 뜻을 입력하세요'}" /><button class="primary">확인</button></form>`
      }</div>`;
  return `${languagePill()}${state.quizSource==='mistakes'?'<p class="intro">오답 복습 퀴즈</p>':''}<div class="quiz-types">${quizTypeTabs().map(([v,label])=>`<button class="${type===v?'active':''}" data-quiz="${v}">${label}</button>`).join('')}</div>${body}`;
}
function dueLabel(iso) { if (!iso) return '지금 복습 가능'; const diff = new Date(iso).getTime() - Date.now(); if (diff <= 0) return '지금 복습 가능'; return Math.ceil(diff/86400000) + '일 후 복습'; }
function mistakes() {
  const due = state.mistakes.filter(w => new Date(w.next_review_at||0).getTime() <= Date.now());
  if (!state.mistakes.length) return `${languagePill()}<p class="intro">틀린 단어를 모아 다시 익혀 보세요.</p><div class="empty"><div>✓</div><h2>아직 오답이 없어요</h2><p>퀴즈에서 틀린 단어가 이곳에 쌓입니다.</p><button class="primary" data-screen="quiz">퀴즈 시작하기</button></div>`;
  return `${languagePill()}<p class="intro">틀린 단어를 모아 다시 익혀 보세요.</p>${due.length?`<button class="primary" data-action="review-mistakes">오답 복습 퀴즈 시작 (${due.length}개)</button>`:`<p class="hint">지금은 복습할 단어가 없어요. 복습 주기가 되면 다시 표시돼요.</p>`}<div class="deck-list">${state.mistakes.map(w=>`<div class="mistake"><span>🔤</span><div><b>${escape(w.front)}</b><small>${escape(w.back)} · ${w.wrong_count||1}번 틀림 · ${dueLabel(w.next_review_at)}</small></div><button data-action="delete-mistake" data-word="${w.id}">삭제</button></div>`).join('')}</div>`;
}
function create(){
  const chinese = state.language === '중국어';
  return `${languagePill()}<div class="create-head"><h2>새 단어장을 만들어 볼까요?</h2><p>직접 입력하거나 사진에서 단어를 찾아볼 수 있어요.</p></div><form id="create-form" class="create-form"><label>단어장 이름<input name="name" required placeholder="예: DELE A1" /></label><label>${chinese?'한자':state.language+' 단어'}<input name="front" required placeholder="${chinese?'예: 你好':'예: aprender'}" /></label>${chinese?'<label>병음<input name="pinyin" required placeholder="예: nǐ hǎo" /></label>':''}<label>한국어 뜻<input name="back" required placeholder="예: 배우다" /></label><label>다른 표현 <small>(선택, 쉼표로 구분)</small><input name="synonyms" placeholder="예: 학습하다" /></label><label>예문 <small>(선택)</small><input name="example" placeholder="예: Quiero aprender español." /></label><label>예문 뜻 <small>(선택)</small><input name="example_ko" placeholder="예: 스페인어를 배우고 싶어요." /></label><button class="primary" type="submit">단어장에 추가하기</button></form><div class="ocr-box"><b>📷 사진에서 단어 자동 추출</b><p>사진을 올리면 AI가 ${state.language} 단어와 한국어 뜻을 알아서 찾아드려요.</p><input id="image-input" type="file" accept="image/*" /><button class="soft" data-action="ocr">${state.ocrBusy?'분석 중…':'사진에서 찾기'}</button>${state.ocrCandidates.length?`<div class="ocr-results">${state.ocrCandidates.map((c,i)=>`<div class="ocr-item"><div><b>${escape(c.front)}</b><small>${escape(c.back)}${c.pinyin?' · '+escape(c.pinyin):''}</small></div><button data-action="add-ocr-word" data-index="${i}">추가</button></div>`).join('')}</div>`:''}</div>`;
}
function aiChat(){
  return `${languagePill()}<div class="ai-chat">${state.aiMessages.length?state.aiMessages.map(m=>`<div class="ai-msg ${m.role}">${escape(m.content)}</div>`).join(''):'<p class="hint">문법, 표현, 회화에 대해 무엇이든 물어보세요.</p>'}${state.aiBusy?'<div class="ai-msg assistant">생각 중…</div>':''}</div><form id="ai-form" class="ai-form"><input name="q" autocomplete="off" placeholder="예: gracias랑 muchas gracias 차이가 뭐야?" /><button class="primary" type="submit">보내기</button></form>`;
}
function onboarding(){
  const o = state.onboard;
  if (!o) return '';
  if (o.step === 0) return onboardChoiceStep('성별을 알려주시겠어요?', '원하지 않으면 건너뛰어도 돼요.', ['여성','남성','기타'], o.gender, 'onboard-gender', false);
  if (o.step === 1) return onboardChoiceStep('연령대를 알려주시겠어요?', '원하지 않으면 건너뛰어도 돼요.', ['10대','20대','30대','40대','50대 이상'], o.age, 'onboard-age', false);
  if (o.step === 2) return onboardChoiceStep('배우고 싶은 언어를 골라주세요', '여러 개 선택할 수 있어요.', ['스페인어','영어','중국어'], o.languages, 'onboard-language', true);
  return onboardGoals();
}
function onboardChoiceStep(title, hint, options, selected, action, multi){
  const isSel = v => multi ? (selected||[]).includes(v) : selected===v;
  return `<div class="create-head"><h2>${escape(title)}</h2><p>${escape(hint)}</p></div><div class="deck-list">${options.map(v=>`<button class="deck-row ${isSel(v)?'selected':''}" data-action="${action}" data-value="${v}"><span style="flex:1">${escape(v)}</span>${isSel(v)?'<b>✓</b>':''}</button>`).join('')}</div><div class="onboard-actions"><button class="soft" data-action="onboard-skip">건너뛰기</button><button class="primary" data-action="onboard-next">다음 ${icon('chev')}</button></div>`;
}
function onboardGoals(){
  const o = state.onboard;
  const lang = o.languages[o.goalIndex] || o.languages[0];
  const level = o.levels[lang];
  const goals = o.goals[lang] || [];
  const levelOptions = ['초급','중급','고급'];
  const goalOptions = ['여행','커리어','취미','친목'];
  return `<div class="create-head"><h2>${escape(lang)} 학습 정보</h2><p>현재 수준과 목표를 알려주세요. (${o.goalIndex+1}/${o.languages.length})</p></div><div class="section-title"><h2>현재 수준</h2></div><div class="deck-list">${levelOptions.map(v=>`<button class="deck-row ${level===v?'selected':''}" data-action="onboard-level" data-lang="${lang}" data-value="${v}"><span style="flex:1">${escape(v)}</span>${level===v?'<b>✓</b>':''}</button>`).join('')}</div><div class="section-title"><h2>목표 (여러 개 선택 가능)</h2></div><div class="deck-list">${goalOptions.map(v=>`<button class="deck-row ${goals.includes(v)?'selected':''}" data-action="onboard-goal" data-lang="${lang}" data-value="${v}"><span style="flex:1">${escape(v)}</span>${goals.includes(v)?'<b>✓</b>':''}</button>`).join('')}</div><div class="onboard-actions"><button class="primary" data-action="onboard-next">${o.goalIndex+1<o.languages.length?'다음 언어':'완료'} ${icon('chev')}</button></div>`;
}
function nav(){return state.user && state.screen!=='onboarding'?`<nav><button class="${state.screen==='home'?'active':''}" data-screen="home">${icon('home')}<span>홈</span></button><button class="${state.screen==='study'?'active':''}" data-screen="study">${icon('book')}<span>단어장</span></button><button class="${state.screen==='quiz'?'active':''}" data-screen="quiz">${icon('quiz')}<span>퀴즈</span></button><button class="${state.screen==='mistakes'?'active':''}" data-screen="mistakes">${icon('redo')}<span>오답</span></button></nav>`:'';}
function drawer(){
  const name = state.nickname || state.user?.email?.split('@')[0] || '';
  return `<div class="overlay ${state.drawer?'show':''}" data-action="drawer"></div><aside class="drawer ${state.drawer?'show':''}"><div class="brand"><div class="logo">L</div><b>Lingo</b><button data-action="drawer">×</button></div><div class="profile"><span class="avatar">${escape(name.slice(0,1).toUpperCase()||'L')}</span><div><b>${escape(name)}</b><small>클라우드 동기화 사용 중</small></div></div><div class="drawer-links"><button data-action="account">${icon('user')} 회원 정보 ${icon('chev')}</button><button data-screen="ai">💬 AI에게 질문하기 ${icon('chev')}</button><button data-screen="study">${icon('book')} 단어장 모드 ${icon('chev')}</button><button data-action="settings">${icon('settings')} 설정 ${icon('chev')}</button></div><p>v0.4 · 계정에 안전하게 동기화됨</p></aside>`;
}
function modal(){
  if (!state.modal) return '';
  const body = state.modal === 'language'
    ? `<h2>학습 언어</h2>${['스페인어','영어','중국어'].map(l=>`<button class="choice-line ${state.language===l?'selected':''}" data-action="set-language" data-lang="${l}">${langFlag(l)} ${l} ${state.language===l?'<b>✓</b>':''}</button>`).join('')}`
    : state.modal === 'settings'
    ? `<h2>설정</h2><button class="choice-line" data-action="dark">${icon('sun')} 다크 모드 <span class="switch ${state.dark?'on':''}"></span></button><a class="choice-line" href="mailto:eunseosw0520@naver.com">✉ 관리자 문의</a>`
    : `<h2>회원 정보</h2><p class="modal-copy">${escape(state.nickname||'')} · ${escape(state.user?.email||'')}</p><button class="choice-line" data-action="change-password">비밀번호 변경</button><button class="choice-line disabled">네이버 계정 연동 <small>준비 중</small></button><button class="choice-line disabled">카카오 계정 연동 <small>준비 중</small></button><button class="choice-line disabled">구글 계정 연동 <small>준비 중</small></button><button class="choice-line" data-action="logout">로그아웃</button><button class="choice-line" data-action="request-delete-account">회원 탈퇴</button>`;
  return `<div class="modal-wrap"><div class="modal-back" data-action="close-modal"></div><section class="modal"><button class="close" data-action="close-modal">×</button>${body}</section></div>`;
}
function bind() {
  document.querySelectorAll('[data-screen]').forEach(b=>b.onclick=()=>goto(b.dataset.screen));
  document.querySelectorAll('[data-deck]').forEach(b=>b.onclick=()=>{state.deckId=b.dataset.deck;goto('study')});
  document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>action(b.dataset.action,b));
  document.querySelectorAll('[data-quiz]').forEach(b=>b.onclick=()=>{state.quizType=b.dataset.quiz;state.answered=null;render()});
  document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(b.dataset.answer));
  const form=$('#create-form'); if(form) form.onsubmit=createDeck;
  const authForm=$('#auth-form'); if(authForm) authForm.onsubmit=authenticate;
  const spell=$('#spell-form'); if(spell) spell.onsubmit=e=>{e.preventDefault();answer(spell.querySelector('input').value.trim())};
  const aiForm=$('#ai-form'); if(aiForm) aiForm.onsubmit=askAI;
}
function goto(screen) {
  state.screen = screen; state.revealed = false; state.drawer = false;
  if (screen === 'study') startRound();
  if (screen === 'quiz') { state.quizSource = 'deck'; state.quizIndex = 0; state.answered = null; }
  if (screen === 'create') state.ocrCandidates = [];
  render();
}
function startRound() {
  const d = deck();
  state.round = state.shuffle ? shuffleArr(d.words) : d.words.slice();
  state.roundIndex = 0; state.unknownIds = []; state.studyDone = false; state.revealed = false;
}
async function action(a, el) {
  if (a === 'drawer') state.drawer = !state.drawer;
  else if (a === 'language') state.modal = 'language';
  else if (a === 'settings') state.modal = 'settings';
  else if (a === 'account') state.modal = 'account';
  else if (a === 'close-modal') state.modal = null;
  else if (a === 'auth-mode') state.authMode = state.authMode === 'login' ? 'signup' : 'login';
  else if (a === 'oauth-google') { await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + location.pathname } }); return; }
  else if (a === 'oauth-kakao') { await supabase.auth.signInWithOAuth({ provider: 'kakao', options: { redirectTo: location.origin + location.pathname } }); return; }
  else if (a === 'set-language') {
    const lang = el.dataset.lang;
    state.modal = null;
    if (lang !== state.language) {
      state.language = lang;
      state.quizType = 'choice';
      await ensureLanguageSeed(lang);
      const langDecks = decks.filter(dk=>dk.language===lang);
      state.deckId = langDecks[0]?.id || null;
      state.screen = 'home';
    }
  }
  else if (a === 'logout') { await supabase.auth.signOut(); state.user=null; decks=[]; state.mistakes=[]; state.nickname=''; state.drawer=false; state.modal=null; }
  else if (a === 'dark') { state.dark = !state.dark; localStorage.setItem('lingo-dark', state.dark); }
  else if (a === 'reveal') state.revealed = !state.revealed;
  else if (a === 'shuffle') { state.shuffle = !state.shuffle; startRound(); }
  else if (a === 'know' || a === 'dontknow') {
    const word = state.round[state.roundIndex];
    if (a === 'dontknow') state.unknownIds.push(word.id);
    state.roundIndex++; state.revealed = false;
    if (state.roundIndex >= state.round.length) {
      if (state.unknownIds.length === 0) state.studyDone = true;
      else { state.round = state.round.filter(w=>state.unknownIds.includes(w.id)); state.unknownIds=[]; state.roundIndex=0; }
    }
  }
  else if (a === 'restart-round') startRound();
  else if (a === 'share-deck') await shareDeck();
  else if (a === 'voice') { await listenForAnswer(); return; }
  else if (a === 'ocr') { await readImage(); return; }
  else if (a === 'add-ocr-word') { await addOcrWord(Number(el.dataset.index)); return; }
  else if (a === 'onboard-gender') state.onboard.gender = el.dataset.value;
  else if (a === 'onboard-age') state.onboard.age = el.dataset.value;
  else if (a === 'onboard-language') {
    const v = el.dataset.value, langs = state.onboard.languages;
    state.onboard.languages = langs.includes(v) ? langs.filter(x=>x!==v) : [...langs, v];
  }
  else if (a === 'onboard-level') state.onboard.levels[el.dataset.lang] = el.dataset.value;
  else if (a === 'onboard-goal') {
    const lang = el.dataset.lang, v = el.dataset.value, cur = state.onboard.goals[lang] || [];
    state.onboard.goals[lang] = cur.includes(v) ? cur.filter(x=>x!==v) : [...cur, v];
  }
  else if (a === 'onboard-skip' || a === 'onboard-next') { await advanceOnboarding(); return; }
  else if (a === 'delete-mistake') { await supabase.from('mistakes').delete().eq('owner_id',state.user.id).eq('word_id',el.dataset.word); state.mistakes=state.mistakes.filter(w=>w.id!==el.dataset.word); }
  else if (a === 'review-mistakes') { state.quizSource='mistakes'; state.quizIndex=0; state.answered=null; state.screen='quiz'; state.drawer=false; }
  else if (a === 'quiz-deck-mode') { state.quizSource='deck'; state.quizIndex=0; state.answered=null; }
  else if (a === 'next-question') { state.quizIndex++; state.answered=null; }
  else if (a === 'change-password') {
    const pw = prompt('새 비밀번호를 입력하세요 (8자 이상)');
    if (!pw) return;
    if (pw.length < 8) { alert('8자 이상 입력해 주세요.'); return; }
    const r = await supabase.auth.updateUser({ password: pw });
    if (r.error) { alert(r.error.message); return; }
    alert('비밀번호가 변경됐어요.');
    return;
  }
  else if (a === 'request-delete-account') {
    if (!confirm('정말 탈퇴하시겠어요? 내 단어장과 오답 기록이 모두 삭제됩니다.')) return;
    await supabase.from('mistakes').delete().eq('owner_id', state.user.id);
    const ids = decks.map(d=>d.id);
    if (ids.length) await supabase.from('decks').delete().in('id', ids);
    await supabase.auth.signOut();
    state.user=null; decks=[]; state.mistakes=[]; state.nickname=''; state.modal=null; state.drawer=false;
    alert('데이터가 삭제되고 로그아웃됐어요. 계정 완전 삭제는 관리자에게 문의해 주세요 (eunseosw0520@naver.com).');
    render();
    return;
  }
  render();
}
async function answer(value) {
  const list = quizWords();
  const word = list[state.quizIndex % list.length];
  const cfg = quizConfig(state.quizType, word);
  const expected = word[cfg.field];
  const accepted = [expected, ...(cfg.field==='back' ? (word.synonyms||'').split(',').map(s=>s.trim()).filter(Boolean) : [])];
  const cmp = cfg.field === 'pinyin' ? normalisePinyin : normalise;
  const correct = accepted.some(v => v && cmp(v) === cmp(value));
  if (correct && state.quizSource === 'mistakes') await resolveMistake(word);
  if (!correct) await recordMistake(word);
  state.answered = { correct, value };
  render();
}
async function recordMistake(word) {
  const existing = state.mistakes.find(x=>x.id===word.id);
  const wrong_count = (existing?.wrong_count||0) + 1;
  const next_review_at = new Date().toISOString();
  await supabase.from('mistakes').upsert({ owner_id: state.user.id, word_id: word.id, wrong_count, next_review_at }, { onConflict: 'owner_id,word_id' });
  if (existing) { existing.wrong_count = wrong_count; existing.next_review_at = next_review_at; }
  else state.mistakes.push({ ...word, wrong_count, next_review_at });
}
async function resolveMistake(word) {
  const m = state.mistakes.find(x=>x.id===word.id);
  if (!m) return;
  const days = m.wrong_count >= 3 ? 7 : m.wrong_count === 2 ? 3 : 1;
  const next_review_at = new Date(Date.now() + days*86400000).toISOString();
  await supabase.from('mistakes').update({ next_review_at }).eq('owner_id', state.user.id).eq('word_id', word.id);
  m.next_review_at = next_review_at;
}
async function authenticate(e) {
  e.preventDefault();
  const f = new FormData(e.target), email = f.get('email').trim(), password = f.get('password');
  if (state.authMode === 'signup') {
    if (password !== f.get('passwordConfirm')) return alert('비밀번호가 일치하지 않아요.');
    const nickname = f.get('nickname').trim();
    if (!nickname) return alert('닉네임을 입력해 주세요.');
    const result = await supabase.auth.signUp({ email, password });
    if (result.error) return alert(result.error.message);
    if (!result.data.session) return alert('가입 확인 메일을 보냈어요. 메일의 링크를 누른 뒤 로그인해 주세요.');
    state.user = result.data.user;
    state.nickname = nickname;
    await supabase.from('profiles').upsert({ id: state.user.id, nickname });
    await loadCloudData();
    state.onboard = { step: 0, gender: null, age: null, languages: [], goalIndex: 0, levels: {}, goals: {} };
    state.screen = 'onboarding';
    render();
    return;
  }
  const result = await supabase.auth.signInWithPassword({ email, password });
  if (result.error) return alert(result.error.message);
  state.user = result.data.user;
  await loadCloudData();
  if (state.pendingShare) await claimSharedDeck(state.pendingShare);
  render();
}
async function advanceOnboarding() {
  const o = state.onboard;
  if (o.step < 2) { o.step++; render(); return; }
  if (o.step === 2) {
    if (!o.languages.length) o.languages = [state.language];
    o.step = 3; o.goalIndex = 0; render(); return;
  }
  if (o.goalIndex + 1 < o.languages.length) { o.goalIndex++; render(); return; }
  await finishOnboarding();
}
async function finishOnboarding() {
  const o = state.onboard;
  await supabase.from('profiles').update({ gender: o.gender, age_range: o.age }).eq('id', state.user.id);
  for (const lang of o.languages) {
    await supabase.from('user_languages').upsert({ user_id: state.user.id, language: lang, level: o.levels[lang]||null, goals: (o.goals[lang]||[]).join(',') }, { onConflict: 'user_id,language' });
  }
  if (o.languages.length && !o.languages.includes(state.language)) {
    state.language = o.languages[0];
    await ensureLanguageSeed(state.language);
    const langDecks = decks.filter(d=>d.language===state.language);
    state.deckId = langDecks[0]?.id || null;
  }
  state.onboard = null;
  goto('home');
}
async function ensureLanguageSeed(language) {
  if (decks.some(d => d.language === language)) return;
  const samples = initialDecksByLanguage[language] || [];
  if (!samples.length) return;
  for (const sample of samples) {
    const { data: d } = await supabase.from('decks').insert({ owner_id: state.user.id, name: sample.name, icon: sample.icon, language }).select().single();
    await supabase.from('words').insert(sample.words.map(w => ({ front: w.front, back: w.back, example: w.example||'', example_ko: w.example_ko||'', synonyms: w.synonyms||'', pinyin: w.pinyin||'', deck_id: d.id })));
  }
  const { data } = await supabase.from('decks').select('id,name,icon,language,share_token,words(id,front,back,example,example_ko,synonyms,pinyin)').order('created_at');
  decks = data || [];
}
async function loadCloudData() {
  const { data: p } = await supabase.from('profiles').select('nickname').eq('id', state.user.id).single();
  state.nickname = p?.nickname || '';
  const { data, error } = await supabase.from('decks').select('id,name,icon,language,share_token,words(id,front,back,example,example_ko,synonyms,pinyin)').order('created_at');
  if (error) return alert('단어장을 불러오지 못했어요: ' + error.message);
  decks = data || [];
  await ensureLanguageSeed(state.language);
  const langDecks = decks.filter(d => d.language === state.language);
  state.deckId = langDecks[0]?.id || decks[0]?.id || null;
  const { data: m } = await supabase.from('mistakes').select('word_id,wrong_count,next_review_at,words(id,front,back,example,example_ko,synonyms,pinyin)').eq('owner_id', state.user.id);
  state.mistakes = (m||[]).map(x => x.words ? { ...x.words, wrong_count: x.wrong_count, next_review_at: x.next_review_at } : null).filter(Boolean);
}
async function createDeck(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const name = f.get('name').trim(), front = f.get('front').trim(), back = f.get('back').trim(), example = (f.get('example')||'').trim(), example_ko = (f.get('example_ko')||'').trim(), synonyms = (f.get('synonyms')||'').trim(), pinyin = (f.get('pinyin')||'').trim();
  let d = decks.find(x=>x.name===name && x.language===state.language);
  if (!d) {
    const r = await supabase.from('decks').insert({ owner_id: state.user.id, name, icon: '📚', language: state.language }).select().single();
    if (r.error) return alert(r.error.message);
    d = { ...r.data, words: [] };
    decks.push(d);
  }
  const r = await supabase.from('words').insert({ deck_id: d.id, front, back, example, example_ko, synonyms, pinyin }).select().single();
  if (r.error) return alert(r.error.message);
  d.words.push(r.data);
  state.deckId = d.id;
  goto('study');
}
async function shareDeck() {
  const d = deck();
  let token = d.share_token;
  if (!token) {
    token = crypto.randomUUID();
    const r = await supabase.from('decks').update({ share_token: token }).eq('id', d.id);
    if (r.error) return alert('공유 링크 생성에 실패했어요: ' + r.error.message);
    d.share_token = token;
  }
  const link = location.origin + location.pathname + '?share=' + token;
  try { await navigator.clipboard.writeText(link); alert('공유 링크를 복사했어요!\n' + link); }
  catch { alert('공유 링크: ' + link); }
}
async function claimSharedDeck(token) {
  const { data: d, error } = await supabase.from('decks').select('id,name,icon,language,words(front,back,example,example_ko,synonyms,pinyin)').eq('share_token', token).single();
  state.pendingShare = null;
  history.replaceState(null, '', location.pathname);
  if (error || !d) return alert('공유 링크를 찾을 수 없어요.');
  const r = await supabase.from('decks').insert({ owner_id: state.user.id, name: d.name + ' (공유됨)', icon: d.icon, language: d.language }).select().single();
  if (r.error) return alert('단어장 복사에 실패했어요: ' + r.error.message);
  if (d.words?.length) await supabase.from('words').insert(d.words.map(w => ({ deck_id: r.data.id, front: w.front, back: w.back, example: w.example, example_ko: w.example_ko, synonyms: w.synonyms, pinyin: w.pinyin })));
  await loadCloudData();
  alert('"' + d.name + '" 단어장을 내 계정에 추가했어요!');
}
function fileToBase64(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1] || '');
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
async function readImage(){
  const input=$('#image-input');
  if(!input?.files?.[0]) return alert('먼저 사진을 선택해 주세요.');
  state.ocrBusy = true;
  render();
  try{
    const file = input.files[0];
    const image = await fileToBase64(file);
    const { data, error } = await supabase.functions.invoke('extract-words', { body: { image, mimeType: file.type, language: state.language } });
    if (error) throw new Error(error.message || 'AI 서버 호출에 실패했어요.');
    if (data?.error) throw new Error(data.error);
    state.ocrCandidates = data?.words || [];
    if (!state.ocrCandidates.length) alert('사진에서 단어를 찾지 못했어요. 더 선명한 사진으로 시도해 주세요.');
  }catch(err){ alert('사진 분석에 실패했어요: '+err.message); }
  finally{ state.ocrBusy = false; render(); }
}
async function addOcrWord(index){
  const candidate = state.ocrCandidates[index];
  if (!candidate) return;
  const d = deck();
  if (!d.id) return alert('먼저 단어장을 하나 만들어 주세요.');
  const r = await supabase.from('words').insert({ deck_id: d.id, front: candidate.front, back: candidate.back, example: candidate.example||'', example_ko: candidate.example_ko||'', synonyms: candidate.synonyms||'', pinyin: candidate.pinyin||'' }).select().single();
  if (r.error) return alert(r.error.message);
  d.words.push(r.data);
  state.ocrCandidates = state.ocrCandidates.filter((_, i) => i !== index);
  render();
}
async function askAI(e){
  e.preventDefault();
  const f = new FormData(e.target);
  const q = (f.get('q')||'').trim();
  if (!q) return;
  state.aiMessages.push({ role: 'user', content: q });
  state.aiBusy = true;
  render();
  const { data, error } = await supabase.functions.invoke('ask-ai', { body: { messages: state.aiMessages.map(m=>({role:m.role,content:m.content})), language: state.language } });
  state.aiBusy = false;
  if (error || data?.error) state.aiMessages.push({ role: 'assistant', content: '죄송해요, 답변을 가져오지 못했어요. 잠시 후 다시 시도해 주세요.' });
  else state.aiMessages.push({ role: 'assistant', content: data.reply || '' });
  render();
}
let recognizing = false;
async function listenForAnswer() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const result = $('#voice-result');
  if (!Recognition) { const msg='이 브라우저는 음성 인식을 지원하지 않아요. Safari 최신 버전 또는 Chrome에서 시도해 주세요.'; if(result) result.textContent=msg; else alert(msg); return; }
  if (recognizing) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach(t => t.stop());
  } catch { if(result) result.textContent='마이크 권한이 필요해요. 브라우저 설정에서 허용해 주세요.'; return; }
  const r = new Recognition();
  r.lang = state.language==='영어' ? 'en-US' : state.language==='중국어' ? 'zh-CN' : 'es-ES';
  r.interimResults = false;
  recognizing = true;
  r.onresult = e => { const said = e.results[0][0].transcript; if(result) result.textContent='인식한 답: '+said; answer(said); };
  r.onerror = e => {
    const detail = e.error==='not-allowed' ? ' (마이크 권한이 거부됐어요. 아이폰 설정 > Safari > 마이크에서 허용해 주세요.)' : e.error==='no-speech' ? ' (음성이 감지되지 않았어요. 다시 시도해 주세요.)' : e.error==='aborted' ? ' (인식이 중단됐어요. 다시 눌러서 시도해 주세요.)' : e.error==='network' ? ' (네트워크 문제로 인식하지 못했어요.)' : '';
    const msg = '음성 인식 오류: ' + (e.error||'알수없음') + detail;
    if (result) result.textContent = msg; else alert(msg);
  };
  r.onend = () => { recognizing = false; };
  r.start();
}
async function init() {
  if (!configured) { render(); return; }
  const params = new URLSearchParams(location.search);
  const shareToken = params.get('share');
  if (shareToken) state.pendingShare = shareToken;
  const { data: { session } } = await supabase.auth.getSession();
  state.user = session?.user || null;
  if (state.user) {
    await loadCloudData();
    if (state.pendingShare) await claimSharedDeck(state.pendingShare);
  }
  supabase.auth.onAuthStateChange(async (_event, session) => {
    const newUser = session?.user || null;
    if (newUser && newUser.id !== state.user?.id) {
      state.user = newUser;
      await loadCloudData();
      if (!state.nickname) {
        const nickname = (prompt('닉네임을 입력해 주세요.') || newUser.email.split('@')[0]).trim();
        state.nickname = nickname;
        await supabase.from('profiles').upsert({ id: newUser.id, nickname });
        state.onboard = { step: 0, gender: null, age: null, languages: [], goalIndex: 0, levels: {}, goals: {} };
        state.screen = 'onboarding';
      }
      if (state.pendingShare) await claimSharedDeck(state.pendingShare);
      render();
    } else if (!newUser && state.user) {
      state.user = null;
      render();
    }
  });
  render();
}
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
init();
