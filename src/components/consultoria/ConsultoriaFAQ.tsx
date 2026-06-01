import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

const faqs = [
  {
    q: "¿Qué es una consultoría de eficiencia operativa industrial?",
    a: "Es un proceso estructurado de diagnóstico e intervención que identifica dónde y por qué una operación industrial pierde productividad, consume más recursos de los necesarios, o no alcanza su potencial de rentabilidad. A diferencia de la consultoría estratégica, trabaja directamente sobre los procesos, equipos y sistemas de gestión en planta. El resultado es un conjunto de acciones concretas — priorizadas por impacto económico — que el equipo operativo puede ejecutar con o sin inversión en activos nuevos.",
  },
  {
    q: "¿Cuándo una planta industrial necesita una evaluación de eficiencia operativa?",
    a: "Las señales más frecuentes son: márgenes que no mejoran aunque las ventas crezcan, costos de producción que aumentan más rápido que el volumen, productividad por horas-hombre o por turno estancada, exceso de merma o reproceso sin causa clara, paradas no planificadas frecuentes, o dificultad para cumplir estándares de entrega a tiempo. También es recomendable una evaluación cuando se planea ampliar capacidad — muchas veces la capacidad real ya existe, solo no está siendo aprovechada.",
  },
  {
    q: "¿Cómo identifica SW Ingeniería las oportunidades de mejora?",
    a: "Trabajamos en campo, no desde el escritorio. El diagnóstico combina observación directa de los procesos con análisis de los datos operativos de la planta — consumos, tiempos de ciclo, rendimientos, indicadores de mantenimiento. Cuantificamos el gap entre la operación actual y el benchmark alcanzable para cada proceso. Esto nos permite presentar un mapa de oportunidades con el potencial de ahorro o mejora de cada una, antes de recomendar ninguna intervención.",
  },
  {
    q: "¿Qué resultados son esperables en un proyecto de eficiencia operativa?",
    a: "Depende del punto de partida, pero en operaciones de agroindustria y manufactura donde hemos trabajado, los rangos típicos son: reducción de costos operativos de 15% a 35% en las áreas intervenidas, mejoras de productividad por horas-hombre de 20% a 40%, y reducciones de consumo energético de 10% a 25%. Estos resultados son siempre estimados y validados con datos reales durante el diagnóstico — no son cifras genéricas de marketing. El payback de las intervenciones varía, pero en la mayoría de los proyectos que ejecutamos sin inversión significativa en activos, el retorno se verifica en el primer semestre.",
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
            Lo que más nos preguntan sobre consultoría operativa
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
