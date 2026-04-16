import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const casos = [
  {
    id: "01",
    sector: "Agroindustria · Perú",
    titulo: "Reducción de temperatura operativa en planta de empaque",
    antes: "Temperatura promedio de 34°C en planta. Alta tasa de rotación de personal y merma por calor en producto.",
    intervencion: "Instalación de sistema de enfriamiento evaporativo Big Ass Fans con diseño de flujo direccionado por zonas críticas.",
    resultados: [
      { periodo: "Primeras 2 semanas", label: "Reducción de 8°C en zona de trabajo" },
      { periodo: "Mes 1", label: "Caída de 40% en ausentismo por calor" },
      { periodo: "Mes 3+", label: "Ahorro energético vs. solución de A/C convencional" },
    ],
  },
  {
    id: "02",
    sector: "Manufactura · México",
    titulo: "Climatización de nave industrial con ventilación deficiente",
    antes: "Nave de 3,000 m² sin ventilación cruzada. Acumulación de calor radiante en techo metálico. Operarios trabajando a más de 38°C.",
    intervencion: "Sistema de ventilación industrial con ventiladores HVLS Big Ass Fans y extractores estratégicos. Rediseño del flujo de aire.",
    resultados: [
      { periodo: "Instalación", label: "Temperatura percibida reducida en 10°C" },
      { periodo: "Mes 2", label: "Productividad recuperada en turnos de tarde" },
      { periodo: "Permanente", label: "Cero equipos de A/C — ahorro en OPEX energético" },
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
              className="border border-border rounded-xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                  Caso {caso.id}
                </span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground font-medium">{caso.sector}</span>
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
