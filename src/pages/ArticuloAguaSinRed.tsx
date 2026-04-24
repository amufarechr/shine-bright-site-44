import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Droplets, FileText, HelpCircle, MapPin, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import aguaImg from "@/assets/articulos/galpones_desierto.jpg";
import wahaImg from "@/assets/climatizacion/waha.jpg";
import osmosisImg from "@/assets/climatizacion/osmosis.jpeg";

const secciones = [
  {
    icon: MapPin,
    titulo: "El problema: depender de una red que no siempre existe — o no es confiable",
    contenido: [
      "Para la mayoría de los proyectos urbanos en zonas con infraestructura consolidada, el agua potable llega por red y el problema es de calidad, no de acceso. Pero para un número creciente de operaciones — proyectos agrícolas en zonas remotas, desarrollos residenciales en áreas sin red municipal, operaciones mineras o industriales en locaciones aisladas, comunidades sin infraestructura hídrica — el problema es más fundamental: no hay red a la cual conectarse.",
      "En esos contextos, las soluciones tradicionales son costosas, logísticamente complejas o no escalables: camiones cisterna con costo variable y suministro discontinuo, perforaciones de pozos con calidad incierta, o extensión de redes municipales con inversión de infraestructura que a menudo supera el presupuesto disponible.",
      "Dos tecnologías permiten generar agua potable de fuentes no convencionales, sin depender de infraestructura de distribución: la ósmosis inversa y la generación atmosférica de agua.",
    ],
  },
  {
    icon: Droplets,
    titulo: "Ósmosis inversa: agua pura desde cualquier fuente líquida",
    contenido: [
      "La ósmosis inversa toma una fuente de agua existente — pozo salobre, agua de mar, canal con parámetros fuera de norma — y la convierte en agua con parámetros controlados, mediante filtración a nivel molecular a través de membranas semipermeables. No requiere red de distribución entrante: solo necesita la fuente, energía para operar las bombas de alta presión, y un punto de almacenamiento.",
      "Es la tecnología correcta cuando hay una fuente de agua disponible pero con mala calidad: alta salinidad, dureza extrema, contaminantes disueltos, o simplemente parámetros fuera de las normas de potabilidad o uso agrícola. La inversión inicial es moderada, el consumo energético es manejable para agua salobre, y el sistema opera de forma continua con mantenimiento básico.",
      "No es adecuada cuando no hay ninguna fuente de agua líquida disponible — en esos casos, la generación atmosférica es la única alternativa viable.",
    ],
  },
  {
    icon: Zap,
    titulo: "Generación atmosférica: agua desde el aire, sin fuente líquida",
    contenido: [
      "La tecnología Waha — que SW Ingeniería representa en la región — extrae agua directamente del vapor de agua atmosférico usando desecantes sólidos de tipo MOF (Metal-Organic Frameworks), derivados del trabajo de Omar Yaghi, Premio Nobel de Química. El proceso no requiere ninguna fuente de agua líquida: solo aire húmedo y energía.",
      "Esto la hace única en locaciones donde no hay pozo, no hay río, no hay red — pero sí hay humedad en el aire, que es el caso de la gran mayoría de zonas habitables del planeta. El sistema puede operar en zonas costeras con alta humedad, en valles agrícolas con riego, o en entornos industriales con procesos que generan vapor.",
      "Los modelos Waha van desde equipos que producen cientos de litros por día para uso comunitario o residencial, hasta sistemas de escala industrial (Oasis-20,000) capaces de generar hasta 20,000 litros diarios para parques industriales o desarrollos residenciales de gran escala.",
      "La ventaja clave frente a la ósmosis no es la capacidad — es la independencia absoluta de fuente: no hay pozo que perforar, no hay camión que esperar, no hay red a la que conectarse.",
    ],
  },
  {
    icon: MapPin,
    titulo: "Cuándo usar cada tecnología — y cuándo combinarlas",
    contenido: [
      "La decisión entre ósmosis y generación atmosférica depende principalmente de si existe una fuente de agua disponible y cuál es su calidad. Si hay pozo con agua salobre o agua de mar accesible, la ósmosis inversa es generalmente más eficiente en términos de costo por metro cúbico producido. Si no hay ninguna fuente líquida disponible, Waha es la única opción técnicamente viable.",
      "En algunos proyectos, ambas tecnologías se complementan: ósmosis para el grueso del suministro de proceso o riego, y generación atmosférica para agua de consumo humano de alta calidad en el punto de uso, eliminando la red de distribución interna.",
      "La evaluación correcta parte de tres preguntas: ¿existe una fuente de agua accesible? ¿Cuál es su calidad? ¿Cuál es el volumen requerido y el perfil de uso? Con esas respuestas, el dimensionamiento y la selección de tecnología son directos.",
    ],
  },
];

const faqs = [
  {
    q: "¿Qué tan confiable es la generación atmosférica en zonas áridas?",
    a: "La tecnología Waha usa desecantes sólidos (MOFs) que pueden capturar humedad a humedades relativas tan bajas como 20–30%, lo que la diferencia de los generadores convencionales que requieren HR superior al 60%. En zonas áridas con HR moderada, la producción se reduce pero el sistema sigue operando. Waha publica datos de rendimiento por condición climática para evaluación técnica.",
  },
  {
    q: "¿Cuánto cuesta el agua producida por ósmosis vs. generación atmosférica?",
    a: "El costo por metro cúbico producido por ósmosis inversa (agua salobre) es típicamente de 0.3 a 0.8 USD/m³, dependiendo del costo energético local y el nivel de salinidad de la fuente. La generación atmosférica tiene un costo por metro cúbico más alto, pero elimina costos de infraestructura de distribución y es la única opción donde no hay fuente líquida. La comparación correcta es siempre contra la alternativa disponible — no contra el costo de la red municipal.",
  },
  {
    q: "¿Se puede usar el agua de ósmosis directamente para riego o necesita remineralización?",
    a: "El agua de ósmosis tiene CE muy baja (típicamente <0.05 dS/m), lo que puede ser contraproducente para riego directo ya que el agua sin minerales puede generar estrés osmótico en las plantas. La práctica correcta es mezclarla con agua sin tratar hasta alcanzar la CE objetivo, o agregar un sistema de remineralización controlada. En cultivos como arándano, esto permite ajustar la CE con precisión al rango óptimo de 0.2–0.4 dS/m.",
  },
];

export default function ArticuloAguaSinRed() {
  const navigate = useNavigate();

  return (
    <>
      <SeoHead
        title="Agua potable sin red hídrica: ósmosis inversa y generación atmosférica"
        description="Cómo generar agua potable sin depender de red municipal — ósmosis inversa para agua salobre y de mar, y tecnología Waha para extracción desde el aire. Comparativa técnica y casos de uso."
        keywords="agua sin red hídrica, independencia hídrica, generación agua atmosférica, agua potable zonas remotas, desalinización sin infraestructura, agua para proyectos remotos"
        path="/articulos/agua-sin-red-hidrica"
      />
      <Navbar activePage="soluciones" darkHero={false} />
      <main className="min-h-screen">
        <section className="pt-44 pb-12 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <div className="flex items-center gap-3 mb-8">
              <Link to="/articulos/agua" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border rounded-full px-3 py-1.5 hover:border-primary/40 transition-all">
                <ArrowLeft size={13} />
                <FileText size={13} />
                Artículos de Agua
              </Link>
              <Link to="/soluciones/agua" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border rounded-full px-3 py-1.5 hover:border-primary/40 transition-all">
                <ArrowLeft size={13} />
                <Droplets size={13} />
                Gestión de Agua
              </Link>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Artículo técnico · Agua</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">SW Ingeniería</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Agua potable sin red hídrica:{" "}
              <span className="text-gradient">ósmosis inversa y generación desde el aire</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Para proyectos en zonas remotas, operaciones agrícolas sin acceso a red, o desarrollos donde la infraestructura hídrica no llega — dos tecnologías permiten generar agua potable de calidad controlada sin depender de ninguna red de distribución.
            </p>
          </motion.div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="border-t border-border" />
        </div>

        {/* Foto apertura — galpones en desierto */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="rounded-xl overflow-hidden">
              <img src={aguaImg} alt="Galpones avícolas en desierto con paneles solares" className="w-full object-cover max-h-80" />
            </div>
            <p className="text-muted-foreground text-xs mt-3 text-center italic">
              Galpones avícolas en pleno desierto — operaciones como esta pueden contar con agua potable de calidad sin depender de ninguna red hídrica externa
            </p>
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
                    {sec.contenido.map((p, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">{p}</p>
                    ))}
                    {i === 1 && (
                      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 rounded-xl overflow-hidden">
                        <img src={osmosisImg} alt="Sistema de ósmosis inversa industrial" className="w-full object-cover max-h-64" />
                        <p className="text-muted-foreground text-xs mt-2 text-center">Sistema de ósmosis inversa — agua tratada desde pozo, agua salobre o agua de mar</p>
                      </motion.div>
                    )}
                    {i === 2 && (
                      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 rounded-xl overflow-hidden bg-white p-6 flex flex-col items-center">
                        <img src={wahaImg} alt="WaHa Vaporator — generación atmosférica de agua" className="w-full max-h-64 object-contain" />
                        <p className="text-muted-foreground text-xs mt-3 text-center">WaHa Vaporator® — agua potable extraída del aire, sin fuente hídrica</p>
                      </motion.div>
                    )}
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
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">¿Necesitas agua sin depender de red?</span>
            <h3 className="font-heading text-2xl font-bold mt-3 mb-3">Evaluamos tu caso y te recomendamos la tecnología correcta</h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Con el perfil de tu proyecto — fuente disponible, calidad de agua, volumen requerido y condiciones climáticas — determinamos si ósmosis, generación atmosférica o una combinación es la solución más eficiente.
            </p>
            <button onClick={() => navigate("/soluciones/agua")} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Ver soluciones de agua <ArrowRight size={16} />
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
