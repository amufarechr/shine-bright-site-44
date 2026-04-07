import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const timeline = [
  { period: "Semana 1–2", label: "Ajustes" },
  { period: "Semana 3–6", label: "Estabilización" },
  { period: "Mes 2+", label: "Mejora sostenida" },
];

const CasosReales = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl font-bold mb-14"
        >
          Casos reales
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border rounded-lg p-8 md:p-10"
        >
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">Caso 01</span>

          <div className="mt-6 space-y-3 mb-10">
            <p className="text-foreground">
              <span className="font-semibold">Antes:</span>{" "}
              <span className="text-muted-foreground">operación dentro de especificación</span>
            </p>
            <p className="text-foreground">
              <span className="font-semibold">Problema:</span>{" "}
              <span className="text-muted-foreground">desbalance y cuellos de botella</span>
            </p>
            <p className="text-foreground">
              <span className="font-semibold">Intervención:</span>{" "}
              <span className="text-muted-foreground">ajustes operativos y sistémicos</span>
            </p>
          </div>

          {/* Timeline */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x divide-border">
            {timeline.map((t, i) => (
              <motion.div
                key={t.period}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="sm:flex-1 sm:px-6 first:sm:pl-0 last:sm:pr-0"
              >
                <div className="text-xs font-semibold text-primary mb-1">{t.period}</div>
                <div className="text-sm text-foreground">{t.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <button
            onClick={() => scrollTo("contacto")}
            className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Ver más casos
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CasosReales;
