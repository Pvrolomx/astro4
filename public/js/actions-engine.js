const actionTemplates = {
  es: {
    finanzas: [
      "Revisa un gasto que puedas eliminar esta semana",
      "Transfiere algo a tu ahorro, aunque sea poco",
      "Cancela una suscripción que no uses",
      "Compara precios antes de comprar algo hoy",
      "Haz una lista de gastos hormiga que puedes evitar",
      "Revisa tus cuentas bancarias por cargos desconocidos",
      "Planea un día sin gastar nada",
      "Investiga una forma de ingreso extra"
    ],
    relaciones: [
      "Envía un mensaje a alguien que extrañas",
      "Escucha más de lo que hablas hoy",
      "Inicia esa conversación que has postergado",
      "Agradece a alguien que te ha ayudado",
      "Llama a un familiar que no has contactado",
      "Haz un cumplido sincero a alguien",
      "Perdona algo pequeño que te molestaba",
      "Invita a alguien a tomar un café"
    ],
    creatividad: [
      "Dedica 15 minutos a algo creativo sin juzgar",
      "Escribe 3 ideas locas en un papel",
      "Cambia tu ruta habitual hoy",
      "Dibuja algo aunque creas que no sabes",
      "Escucha un género musical diferente",
      "Escribe una historia corta de 5 líneas",
      "Toma fotos de cosas que te inspiren",
      "Cocina algo nuevo sin receta exacta"
    ],
    salud: [
      "Toma un vaso extra de agua cada hora",
      "Camina 10 minutos después de comer",
      "Acuéstate 30 minutos antes esta noche",
      "Estira tu cuerpo por 5 minutos",
      "Come una fruta o verdura extra hoy",
      "Respira profundo 10 veces conscientemente",
      "Evita el celular la primera hora del día",
      "Haz 20 sentadillas en algún momento del día"
    ],
    carrera: [
      "Actualiza algo de tu perfil profesional",
      "Contacta a alguien de tu industria",
      "Aprende algo nuevo por 20 minutos",
      "Organiza tu espacio de trabajo",
      "Define tu prioridad #1 para mañana",
      "Lee un artículo sobre tu campo",
      "Pide feedback a un colega",
      "Automatiza una tarea repetitiva"
    ],
    espiritual: [
      "Medita 5 minutos antes de empezar el día",
      "Escribe 3 cosas por las que estés agradecido",
      "Observa el cielo por unos minutos",
      "Haz algo amable sin esperar nada a cambio",
      "Reflexiona sobre un sueño que tuviste",
      "Pasa 10 minutos en silencio total",
      "Lee algo inspirador o filosófico",
      "Perdónate por algo que te pesa"
    ]
  },
  en: {
    finanzas: [
      "Review an expense you can eliminate this week",
      "Transfer something to savings, even if small",
      "Cancel a subscription you don't use",
      "Compare prices before buying anything today",
      "Make a list of small expenses you can avoid",
      "Check your bank accounts for unknown charges",
      "Plan a no-spend day",
      "Research an extra income source"
    ],
    relaciones: [
      "Send a message to someone you miss",
      "Listen more than you talk today",
      "Start that conversation you've been postponing",
      "Thank someone who has helped you",
      "Call a family member you haven't contacted",
      "Give someone a sincere compliment",
      "Forgive something small that bothered you",
      "Invite someone for coffee"
    ],
    creatividad: [
      "Spend 15 minutes on something creative without judging",
      "Write 3 crazy ideas on paper",
      "Change your usual route today",
      "Draw something even if you think you can't",
      "Listen to a different music genre",
      "Write a short 5-line story",
      "Take photos of things that inspire you",
      "Cook something new without an exact recipe"
    ],
    salud: [
      "Drink an extra glass of water every hour",
      "Walk 10 minutes after eating",
      "Go to bed 30 minutes earlier tonight",
      "Stretch your body for 5 minutes",
      "Eat an extra fruit or vegetable today",
      "Take 10 deep conscious breaths",
      "Avoid your phone for the first hour of the day",
      "Do 20 squats sometime during the day"
    ],
    carrera: [
      "Update something on your professional profile",
      "Contact someone in your industry",
      "Learn something new for 20 minutes",
      "Organize your workspace",
      "Define your #1 priority for tomorrow",
      "Read an article about your field",
      "Ask a colleague for feedback",
      "Automate a repetitive task"
    ],
    espiritual: [
      "Meditate 5 minutes before starting the day",
      "Write 3 things you're grateful for",
      "Watch the sky for a few minutes",
      "Do something kind expecting nothing in return",
      "Reflect on a dream you had",
      "Spend 10 minutes in total silence",
      "Read something inspiring or philosophical",
      "Forgive yourself for something weighing on you"
    ]
  }
};

const warningsByElement = {
  es: {
    Fuego: [
      "Decisiones impulsivas sin pensar",
      "Actuar con impaciencia extrema",
      "Conflictos por querer tener la razón",
      "Asumir riesgos innecesarios",
      "Empezar proyectos sin terminar otros"
    ],
    Tierra: [
      "Resistirte al cambio necesario",
      "Obsesionarte con detalles menores",
      "Gastar en cosas que no necesitas",
      "Ser demasiado crítico contigo mismo",
      "Postergar decisiones importantes"
    ],
    Aire: [
      "Dispersarte en muchas direcciones",
      "Prometer más de lo que puedes cumplir",
      "Hablar sin escuchar primero",
      "Compararte con otros en redes",
      "Evitar compromisos emocionales"
    ],
    Agua: [
      "Dejarte llevar por emociones intensas",
      "Absorber los problemas de otros",
      "Tomar decisiones desde el miedo",
      "Aislarte cuando necesitas apoyo",
      "Ignorar tu intuición por dudas"
    ]
  },
  en: {
    Fire: [
      "Impulsive decisions without thinking",
      "Acting with extreme impatience",
      "Conflicts from wanting to be right",
      "Taking unnecessary risks",
      "Starting projects without finishing others"
    ],
    Earth: [
      "Resisting necessary change",
      "Obsessing over minor details",
      "Spending on things you don't need",
      "Being too critical of yourself",
      "Postponing important decisions"
    ],
    Air: [
      "Scattering in many directions",
      "Promising more than you can deliver",
      "Talking without listening first",
      "Comparing yourself to others online",
      "Avoiding emotional commitments"
    ],
    Water: [
      "Being swept away by intense emotions",
      "Absorbing other people's problems",
      "Making decisions from fear",
      "Isolating when you need support",
      "Ignoring your intuition due to doubt"
    ]
  }
};

const colors = {
  es: ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Índigo", "Violeta", "Blanco", "Dorado", "Rosa", "Turquesa"],
  en: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "White", "Gold", "Pink", "Turquoise"]
};

const hours = ["6-8 AM", "8-10 AM", "10-12 PM", "12-2 PM", "2-4 PM", "4-6 PM", "6-8 PM", "8-10 PM"];

function generateActions(western, chinese, numerology, birthDate, lang) {
  lang = lang || 'es';
  const templates = actionTemplates[lang];
  const themes = [];
  
  if (western.element === "Fuego" || western.element === "Fire") themes.push("carrera", "creatividad");
  if (western.element === "Tierra" || western.element === "Earth") themes.push("finanzas", "salud");
  if (western.element === "Aire" || western.element === "Air") themes.push("relaciones", "creatividad");
  if (western.element === "Agua" || western.element === "Water") themes.push("espiritual", "relaciones");
  
  if (chinese.element === "Madera" || chinese.element === "Wood") themes.push("salud", "creatividad");
  if (chinese.element === "Fuego" || chinese.element === "Fire") themes.push("carrera", "relaciones");
  if (chinese.element === "Tierra" || chinese.element === "Earth") themes.push("finanzas", "espiritual");
  if (chinese.element === "Metal") themes.push("carrera", "finanzas");
  if (chinese.element === "Agua" || chinese.element === "Water") themes.push("espiritual", "creatividad");
  
  const today = new Date();
  const todayKey = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.getMonth();
  const birthYear = birthDate.getFullYear();
  const uniqueSeed = todayKey + birthDay * 17 + birthMonth * 23 + (birthYear % 100) * 7;
  
  function seededRandom(seed, index) {
    const x = Math.sin(seed * 0.0001 + index * 0.1) * 10000;
    return Math.abs(x - Math.floor(x));
  }
  
  const allThemes = Object.keys(templates);
  const uniqueThemes = [...new Set(themes)].slice(0, 3);
  let seedIndex = 0;
  while (uniqueThemes.length < 3) {
    const idx = Math.floor(seededRandom(uniqueSeed, seedIndex++) * allThemes.length);
    const theme = allThemes[idx];
    if (!uniqueThemes.includes(theme)) uniqueThemes.push(theme);
  }
  
  const actions = uniqueThemes.map((theme, i) => {
    const pool = templates[theme];
    const idx = Math.floor(seededRandom(uniqueSeed + i * 1000, seedIndex++ + today.getDate()) * pool.length);
    return pool[idx];
  });
  
  // Mapeo de elementos para warnings
  const elementMap = {
    'Fuego': 'Fuego', 'Fire': 'Fire',
    'Tierra': 'Tierra', 'Earth': 'Earth', 
    'Aire': 'Aire', 'Air': 'Air',
    'Agua': 'Agua', 'Water': 'Water'
  };
  const elemKey = lang === 'es' ? western.element : 
    (western.element === 'Fuego' ? 'Fire' : 
     western.element === 'Tierra' ? 'Earth' : 
     western.element === 'Aire' ? 'Air' : 'Water');
  const elemWarnings = warningsByElement[lang][elemKey] || warningsByElement[lang][Object.keys(warningsByElement[lang])[0]];
  // Incluir nombre en seed vía soulNumber
  const nameSeed = numerology && numerology.soulNumber ? numerology.soulNumber * 31 : 0;
  const warningIdx = Math.floor(seededRandom(uniqueSeed + nameSeed, today.getDate() * 50) * elemWarnings.length);
  const colorIdx = Math.floor(seededRandom(uniqueSeed, 200 + today.getDate()) * colors[lang].length);
  
  return {
    actions: actions,
    warning: elemWarnings[warningIdx],
    color: colors[lang][colorIdx],
    number: Math.floor(seededRandom(uniqueSeed, 300 + today.getDate()) * 9) + 1,
    hour: hours[Math.floor(seededRandom(uniqueSeed, 400 + today.getDate()) * hours.length)]
  };
}