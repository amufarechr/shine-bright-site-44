import { motion } from "framer-motion";
import { Lightbulb, ArrowRight } from "lucide-react";

const ConsultingSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="consultoria" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="text-primary" size={32} />
          </div>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Consultoría</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">
            Consultoría estratégica en{" "}
            <span className="text-gradient">eficiencia</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Analizamos tu operación para identificar oportunidades de ahorro energético y mejora de procesos. 
            Te acompañamos desde el diagnóstico hasta la implementación con resultados medibles.
          </p>
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:brightness-110 transition inline-flex items-center gap-2 glow-box"
          >
            Explorar consultoría
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingSection;
