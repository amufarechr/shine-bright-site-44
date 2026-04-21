import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap, Users, ThermometerSun, BarChart3, HelpCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import almacenImg from "@/assets/evaporativo/almacen.jpeg";
import casoCallao from "@/assets/evaporativo/caso-callao.jpg";

const metricas = [
  { valor: "−85%", label: "Menor inversión vs. refrigeración convencional", fuente: "Caso Callao" },
  { valor: "20 kW", label: "Consumo eléctrico para 6,000 m²", fuente: "vs. +180 kW convencional" },
  { valor: "−50%", label: "Ausentismo por calor en zona de trabajo", fuente: "Caso Chincha" },
];

const secciones = [
  {
    icon: ThermometerSun,
    titulo: "El calor en naves industriales: un problema de productividad y seguridad",
    contenido: [
      "Una nave industrial en zonas costeras o desérticas puede alcanzar temperaturas interiores de 35–42°C durante las horas pico del verano. A esas temperaturas, los efectos sobre las personas son inmediatos: fatiga acelerada, reducción de la capacidad de concentración, mayor tasa de error y ausentismo. En operaciones con maquinaria de precisión o equipos electrónicos, el calor también afecta el rendimiento y la vida útil de los activos.",
      "El problema se agrava por la escala de los espacios: una nave de 3,000 m², un centro de distribución de 6,000 m² o una planta de producción con múltiples líneas no pueden ser tratados con soluciones de aire acondicionado doméstico o split. La potencia necesaria para enfriar esos volúmenes con refrigeración convencional es enorme — y el costo de instalación y operación también.",
      "En muchos casos, las empresas terminan operando sin ninguna solución de confort térmico, asumiendo los costos en productividad y retención de personal como parte del negocio. El enfriamiento evaporativo industrial cambia esa ecuación.",
    ],
  },
  {
    icon: Zap,
    titulo: "Ahorro energético: la diferencia estructural entre evaporativo y refrigeración",
    contenido: [
      "Un sistema de aire acondicionado convencional para una nave de 6,000 m² requeriría entre 150 y 250 kW de potencia instalada, con compresores trabajando de forma intensiva durante las horas de mayor calor. En un entorno donde la electricidad industrial tiene un costo significativo y el suministro puede ser limitado, ese consumo tiene un impacto directo en el P&L.",
      "Un sistema evaporativo equivalente para el mismo espacio consume entre 15 y 25 kW — solo ventiladores y bombas de agua. En el caso de un centro de distribución farmacéutico de 6,000 m² en Callao, el sistema instalado opera con solo 20 kW de potencia total, versus los más de 180 kW que hubiera requerido la alternativa de refrigeración originalmente evaluada. El costo de instalación fue un 85% menor.",
      "Esta diferencia en consumo eléctrico se traduce en ahorro mensual real desde el primer mes de operación, y mejora el retorno de inversión de forma sustancial. En muchas instalaciones industriales, el evaporativo se paga solo en menos de una temporada.",
    ],
  },
  {
    icon: Users,
    titulo: "Impacto en personas: productividad, ausentismo y retención",
    contenido: [
      "El confort térmico de los trabajadores no es solo un tema de bienestar — es un factor operativo con impacto medible. Estudios de ergonomía industrial documentan que a partir de los 28°C la productividad comienza a declinar, y por encima de los 33°C el rendimiento cae entre un 10% y un 30% dependiendo del tipo de tarea.",
      "En una planta de clasificación y empaque de huevos en Chincha, la implementación de un sistema evaporativo Big Ass Fans redujo el ausentismo por calor en un 50% en el primer mes de operación. La temperatura en la zona de trabajo principal bajó 9°C. El resultado fue un equipo más estable, con menor rotación y mayor capacidad de mantener los ritmos de producción durante las horas más calurosas de la tarde.",
      "Para operaciones de manufactura o logística donde el capital humano es crítico, esta mejora en condiciones de trabajo también tiene efecto en la capacidad de atraer y retener personal — un factor cada vez más relevante en mercados laborales ajustados.",
    ],
  },
  {
    icon: BarChart3,
    titulo: "Cuándo aplica y cuándo no: criterios técnicos para la decisión",
    contenido: [
      "El enfriamiento evaporativo es la solución correcta cuando el espacio tiene una superficie mínima de 200–300 m², el clima es cálido con humedad relativa moderada (menos del 70% en las horas de mayor calor), y no se requiere un sello hermético del ambiente. Estas condiciones son muy comunes en la costa peruana, en zonas áridas del norte de Perú y en la mayor parte del territorio mexicano.",
      "No es la solución correcta en espacios donde la humedad relativa ambiente ya es alta de forma permanente (como algunas zonas tropicales húmedas), ni cuando se requiere control de temperatura de alta precisión (±1–2°C), como en cuartos de conservación de productos refrigerados.",
      "En espacios mixtos — donde conviven zonas de producción con zonas de almacenamiento frío — la solución correcta suele ser evaporativo para las áreas de trabajo y cámaras de frío para las áreas de conservación. El análisis técnico correcto considera cada zona por separado antes de recomendar una solución.",
      "El dimensionamiento es crítico. El caudal de aire necesario depende del volumen del espacio, la carga térmica interna (personas, maquinaria, iluminación), las condiciones climáticas exteriores y el diferencial de temperatura objetivo. Un sistema mal dimensionado — por exceso o por defecto — no entregará el resultado esperado.",
    ],
  },
];

export default function ArticuloAlmacenes() {
  const navigate = useNavigate();

  return (
    <>
      <SeoHead
        title="Cómo reducir el calor en naves industriales y almacenes con 85% menos de inversión"
        description="Guía técnica sobre enfriamiento evaporativo para naves industriales, almacenes y centros de distribución. Ahorro energético, confort de trabajadores y casos reales con datos de campo."
        keywords="calor en nave industrial, alta temperatura almacén, enfriar planta industrial, enfriador evaporativo almacén, swamp cooler industrial, hidroventilador nave industrial, confort térmico trabajadores, ahorro energético enfriamiento"
        path="/articulos/enfriamiento-evaporativo-almacenes"
      />
      <Navbar activePage="soluciones" />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-44 pb-12 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/soluciones/climatizacion/evaporativo" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={16} />
              Volver a Enfriadores Evaporativos
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Artículo técnico · Almacenes e industria</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">SW Ingeniería</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Cómo reducir el calor en naves industriales y almacenes{" "}
              <span className="text-gradient">con un 85% menos de inversión</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              El calor en plantas industriales y centros de distribución afecta la productividad del personal, la vida útil de los equipos y los costos operativos. Esta guía explica cómo el enfriamiento evaporativo resuelve ese problema a una fracción del costo de la refrigeración convencional.
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

        {/* Foto hero */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="rounded-xl overflow-hidden">
              <img src={almacenImg} alt="Nave industrial con sistema de enfriamiento evaporativo" className="w-full object-cover max-h-80" />
            </div>
          </motion.div>
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

                  {/* Foto del caso Callao después de la sección de ahorro energético */}
                  {i === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mt-8 md:ml-12"
                    >
                      <div className="rounded-xl overflow-hidden">
                        <img src={casoCallao} alt="Centro de distribución farmacéutico en Callao con enfriamiento evaporativo" className="w-full object-cover max-h-64" />
                      </div>
                      <p className="text-muted-foreground text-xs mt-2 text-center">
                        Centro de distribución farmacéutico, Callao — 6,000 m² con 20 kW de consumo total
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
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
                  q: "¿Cuánto cuesta enfriar una nave industrial de 1,000 m²?",
                  a: "Con enfriamiento evaporativo, una nave de 1,000 m² requiere entre 2 y 4 equipos según la altura y carga térmica. El costo de inversión es entre 5 y 10 veces menor que un sistema de refrigeración convencional equivalente, y el consumo eléctrico mensual suele ser de 15–40 kW vs. 100–200 kW de un sistema de A/C tradicional.",
                },
                {
                  q: "¿Funciona en naves con puertas abiertas o carga y descarga constante?",
                  a: "Sí — al contrario del aire acondicionado convencional, el evaporativo no necesita espacio sellado. De hecho, funciona mejor con renovación de aire: el sistema introduce aire fresco desde el exterior, lo enfría y lo distribuye. Las puertas abiertas no reducen significativamente la eficiencia si el diseño de flujo es correcto.",
                },
                {
                  q: "¿Qué temperatura se puede alcanzar en una nave con calor extremo?",
                  a: "En condiciones climáticas típicas de la costa peruana o zonas áridas de México, un sistema bien dimensionado puede bajar la temperatura interior entre 8 y 12°C respecto al exterior. Si el exterior está a 36°C, el interior puede mantenerse entre 25 y 28°C — suficiente para condiciones de trabajo confortables.",
                },
                {
                  q: "¿Qué mantenimiento requiere un sistema evaporativo industrial?",
                  a: "El mantenimiento es mínimo comparado con sistemas de refrigeración: limpieza mensual de los medios evaporativos, revisión del nivel y calidad del agua, y limpieza del depósito para evitar acumulación de cal. No hay compresores, gases refrigerantes ni componentes de alta complejidad. La vida útil de los equipos industriales supera los 10 años con mantenimiento básico.",
                },
                {
                  q: "¿Se puede instalar sin hacer obras civiles?",
                  a: "En la mayoría de los casos, sí. Los equipos portátiles o de piso no requieren ninguna obra. Los equipos de techo (rooftop) requieren un anclaje simple y conexión de agua, sin ductos ni modificaciones estructurales. En instalaciones documentadas como el concesionario automotriz en Lima (1,000 m² entre showroom y taller), se logró cobertura completa sin ninguna obra de infraestructura.",
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
              ¿Tu nave o planta opera con calor excesivo?
            </span>
            <h3 className="font-heading text-2xl font-bold mt-3 mb-3">
              Calculamos la solución correcta para tu espacio
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Analizamos tu nave o planta — dimensiones, carga térmica, condiciones climáticas — y te entregamos una propuesta técnica con el sistema correcto y el consumo eléctrico proyectado.
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
