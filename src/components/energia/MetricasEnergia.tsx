import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const metricas = [
  {
    valor: "15–30%",
    label: "Reducción típica en factura eléctrica",
    detalle: "Solo con monitoreo y automatización, antes de renovables",
  },
  {
    valor: "<18 meses",
    label: "Payback típico del sistema de monitoreo",
    detalle: "Retorno rápido sobre una inversión base relativamente baja",
  },
  {
    valor: "3–6 años",
    label: "Payback típico de sistema solar bien dimensionado",
    detalle: "Con perfil de consumo real como base del dimensionamiento",
  },
  {
    valor: "100%",
    label: "Basado en datos de la operación real",
    detalle: "Sin estimaciones ni benchmarks genéricos de industria",
  },
];

export default function MetricasEnergia() {
  const navigate = useNavigate();
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl font-bold text-center mb-14"
        >
          Órdenes de magnitud esperados
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metricas.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-xl p-6"
            >
              <div className="font-heading text-3xl font-bold text-primary mb-2">{m.valor}</div>
              <p className="font-semibold text-sm mb-1">{m.label}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{m.detalle}</p>
            </motion.div>
          ))}
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
