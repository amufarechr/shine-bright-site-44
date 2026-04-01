import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding dark-banner">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para{" "}
            <span className="text-primary">optimizar</span>{" "}
            tu operación?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Agenda un diagnóstico gratuito y descubre cómo podemos mejorar la eficiencia de tu planta industrial.
          </p>
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-md font-bold text-lg hover:brightness-110 transition inline-flex items-center gap-3 glow-box-strong"
          >
            Solicita diagnóstico gratuito
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
