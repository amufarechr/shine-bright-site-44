import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, TrendingUp, ShieldOff, Zap, Users, Activity } from "lucide-react";

const items = [
  { icon: TrendingUp,  kpi: "+15–25%",        label: "Productividad de operaciones" },
  { icon: ShieldOff,   kpi: "−80%",            label: "Paradas no programadas por condiciones ambientales" },
  { icon: Zap,        kpi: "−75–90%",         label: "Consumo energético vs. A/C convencional" },
  { icon: Users,      kpi: "+10°F",           label: "Sensación de frescor percibida por trabajadores" },
  { icon: Activity,   kpi: "12 meses",        label: "Operación estable todo el año" },
];

export default function ImpactoSection() {
  const navigate = useNavigate();
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Impacto
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Resultados operativos medibles
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={24} />
                </div>
                <span className="font-heading text-2xl font-bold text-primary leading-none">
                  {item.kpi}
                </span>
                <span className="text-xs text-muted-foreground leading-snug">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => navigate("/articulos/climatizacion")}
            className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Artículos sobre climatización industrial <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
