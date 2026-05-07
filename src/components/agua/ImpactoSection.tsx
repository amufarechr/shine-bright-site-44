import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Zap, MapPin, Building2, Leaf, ArrowRight } from "lucide-react";

const impactos = [
  {
    icon: Droplets,
    valor: "99.9%",
    label: "Pureza del agua tratada",
  },
  {
    icon: Zap,
    valor: "50%",
    label: "Menos energía vs. sistemas AWG convencionales (Waha)",
  },
  {
    icon: MapPin,
    valor: "Sin red",
    label: "Operación independiente de infraestructura hídrica",
  },
  {
    icon: Building2,
    valor: "3 segmentos",
    label: "Residencial · Comercial · Industrial",
  },
  {
    icon: Leaf,
    valor: "0 plástico",
    label: "Eliminación de agua embotellada en operaciones",
  },
];

export default function ImpactoSection() {
  const navigate = useNavigate();
  return (
    <section id="impacto" className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Impacto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Lo que cambia cuando el agua deja de ser un problema
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {impactos.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3"
            >
              <item.icon className="text-primary" size={28} />
              <p className="font-heading text-2xl font-bold text-primary">{item.valor}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <button onClick={() => navigate("/articulos/agua")} className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
            Artículos sobre gestión de agua <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
