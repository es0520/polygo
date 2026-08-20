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
        max_tokens: 500,
        system: `너는 ${language || '외국어'} 학습을 도와주는 친절한 튜터야. 문법, 어휘, 회화 표현에 대한 질문에 한국어로 쉽고 정확하게, 필요하면 짧은 예문을 들어서 답해줘.

답변 스타일:
- 실제 사람 튜터가 메신저로 답장하듯, 자연스러운 대화체 문장으로만 답해. 마크다운 문법(**, ##, -, \`\`\`, > 같은 기호)은 절대 쓰지 마. 강조하고 싶으면 그냥 문장으로 풀어서 설명해.
- 짧고 핵심만: 보통 2~4문장이면 충분해. 목록이 필요해 보여도 "첫째, ~. 둘째, ~"처럼 자연스러운 문장으로 풀어써.
- 예문은 꼭 필요할 때 최대 1~2개만, 줄바꿈으로 자연스럽게 구분해.`,
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
