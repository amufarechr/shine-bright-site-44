import { motion } from "framer-motion";

export default function CtaFinalSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding pt-10 lg:pt-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para dejar de depender de la red hídrica?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Evaluamos tu operación y te recomendamos la solución más eficiente
            según tu ubicación, volumen y tipo de uso.
          </p>
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-md font-bold text-base hover:brightness-110 transition inline-flex items-center gap-2 glow-box"
          >
            Solicita una evaluación gratuita →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
