import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import climatizacionHero from "@/assets/climatizacion/hero.jpg";

const TechnicalSolutionsSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="soluciones" className="section-padding pb-10 lg:pb-16 bg-background">
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
            Integramos sistemas de climatización, energía y agua para mejorar
            productividad, reducir costos y aumentar el control de tu operación.
          </p>
        </motion.div>

        {/* Block 1 — Climatización (full width with image) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group bg-card border border-border rounded-xl overflow-hidden mb-6 hover:border-primary/40 hover:glow-box transition-all duration-300"
        >
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="aspect-[4/3] md:aspect-auto min-h-[250px] overflow-hidden">
              <img src={climatizacionHero} alt="Climatización industrial" className="w-full h-full object-cover" />
            </div>
            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm mb-4">
                <span>Enfriamiento evaporativo</span>
                <span className="text-border">·</span>
                <span>Ventilación</span>
                <span className="text-border">·</span>
                <span>Calefacción</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-1">
                Climatización Industrial
              </h3>
              <p className="text-primary text-sm font-semibold mb-4">
                Control térmico inteligente
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
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
            </div>
          </div>
        </motion.div>

        {/* Block 2 & 3 — Two columns with images */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Gestión Energética */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:glow-box transition-all duration-300 flex flex-col"
          >
            {/* Image placeholder */}
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Foto gestión energética</span>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-1">
                Gestión Energética
              </h3>
              <p className="text-primary text-sm font-semibold mb-4">
                Energía bajo control
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                EMS (Energy Management) · Monitoreo y control
              </p>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                Instalamos sistemas de medición, análisis y control de consumo energético para
                convertirlo en una variable controlada y optimizable.
              </p>
              <button
                onClick={() => scrollTo("contacto")}
                className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explorar energía
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Gestión de Agua */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:glow-box transition-all duration-300 flex flex-col"
          >
            {/* Image placeholder */}
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Foto gestión de agua</span>
            </div>
            <div className="p-8 flex flex-col flex-1">
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
            </div>
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
