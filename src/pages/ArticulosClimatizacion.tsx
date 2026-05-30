import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import casoIca from "@/assets/evaporativo/caso-ica.jpg";
import casoCallao from "@/assets/evaporativo/caso-callao.jpg";
import funcionamiento from "@/assets/articulos/evaporativo_new.jpg";

const articulos = [
  {
    slug: "/articulos/enfriamiento-evaporativo",
    categoria: "Guía técnica",
    titulo: "Por qué usar enfriamiento evaporativo en entornos industriales",
    resumen: "El principio físico, las ventajas energéticas, el impacto ambiental y los criterios para saber cuándo es la solución correcta — o cuándo no lo es. Incluye glosario de términos: hidroventilador, swamp cooler, enfriador adiabático y más.",
    img: funcionamiento,
    keywords: ["Enfriador evaporativo", "Hidroventilador", "Swamp cooler", "Enfriador adiabático"],
  },
  {
    slug: "/articulos/enfriamiento-evaporativo-agroindustria",
    categoria: "Agroindustria",
    titulo: "Control de temperatura en packing y cosecha: cómo reducir la deshidratación de fruta fresca",
    resumen: "Cómo el enfriamiento evaporativo mantiene humedad relativa sobre 80% en packing, transporte y acopio de campo — reduciendo la deshidratación de uva, arándano y palta hasta un 35% con datos medidos en campo.",
    img: casoIca,
    keywords: ["Deshidratación fruta", "Packing exportación", "Acopio en campo", "Transporte fruta fresca"],
  },
  {
    slug: "/articulos/enfriamiento-evaporativo-almacenes",
    categoria: "Almacenes e industria",
    titulo: "Cómo reducir el calor en naves industriales y almacenes con un 85% menos de inversión",
    resumen: "El calor en plantas y centros de distribución afecta a las personas y los costos operativos. Esta guía explica cómo el evaporativo resuelve ese problema a una fracción del costo, con casos reales documentados.",
    img: casoCallao,
    keywords: ["Calor en nave industrial", "Alta temperatura almacén", "Confort térmico trabajadores", "Ahorro energético"],
  },
];

export default function ArticulosClimatizacion() {
  return (
    <>
      <SeoHead ogType="article"
        title="Artículos técnicos sobre climatización industrial"
        description="Guías técnicas sobre enfriadores evaporativos, hidroventiladores y climatización para agroindustria, naves industriales y almacenes. Casos reales con datos de campo."
        keywords="climatización industrial, enfriamiento evaporativo, hidroventilador, swamp cooler, calor nave industrial, deshidratación fruta fresca"
        path="/articulos/climatizacion"
      />
      <Navbar activePage="soluciones" darkHero={false} />
      <main className="min-h-screen">
        <section className="pt-44 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/articulos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              ← Todos los artículos
            </Link>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">Recursos técnicos · Climatización</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Climatización <span className="text-gradient">Industrial</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              En plantas de empaque, almacenes y naves industriales del Perú, el calor no es solo un problema de confort — afecta la calidad del producto, la productividad del personal y el consumo eléctrico. Estas guías cubren enfriamiento evaporativo, ventilación industrial y calefacción desde la práctica: con datos medidos en campo, criterios de selección reales y casos documentados en Ica, Piura, Trujillo y Lima.
            </p>
          </motion.div>
        </section>

        <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articulos.map((art, i) => (
              <motion.div key={art.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={art.slug} className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full hover:border-primary/40 hover:glow-box transition-all duration-300">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img src={art.img} alt={art.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 w-fit mb-3">{art.categoria}</span>
                    <h2 className="font-heading font-semibold text-base leading-snug mb-3 flex-1">{art.titulo}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{art.resumen}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {art.keywords.map((kw) => (
                        <span key={kw} className="text-xs text-muted-foreground bg-muted rounded-full px-2.5 py-0.5">{kw}</span>
                      ))}
                    </div>
                    <span className="text-primary text-sm font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Leer artículo <ArrowRight size={15} />
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
