import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import funcionamientoImg from "@/assets/evaporativo/funcionamiento.jpeg";

const metricas = [
  { valor: "10x", label: "Menos consumo energético que refrigeración convencional" },
  { valor: "90%", label: "Menor costo operativo eléctrico" },
  { valor: "Sin obras", label: "No requiere infraestructura de ductos ni sellos herméticos" },
];

export default function TecnologiaSection() {
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
            Tecnología
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 max-w-2xl">
            Cómo funciona el enfriamiento evaporativo
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Explicación */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              El principio es simple: el agua absorbe calor al evaporarse. Los sistemas evaporativos industriales aprovechan este fenómeno para enfriar grandes volúmenes de aire con un consumo energético hasta 10 veces menor que un sistema de refrigeración convencional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A diferencia del aire acondicionado, no requiere espacios cerrados — funciona mejor en entornos semi-abiertos con flujo de aire, lo que lo hace ideal para naves industriales, plantas de producción y centros de distribución.
            </p>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {metricas.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5 text-center"
                >
                  <p className="font-heading text-2xl font-bold text-primary mb-1">{m.valor}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{m.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <button
                onClick={() => navigate("/articulos/climatizacion")}
                className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Entender más sobre el enfriamiento evaporativo
                <ArrowRight size={15} />
              </button>
            </motion.div>
          </motion.div>

          {/* Imágenes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden bg-white p-4">
              <img
                src={funcionamientoImg}
                alt="Diagrama de funcionamiento del enfriamiento evaporativo"
                className="w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
