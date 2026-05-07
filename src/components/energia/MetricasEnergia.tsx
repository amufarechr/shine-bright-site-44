import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, Clock, Sun, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";

const metricas = [
  { icon: TrendingDown, kpi: "15–30%",    label: "Reducción en factura eléctrica", detalle: "Solo con monitoreo y automatización" },
  { icon: Clock,        kpi: "<18 meses", label: "Payback del sistema de monitoreo", detalle: "Retorno rápido sobre inversión base" },
  { icon: Sun,          kpi: "3–6 años",  label: "Payback sistema solar bien dimensionado", detalle: "Con perfil de consumo real" },
  { icon: Database,     kpi: "100%",      label: "Basado en datos reales de operación", detalle: "Sin estimaciones ni benchmarks genéricos" },
];

export default function MetricasEnergia() {
  const navigate = useNavigate();
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Impacto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Resultados tangibles de gran impacto
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {metricas.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={24} />
                </div>
                <span className="font-heading text-2xl font-bold text-primary leading-none">
                  {m.kpi}
                </span>
                <p className="text-xs font-semibold text-foreground leading-snug">{m.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.detalle}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-xs text-center mt-8 max-w-2xl mx-auto"
        >
          Los rangos indicados corresponden a proyectos reales implementados en operaciones industriales de mediana y gran escala.
          Los resultados varían según el perfil de consumo, estructura tarifaria y tipo de operación de cada planta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <button onClick={() => navigate("/articulos/energia")} className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
            Artículos sobre gestión energética <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
