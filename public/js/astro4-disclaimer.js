// ASTRO4 - Disclaimer y Referencias
// Para integrar en la app

const DISCLAIMER = {
    es: `Esta herramienta ofrece interpretaciones basadas en textos clásicos de diversas tradiciones astrológicas. No constituye consejo profesional ni sustituye la consulta con un astrólogo calificado. La astrología es un arte interpretativo con miles de años de tradición, no una ciencia exacta. Usa esta información con discernimiento y criterio propio.`,
    
    en: `This tool offers interpretations based on classical texts from various astrological traditions. It does not constitute professional advice and does not replace consultation with a qualified astrologer. Astrology is an interpretive art with thousands of years of tradition, not an exact science. Use this information with discernment and your own judgment.`,
    
    short_es: `Interpretación basada en textos clásicos. No sustituye consulta profesional.`,
    short_en: `Interpretation based on classical texts. Does not replace professional consultation.`
};

const REFERENCES = {
    vedico: {
        name_es: "Astrología Védica (Jyotish)",
        name_en: "Vedic Astrology (Jyotish)",
        sources: [
            "Brihat Parashara Hora Shastra",
            "Jaimini Sutras",
            "Saravali",
            "Phaladeepika"
        ],
        note_es: "Cálculos basados en Ayanamsa Lahiri",
        note_en: "Calculations based on Lahiri Ayanamsa"
    },
    
    occidental: {
        name_es: "Astrología Occidental",
        name_en: "Western Astrology",
        sources: [
            "Tetrabiblos (Ptolomeo)",
            "Astronomía tradicional",
            "Sistema tropical"
        ],
        note_es: "Basado en zodiaco tropical",
        note_en: "Based on tropical zodiac"
    },
    
    chino: {
        name_es: "Astrología China",
        name_en: "Chinese Astrology",
        sources: [
            "San Ming Tong Hui",
            "Sistema BaZi",
            "Ciclo sexagenario"
        ],
        note_es: "Ciclo de 60 años (12 animales × 5 elementos)",
        note_en: "60-year cycle (12 animals × 5 elements)"
    },
    
    numerologia: {
        name_es: "Numerología",
        name_en: "Numerology",
        sources: [
            "Sistema Pitagórico",
            "Tradición Caldea",
            "Harish Johari",
            "Cheiro"
        ],
        note_es: "Reducción a dígitos 1-9",
        note_en: "Reduction to digits 1-9"
    }
};

// Función para obtener referencia formateada
function getReference(tradition, lang = 'es') {
    const ref = REFERENCES[tradition];
    if (!ref) return '';
    
    const name = lang === 'es' ? ref.name_es : ref.name_en;
    const note = lang === 'es' ? ref.note_es : ref.note_en;
    const sources = ref.sources.slice(0, 2).join(', ');
    
    return `${name} • Ref: ${sources}. ${note}`;
}

// Función para disclaimer corto
function getShortDisclaimer(lang = 'es') {
    return lang === 'es' ? DISCLAIMER.short_es : DISCLAIMER.short_en;
}

// Función para disclaimer completo
function getFullDisclaimer(lang = 'es') {
    return lang === 'es' ? DISCLAIMER.es : DISCLAIMER.en;
}

// Export para uso en app
if (typeof module !== 'undefined') {
    module.exports = { DISCLAIMER, REFERENCES, getReference, getShortDisclaimer, getFullDisclaimer };
}
