import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import casoChincha from "@/assets/evaporativo/caso-chincha.jpg";

const resultados = [
  { periodo: "Semana 1", label: "Reducción de 9°C en zona de trabajo principal" },
  { periodo: "Mes 1", label: "−50% en ausentismo por calor" },
  { periodo: "Menores costos", label: "Inversión en solución 80% menor que alternativa de refrigeración industrial, con 90% menos de consumo eléctrico" },
];

export default function CasoRealSection() {
  const navigate = useNavigate();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Casos reales
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Resultados concretos en operaciones reales
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border rounded-xl overflow-hidden"
        >
          {/* Foto */}
          <div className="aspect-[16/6] overflow-hidden">
            <img
              src={casoChincha}
              alt="Planta de clasificación y empaque de huevos — Chincha, Perú"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              Agroindustria · Chincha, Perú
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-6">
              Reducción de 9°C en planta de clasificación y empaque de huevos, implementada en solo 4 días
            </h3>

            <div className="space-y-3 mb-8">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Situación: </span>
                <span className="text-muted-foreground">
                  Planta de 3,000 m² con alta temperatura por la tarde, que afectaba maquinaria de alta sensibilidad y generaba ausentismo.
                </span>
              </p>
              <p className="text-sm text-foreground">
                <span className="font-semibold">Intervención: </span>
                <span className="text-muted-foreground">
                  Diseño de sistema evaporativo Big Ass Fans y extractores de aire, con distribución inteligente que logró reducir la temperatura de operación por debajo de 25°C, sin mayor intervención de obras civiles ni paradas de operación.
                </span>
              </p>
            </div>

            {/* Timeline de resultados */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x divide-border">
              {resultados.map((r, i) => (
                <motion.div
                  key={r.periodo}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="sm:flex-1 sm:px-6 first:sm:pl-0 last:sm:pr-0"
                >
                  <div className="text-xs font-semibold text-primary mb-1">{r.periodo}</div>
                  <div className="text-sm text-foreground">{r.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8"
        >
          <button
            onClick={() => scrollTo("contacto")}
            className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Evaluar mi operación →
          </button>
          <button
            onClick={() => navigate("/casos")}
            className="text-muted-foreground font-semibold inline-flex items-center gap-2 hover:gap-3 hover:text-primary transition-all"
          >
            Ver todos los casos →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
