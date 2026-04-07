import { motion } from "framer-motion";

const nodes = ["Personas", "Procesos", "Infraestructura"];

const SistemaOperativo = () => (
  <section className="section-padding bg-card">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-2xl md:text-4xl font-bold mb-16"
      >
        El problema no está en un equipo.
      </motion.h2>

      {/* Diagram */}
      <div className="flex flex-col items-center gap-0 mb-14">
        {nodes.map((node, i) => (
          <motion.div
            key={node}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {i > 0 && (
              <div className="flex flex-col items-center py-2">
                <div className="w-px h-5 bg-border" />
                <div className="w-2 h-2 rounded-full border-2 border-primary" />
                <div className="w-px h-5 bg-border" />
              </div>
            )}
            <div
              className={`w-52 py-4 rounded-lg border font-heading font-semibold text-base ${
                i === 1
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-background text-foreground"
              }`}
            >
              {node}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
      >
        El desempeño aparece —o se pierde— en cómo interactúan personas, procesos e infraestructura.
      </motion.p>
    </div>
  </section>
);

export default SistemaOperativo;
