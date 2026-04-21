import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const contextos = [
  {
    titulo: "Naves industriales a partir de 200 m²",
    detalle: "El costo de la refrigeración convencional excede la necesidad",
  },
  {
    titulo: "Espacios abiertos, sin cerramiento hermético",
    detalle: "El evaporativo funciona mejor con renovación de aire — no requiere espacios sellados",
  },
  {
    titulo: "Agroindustria y productos frescos",
    detalle: "La vida de anaquel de los productos frescos aumenta con las mejoras de temperatura y humedad relativa de sus procesos",
  },
  {
    titulo: "Operaciones con alta densidad de personal",
    detalle: "El confort térmico impacta directamente en productividad y ausentismo",
  },
  {
    titulo: "Climas calurosos",
    detalle: "Mayor diferencial térmico disponible, mayor eficiencia del sistema",
  },
];

export default function CuandoAplicaSection() {
  const navigate = useNavigate();
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Cuándo aplica
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 max-w-2xl">
            Esta tecnología es la respuesta correcta cuando...
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {contextos.map((c, i) => (
            <motion.div
              key={c.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3"
            >
              <h3 className="font-heading font-semibold text-sm leading-snug">{c.titulo}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{c.detalle}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap gap-x-8 gap-y-3"
        >
          <button
            onClick={() => navigate("/articulos/enfriamiento-evaporativo")}
            className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Entender más sobre el enfriamiento evaporativo
            <ArrowRight size={15} />
          </button>
          <button
            onClick={() => navigate("/articulos/enfriamiento-evaporativo-agroindustria")}
            className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Aplicación en agroindustria y fruta fresca
            <ArrowRight size={15} />
          </button>
          <button
            onClick={() => navigate("/articulos/enfriamiento-evaporativo-almacenes")}
            className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Aplicación en naves industriales y almacenes
            <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
