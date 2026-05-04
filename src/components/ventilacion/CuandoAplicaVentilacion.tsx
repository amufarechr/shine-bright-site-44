import { motion } from "framer-motion";
import { Factory, ShoppingBag, Tractor, Dumbbell } from "lucide-react";

const aplicaciones = [
  {
    icon: Factory,
    titulo: "Naves industriales, talleres y almacenes",
    detalle:
      "El caso de uso principal de los HVLS industriales. Naves de manufactura, centros de distribución, talleres automotrices, plantas de proceso — cualquier espacio de más de 500 m² con techo de más de 5 metros donde el aire estancado afecta la comodidad y productividad del equipo. Un solo Powerfoil X3.0 de 7.3 metros puede cubrir hasta 1,500 m².",
  },
  {
    icon: Tractor,
    titulo: "Establos, galpones y espacios agrícolas",
    detalle:
      "La ventilación en instalaciones pecuarias tiene impacto directo en producción: reduce el estrés calórico en bovinos, disipa olores y humedad, y mejora la calidad del aire. Big Ass Fans tiene casos documentados en establos lecheros donde la combinación de HVLS y directional fans (Yellow Jacket) mejoró producción y condición del hato.",
  },
  {
    icon: ShoppingBag,
    titulo: "Espacios comerciales de gran formato",
    detalle:
      "Aeropuertos, centros de convenciones, food courts de gran escala, lobbies de hoteles — espacios donde el volumen de aire es enorme y el A/C convencional es inviable o prohibitivamente caro. Los ventiladores comerciales de Big Ass Fans (Essence, i6) combinan rendimiento aerodinámico con diseño que se integra al ambiente.",
  },
  {
    icon: Dumbbell,
    titulo: "Gimnasios, arenas y espacios deportivos",
    detalle:
      "Los espacios deportivos requieren circulación de aire constante para confort de practicantes y espectadores, sin el ruido ni el frío puntual de los sistemas de A/C. Los ventiladores HVLS crean una brisa uniforme en toda la cancha o sala — sin corrientes molestas, sin puntos fríos, sin ruido que compita con la actividad.",
  },
];

export default function CuandoAplicaVentilacion() {
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Cuándo aplica
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Esta tecnología es la respuesta correcta cuando...
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {aplicaciones.map((ap, i) => {
            const Icon = ap.icon;
            return (
              <motion.div
                key={ap.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background border border-border rounded-xl p-7 flex gap-5"
              >
                <div className="bg-primary/10 rounded-lg p-2.5 shrink-0 h-fit mt-0.5">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base mb-2 leading-snug">{ap.titulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ap.detalle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
