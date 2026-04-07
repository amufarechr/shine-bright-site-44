import { motion } from "framer-motion";

const results = [
  { metric: "+20% throughput", desc: "Menor acumulación en proceso crítico" },
  { metric: "Menos paros", desc: "Operación más estable" },
  { metric: "Menos retrabajo", desc: "Mejor coordinación entre áreas" },
  { metric: "Menor consumo total", desc: "No solo en un equipo" },
];

const ResultadosOperativos = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-2xl md:text-4xl font-bold text-center mb-14"
      >
        Resultados en la operación
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {results.map((r, i) => (
          <motion.div
            key={r.metric}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-border rounded-lg p-6"
          >
            <div className="font-heading text-xl md:text-2xl font-bold text-primary mb-2">{r.metric}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultadosOperativos;
