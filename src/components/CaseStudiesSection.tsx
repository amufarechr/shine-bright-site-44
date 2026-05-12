import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import casoChincha from "@/assets/evaporativo/caso-chincha.jpg";
import casoIca from "@/assets/evaporativo/caso-ica.jpg";
import casoCallao from "@/assets/evaporativo/caso-callao.jpg";
import { casosChincha, casosIca, casosCallao } from "@/data/siteData";

const cases = [
  {
    img: casoChincha,
    sector: casosChincha.sector,
    client: casosChincha.client,
    location: casosChincha.location,
    description: casosChincha.description,
    result: casosChincha.resultCard,
  },
  {
    img: casoIca,
    sector: casosIca.sector,
    client: casosIca.client,
    location: casosIca.location,
    description: casosIca.description,
    result: casosIca.resultCard,
  },
  {
    img: casoCallao,
    sector: casosCallao.sector,
    client: casosCallao.client,
    location: casosCallao.location,
    description: casosCallao.description,
    result: casosCallao.resultCard,
  },
];

const CaseStudiesSection = () => {
  const navigate = useNavigate();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="casos" className="section-padding pt-10 lg:pt-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Casos de éxito</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Resultados que <span className="text-gradient">hablan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img src={c.img} alt={c.client} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 w-fit mb-4">
                  {c.sector}
                </span>
                <h3 className="font-heading text-lg font-semibold mb-1">{c.client}</h3>
                <p className="text-muted-foreground text-xs mb-3">{c.location}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{c.description}</p>
                <div className="border-t border-border pt-4 mt-auto">
                  <p className="text-primary font-semibold text-sm">{c.result}</p>
                </div>
                <button
                  onClick={() => navigate("/casos")}
                  className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all mt-4"
                >
                  Ver caso completo
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ver todos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button
            onClick={() => navigate("/casos")}
            className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Ver todos los casos de éxito
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
