import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// 네이버는 Supabase가 기본 제공하는 로그인 제공자 목록에 없어서, 이 함수가 대신
// 네이버 OAuth 콜백을 받아 (1) 코드를 토큰으로 교환하고 (2) 네이버 프로필을 조회한 뒤
// (3) Supabase Admin API로 매직링크 토큰을 발급해 앱으로 돌려보냅니다.
// 앱(app.js)은 이 토큰으로 supabase.auth.verifyOtp를 호출해 정식 로그인 세션을 만듭니다.

function redirectWithError(appOrigin: string, message: string) {
  return Response.redirect(`${appOrigin}?auth_error=${encodeURIComponent(message)}`, 302);
}

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const appOrigin = Deno.env.get('APP_ORIGIN') || '';

  try {
    if (!appOrigin) throw new Error('서버에 APP_ORIGIN이 설정되지 않았어요.');

    const oauthError = url.searchParams.get('error');
    if (oauthError) throw new Error('네이버 인증이 취소되었거나 실패했어요: ' + oauthError);

    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state') || '';
    if (!code) throw new Error('네이버에서 인증 코드를 받지 못했어요.');

    const clientId = Deno.env.get('NAVER_CLIENT_ID');
    const clientSecret = Deno.env.get('NAVER_CLIENT_SECRET');
    if (!clientId || !clientSecret) throw new Error('서버에 NAVER_CLIENT_ID/NAVER_CLIENT_SECRET이 설정되지 않았어요.');

    const tokenUrl = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}&code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}`;
    const tokenRes = await fetch(tokenUrl);
    const tokenJson = await tokenRes.json();
    if (!tokenJson.access_token) throw new Error('네이버 토큰 발급에 실패했어요: ' + (tokenJson.error_description || tokenJson.error || '알 수 없는 오류'));

    const profileRes = await fetch('https://openapi.naver.com/v1/nid/me', {
      headers: { Authorization: `Bearer ${tokenJson.access_token}` },
    });
    const profileJson = await profileRes.json();
    const profile = profileJson?.response;
    if (!profile?.id) throw new Error('네이버 프로필을 가져오지 못했어요.');

    const email = profile.email || `naver_${profile.id}@users.noreply.polygo`;
    const nickname = profile.nickname || profile.name || '';

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data, error } = await supabaseAdmin.auth.admin.generateLink({
      type: 'magiclink',
      email,
      options: { data: { nickname, naver_id: profile.id, provider: 'naver' } },
    });
    if (error) throw error;

    const tokenHash = data?.properties?.hashed_token;
    if (!tokenHash) throw new Error('로그인 토큰 생성에 실패했어요.');

    const redirectUrl = `${appOrigin}?naver_token=${encodeURIComponent(tokenHash)}&naver_email=${encodeURIComponent(email)}&naver_state=${encodeURIComponent(state)}`;
    return Response.redirect(redirectUrl, 302);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return appOrigin ? redirectWithError(appOrigin, message) : new Response(message, { status: 400 });
  }
});
