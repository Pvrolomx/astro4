export default async function handler(req, res) {
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

    // System prompt con validación de garabatos
    const systemPrompt = `Eres un guía astrológico y numerológico sabio y empático.

INSTRUCCIONES:
1. Responde de manera cálida y personalizada basándote en el perfil del usuario
2. Usa la información astrológica/numerológica proporcionada para dar consejos relevantes
3. Sé conciso pero significativo
4. Ofrece perspectivas prácticas y esperanzadoras
5. No inventes datos que no estén en el perfil
6. Mantén un tono místico pero accesible
7. Limita tu respuesta a 3-4 párrafos máximo
8. Si la pregunta es incoherente, sin sentido, o no es una pregunta real (ej: letras random, texto sin significado como "asdfgh" o "jjjjj"), responde amablemente: "No entendí tu pregunta. ¿Puedes reformularla de forma más clara?" y NO des una lectura astrológica.`;
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 500,
        system: systemPrompt,
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
// v8 - agregado system prompt con validación de garabatos
