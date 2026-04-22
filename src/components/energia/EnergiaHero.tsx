import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/consultoria_energia.jpeg";

export default function EnergiaHero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden">
      <img
        src={heroBg}
        alt="Gestión energética industrial"
        className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-110"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Gestión Energética
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] text-foreground mt-4 mb-4">
            No puedes controlar<br />
            lo que no puedes<br />
            medir
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg mb-8">
            La mayoría de las plantas industriales operan sin visibilidad real de su consumo energético.
            El resultado es gasto oculto, decisiones equivocadas y oportunidades de ahorro que nunca se capturan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("contacto")}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:brightness-110 transition inline-flex items-center gap-2 glow-box"
            >
              Evaluar operación energética
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo("soluciones")}
              className="border border-border text-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:bg-muted transition"
            >
              Ver soluciones
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
