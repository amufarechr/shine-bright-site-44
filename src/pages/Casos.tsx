import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import casoChincha from "@/assets/evaporativo/caso-chincha.jpg";
import casoIca from "@/assets/evaporativo/caso-ica.jpg";
import casoCallao from "@/assets/evaporativo/caso-callao.jpg";
import casoTransporteIca from "@/assets/evaporativo/caso-transporte-ica.jpg";
import casoTransporteIcaChart from "@/assets/evaporativo/caso-transporte-ica-chart.jpg";
import casoViveroAte from "@/assets/evaporativo/caso-vivero-ate.jpg";
import casoChao from "@/assets/evaporativo/caso-chao.jpg";
import casoIquitos from "@/assets/evaporativo/caso-iquitos.jpg";
import casoLurin from "@/assets/evaporativo/caso-lurin.jpg";
import casoAutomotrizLima from "@/assets/evaporativo/caso-automotriz-lima.jpg";
import casoAutomotrizLima2 from "@/assets/evaporativo/caso-automotriz-lima-2.jpg";
import casoPesca from "@/assets/evaporativo/caso-pesca.jpg";

// ─── Tipos ───────────────────────────────────────────────────────────────────

interface Resultado {
  periodo: string;
  label: string;
}

interface Caso {
  id: string;
  sector: string;
  soluciones: string[];
  client: string;
  location: string;
  description: string;
  result: string;
  img: string | null;
  imgChart?: string | null;
  proximamente: boolean;
  situacion?: string;
  intervencion?: string;
  resultados?: Resultado[];
  quote?: { text: string; author: string; role: string };
}

// ─── Datos ────────────────────────────────────────────────────────────────────

const casos: Caso[] = [
  {
    id: "chincha",
    sector: "Avícola",
    soluciones: ["Enfriamiento Evaporativo"],
    client: "Planta de clasificación y empaque de huevos",
    location: "Chincha, Perú",
    description: "Alta temperatura por las tardes afectaba maquinaria de alta sensibilidad y generaba ausentismo en una planta de 3,000 m².",
    result: "Reducción de 9°C · −50% ausentismo · inversión 80% menor",
    img: casoChincha,
    proximamente: false,
    situacion: "Planta de 3,000 m² con alta temperatura por la tarde, que afectaba maquinaria de alta sensibilidad y generaba ausentismo.",
    intervencion: "Diseño de sistema evaporativo Big Ass Fans y extractores de aire, con distribución inteligente que logró reducir la temperatura por debajo de 25°C, sin obras civiles ni paradas de operación.",
    resultados: [
      { periodo: "Semana 1", label: "Reducción de 9°C en zona de trabajo principal" },
      { periodo: "Mes 1", label: "−50% en ausentismo por calor" },
      { periodo: "Menores costos", label: "Inversión 80% menor que alternativa de refrigeración industrial, con 90% menos de consumo eléctrico" },
    ],
    quote: {
      text: "Instalamos ventilación evaporativa en nuestra sala de selección automatizada. El resultado fue doble: mejor conservación del huevo en proceso y mayor vida útil de los brazos robóticos de empaque. Una solución de bajo costo con impacto directo en calidad y productividad.",
      author: "Jorge Luis Chapoñan",
      role: "Jefe de Mantenimiento",
    },
  },
  {
    id: "ica-uva",
    sector: "Agroindustria",
    soluciones: ["Enfriamiento Evaporativo"],
    client: "Packing de uva de exportación",
    location: "Ica, Perú",
    description: "Empaque de más de 5,000 m² con deshidratación de fruta por altas temperaturas en verano, afectando vida de anaquel.",
    result: "−35% deshidratación · HR >80% · +500 trabajadores en confort térmico",
    img: casoIca,
    proximamente: false,
    situacion: "Empaque de más de 5,000 m² con áreas de recepción, clasificación y empaque. Las altas temperaturas del verano generaban deshidratación de la fruta y reducción de vida de anaquel.",
    intervencion: "Implementación de flujo integral de aire combinando enfriadores Portacool con salidas superiores de aire caliente.",
    resultados: [
      { periodo: "Condiciones", label: "Humedad relativa >80% y temperatura de trabajo <25°C" },
      { periodo: "Producto", label: "−35% en tasa de deshidratación de fruta (<0.1%/hr)" },
      { periodo: "Personas", label: "Confort térmico para más de 500 trabajadores durante los meses de verano, con condiciones de trabajo sostenibles en jornadas de alta demanda" },
    ],
    quote: {
      text: "La implementación de enfriadores evaporativos en nuestras plantas tuvo dos impactos muy claros. En las personas: bajar la temperatura en packing durante los meses de cosecha marcó una diferencia real para más de 500 trabajadores. En la fruta: atacamos la deshidratación en las zonas más críticas (recepción y espera de materia prima) y en el proceso. El control de temperatura y humedad relativa ahí logra extender la vida de anaquel. Y todo esto con una inversión muy pequeña, sin necesidad de refrigeración convencional ni aislamiento térmico.",
      author: "Juan Pedro Illescas",
      role: "Gerente de Planta",
    },
  },
  {
    id: "callao",
    sector: "Logística",
    soluciones: ["Enfriamiento Evaporativo"],
    client: "Centro de distribución farmacéutico",
    location: "Callao, Perú",
    description: "6,000 m² de almacén farmacéutico que requería temperatura controlada para cumplimiento regulatorio, con presupuesto acotado.",
    result: "<27°C garantizados · 85% menos inversión · solo 20 kW",
    img: casoCallao,
    proximamente: false,
    situacion: "Centro de distribución de productos farmacéuticos en Callao requería implementación para cumplimiento regulatorio. La alternativa de refrigeración industrial excedía el presupuesto considerado.",
    intervencion: "Se identificó distribución óptima de flujo adaptada al diseño existente de pasillos, y se implementaron enfriadores evaporativos de alto caudal complementados por extractores eólicos de techo.",
    resultados: [
      { periodo: "Cumplimiento", label: "Temperatura garantizada por debajo de los 27°C requeridos" },
      { periodo: "Inversión", label: "Costo de instalación 85% menor a la alternativa originalmente evaluada" },
      { periodo: "Energía", label: "Solo 20 kW de potencia consumida vs. +180 kW de sistema de refrigeración convencional" },
    ],
  },
  {
    id: "chao",
    sector: "Agroindustria",
    soluciones: ["Enfriamiento Evaporativo"],
    client: "Acopios de campo para cosecha de arándanos y palta",
    location: "Chao, La Libertad, Perú",
    description: "Operación agrícola de gran escala requería reducir la deshidratación de fruta durante la cosecha, antes de llegar al centro de empaque. Más de 800 hectáreas a cubrir.",
    result: "+10 centros de acopio · T<25°C y HR>80% · 4 años de crecimiento acompañado",
    img: casoChao,
    proximamente: false,
    situacion: "Operación agrícola de gran escala en Chao, La Libertad, requería reducir la deshidratación de fruta durante el proceso de cosecha, antes de llegar al centro de empaque. Con más de 800 hectáreas a cubrir, la fruta cosechada acumulaba tiempo de espera en campo sin condiciones térmicas adecuadas.",
    intervencion: "Se implementaron centros de acopio con enfriamiento evaporativo estratégicamente distribuidos en campo, para consolidar la cosecha al tamaño de carga de transporte. Estructuras simples con cobertura de malla raschel, sin material aislante, con bajo costo de implementación y fácil reubicación.",
    resultados: [
      { periodo: "Escala", label: "+10 centros de acopio implementados, acompañando el crecimiento de campo a lo largo de 4 años" },
      { periodo: "Condiciones", label: "T<25°C y HR>80%, reduciendo drásticamente la tasa de deshidratación en campo" },
      { periodo: "Operación", label: "Reducción de tiempos de espera desde el punto de cosecha, con total adaptación al ritmo y requerimientos de la operación" },
    ],
  },
  {
    id: "vivero-ate",
    sector: "Agroindustria",
    soluciones: ["Enfriamiento Evaporativo", "Calefacción Radiante"],
    client: "Invernadero de semillas y plantines de hortalizas",
    location: "Ate, Lima, Perú",
    description: "Las condiciones ambientales variables de Lima dificultaban mantener T° y HR consistentes para germinación. Se requería una solución bidireccional — enfriar en verano y calentar en invierno.",
    result: "23°C–25°C y HR 60%–70% · control automático · menor mortandad de plantines",
    img: casoViveroAte,
    proximamente: false,
    situacion: "Las semillas y plantines de hortalizas requieren condiciones ambientales muy precisas para su correcta germinación y desarrollo. El cambiante clima de Lima — con veranos cálidos e inviernos fríos y húmedos — dificultaba mantener las condiciones adecuadas de forma consistente sin intervención manual constante.",
    intervencion: "Se diseñó un sistema de climatización bidireccional que combina enfriadores evaporativos de techo marca BioCool con calefactores radiantes, controlado por sensores y actuadores automáticos. En días de calor, los enfriadores reducen la temperatura; en invierno, los calefactores la elevan. El diseño de techo permite un flujo de aire indirecto que acondiciona el espacio sin impactar directamente las plantas en desarrollo.",
    resultados: [
      { periodo: "Condiciones", label: "Temperatura mantenida entre 23°C y 25°C, con HR entre 60% y 70%" },
      { periodo: "Automatización", label: "Sistema de control automático elimina ajustes manuales, adaptándose en tiempo real a las condiciones exteriores" },
      { periodo: "Productividad", label: "Reducción significativa en tasa de mortandad de plantines, con mayor consistencia en germinación y desarrollo" },
    ],
  },
  {
    id: "iquitos",
    sector: "Retail",
    soluciones: ["Ventiladores Industriales", "Enfriamiento Evaporativo"],
    client: "Food court de mall",
    location: "Iquitos, Perú",
    description: "Food court de 1,000 m² en clima tropical húmedo. El área abierta hacía inviable la refrigeración convencional. Se combinaron ventiladores HVLS con enfriadores evaporativos.",
    result: "1,000 m² climatizados · 6 equipos instalados · sin obras adicionales",
    img: casoIquitos,
    proximamente: false,
    situacion: "El food court de un mall en Iquitos — ciudad con clima tropical húmedo durante todo el año — operaba con altas temperaturas que afectaban la experiencia de los visitantes. Al tratarse de un área abierta de 1,000 m², la refrigeración convencional no era técnica ni económicamente viable.",
    intervencion: "Se instalaron 3 ventiladores industriales de techo de gran diámetro Big Ass Fans para eliminar bolsillos de calor y distribuir el aire uniformemente en el volumen del espacio, combinados con 3 enfriadores evaporativos CF-500 para reducir la temperatura del aire en las zonas de mayor afluencia. La combinación de ambos sistemas genera un efecto de confort térmico sostenido sin necesidad de cerramiento del espacio.",
    resultados: [
      { periodo: "Confort", label: "Reducción efectiva de temperatura percibida en el food court durante todo el año" },
      { periodo: "Viabilidad", label: "Única solución técnicamente viable para un espacio abierto de 1,000 m² en clima tropical" },
      { periodo: "Escala", label: "6 equipos instalados cubriendo la totalidad del área sin obras de infraestructura adicionales" },
    ],
  },
  {
    id: "lurin",
    sector: "Industrial",
    soluciones: ["Consultoría de Eficiencia Operativa"],
    client: "Panificadora industrial",
    location: "Lurín, Lima, Perú",
    description: "A pesar del crecimiento sostenido de producción y ventas, el margen bruto se deterioraba. El incremento de volumen no generaba economías de escala — los costos directos crecían proporcionalmente.",
    result: "+30% productividad horas-hombre · −21% consumo de insumos críticos · recuperación de margen bruto",
    img: casoLurin,
    proximamente: false,
    situacion: "Una empresa de panificación industrial de gran escala en Lurín enfrentaba un problema paradójico: a pesar del crecimiento sostenido de producción y ventas, el margen bruto se deterioraba. El incremento de volumen no se traducía en economías de escala — los costos directos de mano de obra, insumos y energía crecían proporcionalmente, sin señales de control.",
    intervencion: "Se realizó un análisis detallado de las actividades productivas principales, identificando re-trabajos, movimientos innecesarios de materia prima y producto en proceso, y un alto porcentaje de actividades manuales en las etapas finales — rociado y empacado. Se implementó una solución integral que combinó el uso anticipado de información de demanda para mejorar el planeamiento de producción, con la automatización de los procesos que operaban como cuellos de botella.",
    resultados: [
      { periodo: "Productividad", label: "+30% de incremento en productividad de horas-hombre en el proceso productivo" },
      { periodo: "Insumos", label: "−21% en consumo de insumos críticos y costosos (preservantes, alcohol, entre otros)" },
      { periodo: "Estructura de costos", label: "Recuperación del margen bruto al capitalizar las economías de escala que el crecimiento de volumen no lograba generar por sí solo" },
    ],
    quote: {
      text: "SW Ingeniería llegó a entender nuestra planta. Rediseñaron una parte del proceso productivo, eliminaron tiempos muertos que habíamos normalizado e implementaron soluciones a medida, de bajo costo. El resultado fue una transformación operativa real, considerando los retos de la industria alimentaria donde mantener los estándares sanitarios es crucial.",
      author: "Aránzazu Vega",
      role: "Gerente General",
    },
  },
  {
    id: "pesca",
    sector: "Pesca",
    soluciones: ["Consultoría de Eficiencia Operativa"],
    client: "Pesquera de gran escala",
    location: "Litoral peruano",
    description: "Tasa de accidentabilidad concentrada en la faena de pesca, con impacto en personas y paradas no planificadas por daños a activos. Se implementó un programa integral SMS en dos fases.",
    result: "Eliminación de accidentes graves · protección de tripulantes · costos evitados de múltiples millones de dólares",
    img: casoPesca,
    proximamente: false,
    situacion: "Una empresa pesquera industrial de gran escala operaba con una tasa de accidentabilidad concentrada en la faena de pesca, con más del 90% de los accidentes de los últimos 5 años ocurriendo en esa etapa. Los incidentes generaban un doble impacto: en las personas, con accidentes graves que comprometían la seguridad y salud de los tripulantes; y en la operación, con paradas no planificadas y daños a activos que inutilizaban embarcaciones en momentos críticos de campaña.",
    intervencion: "Se diseñó e implementó un programa integral basado en Safety Management System (SMS), estructurado en dos fases paralelas: diagnóstico con mapeo holístico de procesos e identificación y priorización de riesgos con sus causas raíz; seguido del diseño e implementación de acciones de mitigación en tres ejes — Procesos (SOPs, RAPIDs, KPIs), Personas (organización, incentivos, entrenamiento) y Tecnología (conectividad, visibilidad, mantenimiento de activos).",
    resultados: [
      { periodo: "Diagnóstico", label: "Mapeo holístico de macro-procesos y subprocesos de la operación, con matriz de riesgos priorizada por impacto y probabilidad" },
      { periodo: "Mitigación", label: "Definición e implementación de SOPs, RAPIDs y estructura de accountability para los procesos de mayor riesgo, con política de seguridad top-down desde la Alta Dirección" },
      { periodo: "Impacto", label: "Reducción total de accidentes graves y daños a activos en temporadas posteriores, evitando costos potenciales de múltiples millones de dólares y salvaguardando la seguridad de los tripulantes" },
    ],
  },
  {
    id: "automotriz",
    sector: "Automotriz",
    soluciones: ["Enfriamiento Evaporativo"],
    client: "Concesionario de vehículos de alta gama",
    location: "Lima, Perú",
    description: "Showroom de atención al público de 600 m² y taller con 25 mecánicos en 400 m². El calor del verano generaba incomodidad en clientes y equipo técnico sin solución viable de A/C convencional.",
    result: "1,000 m² climatizados · instalación no invasiva · sin obras de infraestructura",
    img: casoAutomotrizLima,
    imgChart: casoAutomotrizLima2,
    proximamente: false,
    situacion: "Un concesionario de vehículos de alta gama en Lima operaba con un showroom de atención al público de 600 m² y un taller con 25 mecánicos en 400 m². El calor excesivo durante el verano generaba incomodidad tanto en clientes como en el equipo técnico, sin una solución viable de aire acondicionado convencional a esa escala y costo.",
    intervencion: "Se instalaron enfriadores evaporativos Portacool en dos configuraciones distintas adaptadas a cada espacio: montaje elevado con soportes en el showroom para preservar la estética del espacio, e instalación a piso en el taller automotriz. El sistema se complementó con extractores estratégicos para garantizar renovación de aire continua en ambas zonas.",
    resultados: [
      { periodo: "Confort", label: "Reducción significativa de temperatura en ambas zonas durante los meses de verano" },
      { periodo: "Instalación", label: "Sin obras de infraestructura ni modificaciones al espacio — solución no invasiva adaptada al diseño existente" },
      { periodo: "Cobertura", label: "1,000 m² climatizados con una solución unificada para dos tipos de uso completamente distintos" },
    ],
  },
  {
    id: "transporte-ica",
    sector: "Transporte",
    soluciones: ["Enfriamiento Evaporativo"],
    client: "Flota de camiones de cosecha de uva",
    location: "Ica, Perú",
    description: "Lotes de producción a más de dos horas del centro de empaque requerían solución de bajo costo para transportar fruta en condiciones que redujeran la deshidratación.",
    result: "T<25°C y HR>80% en tránsito · −40% deshidratación · mejor condición tras 45 días de guarda",
    img: casoTransporteIca,
    imgChart: casoTransporteIcaChart,
    proximamente: false,
    situacion: "Lotes de producción de uva ubicados a más de dos horas de distancia del centro de empaque requerían una solución de bajo costo para transportar la fruta en condiciones adecuadas y reducir la tasa de deshidratación durante el trayecto.",
    intervencion: "Se adaptaron unidades de enfriamiento evaporativo a la flota de camiones existente (sistema PreserveAir), a través de un modelo de servicio por renta de temporada que incluía la intervención de las unidades y su operación completa.",
    resultados: [
      { periodo: "Condiciones", label: "T<25°C y HR>80% mantenidos durante el transporte" },
      { periodo: "Deshidratación", label: "Reducción promedio >40% en tasa de deshidratación vs. camión tradicional" },
      { periodo: "Guarda", label: "Incremento notable en condición de fruta después de 45 días de período de guarda" },
    ],
  },

];

const sectores = ["Todos", ...Array.from(new Set(casos.map((c) => c.sector)))];
const soluciones = ["Todas", ...Array.from(new Set(casos.flatMap((c) => c.soluciones)))];

// ─── Modal ────────────────────────────────────────────────────────────────────

function Modal({ caso, onClose }: { caso: Caso; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.25 }}
          className="bg-background rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Photos */}
          {caso.img ? (
            <div className="aspect-[16/7] overflow-hidden">
              <img src={caso.img} alt={caso.client} className="w-full h-full object-cover object-center" />
            </div>
          ) : caso.situacion ? (
            <div className="aspect-[16/7] bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-xs tracking-widest uppercase">Foto próximamente</span>
            </div>
          ) : null}

          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                    {caso.sector} · {caso.location}
                  </span>
                </div>
                <h2 className="font-heading text-xl md:text-2xl font-bold">{caso.client}</h2>
                <p className="text-primary text-sm font-semibold mt-1">{caso.soluciones.join(" + ")}</p>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors ml-4 shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Situación + Intervención */}
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm font-semibold mb-1">Situación inicial</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{caso.situacion}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Intervención</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{caso.intervencion}</p>
              </div>
            </div>

            {/* Resultados */}
            {caso.resultados && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x divide-border bg-card rounded-xl p-6">
                {caso.resultados.map((r) => (
                  <div key={r.periodo} className="sm:flex-1 sm:px-5 first:sm:pl-0 last:sm:pr-0">
                    <p className="text-xs font-semibold text-primary mb-1">{r.periodo}</p>
                    <p className="text-sm text-foreground">{r.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Quote */}
            {caso.quote && (
              <div className="mt-6 border-l-2 border-primary/40 pl-5 py-1">
                <p className="text-foreground text-sm leading-relaxed italic mb-3">"{caso.quote.text}"</p>
                <p className="text-sm font-semibold">{caso.quote.author}</p>
                <p className="text-muted-foreground text-xs">{caso.quote.role}</p>
              </div>
            )}

            {/* Chart */}
            {caso.imgChart && (
              <div className="mt-6">
                <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-3">Datos de campo</p>
                <div className="rounded-xl overflow-hidden bg-white p-3">
                  <img
                    src={caso.imgChart}
                    alt="Gráfico de resultados"
                    className="w-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Página ───────────────────────────────────────────────────────────────────

export default function CasosPage() {
  const [filtroSector, setFiltroSector] = useState("Todos");
  const [filtroSolucion, setFiltroSolucion] = useState("Todas");
  const [casoActivo, setCasoActivo] = useState<Caso | null>(null);

  const casosFiltrados = casos.filter((c) => {
    const porSector = filtroSector === "Todos" || c.sector === filtroSector;
    const porSolucion = filtroSolucion === "Todas" || c.soluciones.includes(filtroSolucion);
    return porSector && porSolucion;
  });

  return (
    <>
      <SeoHead
        title="Casos de Éxito — Resultados Reales en Agroindustria e Industria"
        description="Más de 80 implementaciones en plantas agroindustriales, almacenes, centros de distribución y retail en Perú. Datos reales: reducción de temperatura, ahorro energético y mejora de productividad."
        path="/casos"
      />
      <Navbar darkHero={false} />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Casos de éxito</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-4">
            Operaciones reales.{" "}
            <span className="text-gradient">Resultados medibles.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Cada caso representa un problema operativo real resuelto — con datos concretos, sin estimaciones.
          </p>
        </section>

        {/* Filtros */}
        <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-8">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative">
              <select
                value={filtroSector}
                onChange={(e) => setFiltroSector(e.target.value)}
                className="appearance-none bg-card border border-border text-sm font-medium text-foreground rounded-lg px-4 py-2 pr-9 cursor-pointer hover:border-primary/40 focus:outline-none focus:border-primary transition-colors"
              >
                {sectores.map((s) => (
                  <option key={s} value={s}>{s === "Todos" ? "Sector: Todos" : s}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
            </div>
            <div className="relative">
              <select
                value={filtroSolucion}
                onChange={(e) => setFiltroSolucion(e.target.value)}
                className="appearance-none bg-card border border-border text-sm font-medium text-foreground rounded-lg px-4 py-2 pr-9 cursor-pointer hover:border-primary/40 focus:outline-none focus:border-primary transition-colors"
              >
                {soluciones.map((s) => (
                  <option key={s} value={s}>{s === "Todas" ? "Solución: Todas" : s}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
            </div>
            {(filtroSector !== "Todos" || filtroSolucion !== "Todas") && (
              <button
                onClick={() => { setFiltroSector("Todos"); setFiltroSolucion("Todas"); }}
                className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </section>

        {/* Grid de casos */}
        <section className="section-padding pt-0 pb-10 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {casosFiltrados.map((caso, i) => (
                <motion.div
                  key={caso.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`bg-card border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
                    caso.proximamente
                      ? "opacity-60"
                      : "hover:border-primary/40 hover:glow-box cursor-pointer"
                  }`}
                  onClick={() => !caso.proximamente && setCasoActivo(caso)}
                >
                  {/* Foto o placeholder */}
                  <div className="aspect-video overflow-hidden bg-muted">
                    {caso.img ? (
                      <img src={caso.img} alt={caso.client} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">Próximamente</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                        {caso.sector}
                      </span>
                      <span className="text-xs text-muted-foreground">{caso.soluciones.join(" + ")}</span>
                    </div>
                    <h3 className="font-heading font-semibold mb-1">{caso.client}</h3>
                    <p className="text-muted-foreground text-xs mb-3">{caso.location}</p>

                    {!caso.proximamente && (
                      <>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                          {caso.description}
                        </p>
                        <div className="border-t border-border pt-4 mt-auto">
                          <p className="text-primary font-semibold text-sm mb-3">{caso.result}</p>
                          <span className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                            Ver caso completo
                            <ArrowRight size={16} />
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />

      {/* Modal */}
      {casoActivo && <Modal caso={casoActivo} onClose={() => setCasoActivo(null)} />}
    </>
  );
}
