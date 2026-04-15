import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import consultoriaImg from "@/assets/consultoria.png";

const ConsultoriaHero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden">
      {/* Background image */}
      <img
        src={consultoriaImg}
        alt="Consultoría industrial estratégica"
        className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-110"
      />
      {/* Base overlay — reduce brightness and add contrast */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Directional overlay — heavier on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] text-foreground my-[30px] mb-0">
            Las ineficiencias<br />
            de operación<br />
            no se resuelven<br />
            con más gasto
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg my-0 mb-[10px]">
            La solución es un sistema que integra y alinea personas, procesos e infraestructura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("contacto")}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:brightness-110 transition inline-flex items-center gap-2 glow-box"
            >
              Evaluar operación
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo("como-intervenimos")}
              className="border border-border text-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:bg-muted transition"
            >
              Cómo trabajamos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultoriaHero;
