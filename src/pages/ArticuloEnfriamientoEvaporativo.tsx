import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Factory, FileText, Leaf, Thermometer, ThermometerSun, Wind, Zap } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import evaporativoNew from "@/assets/articulos/evaporativo_new.jpg";
import funcionamiento from "@/assets/evaporativo/funcionamiento.jpeg";

const nomenclatura = [
  {
    termino: "Enfriador evaporativo",
    descripcion: "Término técnico estándar en español. Aplica tanto a equipos portátiles como a sistemas de techo (rooftop) de alta capacidad para uso industrial.",
  },
  {
    termino: "Hidroventilador",
    descripcion: "Nombre coloquial muy usado en México y Centroamérica. Se refiere al mismo tipo de equipo — un ventilador que enfría el aire mediante evaporación de agua. Algunos modelos incluyen aspersión directa de agua nebulizada.",
  },
  {
    termino: "Swamp cooler",
    descripcion: "Término en inglés de uso extendido, especialmente en el suroeste de Estados Unidos. Literalmente 'enfriador de pantano', por la humedad que genera. Equivalente funcional al enfriador evaporativo.",
  },
  {
    termino: "Enfriador adiabático",
    descripcion: "Término más técnico que describe el proceso termodinámico subyacente: el enfriamiento ocurre sin intercambio de calor con el exterior, solo por cambio de estado del agua. Se usa más en contextos de ingeniería de HVAC.",
  },
  {
    termino: "Cooler evaporativo / evaporative cooler",
    descripcion: "Variantes en inglés y spanglish de uso frecuente en búsquedas en línea, especialmente en mercados latinos de Estados Unidos y en profesionales del sector HVAC en Latinoamérica.",
  },
  {
    termino: "Portacool / BioCool / Big Ass Fans",
    descripcion: "Marcas líderes del mercado. Al igual que 'Scotch' para la cinta adhesiva, muchos usuarios buscan directamente el nombre de marca en lugar del nombre genérico del producto.",
  },
];

const secciones = [
  {
    icon: ThermometerSun,
    titulo: "Cómo funciona el enfriamiento evaporativo",
    contenido: [
      "El principio físico es simple: cuando el agua pasa de estado líquido a vapor, absorbe calor del aire circundante. Los sistemas evaporativos industriales aprovechan este fenómeno para enfriar grandes volúmenes de aire de forma continua.",
      "El proceso es el siguiente: aire caliente exterior es forzado por un ventilador a través de paneles o medios porosos saturados de agua. Al atravesarlos, el agua se evapora y el calor del aire es absorbido en ese cambio de estado. El resultado es aire más fresco y con mayor humedad relativa que se distribuye al interior del espacio.",
      "A diferencia de los sistemas de refrigeración por compresión, el enfriamiento evaporativo no recircula el mismo aire — introduce permanentemente aire fresco desde el exterior, generando renovación continua del ambiente interior.",
    ],
  },
  {
    icon: Zap,
    titulo: "Eficiencia energética: hasta 10 veces menos consumo",
    contenido: [
      "Los sistemas evaporativos consumen hasta un 75–90% menos energía que los sistemas de refrigeración convencionales. La diferencia es estructural: en lugar de compresores de alta potencia que trabajan contra ciclos termodinámicos de refrigerante, los evaporativos solo requieren una bomba de agua y un ventilador.",
      "En espacios industriales de gran escala — donde los costos de energía representan una fracción significativa de los gastos operativos — esta diferencia se traduce directamente en ahorro mensual. El retorno de inversión típico de un sistema evaporativo bien dimensionado es notablemente más rápido que el de un sistema de refrigeración convencional equivalente.",
      "Adicionalmente, muchas regiones ofrecen incentivos o descuentos en tarifas eléctricas para instalaciones que adoptan tecnologías de menor consumo, lo que mejora aún más la ecuación financiera.",
    ],
  },
  {
    icon: Wind,
    titulo: "Renovación de aire y calidad ambiental",
    contenido: [
      "Una de las ventajas menos mencionadas del enfriamiento evaporativo es que introduce 100% de aire fresco exterior de forma continua. Esto contrasta con los sistemas de aire acondicionado convencionales, que recirculan el mismo aire interior con mínima renovación.",
      "Esta renovación constante tiene múltiples efectos positivos: reduce la concentración de partículas en suspensión, gases y contaminantes propios de entornos industriales (vapores de maquinaria, polvo de proceso, emisiones de montacargas), y mejora la calidad del aire respirable para los operarios.",
      "Los medios húmedos por los que pasa el aire actúan además como filtros naturales: atrapan polvo, polen y partículas antes de que el aire llegue al interior. Esto reduce la acumulación de suciedad en maquinaria y producto almacenado, con impacto directo en mantenimiento y calidad.",
    ],
  },
  {
    icon: Leaf,
    titulo: "Impacto ambiental favorable",
    contenido: [
      "Los sistemas evaporativos no utilizan refrigerantes químicos — el único fluido de trabajo es el agua. Esto elimina el riesgo de fugas de gases contaminantes (HFCs, HCFCs) y reduce significativamente la huella de carbono de la operación de enfriamiento.",
      "El menor consumo eléctrico también se traduce en menor emisión indirecta de CO₂ asociada a la generación de energía. En contextos donde las empresas tienen compromisos de sostenibilidad o reportes ESG, el enfriamiento evaporativo representa una decisión técnica alineada con esos objetivos.",
    ],
  },
  {
    icon: Factory,
    titulo: "Cuándo es la solución correcta",
    contenido: [
      "El enfriamiento evaporativo es más eficiente en climas cálidos y con humedad relativa moderada-baja en las horas del día de mayor calor — condiciones que caracterizan la mayor parte de la costa y sierra peruana, así como otras zonas cálidas de México (Sinaloa, Sonora, Baja California, Jalisco, entre otros) y en el resto de Latinoamérica. ",
      "Es especialmente adecuado para espacios que no pueden cerrarse herméticamente: naves industriales con puertas de acceso frecuente, plantas de producción con renovación de aire obligatoria, centros de proceso y empaque de productos frescos, espacios de carga y descarga, espacios grandes en centros comerciales (food courts, lobbies, pasajes de alto tránsito), invernaderos agrícolas, almacenes industriales, oficinas de gran tamaño, entre otros.",
      "No es la solución correcta cuando se requiere control de temperatura de alta precisión (±1–2°C), temperaturas muy bajas (<18°C), en ambientes con humedad relativa muy elevada de forma permanente, o en recintos completamente sellados donde la introducción de aire exterior no es posible.",
      "El dimensionamiento correcto es crítico: el caudal de aire necesario depende del volumen del espacio, la carga térmica interna (personas, maquinaria, iluminación), las condiciones climáticas exteriores y el diferencial de temperatura objetivo. Un sistema subdimensionado no logrará las condiciones deseadas; uno sobredimensionado generará corrientes de aire incómodas.",
    ],
  },
];

export default function ArticuloEnfriamientoEvaporativo() {
  const navigate = useNavigate();

  return (
    <>
      <SeoHead ogType="article"
        schema={{"@context": "https://schema.org", "@type": "Article", "headline": "Por qué usar enfriamiento evaporativo en entornos industriales", "author": {"@type": "Organization", "name": "SW Ingeniería", "@id": "https://swingenieria.com/#organization"}, "publisher": {"@type": "Organization", "name": "SW Ingeniería", "url": "https://swingenieria.com"}, "url": "https://swingenieria.com/articulos/enfriamiento-evaporativo", "about": {"@type": "Thing", "name": "Enfriamiento Evaporativo Industrial"}, "inLanguage": "es"}}
        title="Por qué usar enfriamiento evaporativo en entornos industriales"
        description="Guía técnica sobre enfriadores evaporativos, hidroventiladores y enfriadores adiabáticos: cómo funcionan, cuánto ahorran y cuándo son la solución correcta para naves industriales."
        keywords="enfriamiento evaporativo, enfriador evaporativo industrial, hidroventilador, swamp cooler, enfriador adiabático, cooler evaporativo, reducir calor nave industrial"
        path="/articulos/enfriamiento-evaporativo"
      />
      <Navbar activePage="soluciones" darkHero={false} />
      <main className="min-h-screen">
        {/* Hero del artículo */}
        <section className="pt-44 pb-12 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
                        <div className="flex items-center gap-3 mb-8">
              <Link to="/articulos/climatizacion" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border rounded-full px-3 py-1.5 hover:border-primary/40 transition-all">
                <ArrowLeft size={13} />
                <FileText size={13} />
                Artículos de Climatización
              </Link>
              <Link to="/soluciones/climatizacion/evaporativo" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border rounded-full px-3 py-1.5 hover:border-primary/40 transition-all">
                <ArrowLeft size={13} />
                <Thermometer size={13} />
                Enfriadores Evaporativos
              </Link>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Artículo técnico
              </span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">SW Ingeniería</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Por qué usar enfriamiento evaporativo en{" "}
              <span className="text-gradient">entornos industriales</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Una guía técnica completa sobre el principio de funcionamiento, ventajas energéticas,
              impacto en la calidad del aire y criterios para determinar cuándo esta tecnología
              es la solución correcta para tu operación.
            </p>
          </motion.div>
        </section>

        {/* Línea divisoria */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="border-t border-border" />
        </div>

        {/* Foto apertura */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden">
            <img src={evaporativoNew} alt="Enfriadores evaporativos industriales Big Ass Fans en nave industrial" className="w-full object-cover max-h-80" />
          </motion.div>
        </section>

        {/* Nomenclatura — keywords SEO */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pt-12 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-lg p-2.5 shrink-0">
                <BookOpen size={20} className="text-primary" />
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-bold">
                Muchos nombres, la misma tecnología
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 md:pl-12">
              El enfriamiento evaporativo tiene docenas de nombres según el país, el contexto y el tipo de equipo. Si llegaste buscando alguno de estos términos, estás en el lugar correcto:
            </p>
            <div className="grid md:grid-cols-2 gap-4 md:pl-12">
              {nomenclatura.map((n) => (
                <div key={n.termino} className="bg-card border border-border rounded-xl p-5">
                  <p className="font-heading font-semibold text-sm text-primary mb-1">{n.termino}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{n.descripcion}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Cuerpo del artículo */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto py-12">
          <div className="space-y-16">
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
                  <div className="space-y-4 pl-0 md:pl-12">
                    {sec.contenido.map((parrafo, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">
                        {parrafo}
                      </p>
                    ))}
                    {i === 0 && (
                      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 rounded-xl overflow-hidden bg-white p-4">
                        <img src={funcionamiento} alt="Diagrama de funcionamiento del enfriamiento evaporativo" className="w-full object-contain max-h-64" />
                        <p className="text-muted-foreground text-xs text-center mt-2">Diagrama del proceso de enfriamiento evaporativo</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA al final */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              ¿Tienes un espacio con problema de calor?
            </span>
            <h3 className="font-heading text-2xl font-bold mt-3 mb-3">
              Evaluamos tu caso sin costo
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Cada instalación tiene sus propias condiciones. Analizamos tu espacio, carga térmica
              y condiciones climáticas para recomendarte la solución correcta — o decirte
              cuándo el evaporativo no es la respuesta adecuada.
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
