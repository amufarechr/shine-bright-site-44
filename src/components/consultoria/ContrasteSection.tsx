import { motion } from "framer-motion";
import { Check, AlertTriangle } from "lucide-react";

const left = [
  "Capacidad instalada disponible",
  "Especificaciones cumplidas",
  "Consumo controlado",
];

const right = [
  "Acumulación en proceso",
  "Paros no programados",
  "Desbalance de procesos",
  "Decisiones no planeadas",
];

const ContrasteSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-2xl md:text-4xl font-bold text-center mb-14"
      >
        Todo parece estar bien...{" "}
        <span className="text-gradient">pero los indicadores de operación dicen otra cosa</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left — solution side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-muted/50 border border-border rounded-lg p-8"
        >
          <h3 className="font-heading text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            Equipos / solución
          </h3>
          <ul className="space-y-4">
            {left.map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — reality side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-primary/30 rounded-lg p-8 shadow-md"
        >
          <h3 className="font-heading text-sm font-semibold tracking-widest uppercase text-foreground mb-6">
            Operación real
          </h3>
          <ul className="space-y-4">
            {right.map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <AlertTriangle size={18} className="mt-0.5 shrink-0 text-destructive" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContrasteSection;
