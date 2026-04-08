import { motion } from "framer-motion";

const rows = [
  { traditional: "Capacidad del equipo", sw: "Throughput real" },
  { traditional: "Consumo puntual", sw: "Energía por proceso" },
  { traditional: "Cumplimiento técnico", sw: "Estabilidad operativa" },
  { traditional: "Resultado inmediato", sw: "Performance sostenido" },
  { traditional: "Optimización local", sw: "Coordinación del sistema" },
];

const ComoMedimos = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-2xl md:text-4xl font-bold text-center mb-14"
      >
        No medimos equipos. <span className="text-gradient">Medimos operación.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-lg border border-border overflow-hidden"
      >
        {/* Header */}
        <div className="grid grid-cols-2">
          <div className="px-6 py-4 bg-muted text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Enfoque tradicional
          </div>
          <div className="px-6 py-4 bg-primary/5 text-sm font-semibold text-primary uppercase tracking-wider">
            SW Ingeniería
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={row.traditional}
            className={`grid grid-cols-2 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="px-6 py-4 text-muted-foreground">{row.traditional}</div>
            <div className="px-6 py-4 bg-primary/5 text-foreground font-medium">{row.sw}</div>
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10 text-lg font-heading font-semibold text-foreground"
      >
        Si la operación no cambia, no hay mejora.
      </motion.p>
    </div>
  </section>
);

export default ComoMedimos;
