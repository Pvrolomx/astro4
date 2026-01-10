// API endpoint para lecturas profundas personalizadas por tradición
// Usa Claude Haiku para generar contenido único

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nombre, tradicion, signo, elemento, fecha, lang } = req.body;
    
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ lectura: 'Error: API key no configurada' });
    }

    // Prompts específicos por tradición
    const prompts = {
      western: {
        es: `Eres un astrólogo occidental experto. ${nombre} es ${signo} (elemento ${elemento}). 
Genera una lectura personal para HOY (${new Date().toLocaleDateString('es-MX')}). 
Incluye: energía del día, consejo práctico, y una afirmación positiva.
Máximo 150 palabras. Tono cálido y esperanzador. NO uses clichés de horóscopo de revista.`,
        en: `You are an expert Western astrologer. ${nombre} is ${signo} (${elemento} element).
Generate a personal reading for TODAY (${new Date().toLocaleDateString('en-US')}).
Include: today's energy, practical advice, and a positive affirmation.
Maximum 150 words. Warm and hopeful tone. NO magazine horoscope clichés.`
      },
      chinese: {
        es: `Eres un maestro de astrología china. ${nombre} nació en año del ${signo} (${elemento}).
Genera una lectura personal para HOY basada en el ciclo lunar actual.
Incluye: flujo de chi, elemento favorable hoy, y acción recomendada.
Máximo 150 palabras. Tono sabio y equilibrado.`,
        en: `You are a Chinese astrology master. ${nombre} was born in year of ${signo} (${elemento}).
Generate a personal reading for TODAY based on current lunar cycle.
Include: chi flow, favorable element today, and recommended action.
Maximum 150 words. Wise and balanced tone.`
      },
      vedic: {
        es: `Eres un jyotishi (astrólogo védico) experto. ${nombre} tiene Nakshatra ${signo}.
Genera una lectura personal para HOY según la tradición Jyotish.
Incluye: energía lunar actual, dharma del día, y mantra sugerido.
Máximo 150 palabras. Tono espiritual pero accesible.`,
        en: `You are an expert jyotishi (Vedic astrologer). ${nombre}'s Nakshatra is ${signo}.
Generate a personal reading for TODAY according to Jyotish tradition.
Include: current lunar energy, today's dharma, and suggested mantra.
Maximum 150 words. Spiritual but accessible tone.`
      },
      numerology: {
        es: `Eres un numerólogo experto. ${nombre} tiene número de vida ${signo}.
Genera una lectura personal para HOY basada en las vibraciones numéricas del día.
Incluye: número del día personal, sincronicidades a observar, y número de la suerte.
Máximo 150 palabras. Tono místico pero práctico.`,
        en: `You are an expert numerologist. ${nombre}'s life number is ${signo}.
Generate a personal reading for TODAY based on the day's numerical vibrations.
Include: personal day number, synchronicities to watch, and lucky number.
Maximum 150 words. Mystical but practical tone.`
      }
    };

    const currentLang = lang || 'es';
    const prompt = prompts[tradicion]?.[currentLang] || prompts.western.es;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 400,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    
    if (data.error) {
      return res.status(500).json({ lectura: 'Error: ' + data.error.message });
    }
    
    const lectura = data.content?.[0]?.text || 'Sin lectura disponible';
    return res.status(200).json({ lectura });
    
  } catch (error) {
    return res.status(500).json({ lectura: 'Error: ' + error.message });
  }
}
