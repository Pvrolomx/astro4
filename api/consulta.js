export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;
    
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ respuesta: 'Error: API key no configurada en Vercel' });
    }
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 300,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    // Capturar texto raw primero para debug
    const rawText = await response.text();
    
    // Intentar parsear
    let data;
    try {
      data = JSON.parse(rawText);
    } catch (parseErr) {
      return res.status(500).json({ 
        respuesta: 'Error parsing: ' + rawText.substring(0, 200),
        debug: { status: response.status, raw: rawText.substring(0, 500) }
      });
    }
    
    if (data.error) {
      return res.status(500).json({ respuesta: 'Anthropic error: ' + data.error.message });
    }
    
    const respuesta = data.content?.[0]?.text || 'Sin respuesta';
    return res.status(200).json({ respuesta });
    
  } catch (error) {
    return res.status(500).json({ respuesta: 'Catch error: ' + error.message });
  }
}
