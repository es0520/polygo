const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  try {
    const { image, mimeType, language } = await req.json();
    if (!image) throw new Error('이미지가 필요해요.');
    const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
    if (!apiKey) throw new Error('서버에 ANTHROPIC_API_KEY가 설정되지 않았어요.');

    const lang = language || '외국어';
    const isChinese = lang === '중국어';
    const schemaHint = isChinese
      ? '{"words":[{"front":"한자","pinyin":"병음","back":"한국어 뜻","example":"사진에 있는 예문(없으면 빈 문자열)","example_ko":"예문의 한국어 뜻(없으면 빈 문자열)"}]}'
      : '{"words":[{"front":"단어","back":"한국어 뜻","example":"사진에 있는 예문(없으면 빈 문자열)","example_ko":"예문의 한국어 뜻(없으면 빈 문자열)"}]}';

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mimeType || 'image/jpeg', data: image } },
            { type: 'text', text: `이 사진에서 ${lang} 단어나 표현을 찾아서 한국어 뜻과 함께 정리해줘. ${isChinese ? '한자마다 병음도 같이 적어줘.' : ''} 사진에 예문이 있으면 예문과 그 한국어 뜻도 같이 넣어줘. 다른 말 없이 아래 JSON 형식으로만 답해줘 (설명, 코드블록 마크다운 없이 순수 JSON만): ${schemaHint}` },
          ],
        }],
      }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json?.error?.message || 'AI 호출에 실패했어요.');
    const text = json.content?.[0]?.text || '{}';
    const match = text.match(/\{[\s\S]*\}/);
    const parsed = match ? JSON.parse(match[0]) : { words: [] };
    if (!Array.isArray(parsed.words)) parsed.words = [];
    return new Response(JSON.stringify(parsed), { headers: { ...corsHeaders, 'content-type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : String(err) }), { status: 400, headers: { ...corsHeaders, 'content-type': 'application/json' } });
  }
});
