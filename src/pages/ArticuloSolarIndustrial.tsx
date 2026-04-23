import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calculator, FileText, HelpCircle, Sun, TrendingUp, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import energiaImg from "@/assets/climatizacion/energia.jpeg";

const metricas = [
  { valor: "30–60%", label: "Fracción del consumo cubierta con solar bien dimensionado", fuente: "Operaciones con carga diurna" },
  { valor: "3–6 años", label: "Payback típico en industria con tarifas medias-altas", fuente: "Con perfil de consumo real" },
  { valor: "25 años", label: "Vida útil garantizada de los paneles fotovoltaicos", fuente: "Fabricantes tier-1" },
];

const secciones = [
  {
    icon: Calculator,
    titulo: "El error más común: dimensionar sin datos de consumo real",
    contenido: [
      "La mayoría de los proyectos solares industriales se dimensionan sobre la base de la factura eléctrica mensual total. El problema es que esa cifra no dice cuándo se consume la energía — y el solar solo genera durante las horas de sol. Si una planta consume el 70% de su energía en turno nocturno y el sistema solar se dimensiona sobre el consumo total, el resultado es un sistema que genera energía que no se puede autoconsumir, con un payback que puede ser el doble de lo proyectado.",
      "El dimensionamiento correcto parte del perfil de consumo horario: cuánta energía se consume en cada hora del día, cómo varía entre días laborables y fines de semana, cuál es la carga base constante y cuáles son las cargas variables. Con ese perfil se superpone la curva de generación solar esperada para la ubicación y orientación del techo disponible, y se dimensiona el sistema para maximizar el autoconsumo.",
      "La diferencia entre un sistema bien dimensionado y uno mal dimensionado puede ser de 1 a 2 años adicionales de payback — una diferencia material en la decisión de inversión.",
    ],
  },
  {
    icon: Sun,
    titulo: "Qué variables determinan el dimensionamiento correcto",
    contenido: [
      "Las variables clave son: el perfil de consumo horario (obtenido del sistema de monitoreo), el recurso solar disponible en la ubicación (irradiación horizontal global, con datos de al menos 10 años de registros meteorológicos), el área y orientación del techo o terreno disponible para los paneles, y la estructura tarifaria — que determina el valor de cada kWh de autoconsumo y la viabilidad de inyección a red.",
      "En Perú y México, la irradiación solar es excepcionalmente favorable: Lima tiene más de 5 kWh/m²/día de irradiación media anual a pesar de la neblina invernal, y zonas como Arequipa, Ica o el norte de México están entre los mejores recursos solares del mundo. Esto se traduce en sistemas con factores de capacidad altos y costos de generación bajos.",
      "El tipo de tarifa también importa significativamente. En estructuras con cargo por demanda máxima, el sistema solar puede dimensionarse para reducir el pico de demanda en las horas de mayor radiación — logrando un ahorro doble: energía generada y demanda máxima reducida.",
    ],
  },
  {
    icon: TrendingUp,
    titulo: "Cómo evaluar el retorno correctamente",
    contenido: [
      "El análisis financiero de un sistema solar industrial debe considerar tres flujos de valor: la energía autogenerada que sustituye compra a red (valorizada a tarifa de energía), la reducción del cargo por demanda máxima si el perfil solar coincide con los picos de consumo, y el valor residual del sistema al final del período de evaluación.",
      "El payback simple — tiempo en que el ahorro acumulado iguala la inversión — es el indicador más usado, pero la TIR (tasa interna de retorno) es más relevante para comparar con otras inversiones de capital. Un sistema solar bien dimensionado en una operación industrial con tarifa media-alta en Perú o México típicamente entrega TIRs de 15–25% en pesos o soles, con paybacks de 3 a 6 años.",
      "Es importante incluir en el análisis el costo de financiamiento si el proyecto se financia con deuda, y el efecto del escalamiento tarifario — que históricamente ha favorecido la inversión en generación propia al encarecer la energía comprada a red.",
    ],
  },
  {
    icon: Calculator,
    titulo: "Integración con la red y con sistemas de respaldo",
    contenido: [
      "Los sistemas solares industriales pueden operar en tres modalidades: autoconsumo sin inyección (todo lo generado se consume internamente, sin medidor bidireccional), autoconsumo con inyección a red (el excedente se inyecta y se acredita contra el consumo nocturno, según la regulación vigente), y con almacenamiento en baterías (captura el excedente diurno para uso nocturno o como respaldo ante cortes).",
      "En México, el esquema de medición neta permite acreditar la energía inyectada a tarifa de generación, lo que mejora la viabilidad de sistemas con generación variable. En Perú, el marco regulatorio para medición neta ha avanzado en los últimos años, aunque con condiciones que varían según el distribuidor y la modalidad de conexión.",
      "La incorporación de baterías mejora la autosuficiencia pero aumenta la inversión y el payback. En la mayoría de los proyectos industriales con consumo diurno significativo, el sistema sin baterías tiene mejor retorno financiero. Las baterías tienen sentido principalmente cuando hay cortes frecuentes de suministro que afectan la producción.",
    ],
  },
];

const faqs = [
  {
    q: "¿Cuánto techo se necesita para cubrir el 30% del consumo de una planta mediana?",
    a: "Un panel solar moderno de 550W ocupa aproximadamente 2.5 m². Para una planta que consume 100,000 kWh/mes, cubrir el 30% (30,000 kWh) requeriría un sistema de aproximadamente 350–400 kWp, que ocupa alrededor de 1,600–1,800 m² de techo útil. El área real depende de la irradiación local, la orientación y las sombras.",
  },
  {
    q: "¿Los paneles requieren mantenimiento frecuente?",
    a: "El mantenimiento es mínimo: limpieza semestral o anual de los paneles (más frecuente en zonas con mucho polvo), revisión anual de los inversores y conexiones, y monitoreo del rendimiento a través del sistema de telemetría. Los paneles de calidad tier-1 tienen garantía de producto de 12 años y garantía de potencia de 25 años.",
  },
  {
    q: "¿Qué pasa con la generación en días nublados o en invierno?",
    a: "Los paneles fotovoltaicos generan también en días nublados — con menor eficiencia, pero no cero. En Lima, incluso durante los meses de mayor nubosidad (junio–agosto), un sistema bien orientado sigue generando entre el 40 y el 60% de su capacidad nominal. El dimensionamiento correcto toma en cuenta la variabilidad estacional usando datos históricos de irradiación.",
  },
  {
    q: "¿Conviene más hacer leasing o compra directa?",
    a: "Depende de la estructura fiscal y la disponibilidad de capital. La compra directa maximiza el retorno financiero y permite aprovechar la depreciación acelerada. El leasing o PPA (Power Purchase Agreement) elimina la inversión inicial y convierte el gasto en opex, lo que puede ser ventajoso según la estructura de balance de la empresa. En ambos casos, el ahorro en factura comienza desde el primer mes de operación.",
  },
];

export default function ArticuloSolarIndustrial() {
  const navigate = useNavigate();

  return (
    <>
      <SeoHead
        title="Energía solar para industria: cómo dimensionar bien un sistema fotovoltaico"
        description="Guía técnica sobre energía solar fotovoltaica para plantas industriales: dimensionamiento correcto, variables clave, análisis de retorno y comparativa de modalidades de conexión."
        keywords="energía solar industrial, paneles solares planta industrial, autoconsumo fotovoltaico, dimensionar sistema solar industrial, solar fotovoltaico México, solar fotovoltaico Perú, TIR energía solar"
        path="/articulos/energia-solar-industrial"
      />
      <Navbar activePage="soluciones" darkHero={false} />
      <main className="min-h-screen">
        <section className="pt-44 pb-12 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <div className="flex items-center gap-3 mb-8">
              <Link to="/articulos/energia" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border rounded-full px-3 py-1.5 hover:border-primary/40 transition-all">
                <ArrowLeft size={13} />
                <FileText size={13} />
                Artículos de Energía
              </Link>
              <Link to="/soluciones/energia" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border rounded-full px-3 py-1.5 hover:border-primary/40 transition-all">
                <ArrowLeft size={13} />
                <Zap size={13} />
                Gestión Energética
              </Link>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Artículo técnico · Energía</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">SW Ingeniería</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Energía solar para industria:{" "}
              <span className="text-gradient">cómo dimensionar bien un sistema fotovoltaico</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              La energía solar es la tercera capa de la gestión energética — y la más costosa de hacer mal. Esta guía explica el proceso correcto de dimensionamiento, las variables que determinan el retorno, y por qué empezar sin datos de consumo real es el error más frecuente.
            </p>
          </motion.div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24"><div className="border-t border-border" /></div>

        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto py-10">
          <div className="grid grid-cols-3 gap-4">
            {metricas.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-5 text-center">
                <p className="font-heading text-2xl font-bold text-primary mb-1">{m.valor}</p>
                <p className="text-foreground text-xs font-medium mb-1">{m.label}</p>
                <p className="text-muted-foreground text-xs">{m.fuente}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden">
            <img src={energiaImg} alt="Sistema energético industrial" className="w-full object-cover max-h-72" />
          </motion.div>
        </section>

        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <div className="space-y-14">
            {secciones.map((sec, i) => {
              const Icon = sec.icon;
              return (
                <motion.div key={sec.titulo} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-primary/10 rounded-lg p-2.5 shrink-0"><Icon size={20} className="text-primary" /></div>
                    <h2 className="font-heading text-xl md:text-2xl font-bold">{sec.titulo}</h2>
                  </div>
                  <div className="space-y-4 md:pl-12">
                    {sec.contenido.map((p, j) => <p key={j} className="text-muted-foreground leading-relaxed">{p}</p>)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-lg p-2.5 shrink-0"><HelpCircle size={20} className="text-primary" /></div>
              <h2 className="font-heading text-xl md:text-2xl font-bold">Preguntas frecuentes</h2>
            </div>
            <div className="space-y-6 md:pl-12">
              {faqs.map((item) => (
                <div key={item.q} className="border-l-2 border-primary/30 pl-5">
                  <p className="font-semibold text-sm mb-2">{item.q}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">¿Estás evaluando instalar paneles solares?</span>
            <h3 className="font-heading text-2xl font-bold mt-3 mb-3">Hacemos el análisis con tu perfil de consumo real</h3>
            <p className="text-muted-foreground mb-6 max-w-xl">Con los datos de tu operación, dimensionamos el sistema solar correcto y calculamos el retorno esperado con base en tu tarifa y recurso solar local.</p>
            <button onClick={() => navigate("/soluciones/energia")} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Ver solución completa <ArrowRight size={16} />
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
