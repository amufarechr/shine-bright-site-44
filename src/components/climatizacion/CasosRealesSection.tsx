import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import casoChincha from "@/assets/evaporativo/caso-chincha.jpg";
import casoIca from "@/assets/evaporativo/caso-ica.jpg";
import casoCallao from "@/assets/evaporativo/caso-callao.jpg";
import { casosChincha, casosIca, casosCallao } from "@/data/siteData";

const casos = [
  {
    id: "01",
    sector: casosChincha.sectorLabel,
    titulo: `${casosChincha.reduccionTemp} en planta de clasificación y empaque de huevos, implementada en solo 4 días`,
    antes: casosChincha.situacion,
    intervencion: casosChincha.intervencion,
    foto: casoChincha,
    resultados: casosChincha.resultados,
  },
  {
    id: "02",
    sector: casosIca.sectorLabel,
    titulo: `Mejora de condiciones de packing de uva: ${casosIca.reduccionDeshidratacion} de deshidratación y mayor confort para ${casosIca.trabajadores} colaboradores`,
    antes: casosIca.situacion,
    intervencion: casosIca.intervencion,
    foto: casoIca,
    resultados: casosIca.resultados,
  },
  {
    id: "03",
    sector: casosCallao.sectorLabel,
    titulo: `Almacén de ${casosCallao.superficie} de productos farmacéuticos con temperatura controlada — ${casosCallao.ahorroInversion} que la alternativa evaluada`,
    antes: casosCallao.situacion,
    intervencion: casosCallao.intervencion,
    foto: casoCallao,
    resultados: casosCallao.resultados,
  },
];

export default function CasosRealesSection() {
  const navigate = useNavigate();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Casos reales
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold mt-3">
            Resultados concretos en operaciones reales
          </h2>
        </motion.div>

        <div className="space-y-6">
          {casos.map((caso, i) => (
            <motion.div
              key={caso.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              {caso.foto && (
                <div className="aspect-[16/6] overflow-hidden">
                  <img
                    src={caso.foto}
                    alt={caso.titulo}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                  {caso.sector}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold mb-6">{caso.titulo}</h3>

              <div className="space-y-3 mb-8">
                <p className="text-foreground text-sm">
                  <span className="font-semibold">Situación inicial: </span>
                  <span className="text-muted-foreground">{caso.antes}</span>
                </p>
                <p className="text-foreground text-sm">
                  <span className="font-semibold">Intervención: </span>
                  <span className="text-muted-foreground">{caso.intervencion}</span>
                </p>
              </div>

              {/* Timeline */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x divide-border">
                {caso.resultados.map((r, j) => (
                  <motion.div
                    key={r.periodo}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    className="sm:flex-1 sm:px-6 first:sm:pl-0 last:sm:pr-0"
                  >
                    <div className="text-xs font-semibold text-primary mb-1">{r.periodo}</div>
                    <div className="text-sm text-foreground">{r.label}</div>
                  </motion.div>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8"
        >
          <button
            onClick={() => scrollTo("contacto")}
            className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Evaluar mi operación
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => navigate("/casos")}
            className="text-muted-foreground font-semibold inline-flex items-center gap-2 hover:gap-3 hover:text-primary transition-all"
          >
            Ver todos los casos
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
