import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import casoIca from "@/assets/evaporativo/caso-ica.jpg";
import casoCallao from "@/assets/evaporativo/caso-callao.jpg";
import funcionamiento from "@/assets/evaporativo/funcionamiento.jpeg";

const articulos = [
  {
    slug: "/articulos/enfriamiento-evaporativo",
    categoria: "Guía técnica",
    titulo: "Por qué usar enfriamiento evaporativo en entornos industriales",
    resumen:
      "El principio físico, las ventajas energéticas, el impacto ambiental y los criterios para saber cuándo es la solución correcta — o cuándo no lo es. Incluye glosario de términos: hidroventilador, swamp cooler, enfriador adiabático y más.",
    img: funcionamiento,
    keywords: ["Enfriador evaporativo", "Hidroventilador", "Swamp cooler", "Enfriador adiabático"],
  },
  {
    slug: "/articulos/enfriamiento-evaporativo-agroindustria",
    categoria: "Agroindustria",
    titulo: "Control de temperatura en packing y cosecha: cómo reducir la deshidratación de fruta fresca",
    resumen:
      "Cómo el enfriamiento evaporativo mantiene humedad relativa sobre 80% en packing, transporte y acopio de campo — reduciendo la deshidratación de uva, arándano y palta hasta un 35% con datos medidos en campo.",
    img: casoIca,
    keywords: ["Deshidratación fruta", "Packing exportación", "Acopio en campo", "Transporte fruta fresca"],
  },
  {
    slug: "/articulos/enfriamiento-evaporativo-almacenes",
    categoria: "Almacenes e industria",
    titulo: "Cómo reducir el calor en naves industriales y almacenes con un 85% menos de inversión",
    resumen:
      "El calor en plantas y centros de distribución afecta a las personas y los costos operativos. Esta guía explica cómo el evaporativo resuelve ese problema a una fracción del costo, con casos reales documentados.",
    img: casoCallao,
    keywords: ["Calor en nave industrial", "Alta temperatura almacén", "Confort térmico trabajadores", "Ahorro energético"],
  },
];

export default function Articulos() {
  return (
    <>
      <SeoHead
        title="Artículos técnicos sobre enfriamiento evaporativo"
        description="Guías técnicas sobre enfriadores evaporativos, hidroventiladores y swamp coolers para agroindustria, naves industriales y almacenes. Casos reales con datos de campo."
        keywords="enfriamiento evaporativo, hidroventilador, swamp cooler, enfriador adiabático, calor en nave industrial, deshidratación fruta fresca"
        path="/articulos"
      />
      <Navbar activePage="soluciones" />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-44 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 rounded-lg p-2 shrink-0">
                <BookOpen size={18} className="text-primary" />
              </div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Recursos técnicos
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2 mb-4">
              Artículos sobre{" "}
              <span className="text-gradient">enfriamiento evaporativo</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Guías técnicas escritas desde la práctica — con datos reales de proyectos implementados en Perú y México.
            </p>
          </motion.div>
        </section>

        {/* Grid de artículos */}
        <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articulos.map((art, i) => (
              <motion.div
                key={art.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={art.slug}
                  className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full hover:border-primary/40 hover:glow-box transition-all duration-300"
                >
                  {/* Imagen */}
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={art.img}
                      alt={art.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 w-fit mb-3">
                      {art.categoria}
                    </span>
                    <h2 className="font-heading font-semibold text-base leading-snug mb-3 flex-1">
                      {art.titulo}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {art.resumen}
                    </p>

                    {/* Keywords pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {art.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="text-xs text-muted-foreground bg-muted rounded-full px-2.5 py-0.5"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <span className="text-primary text-sm font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Leer artículo
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
