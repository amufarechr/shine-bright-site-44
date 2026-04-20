import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import casoChincha from "@/assets/evaporativo/caso-chincha.jpg";
import casoIca from "@/assets/evaporativo/caso-ica.jpg";
import casoCallao from "@/assets/evaporativo/caso-callao.jpg";

const casos = [
  {
    id: "01",
    sector: "Agroindustria · Chincha, Perú",
    titulo: "Reducción de 9°C en planta de clasificación y empaque de huevos, implementada en solo 4 días",
    antes: "Planta de 3,000 m² con alta temperatura por la tarde, que afectaba maquinaria de alta sensibilidad y generaba ausentismo.",
    intervencion: "Diseño de sistema evaporativo Big Ass Fans y extractores de aire, con distribución inteligente que logró reducir la temperatura de operación por debajo de 25°C, sin mayor intervención de obras civiles ni paradas de operación.",
    foto: casoChincha,
    resultados: [
      { periodo: "Semana 1", label: "−9°C en zona de trabajo principal" },
      { periodo: "Mes 1", label: "−50% en ausentismo por calor" },
      { periodo: "Menores costos", label: "Inversión 80% menor que alternativa de refrigeración industrial, con 90% menos de consumo eléctrico" },
    ],
  },
  {
    id: "02",
    sector: "Agroindustria · Ica, Perú",
    titulo: "Mejora de condiciones de packing de uva: −35% de deshidratación y mayor confort para 500 colaboradores",
    antes: "Empaque de más de 5,000 m² con áreas de recepción, clasificación y empaque. Las altas temperaturas del verano generaban deshidratación de la fruta y reducción de vida de anaquel.",
    intervencion: "Implementación de flujo integral de aire combinando enfriadores Portacool con salidas superiores de aire caliente.",
    foto: casoIca,
    resultados: [
      { periodo: "Condiciones", label: "Humedad relativa >80% y temperatura de trabajo <25°C" },
      { periodo: "Producto", label: "−35% en tasa de deshidratación de fruta (<0.1%/hr)" },
      { periodo: "Rentabilidad", label: "+20% de incremento en utilidad neta por operación post-cosecha" },
    ],
  },
  {
    id: "03",
    sector: "Logística · Callao, Perú",
    titulo: "Almacén de 6,000 m² de productos farmacéuticos con temperatura controlada — 85% menos de inversión que la alternativa evaluada",
    antes: "Centro de distribución de productos farmacéuticos en Callao requería implementación para cumplimiento regulatorio. La alternativa inicialmente evaluada de refrigeración industrial excedía el presupuesto considerado.",
    intervencion: "Se identificó distribución óptima de flujo adaptada al diseño existente de pasillos, y se implementaron enfriadores evaporativos de alto caudal complementados por extractores eólicos de techo.",
    foto: casoCallao,
    resultados: [
      { periodo: "Cumplimiento", label: "Temperatura garantizada por debajo de los 27°C requeridos" },
      { periodo: "Inversión", label: "Costo de instalación 85% menor a la alternativa originalmente evaluada" },
      { periodo: "Energía", label: "Solo 20 kW de potencia consumida vs. +180 kW de sistema de refrigeración convencional" },
    ],
  },
];

export default function CasosRealesSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Casos reales
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold mt-3">
            Resultados concretos en operaciones reales
          </h2>
        </motion.div>

        <div className="space-y-6">
          {casos.map((caso, i) => (
            <motion.div
              key={caso.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              {caso.foto && (
                <div className="aspect-[16/6] overflow-hidden">
                  <img
                    src={caso.foto}
                    alt={caso.titulo}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                  {caso.sector}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold mb-6">{caso.titulo}</h3>

              <div className="space-y-3 mb-8">
                <p className="text-foreground text-sm">
                  <span className="font-semibold">Situación inicial: </span>
                  <span className="text-muted-foreground">{caso.antes}</span>
                </p>
                <p className="text-foreground text-sm">
                  <span className="font-semibold">Intervención: </span>
                  <span className="text-muted-foreground">{caso.intervencion}</span>
                </p>
              </div>

              {/* Timeline */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x divide-border">
                {caso.resultados.map((r, j) => (
                  <motion.div
                    key={r.periodo}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    className="sm:flex-1 sm:px-6 first:sm:pl-0 last:sm:pr-0"
                  >
                    <div className="text-xs font-semibold text-primary mb-1">{r.periodo}</div>
                    <div className="text-sm text-foreground">{r.label}</div>
                  </motion.div>
                ))}
              </div>
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
            onClick={() => scrollTo("contacto")}
            className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Evaluar mi operación
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
