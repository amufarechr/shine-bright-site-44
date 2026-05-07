import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Cpu, Eye, FileText, HelpCircle, Sun, TrendingDown, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import energiaImg from "@/assets/articulos/transformer.jpg";

const metricas = [
  { valor: "<1.5 años", label: "Reducción típica solo con monitoreo y automatización", fuente: "Sin renovables" },
  { valor: "2do–3er", label: "Posición del gasto energético en estructura de costos industrial", fuente: "Promedio sectorial" },
  { valor: "<18 meses", label: "Payback típico del sistema de monitoreo base", fuente: "Proyectos implementados" },
];

const secciones = [
  {
    icon: Eye,
    titulo: "El primer problema: no saber dónde va la energía",
    contenido: [
      "En la mayoría de las plantas industriales, la factura eléctrica llega como un número total. Kilowatts-hora consumidos, cargo por demanda máxima, ajustes tarifarios. Pero ese número no dice nada sobre qué equipos generaron ese consumo, cuándo lo hicieron ni si estaban operando de forma eficiente.",
      "Sin esa visibilidad, es imposible tomar decisiones correctas. ¿Qué equipo conviene reemplazar primero? ¿En qué turno se generan los picos de demanda? ¿La línea 3 consume proporcionalmente más que la línea 1 para el mismo volumen de producción? Sin medición desagregada, estas preguntas no tienen respuesta.",
      "El primer paso para reducir el gasto energético no es instalar paneles solares ni cambiar equipos — es saber exactamente dónde va la energía. Todo lo demás viene después.",
    ],
  },
  {
    icon: TrendingDown,
    titulo: "Dónde se esconde el gasto evitable",
    contenido: [
      "La experiencia en operaciones industriales muestra que los focos de gasto evitable más frecuentes son predecibles: equipos que no se apagan fuera del horario productivo (iluminación, compresores en vacío, sistemas HVAC en fin de semana), arranques simultáneos de múltiples cargas que generan picos de demanda facturados a tarifa alta, y operación fuera de las ventanas tarifarias más económicas.",
      "El cargo por demanda máxima merece atención especial. En muchas estructuras tarifarias industriales, el pico de demanda del mes — aunque dure solo 15 minutos — determina un cargo fijo que se paga durante los 30 días siguientes. Reducir ese pico, aunque sea escalonando el arranque de equipos grandes, puede representar entre un 10% y un 20% de la factura mensual sin tocar el consumo total.",
      "Adicionalmente, las tarifas horarias diferenciales — donde la energía en horas punta cuesta el doble o el triple que en horas valle — ofrecen una oportunidad directa: desplazar cargas flexible (carga de baterías, procesos por lotes, bombeo a tanques) hacia las horas más económicas.",
    ],
  },
  {
    icon: Cpu,
    titulo: "Automatización: la lógica que reduce costo sin tocar producción",
    contenido: [
      "Una vez que existe visibilidad del consumo, el siguiente paso es implementar lógica de control que tome decisiones en función de esa información. Los controladores de gestión energética hacen exactamente eso: monitorean el estado de cada carga, la tarifa vigente en cada momento y la demanda actual, y actúan en consecuencia — apagando equipos en espera, escalonando arranques para evitar picos, y priorizando operación en ventanas tarifarias económicas.",
      "La clave es que esta automatización opera sobre cargas que no afectan el proceso productivo principal: sistemas auxiliares, equipos de soporte, iluminación de áreas no operativas, compresores en ciclo de espera. El ritmo de producción no cambia — cambia la inteligencia con la que se gestiona la energía que la soporta.",
      "Los resultados típicos de un sistema de automatización bien implementado se sitúan entre un 10% y un 20% de reducción en la factura eléctrica mensual, con un payback que generalmente no supera los 24 meses.",
    ],
  },
  {
    icon: Sun,
    titulo: "Energía solar: la tercera capa — y por qué va al final",
    contenido: [
      "La generación solar fotovoltaica es frecuentemente lo primero que se evalúa cuando una empresa quiere reducir su gasto energético. Es un error de secuencia. La razón es simple: el dimensionamiento correcto de un sistema solar depende de conocer el perfil de consumo real de la operación — cuándo se consume, en qué magnitud y con qué variabilidad. Sin esos datos, el sistema se dimensiona sobre estimaciones, y los estimados casi siempre son incorrectos.",
      "Con un perfil de consumo preciso — obtenido del sistema de monitoreo — el diseño solar se vuelve directo: se calcula la curva de generación esperada, se superpone con el perfil de consumo, y se dimensiona el sistema para maximizar el autoconsumo. El resultado es un sistema correctamente dimensionado, con el payback más corto posible.",
      "En operaciones industriales con consumo diurno significativo — que es la mayoría — un sistema solar bien dimensionado puede cubrir entre el 30% y el 60% del consumo eléctrico total, con paybacks típicos de 3 a 6 años según el costo energético local y el recurso solar disponible.",
    ],
  },
];

const faqs = [
  {
    q: "¿Por dónde se empieza si nunca se ha medido el consumo?",
    a: "Con un diagnóstico energético de línea base: instalación de medidores en los puntos principales, registro de consumo por turno y por carga durante 2–4 semanas, y análisis del perfil resultante. Ese análisis identifica los focos de mayor consumo, los picos de demanda y las oportunidades de desplazamiento tarifario. Es el mapa sin el cual cualquier intervención es un disparo al aire.",
  },
  {
    q: "¿El monitoreo requiere cambiar los equipos o parar la producción?",
    a: "No. Los sistemas de medición desagregada se instalan sin modificar los equipos existentes — los medidores se instalan en tableros o acometidas usando pinzas amperimétricas o medidores en paralelo. La instalación típicamente toma horas, no días, y no requiere parar la operación.",
  },
  {
    q: "¿Qué pasa si ya tenemos paneles solares instalados?",
    a: "El monitoreo sigue siendo útil — y en muchos casos revela que el sistema solar está subdimensionado o que hay oportunidades de desplazar cargas hacia las horas de mayor generación. Si el sistema ya existe, el diagnóstico energético evalúa su rendimiento real contra el proyectado y propone ajustes operativos para maximizar el autoconsumo.",
  },
  {
    q: "¿La automatización requiere SCADA o sistema de control centralizado previo?",
    a: "No necesariamente. Los controladores de gestión energética pueden instalarse como capa independiente, comunicándose con los equipos a través de protocolos estándar (Modbus, BACnet, señales digitales). En plantas con SCADA existente, la integración es más fluida pero no es un prerequisito.",
  },
];

export default function ArticuloFacturaElectrica() {
  const navigate = useNavigate();

  return (
    <>
      <SeoHead
        title="Cómo reducir la factura eléctrica de una planta industrial sin reducir producción"
        description="Guía técnica sobre reducción de gasto energético industrial: monitoreo por carga, automatización de arranques, aprovechamiento de tarifas horarias y energía solar. Con datos reales de proyectos implementados."
        keywords="reducir factura eléctrica industria, ahorro energético planta industrial, monitoreo consumo eléctrico, cargo por demanda máxima, tarifa horaria industrial, eficiencia energética"
        path="/articulos/reducir-factura-electrica-industrial"
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
              Cómo reducir la factura eléctrica de una planta industrial{" "}
              <span className="text-gradient">sin reducir producción</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              La energía es el segundo o tercer rubro de costo en la mayoría de las operaciones industriales — pero el menos instrumentado. Esta guía explica el orden correcto de intervención: primero visibilidad, luego control, luego generación propia.
            </p>
          </motion.div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24"><div className="border-t border-border" /></div>

        {/* Métricas */}
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

        {/* Foto */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden">
            <img src={energiaImg} alt="Tablero de control energético industrial" className="w-full object-cover max-h-72" />
          </motion.div>
        </section>

        {/* Cuerpo */}
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

        {/* FAQs */}
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

        {/* CTA */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">¿Tu factura eléctrica sube sin explicación clara?</span>
            <h3 className="font-heading text-2xl font-bold mt-3 mb-3">Hacemos el diagnóstico energético de tu planta</h3>
            <p className="text-muted-foreground mb-6 max-w-xl">Instalamos medición desagregada, analizamos el perfil de consumo real y te entregamos un mapa de oportunidades con el impacto económico proyectado de cada intervención.</p>
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
