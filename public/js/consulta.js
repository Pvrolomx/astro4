// Consulta Especial con Claude AI
async function hacerConsulta(pregunta, perfil) {
  const prompt = `Eres un astrólogo y numerólogo experto. El usuario tiene este perfil:
- Signo Occidental: ${perfil.signoOccidental}
- Signo Chino: ${perfil.signoChino}
- Nakshatra Védico: ${perfil.nakshatra}
- Número de Vida: ${perfil.numeroVida} (${perfil.significadoVida})
- Número del Alma: ${perfil.numeroAlma}
- Número de Destino: ${perfil.numeroDestino}
- Día Personal Hoy: ${perfil.diaPersonal}

El usuario pregunta: ${pregunta}

IMPORTANTE: Usa lenguaje gender neutro. NO uses "Querido/a", "amigo/a" ni similares. Comienza directamente con "Hola" o ve directo al punto.

Responde de forma mística pero práctica, en español, máximo 150 palabras. 
Da consejos concretos basados en su perfil astrológico y numerológico.`;

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
