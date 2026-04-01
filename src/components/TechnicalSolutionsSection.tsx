import { motion } from "framer-motion";
import { Snowflake, Wind, Flame, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Snowflake,
    title: "Enfriamiento",
    description: "Sistemas de refrigeración industrial de alta eficiencia para plantas de producción, almacenes y procesos críticos.",
    cta: "Ver soluciones de enfriamiento",
  },
  {
    icon: Wind,
    title: "Ventilación",
    description: "Diseño e instalación de sistemas de ventilación industrial que garantizan calidad de aire y confort térmico.",
    cta: "Ver soluciones de ventilación",
  },
  {
    icon: Flame,
    title: "Calefacción",
    description: "Soluciones de calefacción eficiente para espacios industriales con tecnología de bajo consumo energético.",
    cta: "Ver soluciones de calefacción",
  },
];

const TechnicalSolutionsSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="soluciones" className="section-padding bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Soluciones técnicas</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Soluciones que <span className="text-gradient">transforman</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/40 hover:glow-box transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition">
                <sol.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{sol.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{sol.description}</p>
              <button
                onClick={() => scrollTo("contacto")}
                className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                {sol.cta}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSolutionsSection;
