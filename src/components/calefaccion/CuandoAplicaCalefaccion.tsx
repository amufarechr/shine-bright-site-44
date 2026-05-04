import { motion } from "framer-motion";
import { Factory, Bird, Sprout, Utensils } from "lucide-react";

const aplicaciones = [
  {
    icon: Factory,
    titulo: "Naves industriales, talleres, almacenes y andenes",
    detalle:
      "Espacios sin cerramiento hermético donde el aire caliente no retiene: zonas de carga y descarga con puertas activas, talleres de manufactura con ventilación obligatoria, naves de gran altura donde el calor se estratifica lejos de las personas. El infrarrojo calienta directamente sin importar lo que pase con el aire.",
  },
  {
    icon: Bird,
    titulo: "Galpones avícolas y granjas",
    detalle:
      "La temperatura en las primeras semanas de vida determina la productividad de todo el ciclo. Los sistemas SRP de baja intensidad para agricultura (Serie L/LT, Brooders) distribuyen calor uniforme al nivel del piso — donde viven los pollos — eliminando los hot spots que generan aglomeración y mortalidad. Reducción de runtime de hasta 20%.",
  },
  {
    icon: Sprout,
    titulo: "Invernaderos y viveros con control térmico de cultivo",
    detalle:
      "Los cultivos requieren temperatura de suelo y ambiente controlada, especialmente en épocas frías. El infrarrojo de baja intensidad es compatible con estructuras plásticas y de malla, sin riesgo de daño térmico a las plantas. Ideal para producción de plantines, flores de exportación y cultivos hidropónicos.",
  },
  {
    icon: Utensils,
    titulo: "Terrazas y patios de restaurantes, bares y hoteles",
    detalle:
      "La diferencia entre una terraza abierta que opera 12 meses al año y una que cierra en temporada fría es un sistema de calefacción exterior correcto. SRP Luxury Outdoor (evenTUBE, evenGLO, Habanero, eWAVE) y Big Ass Fans Heaters cubren todos los formatos: suspendido en techo, pedestal portátil o pared.",
  },
];

export default function CuandoAplicaCalefaccion() {
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
