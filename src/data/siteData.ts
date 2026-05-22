// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — SW Ingeniería
// Todos los datos estructurados del sitio viven aquí.
// Para editar un dato, edítalo en este archivo únicamente.
// ─────────────────────────────────────────────────────────────

// ── EMPRESA ──────────────────────────────────────────────────

export const empresa = {
  nombre: "SW Ingeniería",
  telefono: "+51 922330784",
  whatsappHref:
    "https://wa.me/51922330784?text=Hola%2C%20visit%C3%A9%20swingenieria.com%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20soluciones.",
  direccionPeru: "Calle Alcanfores 1245, Miraflores, Lima, Perú",
  direccionMexico: "Calle Atlixco 54 Piso 5, Condesa, Del. Cuauhtémoc, CP 06140, CDMX, México",
  implementaciones: "más de 80",
  paises: "Perú y México",
};

// ── QUOTES ───────────────────────────────────────────────────

export const quotes = {
  safco: {
    text: "La implementación de enfriadores evaporativos en nuestras plantas tuvo dos impactos muy claros. En las personas: bajar la temperatura en packing durante los meses de cosecha marcó una diferencia real para más de 500 trabajadores. En la fruta: atacamos la deshidratación en las zonas más críticas (recepción y espera de materia prima) y en el proceso. El control de temperatura y humedad relativa ahí logra extender la vida de anaquel. Y todo esto con una inversión muy pequeña, sin necesidad de refrigeración convencional ni aislamiento térmico.",
    author: "Juan Pedro Illescas",
    role: "Gerente de Planta",
    company: "Safco Perú",
  },
  cedro: {
    text: "SW Ingeniería llegó a entender nuestra planta. Rediseñaron una parte del proceso productivo, eliminaron tiempos muertos que habíamos normalizado e implementaron soluciones a medida, de bajo costo. El resultado fue una transformación operativa real, considerando los retos de la industria alimentaria donde mantener los estándares sanitarios es crucial.",
    author: "Aránzazu Vega",
    role: "Gerente General",
    company: "El Cedro",
  },
  calera: {
    text: "Instalamos ventilación evaporativa en nuestra sala de selección automatizada. El resultado fue doble: mejor conservación del huevo en proceso y mayor vida útil de los brazos robóticos de empaque. Una solución de bajo costo con impacto directo en calidad y productividad.",
    author: "Jorge Luis Chapoñan",
    role: "Jefe de Mantenimiento",
    company: "La Calera",
  },
};

// ── CASOS DE ÉXITO ───────────────────────────────────────────
// Datos estructurados por caso. Los componentes importan desde aquí.

export const casosChincha = {
  // Identificación
  sector: "Avícola",
  sectorLabel: "Avícola · Chincha, Perú",
  client: "Planta de clasificación y empaque de huevos",
  location: "Chincha, Perú",
  // Superficie
  superficie: "3,000 m²",
  // Resultados clave (usados en múltiples lugares)
  reduccionTemp: "Reducción de 9°C",
  reduccionAusentismo: "−50% en ausentismo por calor",
  ahorroInversion: "Inversión 80% menor que alternativa de refrigeración industrial",
  ahorroEnergia: "90% menos de consumo eléctrico",
  // Strings compuestos para cards de grilla
  resultCard: "Reducción de 9°C · −50% ausentismo · inversión 80% menor",
  // Descripción corta
  description:
    "Alta temperatura por las tardes afectaba maquinaria de alta sensibilidad y generaba ausentismo en una planta de 3,000 m².",
  // Modal
  situacion:
    "Planta de 3,000 m² con alta temperatura por la tarde, que afectaba maquinaria de alta sensibilidad y generaba ausentismo.",
  intervencion:
    "Diseño de sistema evaporativo Big Ass Fans y extractores de aire, con distribución inteligente que logró reducir la temperatura por debajo de 25°C, sin obras civiles ni paradas de operación.",
  resultados: [
    { periodo: "Semana 1", label: "Reducción de 9°C en zona de trabajo principal" },
    { periodo: "Mes 1", label: "−50% en ausentismo por calor" },
    {
      periodo: "Menores costos",
      label: "Inversión 80% menor que alternativa de refrigeración industrial, con 90% menos de consumo eléctrico",
    },
  ],
  quote: quotes.calera,
};

export const casosIca = {
  sector: "Agroindustria",
  sectorLabel: "Agroindustria · Ica, Perú",
  client: "Packing de uva de exportación",
  location: "Ica, Perú",
  superficie: "5,000 m²",
  trabajadores: "más de 500",
  reduccionDeshidratacion: "−35%",
  humedadRelativa: ">80%",
  resultCard: "−35% deshidratación · HR >80% · +500 trabajadores en confort térmico",
  description:
    "Empaque de más de 5,000 m² con deshidratación de fruta por altas temperaturas en verano, afectando vida de anaquel.",
  situacion:
    "Empaque de más de 5,000 m² con áreas de recepción, clasificación y empaque. Las altas temperaturas del verano generaban deshidratación de la fruta y reducción de vida de anaquel.",
  intervencion:
    "Implementación de flujo integral de aire combinando enfriadores Portacool con salidas superiores de aire caliente.",
  resultados: [
    { periodo: "Condiciones", label: "Humedad relativa >80% y temperatura de trabajo <25°C" },
    { periodo: "Producto", label: "−35% en tasa de deshidratación de fruta (<0.1%/hr)" },
    {
      periodo: "Personas",
      label: "Confort térmico para más de 500 trabajadores durante los meses de verano, con condiciones de trabajo sostenibles en jornadas de alta demanda",
    },
  ],
  quote: quotes.safco,
};

export const casosCallao = {
  sector: "Logística",
  sectorLabel: "Logística · Callao, Perú",
  client: "Centro de distribución farmacéutico",
  location: "Callao, Perú",
  superficie: "6,000 m²",
  consumoKw: "20 kW",
  consumoKwAlternativa: "+180 kW",
  ahorroInversion: "85% menos inversión",
  tempGarantizada: "<25°C",
  resultCard: "<25°C garantizados · 85% menos inversión · solo 20 kW",
  description:
    "6,000 m² de almacén farmacéutico que requería temperatura controlada para cumplimiento regulatorio, con presupuesto acotado.",
  situacion:
    "Centro de distribución de productos farmacéuticos en Callao requería implementación para cumplimiento regulatorio. La alternativa de refrigeración industrial excedía el presupuesto considerado.",
  intervencion:
    "Se identificó distribución óptima de flujo adaptada al diseño existente de pasillos, y se implementaron enfriadores evaporativos de alto caudal complementados por extractores eólicos de techo.",
  resultados: [
    { periodo: "Cumplimiento", label: "Temperatura garantizada por debajo de los 27°C requeridos" },
    { periodo: "Inversión", label: "Costo de instalación 85% menor a la alternativa originalmente evaluada" },
    { periodo: "Energía", label: "Solo 20 kW de potencia consumida vs. +180 kW de sistema de refrigeración convencional" },
  ],
};

// ── MÉTRICAS DE ARTÍCULOS ────────────────────────────────────
// Stats que aparecen como cards en los artículos de blog

export const metricasAgroindustria = [
  { valor: casosIca.reduccionDeshidratacion, label: "Tasa de deshidratación en packing de uva", fuente: "Caso Ica" },
  { valor: casosIca.humedadRelativa, label: "Humedad relativa mantenida en zonas de proceso", fuente: "Casos Ica y Chao" },
  { valor: `+${casosIca.trabajadores.replace("más de ", "")}`, label: "Trabajadores con confort térmico durante cosecha", fuente: "Caso Ica" },
];

export const metricasAlmacenes = [
  { valor: "−85%", label: "Menor inversión vs. refrigeración convencional", fuente: "Caso Callao" },
  { valor: casosCallao.consumoKw, label: `Consumo eléctrico para ${casosCallao.superficie}`, fuente: `vs. ${casosCallao.consumoKwAlternativa} convencional` },
  { valor: "−50%", label: "Ausentismo por calor en zona de trabajo", fuente: "Caso Chincha" },
];

export const casosChao = {
  sector: "Agroindustria",
  sectorLabel: "Agroindustria · Chao, La Libertad, Perú",
  client: "Acopios de campo para cosecha de arándanos y palta",
  location: "Chao, La Libertad, Perú",
  hectareas: "más de 800",
  centrosAcopio: "+10",
  anosAcompanamiento: "4 años",
  get resultCard() { return `${this.centrosAcopio} centros de acopio · T<25°C y HR>80% · ${this.anosAcompanamiento} de crecimiento acompañado`; },
  get description() { return `Operación agrícola de gran escala requería reducir la deshidratación de fruta durante la cosecha, antes de llegar al centro de empaque. ${this.hectareas.charAt(0).toUpperCase() + this.hectareas.slice(1)} hectáreas a cubrir.`; },
  get situacion() { return `Operación agrícola de gran escala en Chao, La Libertad, requería reducir la deshidratación de fruta durante el proceso de cosecha, antes de llegar al centro de empaque. Con ${this.hectareas} hectáreas a cubrir, la fruta cosechada acumulaba tiempo de espera en campo sin condiciones térmicas adecuadas.`; },
  intervencion:
    "Se implementaron centros de acopio con enfriamiento evaporativo estratégicamente distribuidos en campo, para consolidar la cosecha al tamaño de carga de transporte. Estructuras simples con cobertura de malla raschel, sin material aislante, con bajo costo de implementación y fácil reubicación.",
  get resultados() { return [
    { periodo: "Escala", label: `${this.centrosAcopio} centros de acopio implementados, acompañando el crecimiento de campo a lo largo de ${this.anosAcompanamiento}` },
    { periodo: "Condiciones", label: "T<25°C y HR>80%, reduciendo drásticamente la tasa de deshidratación en campo" },
    { periodo: "Operación", label: "Reducción de tiempos de espera desde el punto de cosecha, con total adaptación al ritmo y requerimientos de la operación" },
  ]; },
};

export const casosViveroAte = {
  sector: "Agroindustria",
  sectorLabel: "Agroindustria · Ate, Lima, Perú",
  client: "Invernadero de semillas y plantines de hortalizas",
  location: "Ate, Lima, Perú",
  tempRango: "23°C–25°C",
  hrRango: "60%–70%",
  get resultCard() { return `${this.tempRango} y HR ${this.hrRango} · control automático · menor mortandad de plantines`; },
  description:
    "Las condiciones ambientales variables de Lima dificultaban mantener T° y HR consistentes para germinación. Se requería una solución bidireccional — enfriar en verano y calentar en invierno.",
  situacion:
    "Las semillas y plantines de hortalizas requieren condiciones ambientales muy precisas para su correcta germinación y desarrollo. El cambiante clima de Lima — con veranos cálidos e inviernos fríos y húmedos — dificultaba mantener las condiciones adecuadas de forma consistente sin intervención manual constante.",
  intervencion:
    "Se diseñó un sistema de climatización bidireccional que combina enfriadores evaporativos de techo marca BioCool con calefactores radiantes, controlado por sensores y actuadores automáticos. En días de calor, los enfriadores reducen la temperatura; en invierno, los calefactores la elevan. El diseño de techo permite un flujo de aire indirecto que acondiciona el espacio sin impactar directamente las plantas en desarrollo.",
  get resultados() { return [
    { periodo: "Condiciones", label: `Temperatura mantenida entre ${this.tempRango}, con HR entre ${this.hrRango}` },
    { periodo: "Automatización", label: "Sistema de control automático elimina ajustes manuales, adaptándose en tiempo real a las condiciones exteriores" },
    { periodo: "Productividad", label: "Reducción significativa en tasa de mortandad de plantines, con mayor consistencia en germinación y desarrollo" },
  ]; },
};

export const casosIquitos = {
  sector: "Retail",
  sectorLabel: "Retail · Iquitos, Perú",
  client: "Food court de mall",
  location: "Iquitos, Perú",
  superficie: "1,000 m²",
  equipos: "6",
  get resultCard() { return `${this.superficie} climatizados · ${this.equipos} equipos instalados · sin obras adicionales`; },
  get description() { return `Food court de ${this.superficie} en clima tropical húmedo. El área abierta hacía inviable la refrigeración convencional. Se combinaron ventiladores HVLS con enfriadores evaporativos.`; },
  get situacion() { return `El food court de un mall en Iquitos — ciudad con clima tropical húmedo durante todo el año — operaba con altas temperaturas que afectaban la experiencia de los visitantes. Al tratarse de un área abierta de ${this.superficie}, la refrigeración convencional no era técnica ni económicamente viable.`; },
  intervencion:
    "Se instalaron 3 ventiladores industriales de techo de gran diámetro Big Ass Fans para eliminar bolsillos de calor y distribuir el aire uniformemente en el volumen del espacio, combinados con 3 enfriadores evaporativos CF-500 para reducir la temperatura del aire en las zonas de mayor afluencia. La combinación de ambos sistemas genera un efecto de confort térmico sostenido sin necesidad de cerramiento del espacio.",
  get resultados() { return [
    { periodo: "Confort", label: "Reducción efectiva de temperatura percibida en el food court durante todo el año" },
    { periodo: "Viabilidad", label: `Única solución técnicamente viable para un espacio abierto de ${this.superficie} en clima tropical` },
    { periodo: "Escala", label: `${this.equipos} equipos instalados cubriendo la totalidad del área sin obras de infraestructura adicionales` },
  ]; },
};

export const casosLurin = {
  sector: "Industrial",
  sectorLabel: "Industrial · Lurín, Lima, Perú",
  client: "Panificadora industrial",
  location: "Lurín, Lima, Perú",
  aumentoProductividad: "+30%",
  reduccionInsumos: "−21%",
  get resultCard() { return `${this.aumentoProductividad} productividad horas-hombre · ${this.reduccionInsumos} consumo de insumos críticos · recuperación de margen bruto`; },
  description:
    "A pesar del crecimiento sostenido de producción y ventas, el margen bruto se deterioraba. El incremento de volumen no generaba economías de escala — los costos directos crecían proporcionalmente.",
  situacion:
    "Una empresa de panificación industrial de gran escala en Lurín enfrentaba un problema paradójico: a pesar del crecimiento sostenido de producción y ventas, el margen bruto se deterioraba. El incremento de volumen no se traducía en economías de escala — los costos directos de mano de obra, insumos y energía crecían proporcionalmente, sin señales de control.",
  intervencion:
    "Se realizó un análisis detallado de las actividades productivas principales, identificando re-trabajos, movimientos innecesarios de materia prima y producto en proceso, y un alto porcentaje de actividades manuales en las etapas finales — rociado y empacado. Se implementó una solución integral que combinó el uso anticipado de información de demanda para mejorar el planeamiento de producción, con la automatización de los procesos que operaban como cuellos de botella.",
  get resultados() { return [
    { periodo: "Productividad", label: `${this.aumentoProductividad} de incremento en productividad de horas-hombre en el proceso productivo` },
    { periodo: "Insumos", label: `${this.reduccionInsumos} en consumo de insumos críticos y costosos (preservantes, alcohol, entre otros)` },
    { periodo: "Estructura de costos", label: "Recuperación del margen bruto al capitalizar las economías de escala que el crecimiento de volumen no lograba generar por sí solo" },
  ]; },
  quote: quotes.cedro,
};

export const casosPesca = {
  sector: "Pesca",
  sectorLabel: "Pesca · Litoral peruano",
  client: "Pesquera de gran escala",
  location: "Litoral peruano",
  pctAccidentesFaena: "más del 90%",
  resultCard: "Eliminación de accidentes graves · protección de tripulantes · costos evitados de múltiples millones de dólares",
  description:
    "Tasa de accidentabilidad concentrada en la faena de pesca, con impacto en personas y paradas no planificadas por daños a activos. Se implementó un programa integral SMS en dos fases.",
  get situacion() { return `Una empresa pesquera industrial de gran escala operaba con una tasa de accidentabilidad concentrada en la faena de pesca, con ${this.pctAccidentesFaena} de los accidentes de los últimos 5 años ocurriendo en esa etapa. Los incidentes generaban un doble impacto: en las personas, con accidentes graves que comprometían la seguridad y salud de los tripulantes; y en la operación, con paradas no planificadas y daños a activos que inutilizaban embarcaciones en momentos críticos de campaña.`; },
  intervencion:
    "Se diseñó e implementó un programa integral basado en Safety Management System (SMS), estructurado en dos fases paralelas: diagnóstico con mapeo holístico de procesos e identificación y priorización de riesgos con sus causas raíz; seguido del diseño e implementación de acciones de mitigación en tres ejes — Procesos (SOPs, RAPIDs, KPIs), Personas (organización, incentivos, entrenamiento) y Tecnología (conectividad, visibilidad, mantenimiento de activos).",
  resultados: [
    { periodo: "Diagnóstico", label: "Mapeo holístico de macro-procesos y subprocesos de la operación, con matriz de riesgos priorizada por impacto y probabilidad" },
    { periodo: "Mitigación", label: "Definición e implementación de SOPs, RAPIDs y estructura de accountability para los procesos de mayor riesgo, con política de seguridad top-down desde la Alta Dirección" },
    { periodo: "Impacto", label: "Reducción total de accidentes graves y daños a activos en temporadas posteriores, evitando costos potenciales de múltiples millones de dólares y salvaguardando la seguridad de los tripulantes" },
  ],
};

export const casosAutomotriz = {
  sector: "Automotriz",
  sectorLabel: "Automotriz · Lima, Perú",
  client: "Concesionario de vehículos de alta gama",
  location: "Lima, Perú",
  superficieShowroom: "600 m²",
  superficieTaller: "400 m²",
  mecanicos: "25",
  get superficie() { return "1,000 m²"; },
  get resultCard() { return `${this.superficie} climatizados · instalación no invasiva · sin obras de infraestructura`; },
  get description() { return `Showroom de atención al público de ${this.superficieShowroom} y taller con ${this.mecanicos} mecánicos en ${this.superficieTaller}. El calor del verano generaba incomodidad en clientes y equipo técnico sin solución viable de A/C convencional.`; },
  get situacion() { return `Un concesionario de vehículos de alta gama en Lima operaba con un showroom de atención al público de ${this.superficieShowroom} y un taller con ${this.mecanicos} mecánicos en ${this.superficieTaller}. El calor excesivo durante el verano generaba incomodidad tanto en clientes como en el equipo técnico, sin una solución viable de aire acondicionado convencional a esa escala y costo.`; },
  intervencion:
    "Se instalaron enfriadores evaporativos Portacool en dos configuraciones distintas adaptadas a cada espacio: montaje elevado con soportes en el showroom para preservar la estética del espacio, e instalación a piso en el taller automotriz. El sistema se complementó con extractores estratégicos para garantizar renovación de aire continua en ambas zonas.",
  get resultados() { return [
    { periodo: "Confort", label: "Reducción significativa de temperatura en ambas zonas durante los meses de verano" },
    { periodo: "Instalación", label: "Sin obras de infraestructura ni modificaciones al espacio — solución no invasiva adaptada al diseño existente" },
    { periodo: "Cobertura", label: `${this.superficie} climatizados con una solución unificada para dos tipos de uso completamente distintos` },
  ]; },
};

export const casosTransporteIca = {
  sector: "Transporte",
  sectorLabel: "Transporte · Ica, Perú",
  client: "Flota de camiones de cosecha de uva",
  location: "Ica, Perú",
  reduccionDeshidratacion: ">40%",
  diasGuarda: "45",
  get resultCard() { return `T<25°C y HR>80% en tránsito · −${this.reduccionDeshidratacion} deshidratación · mejor condición tras ${this.diasGuarda} días de guarda`; },
  description:
    "Lotes de producción a más de dos horas del centro de empaque requerían solución de bajo costo para transportar fruta en condiciones que redujeran la deshidratación.",
  situacion:
    "Lotes de producción de uva ubicados a más de dos horas de distancia del centro de empaque requerían una solución de bajo costo para transportar la fruta en condiciones adecuadas y reducir la tasa de deshidratación durante el trayecto.",
  intervencion:
    "Se adaptaron unidades de enfriamiento evaporativo a la flota de camiones existente (sistema PreserveAir), a través de un modelo de servicio por renta de temporada que incluía la intervención de las unidades y su operación completa.",
  get resultados() { return [
    { periodo: "Condiciones", label: "T<25°C y HR>80% mantenidos durante el transporte" },
    { periodo: "Deshidratación", label: `Reducción promedio ${this.reduccionDeshidratacion} en tasa de deshidratación vs. camión tradicional` },
    { periodo: "Guarda", label: `Incremento notable en condición de fruta después de ${this.diasGuarda} días de período de guarda` },
  ]; },
};
