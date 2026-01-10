// API endpoint para lecturas profundas personalizadas por tradición
// v5: Debug completo para encontrar origen de "Invalid JSON"

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Debug 1: Verificar body
    if (!req.body) {
      return res.status(400).json({ respuesta: 'DEBUG: No body', lectura: 'DEBUG: No body' });
    }

    const { nombre, tradition, tradicion, sign, signo, elemento, lang } = req.body;
    const trad = tradition || tradicion;
    const sig = sign || signo;
    
    // Debug 2: Verificar campos
    if (!nombre || !sig) {
      return res.status(400).json({ 
        respuesta: `DEBUG: Missing. nombre=${nombre}, sig=${sig}, trad=${trad}`, 
        lectura: `DEBUG: Missing fields` 
      });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    
    // Debug 3: Verificar API key
    if (!apiKey) {
      return res.status(500).json({ respuesta: 'DEBUG: No API key in env', lectura: 'DEBUG: No API key' });
    }
    
    // Debug 4: Verificar formato de key
    if (!apiKey.startsWith('sk-ant-')) {
      return res.status(500).json({ respuesta: `DEBUG: Key format wrong, starts with: ${apiKey.substring(0,7)}`, lectura: 'DEBUG: Key format' });
    }

    const prompt = `Eres un astrólogo. ${nombre} es ${sig} (${trad}). Da una lectura breve de 50 palabras para hoy.`;

    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 200,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    // Debug 5: Verificar status de respuesta
    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      return res.status(500).json({ 
        respuesta: `DEBUG: Anthropic status ${anthropicResponse.status}: ${errorText.substring(0,200)}`, 
        lectura: `DEBUG: API error ${anthropicResponse.status}` 
      });
    }

    const data = await anthropicResponse.json();
    
    // Debug 6: Verificar estructura de respuesta
    if (data.error) {
      return res.status(500).json({ respuesta: 'DEBUG: data.error: ' + JSON.stringify(data.error), lectura: 'DEBUG: API returned error' });
    }
    
    if (!data.content || !data.content[0]) {
      return res.status(500).json({ respuesta: 'DEBUG: No content in response: ' + JSON.stringify(data).substring(0,200), lectura: 'DEBUG: No content' });
    }
    
    const lectura = data.content[0].text || 'Sin lectura';
    return res.status(200).json({ respuesta: lectura, lectura: lectura });
    
  } catch (error) {
    return res.status(500).json({ respuesta: 'DEBUG CATCH: ' + error.message, lectura: 'DEBUG: ' + error.message });
  }
}
