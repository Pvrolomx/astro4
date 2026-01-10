export default async function handler(req, res) {
  // Debug 0: Log request info
  const debugInfo = {
    method: req.method,
    hasBody: !!req.body,
    bodyType: typeof req.body,
    bodyKeys: req.body ? Object.keys(req.body) : [],
  };

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed', debug: debugInfo });
  }

  try {
    // Si body es string, parsearlo
    let body = req.body;
    if (typeof body === 'string') {
      body = JSON.parse(body);
    }
    
    const { prompt } = body;
    debugInfo.prompt = prompt ? prompt.substring(0, 50) : 'NO PROMPT';
    
    const apiKey = process.env.ANTHROPIC_API_KEY;
    debugInfo.hasApiKey = !!apiKey;
    debugInfo.keyStart = apiKey ? apiKey.substring(0, 10) : 'NO KEY';
    
    if (!apiKey) {
      return res.status(500).json({ respuesta: 'No API key', debug: debugInfo });
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
        messages: [{ role: 'user', content: prompt || 'hola' }]
      })
    });

    debugInfo.fetchStatus = response.status;
    const rawText = await response.text();
    debugInfo.rawLength = rawText.length;
    debugInfo.rawStart = rawText.substring(0, 100);
    
    let data;
    try {
      data = JSON.parse(rawText);
    } catch (parseErr) {
      return res.status(500).json({ 
        respuesta: 'Parse fail',
        debug: debugInfo
      });
    }
    
    if (data.error) {
      return res.status(500).json({ respuesta: 'API error: ' + data.error.message, debug: debugInfo });
    }
    
    const respuesta = data.content?.[0]?.text || 'Sin respuesta';
    return res.status(200).json({ respuesta, debug: debugInfo });
    
  } catch (error) {
    return res.status(500).json({ 
      respuesta: 'Catch: ' + error.message,
      debug: { ...debugInfo, errorStack: error.stack?.substring(0, 200) }
    });
  }
}
// v7
