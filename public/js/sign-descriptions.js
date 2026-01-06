// Descripciones extendidas para consulta individual por tradición
// 60-80 caracteres por descripción

const signDescriptions = {
  western: {
    es: {
      Aries: "Pionero y valiente, tu fuego interior enciende nuevos caminos y aventuras.",
      Tauro: "Tierra fértil de estabilidad, construyes con paciencia lo que perdura.",
      Géminis: "Mente brillante y curiosa, conectas mundos con tu don de la palabra.",
      Cáncer: "Guardián del hogar, tu intuición y amor nutren a quienes te rodean.",
      Leo: "Corazón de oro que brilla, tu generosidad ilumina cada rincón.",
      Virgo: "Artesano del detalle, tu servicio y precisión transforman lo ordinario.",
      Libra: "Arquitecto del equilibrio, tu armonía crea belleza donde la buscas.",
      Escorpio: "Fénix de la transformación, tu profundidad revela verdades ocultas.",
      Sagitario: "Arquero de horizontes, tu optimismo abre puertas al conocimiento.",
      Capricornio: "Escalador de montañas, tu disciplina conquista las cimas más altas.",
      Acuario: "Visionario del futuro, tu originalidad revoluciona lo establecido.",
      Piscis: "Océano de compasión, tu sensibilidad conecta con lo invisible."
    },
    en: {
      Aries: "Pioneer and brave, your inner fire ignites new paths and adventures.",
      Taurus: "Fertile earth of stability, you patiently build what endures.",
      Gemini: "Brilliant curious mind, you connect worlds with your gift of words.",
      Cancer: "Guardian of home, your intuition and love nurture those around you.",
      Leo: "Golden heart that shines, your generosity illuminates every corner.",
      Virgo: "Artisan of detail, your service and precision transform the ordinary.",
      Libra: "Architect of balance, your harmony creates beauty wherever you seek.",
      Scorpio: "Phoenix of transformation, your depth reveals hidden truths.",
      Sagittarius: "Archer of horizons, your optimism opens doors to knowledge.",
      Capricorn: "Mountain climber, your discipline conquers the highest peaks.",
      Aquarius: "Visionary of the future, your originality revolutionizes norms.",
      Pisces: "Ocean of compassion, your sensitivity connects with the invisible."
    }
  },
  chinese: {
    es: {
      Rata: "Ingenio y astucia te guían. Tu mente ágil encuentra oportunidades ocultas.",
      Buey: "Fortaleza inquebrantable. Tu perseverancia construye imperios duraderos.",
      Tigre: "Coraje y magnetismo. Tu poder natural inspira respeto y admiración.",
      Conejo: "Gracia y diplomacia. Tu gentileza abre corazones y resuelve conflictos.",
      Dragón: "Majestuosidad y carisma. Tu presencia transforma todo a tu alrededor.",
      Serpiente: "Sabiduría profunda. Tu intuición penetra los misterios de la vida.",
      Caballo: "Libertad y pasión. Tu espíritu aventurero conquista nuevos territorios.",
      Cabra: "Creatividad y armonía. Tu sensibilidad artística embellece el mundo.",
      Mono: "Ingenio brillante. Tu versatilidad y humor resuelven cualquier desafío.",
      Gallo: "Honestidad y precisión. Tu franqueza y dedicación inspiran confianza.",
      Perro: "Lealtad y justicia. Tu corazón noble protege a quienes amas.",
      Cerdo: "Generosidad y fortuna. Tu bondad atrae abundancia y alegría."
    },
    en: {
      Rat: "Wit and cleverness guide you. Your agile mind finds hidden opportunities.",
      Ox: "Unbreakable strength. Your perseverance builds lasting empires.",
      Tiger: "Courage and magnetism. Your natural power inspires respect and admiration.",
      Rabbit: "Grace and diplomacy. Your gentleness opens hearts and resolves conflicts.",
      Dragon: "Majesty and charisma. Your presence transforms everything around you.",
      Snake: "Deep wisdom. Your intuition penetrates life's mysteries.",
      Horse: "Freedom and passion. Your adventurous spirit conquers new territories.",
      Goat: "Creativity and harmony. Your artistic sensitivity beautifies the world.",
      Monkey: "Brilliant wit. Your versatility and humor solve any challenge.",
      Rooster: "Honesty and precision. Your frankness and dedication inspire trust.",
      Dog: "Loyalty and justice. Your noble heart protects those you love.",
      Pig: "Generosity and fortune. Your kindness attracts abundance and joy."
    }
  },
  numerology: {
    es: {
      1: "Líder nato con visión propia. Tu independencia abre caminos inexplorados.",
      2: "Diplomático y sensible. Tu don de unir crea armonía donde hay conflicto.",
      3: "Creativo y expresivo. Tu alegría y comunicación iluminan a los demás.",
      4: "Constructor sólido. Tu disciplina y orden crean bases inquebrantables.",
      5: "Espíritu libre y adaptable. Tu versatilidad abraza el cambio con gracia.",
      6: "Corazón de servicio. Tu amor y responsabilidad nutren a tu comunidad.",
      7: "Buscador de verdades. Tu mente analítica descubre lo que otros no ven.",
      8: "Manifestador de abundancia. Tu visión y poder crean prosperidad real.",
      9: "Alma compasiva y sabia. Tu humanitarismo deja huella en el mundo.",
      11: "Intuición elevada. Tu sensibilidad espiritual guía e inspira a otros.",
      22: "Constructor de sueños. Tu visión y disciplina materializan lo imposible.",
      33: "Maestro del amor. Tu compasión infinita sana y eleva a la humanidad."
    },
    en: {
      1: "Natural leader with own vision. Your independence opens unexplored paths.",
      2: "Diplomatic and sensitive. Your gift of uniting creates harmony in conflict.",
      3: "Creative and expressive. Your joy and communication illuminate others.",
      4: "Solid builder. Your discipline and order create unbreakable foundations.",
      5: "Free and adaptable spirit. Your versatility embraces change with grace.",
      6: "Heart of service. Your love and responsibility nurture your community.",
      7: "Truth seeker. Your analytical mind discovers what others cannot see.",
      8: "Manifestor of abundance. Your vision and power create real prosperity.",
      9: "Compassionate wise soul. Your humanitarianism leaves a mark on the world.",
      11: "Elevated intuition. Your spiritual sensitivity guides and inspires others.",
      22: "Dream builder. Your vision and discipline materialize the impossible.",
      33: "Master of love. Your infinite compassion heals and elevates humanity."
    }
  },
  vedic: {
    es: {
      Ashwini: "Energía sanadora y velocidad. Inicias ciclos con poder rejuvenecedor.",
      Bharani: "Poder de transformación. Tu creatividad da vida a lo extraordinario.",
      Krittika: "Luz que purifica. Tu claridad corta la ilusión con verdad.",
      Rohini: "Fertilidad y belleza. Tu magnetismo atrae abundancia natural.",
      Mrigashira: "Búsqueda incansable. Tu curiosidad descubre tesoros ocultos.",
      Ardra: "Tormenta renovadora. Tu intensidad destruye para reconstruir mejor.",
      Punarvasu: "Retorno bendito. Tu optimismo restaura lo que parecía perdido.",
      Pushya: "Nutrición sagrada. Tu generosidad alimenta cuerpos y almas.",
      Ashlesha: "Sabiduría serpentina. Tu intuición penetra los secretos profundos.",
      Magha: "Nobleza ancestral. Tu dignidad conecta con el poder de tus raíces.",
      "Purva Phalguni": "Placer creativo. Tu alegría y amor embellecen la existencia.",
      "Uttara Phalguni": "Servicio generoso. Tu liderazgo nutre y protege a muchos.",
      Hasta: "Manos creadoras. Tu destreza manifiesta con precisión y arte.",
      Chitra: "Visión artística. Tu creatividad construye belleza deslumbrante.",
      Swati: "Viento de libertad. Tu independencia dispersa semillas de cambio.",
      Vishakha: "Determinación ardiente. Tu enfoque alcanza metas imposibles.",
      Anuradha: "Devoción profunda. Tu lealtad y amor superan cualquier obstáculo.",
      Jyeshtha: "Autoridad protectora. Tu experiencia y poder resguardan a otros.",
      Mula: "Raíz de transformación. Tu búsqueda descubre verdades esenciales.",
      "Purva Ashadha": "Victoria asegurada. Tu convicción y fe son invencibles.",
      "Uttara Ashadha": "Triunfo final. Tu integridad y perseverancia siempre vencen.",
      Shravana: "Oído del cosmos. Tu receptividad capta la sabiduría universal.",
      Dhanishta: "Ritmo de abundancia. Tu prosperidad fluye con música celestial.",
      Shatabhisha: "Sanador cósmico. Tu independencia y misterio curan profundamente.",
      "Purva Bhadrapada": "Fuego transformador. Tu pasión intensa purifica y eleva.",
      "Uttara Bhadrapada": "Profundidad oceánica. Tu sabiduría ancestral trae paz.",
      Revati: "Guía compasivo. Tu gentileza conduce a otros a puerto seguro."
    },
    en: {
      Ashwini: "Healing energy and speed. You initiate cycles with rejuvenating power.",
      Bharani: "Transformation power. Your creativity gives life to the extraordinary.",
      Krittika: "Purifying light. Your clarity cuts through illusion with truth.",
      Rohini: "Fertility and beauty. Your magnetism attracts natural abundance.",
      Mrigashira: "Tireless search. Your curiosity discovers hidden treasures.",
      Ardra: "Renewing storm. Your intensity destroys to rebuild better.",
      Punarvasu: "Blessed return. Your optimism restores what seemed lost.",
      Pushya: "Sacred nourishment. Your generosity feeds bodies and souls.",
      Ashlesha: "Serpent wisdom. Your intuition penetrates deep secrets.",
      Magha: "Ancestral nobility. Your dignity connects with your roots' power.",
      "Purva Phalguni": "Creative pleasure. Your joy and love beautify existence.",
      "Uttara Phalguni": "Generous service. Your leadership nurtures and protects many.",
      Hasta: "Creating hands. Your skill manifests with precision and art.",
      Chitra: "Artistic vision. Your creativity builds dazzling beauty.",
      Swati: "Wind of freedom. Your independence disperses seeds of change.",
      Vishakha: "Burning determination. Your focus reaches impossible goals.",
      Anuradha: "Deep devotion. Your loyalty and love overcome any obstacle.",
      Jyeshtha: "Protective authority. Your experience and power guard others.",
      Mula: "Root of transformation. Your search discovers essential truths.",
      "Purva Ashadha": "Assured victory. Your conviction and faith are invincible.",
      "Uttara Ashadha": "Final triumph. Your integrity and perseverance always win.",
      Shravana: "Cosmic ear. Your receptivity captures universal wisdom.",
      Dhanishta: "Rhythm of abundance. Your prosperity flows with celestial music.",
      Shatabhisha: "Cosmic healer. Your independence and mystery heal deeply.",
      "Purva Bhadrapada": "Transforming fire. Your intense passion purifies and elevates.",
      "Uttara Bhadrapada": "Oceanic depth. Your ancestral wisdom brings peace.",
      Revati: "Compassionate guide. Your gentleness leads others to safe harbor."
    }
  }
};

function getSignDescription(tradition, key, lang) {
  return signDescriptions[tradition]?.[lang]?.[key] || '';
}
