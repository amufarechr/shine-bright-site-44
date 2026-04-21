import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const casos = [
  {
    id: "lurin",
    sector: "Industrial · Lurín, Perú",
    titulo: "Optimización operativa en planta industrial",
    proximamente: true,
  },
  {
    id: "pesca",
    sector: "Pesca · Litoral peruano",
    titulo: "Mejora de eficiencia operativa en flota pesquera",
    proximamente: true,
  },
];

const CasosReales = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Casos reales
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold mt-3">
            Resultados concretos en operaciones reales
          </h2>
        </motion.div>

        <div className="space-y-4">
          {casos.map((caso, i) => (
            <motion.div
              key={caso.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate("/casos")}
              className="border border-border rounded-xl p-8 hover:border-primary/40 hover:glow-box transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                    {caso.sector}
                  </span>
                  <h3 className="font-heading font-semibold text-base mt-2 mb-3">
                    {caso.titulo}
                  </h3>
                  {caso.proximamente && (
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      Próximamente
                    </span>
                  )}
                </div>
                <ArrowRight
                  size={18}
                  className="text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <button
            onClick={() => navigate("/casos")}
            className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Ver todos los casos de éxito
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CasosReales;
