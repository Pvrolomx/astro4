// ASTRO4 - Copy Emocional "Identidad Cósmica"
// Fase 2: Narrativa para pivot masivo
// Por C12 Dart

const ASTRO4_COPY = {
    
    // === 2.1 COPY PRINCIPAL ===
    
    landing: {
        title: "Descubre tu Identidad Cósmica",
        subtitle: "4 tradiciones milenarias revelan quién eres realmente",
        cta: "Revelar mi identidad",
        
        features: [
            {
                icon: "☀️",
                title: "Tu Esencia Solar",
                desc: "La energía que te define ante el mundo"
            },
            {
                icon: "🐉",
                title: "Tu Espíritu Animal",
                desc: "El poder ancestral que te guía"
            },
            {
                icon: "⭐",
                title: "Tu Estrella Guardiana",
                desc: "La luz que ilumina tu camino"
            },
            {
                icon: "🔢",
                title: "Tu Número del Destino",
                desc: "La vibración que marca tu vida"
            }
        ],
        
        trust: "Más de 10,000 personas han descubierto su identidad cósmica",
        precision: "Cálculos astronómicos de precisión profesional"
    },
    
    // === 2.2 TEXTOS POR SECCIÓN ===
    
    sections: {
        occidental: {
            title: "Tu Esencia Solar",
            intro: "El sol estaba en {signo} cuando naciste, marcando tu personalidad fundamental.",
            element_prefix: "Tu elemento es {elemento}, lo que significa",
            elements: {
                Fuego: "que ardes con pasión, iniciativa y creatividad sin límites.",
                Tierra: "que eres firme, confiable y construyes sobre bases sólidas.",
                Aire: "que tu mente vuela libre, conectando ideas y personas.",
                Agua: "que fluyes con la intuición y sientes profundamente."
            }
        },
        
        chino: {
            title: "Tu Espíritu Animal",
            intro: "El {animal} de {elemento} {polaridad} es tu guardián ancestral.",
            traits_intro: "Quienes comparten tu espíritu son conocidos por:",
            polarities: {
                Yang: "Tu energía es expansiva, activa, luminosa.",
                Yin: "Tu energía es receptiva, reflexiva, profunda."
            }
        },
        
        vedico: {
            title: "Tu Estrella Guardiana",
            intro: "{nakshatra} iluminaba el cielo cuando llegaste a este mundo.",
            deity_intro: "{deity} es la deidad que protege tu camino.",
            quality_intro: "Tu naturaleza esencial es:",
            source: "Tradición Jyotish • Brihat Parashara Hora Shastra"
        },
        
        numerologia: {
            title: "Tu Número del Destino",
            intro: "El número {numero} vibra en el centro de tu ser.",
            meaning_intro: "Este número revela que:",
            numbers: {
                1: "Eres líder nato. Independiente, pionero, con voluntad inquebrantable.",
                2: "Eres diplomático. Sensible, cooperativo, buscas armonía.",
                3: "Eres creativo. Expresivo, optimista, inspiras a otros.",
                4: "Eres constructor. Práctico, ordenado, creas estructuras duraderas.",
                5: "Eres libre. Aventurero, versátil, abrazas el cambio.",
                6: "Eres protector. Amoroso, responsable, cuidas a los tuyos.",
                7: "Eres buscador. Analítico, espiritual, persigues la verdad.",
                8: "Eres poderoso. Ambicioso, eficiente, manifiestas abundancia.",
                9: "Eres humanitario. Compasivo, sabio, sirves al bien mayor."
            },
            source: "Numerología Pitagórica"
        }
    },
    
    // === 2.3 ACCIONES DEL DÍA ===
    
    actions: {
        title: "Tu Guía de Hoy",
        intro: "Basado en tu perfil cósmico único, hoy te sugiero:",
        
        templates: {
            do: [
                "Confía en tu intuición para las decisiones importantes",
                "Dedica tiempo a lo que te apasiona",
                "Conecta con alguien que te inspire",
                "Expresa lo que sientes sin miedo",
                "Toma la iniciativa en algo que has postergado",
                "Escucha antes de responder",
                "Busca momentos de silencio y reflexión",
                "Celebra tus pequeños logros",
                "Comparte tu conocimiento con quien lo necesite",
                "Mantén los pies en la tierra ante las emociones"
            ],
            avoid: [
                "Evita decisiones impulsivas en temas financieros",
                "No ignores las señales de tu cuerpo",
                "Cuida de no dispersar tu energía en demasiadas cosas",
                "Evita conflictos innecesarios hoy",
                "No te aísles si sientes necesidad de compañía"
            ]
        },
        
        power_hour: "Tu hora de mayor poder hoy: {hora}",
        lucky_number: "Número favorable: {numero}",
        lucky_color: "Color que te potencia: {color}"
    },
    
    // === PREMIUM TEASERS ===
    
    premium: {
        compatibility: {
            title: "Compatibilidad Cósmica",
            teaser: "Descubre cómo tu energía se combina con la de alguien especial",
            cta: "Desbloquear por $29 MXN",
            blur_text: "Tu compatibilidad con {nombre} es..."
        },
        
        deep_analysis: {
            title: "Análisis Profundo",
            teaser: "Tu perfil completo con predicciones personalizadas",
            cta: "Desbloquear por $29 MXN",
            features: [
                "Análisis detallado de cada tradición",
                "Predicciones para los próximos 30 días",
                "Compatibilidad con todos los signos",
                "Momentos favorables del mes"
            ]
        },
        
        subscription: {
            title: "Identidad Premium",
            teaser: "Acceso ilimitado a todo el contenido",
            cta: "Solo $49 MXN/mes",
            features: [
                "Todo el análisis profundo",
                "Compatibilidades ilimitadas",
                "Guía diaria personalizada",
                "Sin publicidad"
            ]
        }
    },
    
    // === COMPARTIR ===
    
    share: {
        title: "Comparte tu Identidad Cósmica",
        whatsapp: "¡Descubrí mi identidad cósmica! Soy {signo} con espíritu de {animal} y estrella {nakshatra}. Descubre la tuya:",
        twitter: "Mi identidad cósmica: {signo} ☀️ {animal} 🐉 {nakshatra} ⭐ Número {numero} 🔢 #IdentidadCosmica",
        copy_success: "¡Link copiado!"
    },
    
    // === DISCLAIMER ===
    
    disclaimer: {
        short: "Interpretación basada en tradiciones milenarias. Para entretenimiento y reflexión personal.",
        full: "Esta herramienta ofrece interpretaciones basadas en textos clásicos de diversas tradiciones. No constituye consejo profesional. La astrología es un arte interpretativo, no una ciencia exacta. Usa esta información con discernimiento."
    }
};

// Export
if (typeof module !== 'undefined') {
    module.exports = ASTRO4_COPY;
}
