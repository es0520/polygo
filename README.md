# PolyGo — 스페인어 단어장

아이폰에서 사용할 수 있게 만든 설치형 웹앱(PWA)입니다. 단어장과 오답 노트는 로그인한 계정의 Supabase 서버에 저장됩니다.

## 사용 기능

- 스페인어 단어장 선택 및 새 단어 직접 추가
- 플래시카드 학습과 셔플
- 객관식/직접 입력 퀴즈
- 오답 노트
- 사이드바, 다크 모드, 학습 언어 선택 UI
- 이메일 회원가입·로그인·로그아웃
- 사진 OCR(스페인어/한국어 `단어 - 뜻` 형식)
- 스페인어 말하기 퀴즈(브라우저 음성 인식)

## 서버 연결 (필수)

1. [Supabase](https://supabase.com/)에서 새 프로젝트를 만들고, **SQL Editor**에서 [supabase-schema.sql](./supabase-schema.sql) 전체를 실행합니다.
2. Project Settings → API에서 Project URL과 **Publishable key**를 확인합니다.
3. [config.js](./config.js)의 두 값을 교체합니다. 이 파일은 Git에 올리지 않습니다.
4. Authentication → URL Configuration에 배포할 앱 주소를 Site URL 및 Redirect URLs로 등록합니다.

데이터베이스에는 사용자 본인 데이터만 읽고 쓸 수 있는 RLS 정책이 포함되어 있습니다. Publishable key는 클라이언트에 노출되어도 되지만, `service_role` 키는 절대 넣으면 안 됩니다.

## GitHub Pages 자동 배포

`.github/workflows/deploy.yml`이 `master` 브랜치에 올라갈 때마다 Pages를 자동 배포합니다. GitHub 저장소의 **Settings → Secrets and variables → Actions**에서 다음 두 Repository secrets를 추가하세요.

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`

그 다음 **Settings → Pages → Source**를 `GitHub Actions`로 선택하면 됩니다. 앞으로는 GitHub에 push할 때마다 약 1~2분 뒤 최신 앱이 배포됩니다.

## 아이폰에 설치하기

1. 이 폴더를 GitHub에 올리고 GitHub Pages(또는 Vercel/Netlify)에 배포합니다.
2. 아이폰 Safari에서 배포된 주소를 엽니다.
3. 공유 버튼 → **홈 화면에 추가**를 누릅니다.

배포 전에도 PC에서 `index.html`을 브라우저로 열어 화면을 확인할 수 있습니다. 서비스 워커(오프라인 실행)는 HTTPS 배포 환경에서 동작합니다.

## 네이티브 앱 빌드 (Android / iOS)

이 저장소는 [Capacitor](https://capacitorjs.com/)로 같은 웹 코드(`app.js`, `styles.css`, ...)를 Android/iOS 네이티브 앱으로도 감싸서 빌드합니다. 번들러는 여전히 없고, `npm`은 오직 Capacitor 툴체인을 위해서만 씁니다.

```bash
npm install
cp config.example.js config.js   # 실제 Supabase 값으로 채우기 (기존 웹 배포와 동일)
npm run cap:sync                 # www/에 웹 앱을 스테이징하고 android/, ios/에 동기화
```

### Android (Windows에서 가능, Mac 불필요)

1. [Android Studio](https://developer.android.com/studio)를 설치합니다.
2. `npx cap open android`로 프로젝트를 열고, 에뮬레이터나 실제 기기로 실행합니다.
3. 정식 배포용 서명 빌드(AAB)는 `.github/workflows/android-release.yml`을 GitHub Actions에서 수동 실행(`workflow_dispatch`)하면 만들어집니다. 필요한 저장소 시크릿:
   - `ANDROID_KEYSTORE_BASE64` — `keytool -genkeypair -v -keystore polygo-upload.keystore -alias polygo -keyalg RSA -keysize 2048 -validity 10000`로 만든 키스토어를 base64로 인코딩한 값
   - `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`
   - (선택) `PLAY_SERVICE_ACCOUNT_JSON` — Play Console API로 자동 업로드하려면 필요. 새 앱은 Play Console에서 **첫 업로드를 반드시 수동으로** 한 번 해야 이후 API 업로드가 허용됩니다.

### iOS (Mac 없이 GitHub Actions macOS 러너로 빌드)

로컬에 Mac이 없어도 `.github/workflows/ios-release.yml`이 `macos-14` 러너에서 빌드·서명·TestFlight 업로드까지 처리합니다. 서명은 [fastlane match](https://docs.fastlane.tools/actions/match/)로 관리합니다.

1. Apple Developer Program에 가입합니다 ($99/년).
2. App Store Connect에서 API 키를 만들고(Users and Access → Keys), `.p8` 파일을 한 번 받아둡니다.
3. fastlane match가 인증서를 암호화해 저장할 **비공개 git 저장소**를 하나 만듭니다.
4. GitHub 저장소 시크릿에 추가: `APP_STORE_CONNECT_KEY_ID`, `APP_STORE_CONNECT_ISSUER_ID`, `APP_STORE_CONNECT_KEY_BASE64`(`.p8` 내용), `MATCH_GIT_URL`, `MATCH_PASSWORD`(직접 정하는 암호화 비밀번호), `APPLE_TEAM_ID`.
5. `ios-release.yml`을 `lane: bootstrap_match`로 한 번 수동 실행해 인증서/프로비저닝 프로파일을 최초 생성합니다.
6. 이후로는 `lane: beta`로 실행하면 서명된 IPA를 빌드해 TestFlight에 올립니다. 실제 기기(아이폰)로 TestFlight에서 설치해 테스트하고, 준비되면 App Store Connect에서 직접 심사 제출합니다.

### 앱 아이콘/스플래시 변경

`resources/logo.png`(투명 배경 로고)를 바꾼 뒤 아래 명령으로 다시 생성합니다.

```bash
npx capacitor-assets generate --android --ios --iconBackgroundColor '#6256e8' --iconBackgroundColorDark '#4a3fc0' --splashBackgroundColor '#f8f8fc' --splashBackgroundColorDark '#121018'
```

`--android --ios`를 반드시 함께 넘겨서 PWA(웹) 쪽 `manifest.webmanifest`/아이콘은 건드리지 않도록 합니다.

## 소셜 로그인 설정

**네이티브 앱(Android/iOS)에서 로그인하려면** Supabase 대시보드 **Authentication → URL Configuration → Redirect URLs**에 `polygo://auth-callback`을 하나 추가하세요. 카카오/네이버 개발자 콘솔 쪽 설정은 그대로 둬도 됩니다 — 두 서비스 모두 Supabase의 고정된 콜백 주소로만 리다이렉트하고, 앱으로 돌아오는 마지막 단계는 Supabase(카카오/구글)나 `naver-oauth` 함수(네이버)가 처리하기 때문입니다.

### 카카오

1. [Kakao Developers](https://developers.kakao.com/)에서 앱을 만들고 **내 애플리케이션 > 제품 설정 > 카카오 로그인 > 사용 설정**을 켭니다.
2. **Redirect URI는 "카카오 로그인" 메뉴가 아니라 [앱] > [플랫폼 키] > [REST API 키] > [리다이렉트 URI]에 있습니다** (콘솔 개편으로 위치가 옮겨졌어요). 여기에 `https://<프로젝트-ref>.supabase.co/auth/v1/callback`을 정확히 등록합니다(오타나 `http`/`https` 불일치, 위치를 잘못 찾는 것이 가장 흔한 실패 원인 — "카카오 로그인" 메뉴에 있는 "로그아웃 리디렉션 URL"은 전혀 다른 용도이니 헷갈리지 마세요).
3. **OpenID Connect는 켤 필요 없어요.** Supabase의 카카오 로그인은 REST API 방식(액세스 토큰 + 프로필 조회)을 쓰기 때문에 ID 토큰이 필요 없습니다.
4. **동의항목**에서 닉네임/이메일 등 앱이 요청하는 항목을 켭니다. 이메일을 요청하려면 카카오 비즈 앱 전환 및 검수가 필요할 수 있어요.
5. Supabase 대시보드 **Authentication > Providers > Kakao**에 REST API 키(Client ID)와 Client Secret(선택이지만 켜져 있다면 카카오 앱의 Client Secret과 반드시 일치해야 함)을 입력하고 저장합니다.
6. 카카오 앱이 **개발 중** 상태면 카카오 계정으로 등록된 테스트 사용자만 로그인할 수 있어요. 다른 계정으로 테스트하려면 **팀원 관리**에 추가하거나 앱을 **서비스 중(검수 완료)** 상태로 전환하세요.

로그인 시 에러가 난다면 브라우저 주소창에 남는 에러 메시지(`error=...&error_description=...`)나 콘솔 로그를 확인해 주세요. 대부분 위 2번(Redirect URI 미등록/위치 착각) 또는 6번(테스트 사용자 미등록)이 원인이에요.

### 네이버

네이버는 Supabase가 기본 제공하는 로그인 목록에 없어서, [`supabase/functions/naver-oauth`](./supabase/functions/naver-oauth/index.ts)가 콜백을 대신 처리한 뒤 매직링크 토큰으로 로그인을 완료시켜요.

1. [네이버 개발자센터](https://developers.naver.com/apps/#/register)에서 애플리케이션을 등록하고 **네아로(네이버 아이디로 로그인)** 사용 설정을 켭니다.
2. **서비스 URL**에는 배포 주소(예: `https://es0520.github.io/polygo`)를, **네이버 로그인 Callback URL**에는 `https://<프로젝트-ref>.supabase.co/functions/v1/naver-oauth`를 등록합니다.
3. 제공받은 **Client ID**와 **Client Secret**을 GitHub 저장소 **Settings > Secrets and variables > Actions**에 각각 `NAVER_CLIENT_ID`, `NAVER_CLIENT_SECRET`로 추가합니다. 배포 주소가 기본값(`https://es0520.github.io/polygo`)과 다르면 `APP_ORIGIN` 시크릿도 추가하세요.
4. `SUPABASE_ACCESS_TOKEN` 시크릿까지 설정되어 있으면, master에 push할 때 GitHub Actions가 `naver-oauth` 함수를 자동 배포하고 위 시크릿들을 Supabase에 등록해줘요. 수동으로 하려면:
   ```bash
   supabase functions deploy naver-oauth --project-ref <프로젝트-ref> --no-verify-jwt
   supabase secrets set NAVER_CLIENT_ID=... NAVER_CLIENT_SECRET=... APP_ORIGIN=https://es0520.github.io/polygo --project-ref <프로젝트-ref>
   ```
5. 네이버가 이메일 제공에 동의하지 않은 사용자는 실제 수신 불가능한 임시 이메일(`naver_<id>@users.noreply.polygo`)로 계정이 만들어져요. 정상 동작이며, 앱 안에서는 닉네임으로만 표시됩니다.

## 한자 필기 기능

한자를 손으로 그리는 입력 화면은 만들 수 있지만, **정답 판정**은 필기 인식 모델/API가 있어야 합니다. 이는 단순 OCR과 다른 기능이라 별도 비용·키가 필요한 서비스(예: Azure AI Vision 또는 Google Cloud Vision)를 연결한 뒤 추가하는 것이 안전합니다. 중국어 학습 모드를 열 때 함께 연결하는 것을 권장합니다.

## 다음 구현 권장 순서

1. 계정 및 클라우드 동기화
2. 단어장 공유
3. 중국어 필기 인식 퀴즈용 서버 API 연결
