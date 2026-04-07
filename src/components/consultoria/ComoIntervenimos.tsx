import { motion } from "framer-motion";

const pasos = [
  {
    num: "01",
    title: "Entendemos cómo fluye realmente",
    desc: "En campo, con datos reales.",
  },
  {
    num: "02",
    title: "Identificamos dónde se pierde capacidad",
    desc: "Cuellos de botella, paros, descoordinación.",
  },
  {
    num: "03",
    title: "Rediseñamos la operación",
    desc: "Procesos, decisiones y uso de infraestructura.",
  },
  {
    num: "04",
    title: "Implementamos en sitio",
    desc: "Ajustando con equipos reales.",
  },
  {
    num: "05",
    title: "Estabilizamos",
    desc: "Seguimiento hasta lograr consistencia.",
  },
];

const ComoIntervenimos = () => (
  <section id="como-intervenimos" className="section-padding bg-card">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-2xl md:text-4xl font-bold mb-16"
      >
        Cómo intervenimos la operación
      </motion.h2>

      <div className="relative pl-8 border-l-2 border-border">
        {pasos.map((paso, i) => (
          <motion.div
            key={paso.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative ${i < pasos.length - 1 ? "pb-12" : ""}`}
          >
            {/* Dot on the line */}
            <div className="absolute -left-[calc(0.5rem+1.5px)] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />

            <span className="text-xs font-semibold text-primary tracking-widest">{paso.num}</span>
            <h3 className="font-heading text-lg font-semibold text-foreground mt-1 mb-1">{paso.title}</h3>
            <p className="text-muted-foreground text-sm">{paso.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ComoIntervenimos;
