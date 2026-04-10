import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import consultoriaImg from "@/assets/consultoria.png";

const ConsultingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="consultoria" className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden aspect-[4/3]"
          >
            <img src={consultoriaImg} alt="Consultoría industrial" className="w-full h-full object-cover" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Consultoría</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">
              Consultoría estratégica en{" "}
              <span className="text-gradient">eficiencia operativa</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Analizamos tu operación para identificar oportunidades de ahorro de recursos (labores, materiales, maquinaria y energía), acompañando desde el diagnóstico hasta la implementación con resultados medibles.
            </p>
            <button
              onClick={() => navigate("/consultoria")}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:brightness-110 transition inline-flex items-center gap-2 glow-box"
            >
              Explorar consultoría
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
