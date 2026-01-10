// API endpoint para lecturas profundas
// v6: Catch específico para JSON parse error

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let responseText = '';
  
  try {
    if (!req.body) {
      return res.status(400).json({ respuesta: 'Error: No body', lectura: 'Error: No body' });
    }

    const { nombre, tradition, tradicion, sign, signo, lang } = req.body;
    const trad = tradition || tradicion;
    const sig = sign || signo;
    
    if (!nombre || !sig) {
      return res.status(400).json({ 
        respuesta: `Error: Faltan campos`, 
        lectura: `Error: Faltan campos` 
      });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ respuesta: 'Error: No API key', lectura: 'Error: No API key' });
    }

    const prompt = `Eres un astrólogo. ${nombre} es ${sig} (${trad}). Da una lectura breve de 50 palabras para hoy. Usa lenguaje neutro.`;

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

    // Guardar texto de respuesta antes de parsear
    responseText = await anthropicResponse.text();
    
    // Intentar parsear como JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      return res.status(500).json({ 
        respuesta: `Error parsing JSON. Status: ${anthropicResponse.status}. Response: ${responseText.substring(0,300)}`, 
        lectura: 'Error: Response not JSON' 
      });
    }
    
    if (data.error) {
      return res.status(500).json({ 
        respuesta: 'API Error: ' + (data.error.message || JSON.stringify(data.error)), 
        lectura: 'API Error' 
      });
    }
    
    const lectura = data.content?.[0]?.text || 'Sin lectura disponible';
    return res.status(200).json({ respuesta: lectura, lectura: lectura });
    
  } catch (error) {
    return res.status(500).json({ 
      respuesta: `Catch Error: ${error.message}. ResponseText: ${responseText.substring(0,200)}`, 
      lectura: 'Error: ' + error.message 
    });
  }
}
