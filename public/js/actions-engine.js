const actionTemplates = {
  finanzas: [
    "Revisa un gasto que puedas eliminar esta semana",
    "Transfiere algo a tu ahorro, aunque sea poco",
    "Cancela una suscripción que no uses"
  ],
  relaciones: [
    "Envía un mensaje a alguien que extrañas",
    "Escucha más de lo que hablas hoy",
    "Inicia esa conversación que has postergado"
  ],
  creatividad: [
    "Dedica 15 minutos a algo creativo sin juzgar",
    "Escribe 3 ideas locas en un papel",
    "Cambia tu ruta habitual hoy"
  ],
  salud: [
    "Toma un vaso extra de agua cada hora",
    "Camina 10 minutos después de comer",
    "Acuéstate 30 minutos antes esta noche"
  ],
  carrera: [
    "Actualiza algo de tu perfil profesional",
    "Contacta a alguien de tu industria",
    "Aprende algo nuevo por 20 minutos"
  ],
  espiritual: [
    "Medita 5 minutos antes de empezar el día",
    "Escribe 3 cosas por las que estés agradecido",
    "Pasa tiempo en silencio sin pantallas"
  ]
};

const warnings = [
  "Decisiones impulsivas con dinero",
  "Discusiones innecesarias",
  "Compromisos que no puedes cumplir",
  "Exceso de cafeína o estimulantes",
  "Compararte con otros en redes sociales",
  "Postergar lo importante por lo urgente"
];

const colors = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Índigo", "Violeta", "Blanco", "Dorado"];
const hours = ["6-8 AM", "8-10 AM", "10-12 PM", "12-2 PM", "2-4 PM", "4-6 PM", "6-8 PM", "8-10 PM"];

function generateActions(western, chinese, archangel, birthDate) {
  const themes = [];
  
  // Basado en elemento occidental
  if (western.element === "Fuego") themes.push("carrera", "creatividad");
  if (western.element === "Tierra") themes.push("finanzas", "salud");
  if (western.element === "Aire") themes.push("relaciones", "creatividad");
  if (western.element === "Agua") themes.push("espiritual", "relaciones");
  
  // Basado en elemento chino
  if (chinese.element === "Madera") themes.push("salud", "creatividad");
  if (chinese.element === "Fuego") themes.push("carrera", "relaciones");
  if (chinese.element === "Tierra") themes.push("finanzas", "espiritual");
  if (chinese.element === "Metal") themes.push("carrera", "finanzas");
  if (chinese.element === "Agua") themes.push("espiritual", "creatividad");
  
  // Seed unico basado en fecha de nacimiento + fecha actual
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.getMonth();
  const birthYear = birthDate.getFullYear();
  const uniqueSeed = (dayOfYear * 31 + birthDay * 13 + birthMonth * 7 + birthYear) % 1000;
  
  // Funcion pseudo-random con seed
  function seededRandom(seed, index) {
    const x = Math.sin(seed + index) * 10000;
    return x - Math.floor(x);
  }
  
  // Seleccionar 3 temas unicos
  const allThemes = Object.keys(actionTemplates);
  const uniqueThemes = [...new Set(themes)].slice(0, 3);
  let seedIndex = 0;
  while (uniqueThemes.length < 3) {
    const idx = Math.floor(seededRandom(uniqueSeed, seedIndex++) * allThemes.length);
    const theme = allThemes[idx];
    if (!uniqueThemes.includes(theme)) uniqueThemes.push(theme);
  }
  
  // Seleccionar acciones unicas por tema
  const actions = uniqueThemes.map((theme, i) => {
    const pool = actionTemplates[theme];
    const idx = Math.floor(seededRandom(uniqueSeed, seedIndex++ + i * 10) * pool.length);
    return pool[idx];
  });
  
  // Warning unico
  const warningIdx = Math.floor(seededRandom(uniqueSeed, 100) * warnings.length);
  
  return {
    actions: actions,
    warning: warnings[warningIdx],
    color: archangel ? archangel.color : colors[Math.floor(seededRandom(uniqueSeed, 200) * colors.length)],
    number: Math.floor(seededRandom(uniqueSeed, 300) * 9) + 1,
    hour: hours[Math.floor(seededRandom(uniqueSeed, 400) * hours.length)]
  };
}
