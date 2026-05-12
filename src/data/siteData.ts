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
  direccion: "Oficina Central: Calle Alcanfores 1245 Miraflores, Lima, Perú",
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
  tempGarantizada: "<27°C",
  resultCard: "<27°C garantizados · 85% menos inversión · solo 20 kW",
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
