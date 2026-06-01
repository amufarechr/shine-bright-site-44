import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, ArrowRight, BarChart3, FileText, HelpCircle, Settings, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import controlImg from "@/assets/climatizacion/energia.jpeg";

const secciones = [
  {
    icon: BarChart3,
    titulo: "La diferencia entre ver el total y entender el consumo",
    contenido: [
      "Una planta industrial que consume 150,000 kWh al mes tiene una factura. Pero esa factura no dice qué equipos generaron ese consumo, cuándo lo hicieron ni si estaban operando de forma eficiente. Es como gestionar el presupuesto de una empresa sin un estado de resultados — solo con el saldo final de la cuenta bancaria.",
      "El monitoreo de consumo por carga resuelve exactamente eso: asigna el consumo a cada equipo o grupo de equipos principal — compresores, hornos, bombas, sistemas de climatización, líneas de producción, iluminación — y registra ese consumo en el tiempo. El resultado es un perfil detallado que muestra no solo cuánto consume cada carga, sino cuándo, con qué variabilidad y cómo se correlaciona con la producción.",
      "Con esa información, las decisiones que antes eran intuición se vuelven datos: qué equipo conviene reemplazar primero, en qué turno se generan los picos de demanda, si la eficiencia energética está degradando con el tiempo, y dónde está el mayor potencial de ahorro.",
    ],
  },
  {
    icon: Settings,
    titulo: "Cómo funciona un sistema de medición desagregada",
    contenido: [
      "Los sistemas de monitoreo por carga se instalan sin modificar los equipos existentes y sin parar la producción. Los elementos principales son medidores de energía instalados en los tableros o acometidas de cada carga principal — usando pinzas de corriente que no requieren corte del circuito — conectados a una pasarela de comunicaciones que transmite los datos a una plataforma de análisis.",
      "La granularidad de la medición se define según las necesidades de cada operación. En plantas con pocas cargas principales grandes (compresores, hornos industriales, equipos de proceso), un sistema de 10 a 20 puntos de medición puede cubrir el 80–90% del consumo total. En plantas con muchas cargas distribuidas, la estrategia puede ser medir por circuito de tablero secundario.",
      "Los datos se consolidan en un dashboard que permite ver el consumo en tiempo real y en histórico — por hora, turno, día, semana o mes — con alertas configurables para consumos fuera de rango y reportes automáticos para gestión. La instalación típica de un sistema base toma 1 a 3 días de trabajo en campo.",
    ],
  },
  {
    icon: AlertCircle,
    titulo: "Qué decisiones habilita el monitoreo",
    contenido: [
      "El valor del monitoreo no está en los datos — está en las decisiones que habilita. Las más frecuentes son: identificación de equipos con consumo anómalo que indica falla incipiente o degradación de eficiencia, detección de cargas que permanecen encendidas fuera del horario productivo, cuantificación del impacto energético de cambios operativos, y base de datos para justificar inversiones en eficiencia con retorno calculado.",
      "En operaciones con tarifas horarias diferenciadas, el monitoreo permite visualizar exactamente cuánto consumo está cayendo en cada franja horaria y cuánto costaría desplazarlo. En muchos casos, este análisis revela que mover operaciones de 2 a 3 horas — carga de baterías, procesos por lotes, bombeo a tanques elevados — puede representar ahorros de 8 a 15% en la factura mensual sin ninguna inversión adicional.",
      "El monitoreo también es el punto de partida correcto para dimensionar un sistema de energía solar: sin un perfil de consumo real y detallado, cualquier dimensionamiento de generación renovable es una estimación con margen de error alto.",
    ],
  },
];

const faqs = [
  {
    q: "¿Cuántos puntos de medición necesita una planta típica?",
    a: "Depende de la distribución del consumo. En una primera fase, el objetivo es cubrir el 70–80% del consumo total con la menor cantidad de puntos posible. En muchas plantas industriales medianas, 8 a 15 puntos estratégicamente ubicados logran esa cobertura. El análisis previo de la arquitectura eléctrica de la planta define los puntos óptimos.",
  },
  {
    q: "¿Los datos se pueden integrar con el sistema de producción o ERP?",
    a: "Sí. La mayoría de las plataformas de monitoreo energético tienen APIs o exportación de datos en formatos estándar que permiten integración con sistemas de producción, MES o ERP. Esto habilita análisis de eficiencia energética por unidad producida — el indicador más relevante para gestión operativa.",
  },
  {
    q: "¿Qué pasa si hay cortes de energía frecuentes — el sistema pierde datos?",
    a: "Los sistemas modernos tienen almacenamiento local en el gateway, con capacidad para retener datos durante horas o días de pérdida de conectividad. Al restablecer la conexión, los datos se sincronizan automáticamente. Para instalaciones con cortes frecuentes, se puede agregar respaldo de energía al gateway.",
  },
  {
    q: "¿El monitoreo en sí consume energía significativa?",
    a: "No. El consumo del sistema de monitoreo es marginal — los medidores y el gateway consumen típicamente entre 10 y 50 watts en total, una fracción imperceptible del consumo de la planta.",
  },
];

export default function ArticuloMonitoreoEnergetico() {
  const navigate = useNavigate();

  return (
    <>
      <SeoHead ogType="article"
        schema={{"@context": "https://schema.org", "@type": "Article", "headline": "Monitoreo de consumo energético por carga: qué es y por qué es el primer paso", "author": {"@type": "Organization", "name": "SW Ingeniería", "@id": "https://swingenieria.com/#organization"}, "publisher": {"@type": "Organization", "name": "SW Ingeniería", "url": "https://swingenieria.com"}, "url": "https://swingenieria.com/articulos/monitoreo-energetico-industrial", "about": {"@type": "Thing", "name": "Monitoreo Energético Industrial"}, "inLanguage": "es"}}
        title="Monitoreo de consumo energético por carga: qué es y por qué es el primer paso"
        description="Cómo funciona la medición desagregada de energía en plantas industriales, qué decisiones habilita y cómo se instala sin parar la producción. Guía técnica con casos de uso reales."
        keywords="monitoreo consumo energético industrial, medición energética por carga, submedición eléctrica, sistema gestión energética, dashboard consumo eléctrico planta, medidores energía industrial"
        path="/articulos/monitoreo-energetico-industrial"
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
              Monitoreo de consumo energético por carga:{" "}
              <span className="text-gradient">qué es, cómo funciona y por qué va primero</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Gestionar el gasto energético de una planta sin medición desagregada es gestionar a ciegas. Esta guía explica cómo funciona el monitoreo por carga, qué se puede ver con él y qué decisiones habilita que antes no eran posibles.
            </p>
          </motion.div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24"><div className="border-t border-border" /></div>

        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden">
            <img src={controlImg} alt="Sistema de monitoreo energético industrial" className="w-full object-cover max-h-72" />
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
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">¿Quieres saber exactamente dónde va la energía de tu planta?</span>
            <h3 className="font-heading text-2xl font-bold mt-3 mb-3">Instalamos el sistema de monitoreo y entregamos el análisis</h3>
            <p className="text-muted-foreground mb-6 max-w-xl">Sin parar la producción y en 1 a 3 días de trabajo en campo, tenemos los primeros datos del perfil de consumo de tu operación.</p>
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
