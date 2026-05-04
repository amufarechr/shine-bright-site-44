import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import casoAutomotriz from "@/assets/evaporativo/caso-automotriz-lima.jpg";

const casos = [
  {
    id: "automotriz-lima",
    sector: "Automotriz · Lima, Perú",
    titulo: "Sistema de ventilación en concesionario automotriz — showroom y taller integrados",
    situacion:
      "Concesionario con más de 1,000 m² entre showroom y taller mecánico. El showroom requería confort para clientes sin ruido ni corrientes incómodas; el taller necesitaba extracción de calor y vapores sin interferir con la operación.",
    intervencion:
      "Se diseñó un sistema diferenciado: ventiladores Big Ass Fans de techo para el showroom, que crean circulación silenciosa sin mover el aire de manera perceptible, y un sistema de ventilación forzada en el taller para extraer vapores y calor. Sin obras mayores ni paradas de operación.",
    resultados: [
      { label: "Reducción de temperatura percibida", valor: "−8°C" },
      { label: "Inversión vs. A/C convencional", valor: "−70%" },
      { label: "Consumo eléctrico del sistema", valor: "<5 kW" },
    ],
    img: casoAutomotriz,
    linkCaso: true,
  },
];

export default function CasosVentilacion() {
  const navigate = useNavigate();

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
            Caso real
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Resultados concretos en operaciones reales
          </h2>
        </motion.div>

        {casos.map((caso) => (
          <motion.div
            key={caso.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border rounded-xl overflow-hidden"
          >
            {caso.img && (
              <div className="aspect-[16/6] overflow-hidden">
                <img src={caso.img} alt={caso.titulo} className="w-full h-full object-cover object-center" />
              </div>
            )}
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">{caso.sector}</p>
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-6">{caso.titulo}</h3>
              <div className="space-y-3 mb-8">
                <p className="text-sm"><span className="font-semibold">Situación: </span><span className="text-muted-foreground">{caso.situacion}</span></p>
                <p className="text-sm"><span className="font-semibold">Intervención: </span><span className="text-muted-foreground">{caso.intervencion}</span></p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x divide-border mb-6">
                {caso.resultados.map((r, ri) => (
                  <motion.div key={r.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ri * 0.1 }} className="sm:flex-1 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                    <div className="font-heading text-xl font-bold text-primary mb-1">{r.valor}</div>
                    <div className="text-sm text-muted-foreground">{r.label}</div>
                  </motion.div>
                ))}
              </div>
              {caso.linkCaso && (
                <button onClick={() => navigate("/casos")} className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Ver caso completo →
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
