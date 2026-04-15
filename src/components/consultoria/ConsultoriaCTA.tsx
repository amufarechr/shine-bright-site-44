import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ConsultoriaCTA = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 dark-banner">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Mucho más que suministro de equipos.
          </h2>
          <p className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
            Optimizamos la operación del sistema.
          </p>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
            Y nos aseguramos de que los resultados permanezcan — no como una mejora puntual, sino como un nuevo estándar de operación.
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
