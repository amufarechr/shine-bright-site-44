import { motion } from "framer-motion";

const sintomas = [
  {
    num: "01",
    titulo: "La factura eléctrica sube, pero nadie sabe exactamente por qué",
    detalle:
      "El consumo total llega como un número global. No hay visibilidad de qué cargas son las más costosas, cuándo consumen más ni si están operando de forma eficiente.",
  },
  {
    num: "02",
    titulo: "Los equipos encienden y apagan sin criterio de costo",
    detalle:
      "Compresores, bombas, hornos y sistemas HVAC arrancan por inercia operativa — no por señales de demanda real. La simultaneidad de arranques genera picos de demanda que se facturan caro.",
  },
  {
    num: "03",
    titulo: "La tarifa horaria no se aprovecha",
    detalle:
      "En estructuras tarifarias con diferencial día/noche o punta/valle, operar sin lógica horaria puede representar entre un 15% y un 30% de sobrecosto evitable en la factura mensual.",
  },
  {
    num: "04",
    titulo: "La energía renovable se evalúa sin datos de base",
    detalle:
      "Instalar generación solar o eólica sin un perfil de consumo preciso lleva a sistemas mal dimensionados — sobredimensionados y costosos, o subdimensionados e ineficaces.",
  },
];

export default function ElProblema() {
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            El problema
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            El gasto energético crece sin que nadie lo gobierne
          </h2>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            En la mayoría de las operaciones industriales, la energía es el segundo o tercer
            rubro de costo — pero el menos instrumentado. Se gestiona reactivamente, no estratégicamente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {sintomas.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-primary font-bold text-sm">{s.num}</span>
                <h3 className="font-heading font-semibold text-base leading-snug">{s.titulo}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-7">{s.detalle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
