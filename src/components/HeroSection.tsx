import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Industrial facility background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Eficiencia operativa industrial
            </span>
          </motion.div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Transformamos espacios industriales con{" "}
            <span className="text-gradient">soluciones integrales</span>{" "}
            en eficiencia operativa
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            Enfriamiento, ventilación, calefacción, energía y consultoría para optimizar tu operación industrial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              onClick={() => scrollTo("soluciones")}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:brightness-110 transition inline-flex items-center gap-2 glow-box"
            >
              Descubre nuestras soluciones
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo("contacto")}
              className="border border-border text-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:bg-secondary transition inline-flex items-center gap-2"
            >
              <Calendar size={18} />
              Agenda una llamada
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
