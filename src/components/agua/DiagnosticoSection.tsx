import { motion } from "framer-motion";

const problemas = [
  {
    titulo: "Dependencia de infraestructura municipal",
    descripcion:
      "Las operaciones dependen de redes de distribución vulnerables a cortes, contaminación y restricciones de suministro.",
  },
  {
    titulo: "Costos crecientes de agua potable",
    descripcion:
      "Las tarifas de agua suben sostenidamente. Sin alternativas propias, el costo operativo escala sin control.",
  },
  {
    titulo: "Calidad de agua no garantizada",
    descripcion:
      "El agua de red no siempre cumple estándares para uso industrial o de consumo humano en volumen. Se requiere tratamiento adicional.",
  },
  {
    titulo: "Locaciones sin acceso a red",
    descripcion:
      "Proyectos remotos — agrícolas, mineros, comunitarios — no tienen acceso a infraestructura hídrica confiable.",
  },
  {
    titulo: "Alta huella de agua embotellada",
    descripcion:
      "El agua embotellada genera costos elevados, residuos plásticos y logística compleja para operaciones de mediano y gran volumen.",
  },
  {
    titulo: "Escasez hídrica en zonas áridas",
    descripcion:
      "Perú y México tienen zonas con estrés hídrico severo. La dependencia de fuentes superficiales o subterráneas es cada vez más riesgosa.",
  },
];

export default function DiagnosticoSection() {
  return (
    <section id="diagnostico" className="section-padding pb-10 lg:pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Situación Sub-óptima
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 max-w-3xl mx-auto">
            La disponibilidad de agua es un riesgo operativo que pocas empresas
            gestionan proactivamente
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problemas.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <h3 className="font-heading font-semibold text-base">{p.titulo}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-5">
                {p.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
