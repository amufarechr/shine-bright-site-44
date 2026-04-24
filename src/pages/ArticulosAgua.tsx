import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import osmosisImg from "@/assets/articulos/drip_irrigation.jpg";
import galponesImg from "@/assets/articulos/galpones_desierto.jpg";

const articulos = [
  {
    slug: "/articulos/osmosis-inversa",
    categoria: "Agua · Agroindustria",
    titulo: "Ósmosis inversa: cuándo y cómo mejorar la calidad del agua para riego e industria",
    resumen: "Desde pozos con alta salinidad para arándano y uva, hasta desalinización industrial y proyectos residenciales sin red. Guía técnica con parámetros agronómicos, costos y preguntas frecuentes.",
    img: osmosisImg,
    keywords: ["Ósmosis inversa", "Agua para riego arándano", "Salinidad agua uva", "Desalinización"],
  },
  {
    slug: "/articulos/agua-sin-red-hidrica",
    categoria: "Independencia hídrica",
    titulo: "Agua potable sin red hídrica: ósmosis inversa y generación desde el aire",
    resumen: "Para proyectos en zonas remotas, operaciones agrícolas sin acceso a red o desarrollos sin infraestructura hídrica — comparativa técnica entre ósmosis inversa y tecnología Waha de generación atmosférica.",
    img: galponesImg,
    keywords: ["Agua sin red hídrica", "Generación atmosférica", "Proyectos remotos", "Waha"],
  },
];

export default function ArticulosAgua() {
  return (
    <>
      <SeoHead
        title="Artículos técnicos sobre gestión de agua industrial y agrícola"
        description="Guías técnicas sobre ósmosis inversa, desalinización y generación atmosférica de agua para riego agrícola, industria y proyectos sin red hídrica."
        keywords="ósmosis inversa agrícola, desalinización industrial, agua sin red hídrica, generación agua atmosférica, agua para riego arándano, tratamiento agua pozos"
        path="/articulos/agua"
      />
      <Navbar activePage="soluciones" darkHero={false} />
      <main className="min-h-screen">
        <section className="pt-44 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/articulos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              ← Todos los artículos
            </Link>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">Recursos técnicos · Agua</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Gestión de <span className="text-gradient">Agua</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Ósmosis inversa y generación atmosférica — guías técnicas para proyectos que necesitan agua de calidad controlada, con o sin acceso a red hídrica.
            </p>
          </motion.div>
        </section>

        <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-24">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
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
