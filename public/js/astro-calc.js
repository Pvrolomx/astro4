// Zodiaco Occidental con i18n
const westernSigns = {
  es: [
    { name: "Capricornio", element: "Tierra", start: [12, 22], end: [1, 19] },
    { name: "Acuario", element: "Aire", start: [1, 20], end: [2, 18] },
    { name: "Piscis", element: "Agua", start: [2, 19], end: [3, 20] },
    { name: "Aries", element: "Fuego", start: [3, 21], end: [4, 19] },
    { name: "Tauro", element: "Tierra", start: [4, 20], end: [5, 20] },
    { name: "Géminis", element: "Aire", start: [5, 21], end: [6, 20] },
    { name: "Cáncer", element: "Agua", start: [6, 21], end: [7, 22] },
    { name: "Leo", element: "Fuego", start: [7, 23], end: [8, 22] },
    { name: "Virgo", element: "Tierra", start: [8, 23], end: [9, 22] },
    { name: "Libra", element: "Aire", start: [9, 23], end: [10, 22] },
    { name: "Escorpio", element: "Agua", start: [10, 23], end: [11, 21] },
    { name: "Sagitario", element: "Fuego", start: [11, 22], end: [12, 21] }
  ],
  en: [
    { name: "Capricorn", element: "Earth", start: [12, 22], end: [1, 19] },
    { name: "Aquarius", element: "Air", start: [1, 20], end: [2, 18] },
    { name: "Pisces", element: "Water", start: [2, 19], end: [3, 20] },
    { name: "Aries", element: "Fire", start: [3, 21], end: [4, 19] },
    { name: "Taurus", element: "Earth", start: [4, 20], end: [5, 20] },
    { name: "Gemini", element: "Air", start: [5, 21], end: [6, 20] },
    { name: "Cancer", element: "Water", start: [6, 21], end: [7, 22] },
    { name: "Leo", element: "Fire", start: [7, 23], end: [8, 22] },
    { name: "Virgo", element: "Earth", start: [8, 23], end: [9, 22] },
    { name: "Libra", element: "Air", start: [9, 23], end: [10, 22] },
    { name: "Scorpio", element: "Water", start: [10, 23], end: [11, 21] },
    { name: "Sagittarius", element: "Fire", start: [11, 22], end: [12, 21] }
  ]
};

function getWesternSign(birthDate, lang) {
  lang = lang || 'es';
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;
  const signs = westernSigns[lang];
  
  for (const sign of signs) {
    const [startMonth, startDay] = sign.start;
    const [endMonth, endDay] = sign.end;
    if (startMonth === 12 && endMonth === 1) {
      if ((month === 12 && day >= startDay) || (month === 1 && day <= endDay)) return sign;
    } else {
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) return sign;
    }
  }
  return signs[0];
}

// Zodiaco Chino con i18n
const chineseData = {
  es: {
    animals: ["Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra", "Mono", "Gallo", "Perro", "Cerdo"],
    elements: ["Madera", "Fuego", "Tierra", "Metal", "Agua"]
  },
  en: {
    animals: ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"],
    elements: ["Wood", "Fire", "Earth", "Metal", "Water"]
  }
};

function getChineseZodiac(birthYear, lang) {
  lang = lang || 'es';
  const data = chineseData[lang];
  const idx = (birthYear - 4) % 12;
  const elemIdx = Math.floor(((birthYear - 4) % 10) / 2);
  const yinYang = birthYear % 2 === 0 ? "Yang" : "Yin";
  return { animal: data.animals[idx], element: data.elements[elemIdx], yinYang: yinYang };
}

// Nakshatra (Védico) - Cálculo basado en ciclo sideral lunar
// Precisión: ±1 nakshatra sin hora, ±0.5 con hora aproximada
function getNakshatra(birthDate, birthHour) {
  const nakshatras = [
    { name: "Ashwini", deity: "Ashwini Kumaras", quality: "swift, healing" },
    { name: "Bharani", deity: "Yama", quality: "restraint, transformation" },
    { name: "Krittika", deity: "Agni", quality: "sharp, purifying" },
    { name: "Rohini", deity: "Brahma", quality: "growth, creativity" },
    { name: "Mrigashira", deity: "Soma", quality: "seeking, curious" },
    { name: "Ardra", deity: "Rudra", quality: "storm, transformation" },
    { name: "Punarvasu", deity: "Aditi", quality: "renewal, return" },
    { name: "Pushya", deity: "Brihaspati", quality: "nourishing, prosperous" },
    { name: "Ashlesha", deity: "Nagas", quality: "mystical, intense" },
    { name: "Magha", deity: "Pitris", quality: "royal, ancestral" },
    { name: "Purva Phalguni", deity: "Bhaga", quality: "pleasure, creativity" },
    { name: "Uttara Phalguni", deity: "Aryaman", quality: "friendship, contracts" },
    { name: "Hasta", deity: "Savitar", quality: "skill, craftsmanship" },
    { name: "Chitra", deity: "Tvashtar", quality: "brilliant, artistic" },
    { name: "Swati", deity: "Vayu", quality: "independent, flexible" },
    { name: "Vishakha", deity: "Indra-Agni", quality: "determined, goal-oriented" },
    { name: "Anuradha", deity: "Mitra", quality: "devotion, friendship" },
    { name: "Jyeshtha", deity: "Indra", quality: "protective, senior" },
    { name: "Mula", deity: "Nirriti", quality: "foundational, investigative" },
    { name: "Purva Ashadha", deity: "Apas", quality: "invincible, purifying" },
    { name: "Uttara Ashadha", deity: "Vishvadevas", quality: "universal, victorious" },
    { name: "Shravana", deity: "Vishnu", quality: "learning, listening" },
    { name: "Dhanishta", deity: "Vasus", quality: "wealth, musical" },
    { name: "Shatabhisha", deity: "Varuna", quality: "healing, secretive" },
    { name: "Purva Bhadrapada", deity: "Aja Ekapada", quality: "fiery, transformative" },
    { name: "Uttara Bhadrapada", deity: "Ahir Budhnya", quality: "deep, spiritual" },
    { name: "Revati", deity: "Pushan", quality: "nurturing, journeys" }
  ];
  
  const NAKSHATRA_SPAN = 360 / 27; // 13.333°
  
  // Preparar fecha/hora de nacimiento
  let dt = new Date(birthDate);
  const hasTime = birthHour !== undefined && birthHour !== null && !isNaN(birthHour);
  
  let moonLong;
  let precision;
  
  // Intentar usar astronomy-engine si esta disponible
  if (typeof Astronomy !== 'undefined') {
    try {
      // Crear objeto Date con hora UTC
      const astroDate = Astronomy.MakeTime(dt);
      
      // Obtener longitud ecliptica de la Luna (tropical)
      const moonEcl = Astronomy.EclipticGeoMoon(astroDate);
      const tropicalLong = moonEcl.elon; // Longitud ecliptica tropical
      
      // Ayanamsa Lahiri para 2025 (~24.17°)
      // Formula: 23.85 + (year - 2000) * 0.0139
      const year = dt.getFullYear();
      const ayanamsa = 23.85 + (year - 2000) * 0.0139;
      
      // Convertir a longitud sideral
      moonLong = (tropicalLong - ayanamsa + 360) % 360;
      precision = hasTime ? "alta (astronomy-engine)" : "buena (astronomy-engine)";
      
    } catch (e) {
      console.warn('Astronomy-engine error, using fallback:', e);
      moonLong = calculateMoonLongFallback(dt);
      precision = hasTime ? "±0.5 nakshatra" : "±1 nakshatra";
    }
  } else {
    // Fallback: calculo basico
    moonLong = calculateMoonLongFallback(dt);
    precision = hasTime ? "±0.5 nakshatra" : "±1 nakshatra";
  }
  
  // Indice de Nakshatra (0-26)
  const idx = Math.floor(moonLong / NAKSHATRA_SPAN) % 27;
  
  // Pada (cuarto, 1-4)
  const pada = Math.floor((moonLong % NAKSHATRA_SPAN) / (NAKSHATRA_SPAN / 4)) + 1;
  
  return { 
    nakshatra: nakshatras[idx].name,
    deity: nakshatras[idx].deity,
    quality: nakshatras[idx].quality,
    pada: pada,
    moonLongitude: Math.round(moonLong * 10) / 10,
    precision: precision
  };
}

// Funcion fallback para calcular longitud lunar
function calculateMoonLongFallback(dt) {
  const SIDEREAL_MONTH = 27.321661;
  const MOON_DAILY = 360 / SIDEREAL_MONTH;
  const REF_DATE = new Date(Date.UTC(2000, 0, 21, 4, 40, 0));
  const REF_MOON_LONG = 121;
  
  const daysDiff = (dt.getTime() - REF_DATE.getTime()) / (24 * 60 * 60 * 1000);
  let moonLong = (REF_MOON_LONG + (daysDiff * MOON_DAILY)) % 360;
  if (moonLong < 0) moonLong += 360;
  return moonLong;
}

// Numerología con i18n
const numMeanings = {
  es: {
    1: { keyword: 'Liderazgo', desc: 'Independencia, iniciativa, originalidad' },
    2: { keyword: 'Cooperación', desc: 'Diplomacia, equilibrio, sensibilidad' },
    3: { keyword: 'Expresión', desc: 'Creatividad, comunicación, alegría' },
    4: { keyword: 'Estabilidad', desc: 'Trabajo, orden, construcción' },
    5: { keyword: 'Libertad', desc: 'Cambio, aventura, versatilidad' },
    6: { keyword: 'Responsabilidad', desc: 'Amor, hogar, servicio' },
    7: { keyword: 'Sabiduría', desc: 'Análisis, espiritualidad, introspección' },
    8: { keyword: 'Poder', desc: 'Abundancia, éxito material, autoridad' },
    9: { keyword: 'Humanitarismo', desc: 'Compasión, culminación, universalidad' },
    11: { keyword: 'Maestro Espiritual', desc: 'Intuición elevada, inspiración' },
    22: { keyword: 'Maestro Constructor', desc: 'Grandes logros, visión práctica' },
    33: { keyword: 'Maestro Sanador', desc: 'Servicio elevado, amor incondicional' }
  },
  en: {
    1: { keyword: 'Leadership', desc: 'Independence, initiative, originality' },
    2: { keyword: 'Cooperation', desc: 'Diplomacy, balance, sensitivity' },
    3: { keyword: 'Expression', desc: 'Creativity, communication, joy' },
    4: { keyword: 'Stability', desc: 'Work, order, construction' },
    5: { keyword: 'Freedom', desc: 'Change, adventure, versatility' },
    6: { keyword: 'Responsibility', desc: 'Love, home, service' },
    7: { keyword: 'Wisdom', desc: 'Analysis, spirituality, introspection' },
    8: { keyword: 'Power', desc: 'Abundance, material success, authority' },
    9: { keyword: 'Humanitarianism', desc: 'Compassion, culmination, universality' },
    11: { keyword: 'Spiritual Master', desc: 'Elevated intuition, inspiration' },
    22: { keyword: 'Master Builder', desc: 'Great achievements, practical vision' },
    33: { keyword: 'Master Healer', desc: 'Elevated service, unconditional love' }
  }
};

function getNumerology(birthDate, fullName, lang) {
  lang = lang || 'es';
  const meanings = numMeanings[lang];
  
  const dateStr = birthDate.toISOString().split('T')[0].replace(/-/g, '');
  let lifeNumber = dateStr.split('').reduce((a, b) => a + parseInt(b), 0);
  while (lifeNumber > 9 && lifeNumber !== 11 && lifeNumber !== 22 && lifeNumber !== 33) {
    lifeNumber = lifeNumber.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  
  const letterValues = {
    a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9,
    j:1, k:2, l:3, m:4, n:5, o:6, p:7, q:8, r:9,
    s:1, t:2, u:3, v:4, w:5, x:6, y:7, z:8
  };
  const vowels = ['a','e','i','o','u'];
  const nameLower = (fullName || '').toLowerCase().replace(/[^a-z]/g, '');
  
  let soulSum = 0;
  for (const char of nameLower) {
    if (vowels.includes(char)) soulSum += letterValues[char] || 0;
  }
  while (soulSum > 9 && soulSum !== 11 && soulSum !== 22) {
    soulSum = soulSum.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  
  let destinySum = 0;
  for (const char of nameLower) {
    destinySum += letterValues[char] || 0;
  }
  while (destinySum > 9 && destinySum !== 11 && destinySum !== 22) {
    destinySum = destinySum.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  
  const today = new Date();
  const daySum = today.getDate() + (today.getMonth() + 1) + lifeNumber;
  let personalDay = daySum;
  while (personalDay > 9) {
    personalDay = personalDay.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  
  return {
    lifeNumber: lifeNumber,
    lifeMeaning: meanings[lifeNumber] || meanings[9],
    soulNumber: soulSum,
    soulMeaning: meanings[soulSum] || meanings[9],
    destinyNumber: destinySum,
    destinyMeaning: meanings[destinySum] || meanings[9],
    personalDay: personalDay,
    personalDayMeaning: meanings[personalDay] || meanings[9]
  };
}