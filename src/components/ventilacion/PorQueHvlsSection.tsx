import { motion } from "framer-motion";
import { Wind, Thermometer, Zap, Shield } from "lucide-react";

const razones = [
  {
    icon: Wind,
    titulo: "Gran volumen de aire, baja velocidad — el principio HVLS",
    texto:
      "Un ventilador HVLS de 7 metros de diámetro girando a 60 RPM mueve más aire que decenas de ventiladores industriales convencionales a máxima potencia. La clave está en la aerodinámica: aspas grandes que actúan como alas, empujando columnas de aire hacia abajo que se distribuyen a nivel del piso creando una brisa uniforme en toda el área.",
  },
  {
    icon: Thermometer,
    titulo: "Mejora la distribución de temperatura eliminando bolsillos de calor",
    texto:
      "Un Powerfoil X3.0 de 7 metros opera con un motor de 1.5 kW. A tarifas industriales típicas, son menos de 2 USD por turno de 8 horas para cubrir más de 1,200 m² con flujo de aire uniforme. La comparación con sistemas de A/C convencional equivalentes — que requieren 15–25 kW para el mismo espacio — no tiene punto de comparación.",
  },
  {
    icon: Thermometer,
    titulo: "Hasta 30% de ahorro en calefacción en invierno",
    texto:
      "El aire caliente sube. En naves industriales con techo alto, el calor generado por la calefacción se acumula a 8–12 metros de altura, lejos de las personas. Un ventilador HVLS en modo inverso baja suavemente ese aire caliente a nivel de ocupación, reduciendo el delta térmico y con ello el consumo del sistema de calefacción.",
  },
  {
    icon: Zap,
    titulo: "Costo operativo mínimo — pennies por día",
    texto:
      "Un Powerfoil X3.0 de 7 metros opera con un motor de 1.5 kW. A tarifas industriales típicas en Perú o México, ese es menos de 1 USD por turno de 8 horas para cubrir más de 1,500 m² con flujo de aire uniforme. La comparación con sistemas de A/C convencional equivalentes — que requieren 15–50 kW para el mismo espacio — no tiene punto de comparación.",
  },
];

export default function PorQueHvlsSection() {
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
            Por qué los ventiladores HVLS transforman el confort industrial
          </h2>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            High Volume, Low Speed. El principio que hace posible mover enormes masas de aire
            con una fracción del consumo eléctrico de las soluciones convencionales.
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
