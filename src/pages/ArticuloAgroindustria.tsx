import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Droplets, TrendingDown, Thermometer, Package, Truck, HelpCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import chartImg from "@/assets/evaporativo/caso-transporte-ica-chart.jpg";
import casoTransporteIca from "@/assets/evaporativo/caso-transporte-ica.jpg";
import casoIca from "@/assets/evaporativo/caso-ica.jpg";

const metricas = [
  { valor: "−35%", label: "Tasa de deshidratación en packing de uva", fuente: "Caso Ica" },
  { valor: ">80%", label: "Humedad relativa mantenida en zonas de proceso", fuente: "Casos Ica y Chao" },
  { valor: "+20%", label: "Incremento en utilidad neta por operación post-cosecha", fuente: "Caso Ica" },
];

const secciones = [
  {
    icon: Droplets,
    titulo: "El problema: la deshidratación empieza antes de que la fruta llegue al packing",
    contenido: [
      "En operaciones agroindustriales de exportación, la calidad del producto no se define solo en el empaque — se define en cada punto de la cadena desde la cosecha hasta el despacho. Y en esa cadena, la temperatura y la humedad relativa son las variables más críticas.",
      "Cuando la fruta recién cosechada queda expuesta a ambientes calurosos y secos — ya sea en campo, durante el transporte, o en las áreas de recepción y clasificación del packing — comienza a perder agua. Esa pérdida de peso, aunque sea de décimas de punto porcentual por hora, se acumula a lo largo de la jornada y se traduce en deshidratación visible, reducción de vida de anaquel y pérdida de valor comercial.",
      "Para variedades de exportación como uva de mesa, arándanos o palta, donde los compradores internacionales inspeccionan condición, turgencia y apariencia al momento de recepción, incluso una deshidratación leve puede significar rechazo de lote o descuento de precio.",
    ],
  },
  {
    icon: Thermometer,
    titulo: "Por qué el enfriamiento evaporativo es la solución técnicamente correcta",
    contenido: [
      "A diferencia de la refrigeración convencional, que enfría reduciendo la humedad del aire, el enfriamiento evaporativo enfría añadiendo humedad. Este es un atributo especialmente valioso en contextos agroindustriales previos a los túneles de enfriamiento rápido: el aire resultante de los enfriadores evaporativos, con mayor humedad relativa, genera un microambiente que reduce el gradiente de presión de vapor entre la fruta y el entorno — frenando directamente el mecanismo físico de la deshidratación. Es por eso que estos se usan muchísimo en las zonas de recepción, clasificación y empaque, previos a los túneles y cámaras frías",
      "Además, el sistema introduce aire fresco exterior de forma continua, lo que ayuda a evacuar el calor generado por las maquinarias, y mantiene condiciones estables a lo largo de toda la jornada — no solo en las horas más frescas de la mañana.",
      "El costo de implementación es entre 5 y 10 veces menor que el de un sistema de refrigeración convencional para el mismo espacio, y el consumo eléctrico puede ser hasta 90% menor. En operaciones donde los márgenes por kilo exportado son estrechos, esta diferencia de costo es determinante.",
    ],
  },
  {
    icon: Package,
    titulo: "Resultados medidos en campo: packing de uva en Ica",
    contenido: [
      "En un packing de más de 5,000 m² en Ica — con áreas de recepción, clasificación y empaque — se implementó un sistema evaporativo con enfriadores Portacool y salidas superiores de extracción. El sistema mantuvo temperaturas por debajo de 25°C y humedad relativa superior al 80% durante las horas de mayor carga operativa.",
      "La tasa de deshidratación de la fruta se redujo en un 35% respecto a la temporada anterior bajo las mismas condiciones climáticas. La utilidad neta de la operación post-cosecha mejoró en un 20%, capturando valor que antes se perdía en merma de peso, kilos de descarte y rechazo por condición.",
    ],
  },
];

export default function ArticuloAgroindustria() {
  const navigate = useNavigate();

  return (
    <>
      <SeoHead
        title="Control de temperatura en packing y cosecha: cómo reducir la deshidratación de fruta fresca"
        description="Cómo el enfriamiento evaporativo reduce la deshidratación de uva, arándano y palta en packing, transporte y acopio de campo. Resultados medidos: −35% deshidratación, +20% utilidad neta."
        keywords="deshidratación fruta fresca, enfriamiento packing uva, temperatura packing agroindustria, enfriador evaporativo agroindustria, hidroventilador packing, control temperatura cosecha, calor en packing exportación"
        path="/articulos/enfriamiento-evaporativo-agroindustria"
      />
      <Navbar activePage="soluciones" darkHero={false} />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-44 pb-12 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/soluciones/climatizacion/evaporativo" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={16} />
              Volver a Enfriadores Evaporativos
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Artículo técnico · Agroindustria</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">SW Ingeniería</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Control de temperatura en packing y cosecha:{" "}
              <span className="text-gradient">cómo reducir la deshidratación de fruta fresca</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              En operaciones con cultivos frescos y susceptibles a la deshidratación (como la uva, el arándano, el espárrago, la palta), la temperatura y la humedad relativa al inicio de la postcosecha, son las variables que más impactan la vida de anaquel y el valor comercial del producto. Esta guía explica cómo el enfriamiento evaporativo resuelve ese problema de forma económica y escalable.
            </p>
          </motion.div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="border-t border-border" />
        </div>

        {/* Métricas */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto py-10">
          <div className="grid grid-cols-3 gap-4">
            {metricas.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 text-center"
              >
                <p className="font-heading text-3xl font-bold text-primary mb-1">{m.valor}</p>
                <p className="text-foreground text-xs font-medium mb-1">{m.label}</p>
                <p className="text-muted-foreground text-xs">{m.fuente}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cuerpo */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <div className="space-y-14">
            {secciones.map((sec, i) => {
              const Icon = sec.icon;
              return (
                <motion.div
                  key={sec.titulo}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-primary/10 rounded-lg p-2.5 shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-xl md:text-2xl font-bold">{sec.titulo}</h2>
                  </div>
                  <div className="space-y-4 md:pl-12">
                    {sec.contenido.map((p, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">{p}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Foto packing Ica */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="rounded-xl overflow-hidden">
              <img src={casoIca} alt="Packing de uva de exportación en Ica con enfriamiento evaporativo" className="w-full object-cover" />
            </div>
            <p className="text-muted-foreground text-xs mt-3 text-center">Packing de uva de exportación, Ica — más de 5,000 m² climatizados</p>
          </motion.div>
        </section>

        {/* Sección transporte con gráfico */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-primary/10 rounded-lg p-2.5 shrink-0">
                <Truck size={20} className="text-primary" />
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-bold">
                El problema no termina en el packing: el transporte también deshidrata
              </h2>
            </div>
            <div className="space-y-4 md:pl-12">
              <p className="text-muted-foreground leading-relaxed">
                En operaciones con lotes de producción alejados del packing, la fruta cosechada acumula tiempo de espera en campo o en tránsito sin condiciones térmicas adecuadas. En uva de mesa, ese tiempo puede representar horas de exposición a temperaturas superiores a 30°C y humedad relativa inferior al 40% — condiciones que aceleran la deshidratación antes de que la fruta entre a la cadena de frío.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En un proyecto en Ica, se adaptaron unidades de enfriamiento evaporativo a la flota de camiones de cosecha (sistema PreserveAir), manteniendo temperatura por debajo de 25°C y humedad relativa superior al 80% durante el trayecto. La reducción en tasa de deshidratación fue superior al 40% versus transporte convencional — con impacto medido en la condición de la fruta después de 45 días de guarda.
              </p>
            </div>
          </motion.div>

          {/* Gráfico de datos reales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid md:grid-cols-2 gap-6 items-start"
          >
            <div>
              <img src={casoTransporteIca} alt="Flota de camiones con sistema PreserveAir, Ica" className="rounded-xl object-cover w-full" />
              <p className="text-muted-foreground text-xs mt-2 text-center">Flota de cosecha con sistema evaporativo adaptado, Ica</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-3">Datos de campo — deshidratación en tránsito</p>
              <div className="rounded-xl overflow-hidden bg-white p-3">
                <img src={chartImg} alt="Gráfico de reducción de deshidratación en transporte de uva" className="w-full object-contain" />
              </div>
              <p className="text-muted-foreground text-xs mt-2 text-center">Comparativo camión tradicional vs. sistema PreserveAir</p>
            </div>
          </motion.div>
        </section>

        {/* Sección acopio de campo */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-primary/10 rounded-lg p-2.5 shrink-0">
                <TrendingDown size={20} className="text-primary" />
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-bold">
                Centros de acopio en campo: escalabilidad sin infraestructura permanente
              </h2>
            </div>
            <div className="space-y-4 md:pl-12">
              <p className="text-muted-foreground leading-relaxed">
                En operaciones de gran escala, el acopio en campo es un cuello de botella térmico que ocurre antes del transporte. La fruta cosechada espera en puntos intermedios hasta completar la carga del camión, sin ningún control de temperatura ni humedad.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En un proyecto en Chao, La Libertad, se implementaron más de 10 centros de acopio temporales con enfriamiento evaporativo, distribuidos estratégicamente en campo. Las estructuras — simples, con cobertura de malla raschel y equipos portátiles — se reubican según el avance de la cosecha y no requieren obra civil. El resultado fue mantener T&lt;25°C y HR&gt;80% en cada punto de acopio.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Este modelo demuestra que el control térmico en agroindustria no requiere infraestructura costosa ni permanente — requiere diseño correcto y selección adecuada de equipos.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Preguntas frecuentes — keywords de problema */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-lg p-2.5 shrink-0">
                <HelpCircle size={20} className="text-primary" />
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-bold">
                Preguntas frecuentes
              </h2>
            </div>
            <div className="space-y-6 md:pl-12">
              {[
                {
                  q: "¿El enfriamiento evaporativo funciona en zonas costeras húmedas como Lima?",
                  a: "Sí, aunque con matices. Lima tiene humedad relativa variable: más alta en invierno (junio–agosto) y más baja en verano (diciembre–marzo), que es precisamente cuando el calor es mayor. En las horas pico de verano, la humedad relativa en Lima suele bajar lo suficiente para que el sistema opere con buena eficiencia. En instalaciones reales en Lima y Callao, zonas donde típicamente se consideran de alta humedad, se obtienen reducciones de temperatura de 7–10°C.",
                },
                {
                  q: "¿Cuánto se puede reducir la deshidratación de uva o arándano con este sistema?",
                  a: "En proyectos documentados en Ica y Chao, la reducción en tasa de deshidratación fue de 35–40% respecto a operación sin control térmico, bajo las mismas condiciones climáticas. El factor clave es mantener la humedad relativa por encima del 75–80% en las zonas de proceso.",
                },
                {
                  q: "¿Se puede usar en invernaderos con alta humedad?",
                  a: "Depende del cultivo y del objetivo. En invernaderos donde el objetivo es enfriar sin perder humedad (como en viveros de plantines), el evaporativo es ideal: baja temperatura y sube humedad simultáneamente. Si el espacio ya tiene humedad muy alta (>85% constante), la eficiencia de enfriamiento se reduce y puede ser necesario evaluar otras soluciones.",
                },
                {
                  q: "¿Qué pasa con el polvo y la suciedad en entornos de campo o packing?",
                  a: "Los medios evaporativos actúan como filtros: el aire pasa a través de paneles húmedos que retienen partículas. En entornos de campo con polvo, esto es una ventaja — el aire que entra al espacio llega filtrado. Los medios deben limpiarse periódicamente según la carga de polvo del entorno.",
                },
              ].map((item) => (
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              ¿Tienes una operación de fruta fresca?
            </span>
            <h3 className="font-heading text-2xl font-bold mt-3 mb-3">
              Evaluamos tu cadena de temperatura sin costo
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Analizamos tu operación — desde cosecha hasta despacho — para identificar los puntos donde la temperatura y la humedad relativa están afectando la calidad de tu producto.
            </p>
            <button
              onClick={() => navigate("/soluciones/climatizacion/evaporativo")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Ver solución completa
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
