import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Industrial engineering background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Soluciones industriales
            </span>
          </motion.div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Ingeniería que{" "}
            <span className="text-gradient">impulsa</span>{" "}
            tu industria
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Diseño, fabricación e instalación de equipos industriales con los más altos estándares de calidad y seguridad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("contacto")}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:brightness-110 transition inline-flex items-center gap-2 glow-box"
            >
              Solicitar cotización
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo("servicios")}
              className="border border-border text-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:bg-secondary transition"
            >
              Ver servicios
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-lg"
        >
          {[
            { value: "15+", label: "Años de experiencia" },
            { value: "200+", label: "Proyectos completados" },
            { value: "98%", label: "Clientes satisfechos" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
