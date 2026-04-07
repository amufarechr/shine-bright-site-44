import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import consultoriaImg from "@/assets/consultoria.png";

const ConsultoriaHero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[85vh] flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="grid lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] mb-6 text-foreground">
              La operación no mejora por tener mejores equipos.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Mejora cuando todo el sistema trabaja mejor: personas, procesos e infraestructura.
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-xl overflow-hidden"
          >
            <img
              src={consultoriaImg}
              alt="Consultoría industrial estratégica"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:max-h-[520px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultoriaHero;
