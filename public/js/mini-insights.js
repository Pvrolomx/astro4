// Mini-insights por tradición - complementarios a las acciones principales
const miniInsights = {
  western: {
    es: {
      Capricornio: ["Tu disciplina es tu superpoder hoy", "La paciencia te abrirá puertas", "Tu ambición está alineada con las estrellas"],
      Acuario: ["Ideas innovadoras fluyen hacia ti", "Tu originalidad brilla especialmente hoy", "Conexiones inesperadas te esperan"],
      Piscis: ["Tu intuición está muy aguda", "Los sueños traen mensajes importantes", "Tu sensibilidad es un regalo hoy"],
      Aries: ["Tu energía es contagiosa hoy", "El momento de actuar es ahora", "Tu valentía abre caminos"],
      Tauro: ["La estabilidad te favorece", "Disfruta los placeres simples", "Tu perseverancia da frutos"],
      Géminis: ["Las palabras fluyen con facilidad", "Curiosidad te lleva a descubrimientos", "Conversaciones importantes te esperan"],
      Cáncer: ["Tu hogar es tu santuario hoy", "La familia trae bendiciones", "Confía en tus emociones"],
      Leo: ["Tu luz interior brilla intensamente", "El reconocimiento viene a ti", "Lidera con el corazón"],
      Virgo: ["Los detalles revelan oportunidades", "Tu análisis es especialmente certero", "El orden trae claridad"],
      Libra: ["La armonía te rodea", "Relaciones florecen hoy", "Tu sentido estético está elevado"],
      Escorpio: ["Tu poder de transformación está activo", "Profundiza en lo que importa", "Secretos se revelan a tu favor"],
      Sagitario: ["La aventura te llama", "Tu optimismo es magnético", "Expande tus horizontes"]
    },
    en: {
      Capricorn: ["Your discipline is your superpower today", "Patience will open doors", "Your ambition aligns with the stars"],
      Aquarius: ["Innovative ideas flow to you", "Your originality shines especially today", "Unexpected connections await"],
      Pisces: ["Your intuition is very sharp", "Dreams bring important messages", "Your sensitivity is a gift today"],
      Aries: ["Your energy is contagious today", "The time to act is now", "Your courage opens paths"],
      Taurus: ["Stability favors you", "Enjoy simple pleasures", "Your perseverance bears fruit"],
      Gemini: ["Words flow easily", "Curiosity leads to discoveries", "Important conversations await"],
      Cancer: ["Your home is your sanctuary today", "Family brings blessings", "Trust your emotions"],
      Leo: ["Your inner light shines intensely", "Recognition comes to you", "Lead with your heart"],
      Virgo: ["Details reveal opportunities", "Your analysis is especially accurate", "Order brings clarity"],
      Libra: ["Harmony surrounds you", "Relationships flourish today", "Your aesthetic sense is elevated"],
      Scorpio: ["Your transformation power is active", "Go deep into what matters", "Secrets reveal in your favor"],
      Sagittarius: ["Adventure calls you", "Your optimism is magnetic", "Expand your horizons"]
    }
  },
  chinese: {
    es: {
      Rata: ["Tu ingenio resuelve cualquier obstáculo", "Oportunidades aparecen donde menos esperas", "Tu astucia está en su punto máximo"],
      Buey: ["Tu fuerza interior es inquebrantable", "El trabajo constante trae recompensas", "La paciencia es tu aliada"],
      Tigre: ["Tu coraje inspira a otros", "El momento de actuar con poder es hoy", "Tu magnetismo está muy alto"],
      Conejo: ["La diplomacia te abre puertas", "Tu gentileza conquista corazones", "La paz interior te guía"],
      Dragón: ["Tu carisma está en su máximo", "Grandes cosas son posibles hoy", "Tu poder creador está activo"],
      Serpiente: ["Tu sabiduría te guía certeramente", "Confía en tu intuición profunda", "Misterios se revelan ante ti"],
      Caballo: ["Tu libertad trae alegría", "La energía vital fluye abundante", "Aventuras positivas te esperan"],
      Cabra: ["Tu creatividad florece", "La armonía te rodea", "Tu sensibilidad artística brilla"],
      Mono: ["Tu ingenio está afilado", "Soluciones creativas aparecen", "Tu humor aligera el camino"],
      Gallo: ["Tu honestidad es valorada", "La precisión te favorece", "Tu dedicación da frutos"],
      Perro: ["Tu lealtad es recompensada", "Protección te rodea", "La justicia está de tu lado"],
      Cerdo: ["La abundancia fluye hacia ti", "Tu generosidad regresa multiplicada", "Disfruta las bendiciones del día"]
    },
    en: {
      Rat: ["Your wit solves any obstacle", "Opportunities appear unexpectedly", "Your cleverness is at its peak"],
      Ox: ["Your inner strength is unbreakable", "Steady work brings rewards", "Patience is your ally"],
      Tiger: ["Your courage inspires others", "The time to act with power is now", "Your magnetism is very high"],
      Rabbit: ["Diplomacy opens doors for you", "Your gentleness wins hearts", "Inner peace guides you"],
      Dragon: ["Your charisma is at maximum", "Great things are possible today", "Your creative power is active"],
      Snake: ["Your wisdom guides you accurately", "Trust your deep intuition", "Mysteries reveal themselves to you"],
      Horse: ["Your freedom brings joy", "Vital energy flows abundantly", "Positive adventures await"],
      Goat: ["Your creativity flourishes", "Harmony surrounds you", "Your artistic sensitivity shines"],
      Monkey: ["Your wit is sharp", "Creative solutions appear", "Your humor lightens the path"],
      Rooster: ["Your honesty is valued", "Precision favors you", "Your dedication bears fruit"],
      Dog: ["Your loyalty is rewarded", "Protection surrounds you", "Justice is on your side"],
      Pig: ["Abundance flows to you", "Your generosity returns multiplied", "Enjoy today's blessings"]
    }
  },
  numerology: {
    es: {
      1: ["Tu liderazgo natural brilla hoy", "Iniciativas nuevas están favorecidas", "Tu independencia es tu fuerza"],
      2: ["Las alianzas te fortalecen", "Tu diplomacia resuelve conflictos", "La cooperación trae éxito"],
      3: ["Tu expresión creativa está en alto", "La alegría te rodea", "Comunica desde el corazón"],
      4: ["Bases sólidas se construyen hoy", "Tu disciplina da resultados", "El orden trae prosperidad"],
      5: ["Cambios positivos llegan", "Tu adaptabilidad es tu ventaja", "La libertad expande tu vida"],
      6: ["El amor fluye abundante", "Tu hogar es fuente de paz", "Responsabilidades traen satisfacción"],
      7: ["Revelaciones espirituales te esperan", "Tu intuición es muy certera", "La reflexión trae claridad"],
      8: ["El éxito material está cerca", "Tu poder de manifestación es alto", "Abundancia fluye hacia ti"],
      9: ["Tu compasión transforma vidas", "Cierres importantes se completan", "Tu sabiduría es luz para otros"],
      11: ["Tu intuición está elevadísima", "Inspiras a quienes te rodean", "Mensajes espirituales llegan"],
      22: ["Grandes proyectos toman forma", "Tu visión se materializa", "Construyes legados hoy"],
      33: ["Tu amor sana a otros", "Servicio elevado te llena", "Eres canal de luz"]
    },
    en: {
      1: ["Your natural leadership shines today", "New initiatives are favored", "Your independence is your strength"],
      2: ["Alliances strengthen you", "Your diplomacy resolves conflicts", "Cooperation brings success"],
      3: ["Your creative expression is high", "Joy surrounds you", "Communicate from the heart"],
      4: ["Solid foundations are built today", "Your discipline yields results", "Order brings prosperity"],
      5: ["Positive changes arrive", "Your adaptability is your advantage", "Freedom expands your life"],
      6: ["Love flows abundantly", "Your home is a source of peace", "Responsibilities bring satisfaction"],
      7: ["Spiritual revelations await", "Your intuition is very accurate", "Reflection brings clarity"],
      8: ["Material success is near", "Your manifestation power is high", "Abundance flows to you"],
      9: ["Your compassion transforms lives", "Important closures complete", "Your wisdom lights others' path"],
      11: ["Your intuition is extremely elevated", "You inspire those around you", "Spiritual messages arrive"],
      22: ["Great projects take shape", "Your vision materializes", "You build legacies today"],
      33: ["Your love heals others", "Elevated service fulfills you", "You are a channel of light"]
    }
  },
  vedic: {
    es: {
      Ashwini: ["Nuevos comienzos te favorecen", "Tu energía sanadora está activa", "Velocidad y acción son tus aliados"],
      Bharani: ["Transformaciones profundas ocurren", "Tu creatividad está en su punto", "Nacimientos de ideas importantes"],
      Krittika: ["Tu luz corta la oscuridad", "Claridad mental excepcional", "Purificación y verdad te guían"],
      Rohini: ["Belleza y abundancia te rodean", "Tu magnetismo está muy alto", "Crecimiento en todas las áreas"],
      Mrigashira: ["La búsqueda trae descubrimientos", "Tu curiosidad es recompensada", "Caminos nuevos se abren"],
      Ardra: ["Tormentas traen renovación", "Tu poder de transformación es alto", "Liberación de lo viejo"],
      Punarvasu: ["Retornos positivos llegan", "Tu optimismo es contagioso", "Restauración y esperanza"],
      Pushya: ["Nutrición y cuidado fluyen", "Tu generosidad es bendecida", "Protección espiritual te rodea"],
      Ashlesha: ["Tu intuición es profunda", "Sabiduría serpentina te guía", "Misterios se revelan"],
      Magha: ["Tu linaje te fortalece", "Honor y reconocimiento llegan", "Conexión ancestral activa"],
      "Purva Phalguni": ["Placer y creatividad abundan", "El amor está favorecido", "Celebración y alegría"],
      "Uttara Phalguni": ["Amistades traen bendiciones", "Tu liderazgo es reconocido", "Generosidad regresa a ti"],
      Hasta: ["Habilidad manual en su punto", "Manifestación rápida de deseos", "Tu destreza brilla"],
      Chitra: ["Tu visión artística está clara", "Creaciones brillantes son posibles", "Belleza te rodea"],
      Swati: ["Independencia y libertad fluyen", "Flexibilidad es tu fuerza", "Vientos de cambio favorables"],
      Vishakha: ["Determinación inquebrantable", "Metas importantes se alcanzan", "Tu enfoque es láser"],
      Anuradha: ["Devoción trae resultados", "Amistades profundas se fortalecen", "Éxito tras esfuerzo"],
      Jyeshtha: ["Tu autoridad es respetada", "Protección para los tuyos", "Sabiduría del mayor"],
      Mula: ["Raíces profundas dan fuerza", "Transformación fundamental ocurre", "Verdades esenciales emergen"],
      "Purva Ashadha": ["Victoria está asegurada", "Tu convicción es invencible", "Purificación trae poder"],
      "Uttara Ashadha": ["Éxito final garantizado", "Tu perseverancia triunfa", "Liderazgo reconocido"],
      Shravana: ["Escucha trae sabiduría", "Aprendizaje profundo hoy", "Conexiones importantes"],
      Dhanishta: ["Riqueza y música fluyen", "Tu ritmo está en sincronía", "Abundancia en todas formas"],
      Shatabhisha: ["Sanación profunda ocurre", "Misterios del universo se abren", "Tu independencia es poder"],
      "Purva Bhadrapada": ["Intensidad trae resultados", "Transformación espiritual activa", "Fuego purificador"],
      "Uttara Bhadrapada": ["Profundidad espiritual máxima", "Sabiduría ancestral fluye", "Paz interior profunda"],
      Revati: ["Viajes traen bendiciones", "Tu compasión sana", "Culminación y nuevos ciclos"]
    },
    en: {
      Ashwini: ["New beginnings favor you", "Your healing energy is active", "Speed and action are your allies"],
      Bharani: ["Deep transformations occur", "Your creativity is at its peak", "Birth of important ideas"],
      Krittika: ["Your light cuts through darkness", "Exceptional mental clarity", "Purification and truth guide you"],
      Rohini: ["Beauty and abundance surround you", "Your magnetism is very high", "Growth in all areas"],
      Mrigashira: ["The search brings discoveries", "Your curiosity is rewarded", "New paths open"],
      Ardra: ["Storms bring renewal", "Your transformation power is high", "Release of the old"],
      Punarvasu: ["Positive returns arrive", "Your optimism is contagious", "Restoration and hope"],
      Pushya: ["Nourishment and care flow", "Your generosity is blessed", "Spiritual protection surrounds you"],
      Ashlesha: ["Your intuition is deep", "Serpent wisdom guides you", "Mysteries are revealed"],
      Magha: ["Your lineage strengthens you", "Honor and recognition arrive", "Ancestral connection active"],
      "Purva Phalguni": ["Pleasure and creativity abound", "Love is favored", "Celebration and joy"],
      "Uttara Phalguni": ["Friendships bring blessings", "Your leadership is recognized", "Generosity returns to you"],
      Hasta: ["Manual skill at its peak", "Quick manifestation of desires", "Your dexterity shines"],
      Chitra: ["Your artistic vision is clear", "Brilliant creations are possible", "Beauty surrounds you"],
      Swati: ["Independence and freedom flow", "Flexibility is your strength", "Favorable winds of change"],
      Vishakha: ["Unbreakable determination", "Important goals are reached", "Your focus is laser sharp"],
      Anuradha: ["Devotion brings results", "Deep friendships strengthen", "Success after effort"],
      Jyeshtha: ["Your authority is respected", "Protection for your loved ones", "Elder's wisdom"],
      Mula: ["Deep roots give strength", "Fundamental transformation occurs", "Essential truths emerge"],
      "Purva Ashadha": ["Victory is assured", "Your conviction is invincible", "Purification brings power"],
      "Uttara Ashadha": ["Final success guaranteed", "Your perseverance triumphs", "Leadership recognized"],
      Shravana: ["Listening brings wisdom", "Deep learning today", "Important connections"],
      Dhanishta: ["Wealth and music flow", "Your rhythm is in sync", "Abundance in all forms"],
      Shatabhisha: ["Deep healing occurs", "Universe mysteries open", "Your independence is power"],
      "Purva Bhadrapada": ["Intensity brings results", "Spiritual transformation active", "Purifying fire"],
      "Uttara Bhadrapada": ["Maximum spiritual depth", "Ancestral wisdom flows", "Deep inner peace"],
      Revati: ["Journeys bring blessings", "Your compassion heals", "Culmination and new cycles"]
    }
  }
};

function getMiniInsight(tradition, key, lang, birthDate) {
  lang = lang || 'es';
  const pool = miniInsights[tradition]?.[lang]?.[key];
  if (!pool || pool.length === 0) return '';
  
  // Usar seed basado en fecha actual + birthdate para consistencia diaria
  const today = new Date();
  const todayKey = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const birthDay = birthDate ? birthDate.getDate() : 1;
  const seed = todayKey + birthDay * 13;
  
  const idx = Math.abs(Math.floor(Math.sin(seed * 0.0001) * 10000)) % pool.length;
  return pool[idx];
}