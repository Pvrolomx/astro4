// Consulta Especial con Claude AI
async function hacerConsulta(pregunta, perfil) {
  const prompt = \Eres un astrólogo y numerólogo experto. El usuario tiene este perfil:
- Signo Occidental: \
- Signo Chino: \
- Nakshatra Védico: \
- Número de Vida: \ (\)
- Número del Alma: \
- Número de Destino: \
- Día Personal Hoy: \

El usuario pregunta: \

Responde de forma mística pero práctica, en español, máximo 150 palabras. 
Da consejos concretos basados en su perfil astrológico y numerológico.\;

  try {
    const response = await fetch('/api/consulta', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    return data.respuesta;
  } catch (error) {
    return 'Lo siento, hubo un error. Intenta de nuevo.';
  }
}
