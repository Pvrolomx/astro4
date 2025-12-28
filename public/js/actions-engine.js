const actionTemplates = {
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
};

const warnings = [
  "Decisiones impulsivas con dinero",
  "Discusiones innecesarias",
  "Compromisos que no puedes cumplir",
  "Exceso de cafeína o estimulantes",
  "Compararte con otros en redes sociales",
  "Postergar lo importante por lo urgente",
  "Sobrecargarte de tareas",
  "Ignorar señales de tu cuerpo",
  "Hablar sin pensar primero",
  "Dejar que otros decidan por ti"
];

const colors = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Índigo", "Violeta", "Blanco", "Dorado", "Rosa", "Turquesa"];
const hours = ["6-8 AM", "8-10 AM", "10-12 PM", "12-2 PM", "2-4 PM", "4-6 PM", "6-8 PM", "8-10 PM"];

function generateActions(western, chinese, numerology, birthDate) {
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
  
  // CLAVE: Seed basado en fecha ACTUAL (año+mes+día) + datos de nacimiento
  const today = new Date();
  const todayKey = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.getMonth();
  const birthYear = birthDate.getFullYear();
  const uniqueSeed = todayKey + birthDay * 17 + birthMonth * 23 + (birthYear % 100) * 7;
  
  // Funcion pseudo-random con seed
  function seededRandom(seed, index) {
    const x = Math.sin(seed * 0.0001 + index * 0.1) * 10000;
    return Math.abs(x - Math.floor(x));
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
  
  // Seleccionar acciones unicas por tema - VARIANDO con el día
  const actions = uniqueThemes.map((theme, i) => {
    const pool = actionTemplates[theme];
    const idx = Math.floor(seededRandom(uniqueSeed + i * 1000, seedIndex++ + today.getDate()) * pool.length);
    return pool[idx];
  });
  
  // Warning unico basado en el día
  const warningIdx = Math.floor(seededRandom(uniqueSeed, today.getDate() * 50) * warnings.length);
  
  // Color basado en numerología si existe
  const colorIdx = Math.floor(seededRandom(uniqueSeed, 200 + today.getDate()) * colors.length);
  
  return {
    actions: actions,
    warning: warnings[warningIdx],
    color: colors[colorIdx],
    number: Math.floor(seededRandom(uniqueSeed, 300 + today.getDate()) * 9) + 1,
    hour: hours[Math.floor(seededRandom(uniqueSeed, 400 + today.getDate()) * hours.length)]
  };
}