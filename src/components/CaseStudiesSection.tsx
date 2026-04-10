import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    client: "Planta Automotriz del Norte",
    sector: "Manufactura",
    result: "Reducción del 35% en consumo energético de HVAC",
    description: "Rediseño completo del sistema de ventilación y enfriamiento de la planta de producción.",
  },
  {
    client: "Granja Avícola San Pedro",
    sector: "Avícola",
    result: "Ahorro anual de $1.2M MXN en energía",
    description: "Implementación de sistema de ventilación eficiente con control automatizado de temperatura.",
  },
  {
    client: "Centro de Distribución LogiMax",
    sector: "Logística",
    result: "Mejora del 50% en confort térmico",
    description: "Instalación de sistema integral de calefacción y ventilación para almacén de 15,000 m².",
  },
];

const CaseStudiesSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="casos" className="section-padding pt-10 lg:pt-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Casos de éxito</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Resultados que <span className="text-gradient">hablan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Foto {c.sector.toLowerCase()}</span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 w-fit mb-4">
                  {c.sector}
                </span>
                <h3 className="font-heading text-lg font-semibold mb-2">{c.client}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{c.description}</p>
                <div className="border-t border-border pt-4 mt-auto">
                  <p className="text-primary font-semibold text-sm">{c.result}</p>
                </div>
                <button
                  onClick={() => scrollTo("contacto")}
                  className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all mt-4"
                >
                  Ver caso completo
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
