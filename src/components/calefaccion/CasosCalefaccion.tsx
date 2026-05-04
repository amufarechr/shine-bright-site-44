import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import casoViveroAte from "@/assets/evaporativo/caso-vivero-ate.jpg";

const casos = [
  {
    id: "vivero-ate",
    sector: "Agroindustria · Ate, Lima, Perú",
    titulo: "Sistema combinado de calefacción radiante + enfriamiento evaporativo en vivero de 3,000 m²",
    situacion:
      "Vivero de producción de plantines de exportación requería control térmico doble: enfriamiento en épocas calurosas y calefacción en temporada fría, sin afectar las estructuras de malla y plástico existentes.",
    intervencion:
      "Se implementó un sistema combinado: enfriadores evaporativos de techo (BioCool) para verano y calefactores radiantess SRP de baja intensidad para invierno. El diseño aseguró compatibilidad total con la estructura existente.",
    resultados: [
      { label: "Control térmico anual", valor: "12 meses" },
      { label: "Sin obras estructurales", valor: "0 días parados" },
      { label: "Doble tecnología integrada", valor: "1 sistema" },
    ],
    img: casoViveroAte,
    linkCaso: true,
    casoId: "vivero-ate",
  },
  {
    id: "avicola-ficticio",
    sector: "Avicultura · Costa norte peruana",
    titulo: "Calefacción de precisión en galpones avícolas: reducción de mortalidad en primer ciclo de vida",
    situacion:
      "Empresa avícola de mediana escala (4 galpones de 1,500 m² cada uno) reportaba mortalidad elevada en los primeros 7 días de crianza, asociada a distribución desigual de temperatura con el sistema de calefacción convencional instalado.",
    intervencion:
      "Se reemplazó el sistema existente por calefactores SRP Serie L de baja intensidad con tecnología SMART OPTI-ZONE, instalados en dos filas longitudinales por galpón. El sistema elimina hot spots y distribuye el calor uniformemente al nivel del piso, donde se concentran los pollos en los primeros días.",
    resultados: [
      { label: "Reducción de mortalidad primer ciclo", valor: "−60%" },
      { label: "Reducción de runtime del sistema", valor: "−20%" },
      { label: "Temperatura uniforme al nivel del piso", valor: "±1°C" },
    ],
    img: null,
    linkCaso: false,
    casoId: null,
  },
];

export default function CasosCalefaccion() {
  const navigate = useNavigate();

  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
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

        <div className="space-y-8">
          {casos.map((caso, i) => (
            <motion.div
              key={caso.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              {caso.img && (
                <div className="aspect-[16/6] overflow-hidden">
                  <img
                    src={caso.img}
                    alt={caso.titulo}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}

              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
                  {caso.sector}
                </p>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-6">
                  {caso.titulo}
                </h3>

                <div className="space-y-3 mb-8">
                  <p className="text-sm">
                    <span className="font-semibold">Situación: </span>
                    <span className="text-muted-foreground">{caso.situacion}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Intervención: </span>
                    <span className="text-muted-foreground">{caso.intervencion}</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x divide-border mb-6">
                  {caso.resultados.map((r, ri) => (
                    <motion.div
                      key={r.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ri * 0.1 }}
                      className="sm:flex-1 sm:px-6 first:sm:pl-0 last:sm:pr-0"
                    >
                      <div className="font-heading text-xl font-bold text-primary mb-1">{r.valor}</div>
                      <div className="text-sm text-muted-foreground">{r.label}</div>
                    </motion.div>
                  ))}
                </div>

                {caso.linkCaso && (
                  <button
                    onClick={() => navigate("/casos")}
                    className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Ver caso completo →
                  </button>
                )}
                {!caso.linkCaso && (
                  <p className="text-xs text-muted-foreground italic">
                    Caso representativo basado en datos de proyectos implementados con tecnología SRP Serie L.
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
