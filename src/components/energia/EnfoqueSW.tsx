import { motion } from "framer-motion";

const diferenciadores = [
  {
    titulo: "Empezamos midiendo, no vendiendo",
    texto:
      "Antes de recomendar cualquier solución, hacemos un diagnóstico de consumo real. No dimensionamos sistemas en base a supuestos — los datos mandan.",
  },
  {
    titulo: "Cada capa tiene que justificarse sola",
    texto:
      "El monitoreo tiene su propio retorno. La automatización también. La renovable también. No empaquetamos soluciones: cada intervención se evalúa y aprueba por su propio mérito financiero.",
  },
  {
    titulo: "Integración con la operación real",
    texto:
      "Los sistemas que implementamos se integran al ritmo y la lógica de la planta — no al revés. La curva de adopción es mínima porque el diseño parte de cómo funciona realmente la operación.",
  },
  {
    titulo: "Seguimiento post-implementación",
    texto:
      "Medimos el resultado contra la línea base establecida al inicio. El ahorro prometido se verifica con datos — no con estimaciones ex-post.",
  },
];

export default function EnfoqueSW() {
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Nuestro enfoque
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 max-w-2xl">
            Ahorro energético que se puede medir
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {diferenciadores.map((d, i) => (
            <motion.div
              key={d.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5"
            >
              <span className="text-primary font-bold text-2xl font-heading shrink-0 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-heading font-semibold text-base mb-2">{d.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.texto}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
