import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import energiaImg from "@/assets/articulos/transformer.jpg";
import controlImg from "@/assets/climatizacion/energia.jpeg";
import solarImg from "@/assets/articulos/paneles_techo.jpg";

const articulos = [
  {
    slug: "/articulos/reducir-factura-electrica-industrial",
    categoria: "Guía general",
    titulo: "Cómo reducir la factura eléctrica de una planta industrial sin reducir producción",
    resumen: "El orden correcto de intervención: primero visibilidad, luego control inteligente, luego generación solar. Con datos reales sobre ahorro típico, payback y dónde se esconde el gasto evitable.",
    img: energiaImg,
    keywords: ["Ahorro energético industrial", "Factura eléctrica planta", "Cargo por demanda", "Tarifa horaria"],
  },
  {
    slug: "/articulos/monitoreo-energetico-industrial",
    categoria: "Monitoreo",
    titulo: "Monitoreo de consumo energético por carga: qué es, cómo funciona y por qué va primero",
    resumen: "Cómo funciona la medición desagregada en plantas industriales, qué se puede ver con ella y qué decisiones habilita. Instalación sin parar producción, integración con ERP y casos de uso.",
    img: controlImg,
    keywords: ["Monitoreo energético", "Medición por carga", "Submedición eléctrica", "Dashboard consumo"],
  },
  {
    slug: "/articulos/energia-solar-industrial",
    categoria: "Energía renovable",
    titulo: "Energía solar para industria: cómo dimensionar bien un sistema fotovoltaico",
    resumen: "El error más caro es dimensionar sin perfil de consumo horario. Esta guía explica las variables clave, cómo calcular el retorno correctamente y cuándo tiene sentido incorporar baterías.",
    img: solarImg,
    keywords: ["Solar fotovoltaico industrial", "Dimensionamiento solar", "TIR energía solar", "Autoconsumo"],
  },
];

export default function ArticulosEnergia() {
  return (
    <>
      <SeoHead ogType="article"
        title="Artículos técnicos sobre gestión energética industrial"
        description="Guías técnicas sobre reducción de gasto energético, monitoreo de consumo por carga y energía solar para plantas industriales. Con datos reales de proyectos implementados."
        keywords="gestión energética industrial, ahorro energético planta, monitoreo consumo eléctrico, energía solar industrial, eficiencia energética"
        path="/articulos/energia"
      />
      <Navbar activePage="soluciones" darkHero={false} />
      <main className="min-h-screen">
        <section className="pt-44 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/articulos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              ← Todos los artículos
            </Link>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">Recursos técnicos · Energía</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Gestión <span className="text-gradient">Energética</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              La factura eléctrica es uno de los costos más controlables en una planta industrial — si se tiene visibilidad y se actúa con metodología. Estas guías abordan monitoreo energético por carga, identificación de desperdicios, automatización e integración de energía solar en contextos industriales y agroindustriales en Perú, con criterios aplicables desde medianas hasta grandes operaciones.
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
