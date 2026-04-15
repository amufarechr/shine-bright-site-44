import { motion } from "framer-motion";

const dimensiones = [
  {
    nombre: "Personas",
    pregunta: "¿Están tomando las decisiones correctas, con la información correcta, en el momento correcto?",
    sintomas: [
      "Falta de información integral, fácilmente disponible, para la toma de decisiones diarias de operación",
      "Decisiones no planeadas que se vuelven rutina",
      "Coordinación entre áreas que funciona por excepción, no por diseño",
    ],
  },
  {
    nombre: "Procesos",
    pregunta: "¿El sistema fluye, o se acumula en algún punto?",
    sintomas: [
      "Cuellos de botella que todos conocen pero nadie ha resuelto",
      "Falta de predictibilidad por variabilidad descontrolada y segmentación innecesaria",
      "Capacidad real muy por debajo de la capacidad instalada",
    ],
  },
  {
    nombre: "Infraestructura",
    pregunta: "¿Los equipos están al servicio de la operación, o la operación se adapta a los equipos?",
    sintomas: [
      "Sobreconsumo energético por uso fuera de condiciones óptimas",
      "Capacidad mal distribuida entre etapas del proceso",
      "Paros no programados que revelan mantenimiento reactivo",
    ],
  },
];

const DiagnosticoInicialSection = () => (
  <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          Diagnóstico inicial
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 max-w-2xl">
          Cuando entramos a una operación, buscamos tres cosas
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {dimensiones.map((d, i) => (
          <motion.div
            key={d.nombre}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">
              {d.nombre}
            </p>
            <p className="font-heading font-semibold text-base text-foreground mb-6 leading-snug">
              "{d.pregunta}"
            </p>
            <ul className="space-y-3">
              {d.sintomas.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="dark-banner rounded-xl px-8 py-6 md:px-12 md:py-8"
      >
        <p className="font-heading text-lg md:text-xl font-semibold text-center max-w-2xl mx-auto">
          Casi siempre encontramos las tres.{" "}
          <span className="text-primary">
            La mejora real requiere trabajar en las tres — y en el orden correcto.
          </span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default DiagnosticoInicialSection;
