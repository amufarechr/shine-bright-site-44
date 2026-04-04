import { motion } from "framer-motion";
import { BarChart3, TrendingDown, Zap, ArrowRight } from "lucide-react";

const EnergyEfficiencySection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Eficiencia energética</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">
              Reduce costos con{" "}
              <span className="text-gradient">eficiencia energética</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestro equipo experto implementa soluciones que reducen el consumo energético de tu planta industrial hasta un 25%. 
              Desde auditorías energéticas hasta la integración de tecnologías de última generación para maximizar el rendimiento y minimizar el impacto ambiental.
            </p>
            <button
              onClick={() => scrollTo("contacto")}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:brightness-110 transition inline-flex items-center gap-2 glow-box"
            >
              Solicitar auditoría energética
              <ArrowRight size={18} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: TrendingDown, value: "25%", label: "Reducción de consumo" },
              { icon: Zap, value: "De 6 a 9 meses", label: "Retorno de inversión" },
              { icon: BarChart3, value: "30+", label: "Auditorías realizadas" },
              { icon: BarChart3, value: "24/7", label: "Monitoreo continuo" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-lg p-6 text-center"
              >
                <stat.icon className="text-primary mx-auto mb-3" size={24} />
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnergyEfficiencySection;
