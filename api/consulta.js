// Función para detectar garabatos/texto sin sentido
function isGibberish(text) {
  if (!text || typeof text !== 'string') return true;
  
  const cleaned = text.trim().toLowerCase();
  
  // 1. Muy corto
  if (cleaned.length < 3) return true;
  
  // 2. Solo espacios o caracteres especiales
  if (!/[a-záéíóúñ]/i.test(cleaned)) return true;
  
  // 3. Caracteres repetidos (aaaa, jjjj, etc)
  if (/(.)\1{3,}/.test(cleaned)) return true;
  
  // 4. Sin vocales (mínimo 1 vocal por cada 6 consonantes)
  const vowels = (cleaned.match(/[aeiouáéíóú]/gi) || []).length;
  const consonants = (cleaned.match(/[bcdfghjklmnñpqrstvwxyz]/gi) || []).length;
  if (consonants > 0 && vowels === 0) return true;
  if (consonants > 6 && vowels < consonants / 6) return true;
  
  // 5. Patrones de teclado común (qwerty, asdf, etc)
  const keyboardPatterns = /qwert|asdf|zxcv|qazwsx|wasd|hjkl/i;
  if (keyboardPatterns.test(cleaned)) return true;
  
  // 6. Mismo caracter alternando (abab, xyxy)
  if (/^(.{1,2})\1{2,}$/.test(cleaned)) return true;
  
  return false;
}

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
    
    // VALIDACIÓN DE GARABATOS EN JS (antes de llamar API)
    if (isGibberish(prompt)) {
      return res.status(200).json({ 
        respuesta: '🔮 No entendí tu pregunta. ¿Puedes formularla de manera más clara para que pueda guiarte mejor?',
        debug: { ...debugInfo, rejected: 'gibberish' }
      });
    }
    
    const apiKey = process.env.ANTHROPIC_API_KEY;
    debugInfo.hasApiKey = !!apiKey;
    debugInfo.keyStart = apiKey ? apiKey.substring(0, 10) : 'NO KEY';
    
    if (!apiKey) {
      return res.status(500).json({ respuesta: 'No API key', debug: debugInfo });
    }

    const systemPrompt = `Eres un guía astrológico y numerológico sabio y empático.

INSTRUCCIONES:
1. Responde de manera cálida y personalizada basándote en el perfil del usuario
2. Usa la información astrológica/numerológica proporcionada para dar consejos relevantes
3. Sé conciso pero significativo
4. Ofrece perspectivas prácticas y esperanzadoras
5. No inventes datos que no estén en el perfil
6. Mantén un tono místico pero accesible
7. Limita tu respuesta a 3-4 párrafos máximo`;
    
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
// v9 - validación de garabatos en JS antes de API call
