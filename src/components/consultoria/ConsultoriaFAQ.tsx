import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

const faqs = [
  {
    q: "¿En qué se diferencia SW Ingeniería de una consultora de gestión tradicional?",
    a: "La diferencia principal está en la ejecución. Una consultora de gestión entrega un diagnóstico y recomendaciones; nosotros acompañamos la implementación hasta verificar que los resultados se reflejan en los números de la operación. Ambos socios tienen experiencia directa en planta — no solo en análisis — lo que cambia el tipo de intervención que es posible. Además, trabajamos con datos reales de la operación desde el primer día: tiempos de ciclo, consumos, rendimientos, historial de mantenimiento. No proyecciones.",
  },
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "Depende del tipo de intervención. Mejoras en estándares operativos, secuencias de trabajo y controles visuales generan resultados medibles en 4 a 8 semanas. Intervenciones más estructurales — rediseño de flujos, cambios en sistemas de mantenimiento — típicamente muestran impacto verificable en 2 a 4 meses. En todos los casos, el diagnóstico inicial (que toma entre 1 y 3 semanas según el tamaño de la operación) define con precisión qué puede moverse rápido y qué requiere más tiempo.",
  },
  {
    q: "¿Hay inversión en equipos o infraestructura?",
    a: "En la mayoría de los proyectos que ejecutamos, la mayor parte del potencial de mejora no requiere inversión en activos nuevos. Está en el rediseño de cómo se usan los recursos existentes. Cuando sí identificamos oportunidades que requieren inversión — un sistema de monitoreo energético, un ajuste en equipos de proceso — lo presentamos con el análisis de retorno completo antes de recomendar nada. Nunca proponemos gasto sin cuantificar primero el beneficio.",
  },
  {
    q: "¿Trabajan con plantas pequeñas o solo con grandes operaciones?",
    a: "Trabajamos con operaciones medianas y grandes — plantas con al menos 30 a 40 personas en operación directa, o con una factura energética o de insumos significativa. Por debajo de ese umbral, el costo del diagnóstico raramente se justifica frente al potencial de ahorro. Si su operación está en ese límite, la primera conversación nos permite evaluar si tiene sentido avanzar.",
  },
  {
    q: "¿Cómo es el proceso de diagnóstico inicial?",
    a: "El diagnóstico comienza con una conversación de 30 a 60 minutos donde entendemos el contexto: sector, tamaño, principales desafíos y lo que ya se ha intentado. Si hay potencial claro, proponemos una visita a planta de 2 a 5 días según la complejidad, donde observamos los procesos directamente y analizamos los datos operativos disponibles. Al final entregamos un mapa de oportunidades con la cuantificación de cada brecha y la priorización por impacto. Esa primera conversación no tiene costo.",
  },
  {
    q: "¿Pueden trabajar en nuestra planta sin interrumpir la operación?",
    a: "Sí. El diagnóstico se hace en paralelo a la operación normal — observamos los procesos en curso, revisamos registros históricos, y entrevistamos al equipo operativo en horarios que no interfieren con la producción. Para las intervenciones, diseñamos el plan de implementación considerando los turnos, las temporadas de mayor carga, y los ciclos de mantenimiento. En operaciones agroindustriales con temporadas críticas de exportación, esto es particularmente importante y lo planificamos explícitamente.",
  },
];


const ConsultoriaFAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  // Inject FAQPage schema
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a,
        },
      })),
    };
    const el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-swi-faq", "true");
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => {
      document.querySelectorAll("script[data-swi-faq]").forEach((s) => s.remove());
    };
  }, []);

  return (
    <section className="section-padding pt-12 pb-16 bg-card" id="preguntas-frecuentes">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Preguntas frecuentes
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-3">
            Preguntas frecuentes sobre consultoría operativa
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-card/80 transition-colors"
              >
                <span className="font-semibold text-foreground text-base leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-primary transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultoriaFAQ;
