// API endpoint para lecturas profundas
// v7: Debug fetch completo

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nombre, tradition, tradicion, sign, signo, lang } = req.body || {};
    const trad = tradition || tradicion || 'western';
    const sig = sign || signo || 'test';
    const name = nombre || 'Usuario';

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ respuesta: 'Error: No API key', lectura: 'Error: No API key' });
    }

    const requestBody = {
      model: 'claude-3-haiku-20240307',
      max_tokens: 200,
      messages: [{ role: 'user', content: `Hola, soy ${name}. Di "funciona" si me escuchas.` }]
    };

    // Debug: mostrar lo que enviamos
    const debugInfo = {
      keyExists: !!apiKey,
      keyStart: apiKey.substring(0,10),
      bodySize: JSON.stringify(requestBody).length
    };

    let anthropicResponse;
    try {
      anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify(requestBody)
      });
    } catch (fetchError) {
      return res.status(500).json({ 
        respuesta: `Fetch failed: ${fetchError.message}`, 
        lectura: 'Fetch error',
        debug: debugInfo
      });
    }

    // Debug: status y headers
    debugInfo.status = anthropicResponse.status;
    debugInfo.statusText = anthropicResponse.statusText;
    debugInfo.ok = anthropicResponse.ok;

    let responseText;
    try {
      responseText = await anthropicResponse.text();
    } catch (textError) {
      return res.status(500).json({ 
        respuesta: `Text read failed: ${textError.message}`, 
        lectura: 'Text error',
        debug: debugInfo
      });
    }

    debugInfo.responseLength = responseText.length;
    debugInfo.responsePreview = responseText.substring(0, 100);

    if (!responseText) {
      return res.status(500).json({ 
        respuesta: 'Empty response from Anthropic', 
        lectura: 'Empty response',
        debug: debugInfo
      });
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      return res.status(500).json({ 
        respuesta: `JSON parse failed: ${parseError.message}`, 
        lectura: 'Parse error',
        debug: debugInfo,
        rawResponse: responseText.substring(0, 500)
      });
    }
    
    if (data.error) {
      return res.status(500).json({ 
        respuesta: 'Anthropic error: ' + (data.error.message || JSON.stringify(data.error)), 
        lectura: 'API error',
        debug: debugInfo
      });
    }
    
    const lectura = data.content?.[0]?.text || 'Sin contenido';
    return res.status(200).json({ respuesta: lectura, lectura: lectura, debug: debugInfo });
    
  } catch (error) {
    return res.status(500).json({ 
      respuesta: `Outer catch: ${error.message}`, 
      lectura: 'Outer error'
    });
  }
}
