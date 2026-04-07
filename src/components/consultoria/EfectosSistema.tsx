import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const steps = [
  { label: "Recepción", effect: "Retrabajo / espera" },
  { label: "Proceso", effect: "Sobreconsumo de energía" },
  { label: "Empaque", effect: "Cuello de botella" },
  { label: "Despacho", effect: " " },
];

const EfectosSistema = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-2xl md:text-4xl font-bold text-center mb-16"
      >
        La optimización local puede{" "}

        <span className="text-gradient">causar ineficiencias generales.</span>
      </motion.h2>

      {/* Flow diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-0 mb-14"
      >
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-36 py-4 rounded-lg border border-border bg-card text-center font-heading font-semibold text-sm text-foreground">
                {step.label}
              </div>
                {step.effect.trim() ? (
                  <div className="flex items-center gap-1.5 text-xs text-destructive">
                  <AlertCircle size={13} />
                  <span>{step.effect}</span>
                  </div>
              ) : (
                <div className="h-5" />
              )}
            </div>
            {i < steps.length - 1 && (
            <svg className="hidden md:block mx-1 mt-[-20px]"
            width="32"
            height="12"
            viewBox="0 0 32 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <line x1="0" y1="6" x2="26" y2="6" stroke="hsl(var(--border))" strokeWidth="1.5" />
            <polyline points="22,2 28,6 22,10" stroke="hsl(var(--border))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            )}
            
            {i < steps.length - 1 && (
            <div className="md:hidden h-6 w-px bg-border" />
            )}
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-lg max-w-xl mx-auto"
      >
        Diseñamos mejoras que optimizan de extremo a extremo.
      </motion.p>
    </div>
  </section>
);

export default EfectosSistema;
