import { motion } from "framer-motion";

const pasos = [
  { num: "01", label: "Diagnóstico térmico en campo — flujo de aire, calor y distribución" },
  { num: "02", label: "Diseño del sistema en función de tu proceso productivo específico" },
  { num: "03", label: "Selección de equipos según requerimiento técnico, no por catálogo" },
  { num: "04", label: "Implementación sin obras mayores ni paradas de operación" },
  { num: "05", label: "Ajuste y validación de resultados en operación real" },
];

export default function EnfoqueSwSection() {
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Nuestro enfoque
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
              Diseñamos e implementamos el sistema térmico de tu operación, desde el diagnóstico hasta la puesta en marcha
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Antes de recomendar cualquier equipo, analizamos cómo circula el aire en tu espacio, dónde se generan las cargas de calor, y cómo interactúa la temperatura con tu proceso productivo. El resultado es un sistema diseñado para tu operación específica — no un equipo estándar instalado en un punto cualquiera.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {pasos.map((paso, i) => (
              <motion.div
                key={paso.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 items-start bg-background border border-border rounded-xl px-6 py-4"
              >
                <span className="text-primary font-bold text-sm shrink-0 w-8">{paso.num}</span>
                <p className="text-sm text-foreground leading-relaxed">{paso.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
