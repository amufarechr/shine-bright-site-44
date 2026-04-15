import { motion } from "framer-motion";

const pasos = [
  {
    num: "01",
    title: "Entendemos cómo funciona realmente la operación",
    desc: "Inmersión completa en campo, con datos reales.",
  },
  {
    num: "02",
    title: "Identificamos las oportunidades y causas raíces",
    desc: "Cuellos de botella, paradas no programadas, descoordinación, mermas, reprocesos, etc.",
  },
  {
    num: "03",
    title: "Rediseñamos la operación",
    desc: "Decisiones que involucran procesos, personas y uso de infraestructura.",
  },
  {
    num: "04",
    title: "Implementamos en sitio",
    desc: "Ajustando con tecnología, expertise y gestión de cambio sobre la operación real.",
  },
  {
    num: "05",
    title: "Resultados que permanecen",
    desc: "Aseguramos consistencia, repetibilidad y transferencia efectiva de capacidades. El objetivo no es una mejora puntual — es un nuevo nivel de operación autosostenido que perdura en el tiempo.",
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
        Nuestra metodología garantiza resultados
      </motion.h2>

      <div className="relative">
        {pasos.map((paso, i) => (
          <motion.div
            key={paso.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex gap-8 ${i < pasos.length - 1 ? "pb-12" : ""}`}
          >
            <span className="text-2xl font-bold text-primary tracking-widest shrink-0 w-12">{paso.num}</span>
            <div className="border-l-2 border-border pl-8">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{paso.title}</h3>
              <p className="text-muted-foreground text-sm">{paso.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ComoIntervenimos;
