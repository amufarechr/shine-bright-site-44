import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import casoCallao from "@/assets/articulos/evaporativo_new.jpg";
import energiaImg from "@/assets/articulos/transformer.jpg";
import osmosisImg from "@/assets/articulos/drip_irrigation.jpg";

const hubs = [
  {
    slug: "/articulos/climatizacion",
    categoria: "Climatización Industrial",
    titulo: "Enfriamiento evaporativo, ventilación y calefacción para espacios industriales",
    resumen: "Guías técnicas sobre hidroventiladores, swamp coolers y enfriadores adiabáticos — con aplicaciones en agroindustria, naves industriales, almacenes y más.",
    img: casoCallao,
    count: 3,
  },
  {
    slug: "/articulos/energia",
    categoria: "Gestión Energética",
    titulo: "Monitoreo, automatización y energía solar para reducir el gasto eléctrico industrial",
    resumen: "Desde el diagnóstico de consumo por carga hasta el dimensionamiento correcto de un sistema solar — en orden lógico y con datos reales.",
    img: energiaImg,
    count: 3,
  },
  {
    slug: "/articulos/agua",
    categoria: "Gestión de Agua",
    titulo: "Ósmosis inversa y generación atmosférica para proyectos con o sin red hídrica",
    resumen: "Tratamiento de agua de pozos para cultivos sensibles a salinidad, desalinización industrial y soluciones para locaciones remotas sin infraestructura.",
    img: osmosisImg,
    count: 2,
  },
];

export default function Articulos() {
  return (
    <>
      <SeoHead
        title="Artículos técnicos — Climatización, Energía y Agua"
        description="Guías técnicas sobre climatización industrial, gestión energética y gestión de agua. Escritas desde la práctica con datos reales de proyectos implementados en Perú y México."
        keywords="artículos técnicos industriales, climatización industrial, gestión energética, ósmosis inversa, enfriamiento evaporativo"
        path="/articulos"
      />
      <Navbar activePage="soluciones" darkHero={false} />
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
              Artículos <span className="text-gradient">técnicos</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Guías escritas desde la práctica — con datos reales de proyectos implementados en Perú y México.
            </p>
          </motion.div>
        </section>

        {/* Hub cards */}
        <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-24">
          <div className="grid md:grid-cols-3 gap-6">
            {hubs.map((hub, i) => (
              <motion.div
                key={hub.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={hub.slug}
                  className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full hover:border-primary/40 hover:glow-box transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={hub.img}
                      alt={hub.categoria}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                        {hub.categoria}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {hub.count} artículo{hub.count !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <h2 className="font-heading font-semibold text-base leading-snug mb-3 flex-1">
                      {hub.titulo}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {hub.resumen}
                    </p>
                    <span className="text-primary text-sm font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Ver artículos <ArrowRight size={15} />
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
