// API endpoint - v8: Step by step debug

export default async function handler(req, res) {
  // Step 0
  let step = 0;
  
  try {
    // Step 1: Check method
    step = 1;
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed', step });
    }

    // Step 2: Get body
    step = 2;
    const body = req.body || {};
    
    // Step 3: Extract fields
    step = 3;
    const nombre = body.nombre || 'Usuario';
    const trad = body.tradition || body.tradicion || 'western';
    const sig = body.sign || body.signo || 'Aries';

    // Step 4: Get API key
    step = 4;
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'No API key', step });
    }

    // Step 5: Build request
    step = 5;
    const requestBody = JSON.stringify({
      model: 'claude-3-haiku-20240307',
      max_tokens: 100,
      messages: [{ role: 'user', content: 'Di hola' }]
    });

    // Step 6: Fetch
    step = 6;
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: requestBody
    });

    // Step 7: Get text
    step = 7;
    const text = await response.text();

    // Step 8: Parse
    step = 8;
    const data = JSON.parse(text);

    // Step 9: Return
    step = 9;
    const lectura = data.content?.[0]?.text || 'No content';
    return res.status(200).json({ respuesta: lectura, lectura, step });

  } catch (error) {
    return res.status(500).json({ 
      error: error.message,
      step,
      name: error.name
    });
  }
}
