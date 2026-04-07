import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ConsultoriaCTA = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding dark-banner">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            No optimizamos equipos.
          </h2>
          <p className="font-heading text-2xl md:text-3xl font-bold text-primary mb-10">
            Corregimos cómo opera el sistema.
          </p>
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-md font-bold text-lg hover:brightness-110 transition inline-flex items-center gap-3 glow-box-strong"
          >
            Evaluar operación
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultoriaCTA;
