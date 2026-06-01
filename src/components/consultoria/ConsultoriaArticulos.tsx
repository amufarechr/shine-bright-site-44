import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, Gauge, GitMerge } from "lucide-react";
import { Link } from "react-router-dom";

const articulos = [
  {
    icon: GitMerge,
    etiqueta: "Procesos",
    titulo: "Optimización de procesos industriales",
    desc: "Cómo identificar y eliminar las pérdidas estructurales en sus flujos productivos — cuellos de botella, tiempos de ciclo, merma normalizada — con diagnóstico en campo y plan de intervención por ROI.",
    href: "/consultoria/optimizacion-procesos-industriales",
    tiempo: "8 min de lectura",
  },
  {
    icon: TrendingDown,
    etiqueta: "Costos",
    titulo: "Reducción de costos operativos en industria",
    desc: "Cómo cuantificar el potencial de ahorro real en energía, insumos y mano de obra directa antes de comprometer recursos. Rangos típicos y metodología de diagnóstico.",
    href: "/consultoria/reduccion-costos-operativos",
    tiempo: "7 min de lectura",
  },
  {
    icon: Gauge,
    etiqueta: "Productividad",
    titulo: "Mejora de productividad industrial",
    desc: "Por qué la mayoría de plantas tiene capacidad productiva oculta sin explotar, y cómo recuperarla sin ampliar infraestructura. Métricas, metodología y resultados reales.",
    href: "/consultoria/productividad-industrial",
    tiempo: "7 min de lectura",
  },
];

const ConsultoriaArticulos = () => (
  <section className="section-padding pt-10 pb-16 bg-background" id="articulos-consultoria">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          Guías técnicas
        </span>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mt-3">
          Profundizar en cada área de mejora
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl">
          Guías detalladas sobre cada línea de intervención — metodología, métricas y casos reales.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {articulos.map((art, i) => {
          const Icon = art.icon;
          return (
            <motion.div
              key={art.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={art.href}
                className="group flex flex-col h-full bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:glow-box transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                    <Icon size={16} />
                  </span>
                  <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                    {art.etiqueta}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                  {art.titulo}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {art.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/60">{art.tiempo}</span>
                  <ArrowRight
                    size={15}
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ConsultoriaArticulos;
