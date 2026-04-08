import { motion } from "framer-motion";
import alvaroImg from "@/assets/alvaro.png";
import franzImg from "@/assets/franz.png";

const socios = [
  {
    name: "Álvaro Mufarech",
    role: "Estrategia operativa y transformación",
    img: alvaroImg,
    bio: "Ingeniero y operador con experiencia liderando transformaciones operativas en entornos industriales y agroindustriales.\n\nMBA y MS por MIT, ex Bain&Co. Ha ejecutado rediseños operativos de gran escala, mejora de throughput y proyectos con impacto directo en desempeño y rentabilidad.",
    expertise: [
      "Throughput y capacidad",
      "Rediseño operativo",
      "Eficiencia energética",
      "Implementación en campo",
    ],
  },
  {
    name: "Franz Hudtwalcker",
    role: "Operación y ejecución en campo",
    img: franzImg,
    bio: "Ingeniero con experiencia en implementación y ejecución de proyectos industriales, enfocado en operación, mantenimiento y confiabilidad.\n\nMBA por MIT. Experiencia en ejecución en planta y gestión de operaciones en entornos exigentes, incluyendo Amazon. Asegura que las soluciones funcionen en la operación real.",
    expertise: [
      "Ejecución en planta",
      "Mantenimiento y confiabilidad",
      "Procesos industriales",
      "Seguridad operativa",
    ],
  },
];

const NuestraExperiencia = () => (
  <section className="section-padding bg-muted/40">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-2xl md:text-4xl font-bold text-center mb-4"
      >
        Nuestra experiencia detrás de cada proyecto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed"
      >
        Las mejoras operativas no se sostienen desde el escritorio. Requieren experiencia real operando, implementando y corrigiendo sistemas en planta.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {socios.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl overflow-hidden"
          >
            <img
              src={s.img}
              alt={s.name}
              className="w-full aspect-square object-cover"
            />
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-foreground">{s.name}</h3>
              <p className="text-primary text-sm font-semibold mb-4">{s.role}</p>
              {s.bio.split("\n\n").map((p, j) => (
                <p key={j} className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              <ul className="mt-4 space-y-1.5">
                {s.expertise.map((e) => (
                  <li key={e} className="text-sm text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NuestraExperiencia;
