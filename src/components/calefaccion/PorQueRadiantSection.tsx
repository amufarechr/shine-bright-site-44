import { motion } from "framer-motion";
import { Sun, Wind, Zap, ThermometerSun } from "lucide-react";

const razones = [
  {
    icon: Sun,
    titulo: "Calienta personas y superficies, no el aire",
    texto:
      "La radiación infrarroja transfiere energía directamente a los objetos que encuentra — personas, animales, pisos, maquinaria. No necesita el aire como intermediario. Esto lo hace eficaz incluso en espacios que se ventilan constantemente o no tienen cerramiento hermético.",
  },
  {
    icon: Wind,
    titulo: "Funciona donde el aire caliente no puede",
    texto:
      "En espacios semi-abiertos — naves con puertas activas, andenes de carga, terrazas, galpones con ventilación forzada — el aire caliente se escapa antes de llegar a las personas. El infrarrojo llega de todas formas, porque viaja en línea directa como la luz solar.",
  },
  {
    icon: Zap,
    titulo: "Hasta 50% menos consumo que convencional",
    texto:
      "Al no tener que calentar el volumen completo de aire de un espacio, los sistemas radiantess requieren significativamente menos energía para producir el mismo nivel de confort. Los modelos de gas (SRP) alcanzan hasta 94% de eficiencia térmica; los eléctricos (BAF), 90% de eficiencia radiante.",
  },
  {
    icon: ThermometerSun,
    titulo: "Confort inmediato sin inercia térmica",
    texto:
      "A diferencia de los sistemas de aire caliente que tardan en estabilizar la temperatura del espacio, el infrarrojo produce sensación de calor en segundos desde el encendido. Ideal para espacios con uso intermitente — una terraza de restaurante, una nave con turnos alternados, un galpón de crianza.",
  },
];

export default function PorQueRadiantSection() {
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
            La tecnología
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Por qué usar calefacción radiante infrarroja
          </h2>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            El sol calienta la tierra sin calentar el espacio vacío entre ambos. El infrarrojo industrial funciona con el mismo principio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {razones.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-7 flex gap-5"
              >
                <div className="bg-primary/10 rounded-lg p-2.5 shrink-0 h-fit">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base mb-2">{r.titulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.texto}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
