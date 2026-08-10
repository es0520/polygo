const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  try {
    const { messages, language } = await req.json();
    if (!Array.isArray(messages) || !messages.length) throw new Error('메시지가 필요해요.');
    const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
    if (!apiKey) throw new Error('서버에 ANTHROPIC_API_KEY가 설정되지 않았어요.');

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
        system: `너는 ${language || '외국어'} 학습을 도와주는 친절한 튜터야. 문법, 어휘, 회화 표현에 대한 질문에 한국어로 쉽고 정확하게, 필요하면 예문을 들어서 답해줘.`,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json?.error?.message || 'AI 호출에 실패했어요.');
    const reply = json.content?.[0]?.text || '';
    return new Response(JSON.stringify({ reply }), { headers: { ...corsHeaders, 'content-type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : String(err) }), { status: 400, headers: { ...corsHeaders, 'content-type': 'application/json' } });
  }
});
