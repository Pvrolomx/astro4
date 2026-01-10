// API endpoint - v10: Manual body parsing

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    // Intentar acceder a req.body de forma segura
    let body = {};
    
    if (req.body) {
      // Si ya está parseado
      if (typeof req.body === 'object') {
        body = req.body;
      } else if (typeof req.body === 'string') {
        body = JSON.parse(req.body);
      }
    }
    
    const nombre = body.nombre || 'Usuario';
    const trad = body.tradition || body.tradicion || 'western';
    const sig = body.sign || body.signo || 'Aries';

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ respuesta: 'Error: No API key', lectura: 'No API key' });
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
        max_tokens: 150,
        messages: [{ 
          role: 'user', 
          content: `Eres un astrólogo. ${nombre} es ${sig} (${trad}). Da una lectura de 50 palabras.`
        }]
      })
    });

    const text = await response.text();
    
    if (!response.ok) {
      return res.status(500).json({ respuesta: `API error ${response.status}: ${text.substring(0,200)}`, lectura: 'API error' });
    }
    
    const data = JSON.parse(text);
    const lectura = data.content?.[0]?.text || 'Sin lectura';
    
    return res.status(200).json({ respuesta: lectura, lectura });
    
  } catch (error) {
    return res.status(500).json({ respuesta: `Error: ${error.message}`, lectura: 'Error' });
  }
}
