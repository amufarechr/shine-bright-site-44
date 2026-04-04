import { motion } from "framer-motion";
import { Snowflake, Wind, Flame, Zap, Droplets, ArrowRight } from "lucide-react";

const TechnicalSolutionsSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="soluciones" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Soluciones técnicas
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Infraestructura que{" "}
            <span className="text-gradient">maximiza el uso de recursos</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-5 text-base md:text-lg leading-relaxed">
            Integramos sistemas de climatización, energía y gestión de recursos
            para mejorar productividad, reducir costos y aumentar el control de
            tu operación.
          </p>
        </motion.div>

        {/* Block 1 — Climatización (full width) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group bg-card border border-border rounded-xl p-8 md:p-10 mb-6 hover:border-primary/40 hover:glow-box transition-all duration-300"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
              <Snowflake className="text-primary" size={24} />
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Wind size={16} className="text-primary/60" />
              <span>Enfriamiento evaporativo</span>
              <span className="text-border">·</span>
              <span>Ventilación</span>
              <span className="text-border">·</span>
              <Flame size={16} className="text-primary/60" />
              <span>Calefacción</span>
            </div>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-1">
            Climatización Industrial
          </h3>
          <p className="text-primary text-sm font-semibold mb-4">
            Control térmico inteligente
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Diseñamos ambientes térmicos eficientes que impactan directamente en
            la productividad, el confort del personal y el consumo energético de
            la operación.
          </p>
          <button
            onClick={() => scrollTo("contacto")}
            className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Explorar soluciones de climatización
            <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Block 2 & 3 — Two columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Eficiencia Energética */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-card border border-border rounded-xl p-8 hover:border-primary/40 hover:glow-box transition-all duration-300 flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <Zap className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-1">
              Eficiencia Energética
            </h3>
            <p className="text-primary text-sm font-semibold mb-4">
              Energía bajo control
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              Sistemas EMS · Monitoreo y control
            </p>
            <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
              Medimos, analizamos y optimizamos el consumo energético para
              convertirlo en una variable controlada y optimizable.
            </p>
            <button
              onClick={() => scrollTo("contacto")}
              className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Explorar energía
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Gestión de Agua */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-card border border-border rounded-xl p-8 hover:border-primary/40 hover:glow-box transition-all duration-300 flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <Droplets className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-1">
              Gestión de Agua
            </h3>
            <p className="text-primary text-sm font-semibold mb-4">
              Uso eficiente de recursos
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              Tratamiento, gestión y generación de disponibilidad de agua
            </p>
            <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
              Aseguramos la disponibilidad y el uso eficiente del agua como
              recurso crítico en operaciones industriales, comerciales y
              desarrollos residenciales.
            </p>
            <button
              onClick={() => scrollTo("contacto")}
              className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Explorar agua
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Bloque diferencial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="dark-banner rounded-xl p-8 md:p-12 text-center mb-6"
        >
          <p className="text-lg md:text-xl font-heading font-semibold leading-relaxed max-w-3xl mx-auto mb-6">
            "No implementamos tecnologías aisladas.
            <br />
            Diseñamos soluciones en función de cómo opera tu negocio."
          </p>
          <button
            onClick={() => scrollTo("consultoria")}
            className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Conocer nuestro enfoque
            <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-8 md:p-12 text-center"
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
            ¿No estás seguro de qué solución necesitas?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Te ayudamos a diagnosticar y diseñar la mejor alternativa para tu
            operación.
          </p>
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Hablar con un experto
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSolutionsSection;
