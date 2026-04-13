import { motion } from "framer-motion";
import agricolaImg from "@/assets/sectores/agricola.jpeg";
import logisticaImg from "@/assets/sectores/logistica.jpeg";
import industrialImg from "@/assets/sectores/industrial.jpeg";
import retailImg from "@/assets/sectores/retail.jpeg";
import avicolaImg from "@/assets/sectores/avicola.jpeg";
import mineriaImg from "@/assets/sectores/mineria.jpeg";

const sectors = [
  { name: "Agro", img: agricolaImg },
  { name: "Logística", img: logisticaImg },
  { name: "Manufactura", img: industrialImg },
  { name: "Retail", img: retailImg },
  { name: "Avícola", img: avicolaImg },
  { name: "Minería", img: mineriaImg },
];

const SectorsSection = () => (
  <section id="sectores" className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Sectores</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">
          Adaptamos soluciones al{" "}
          <span className="text-gradient">contexto de cada cliente</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Nuestra experiencia abarca múltiples industrias, garantizando soluciones personalizadas para cada sector.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative rounded-xl overflow-hidden aspect-square border border-border hover:border-primary/40 hover:glow-box transition-all duration-300"
          >
            {/* Photo */}
            <img
              src={sector.img}
              alt={sector.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <span className="font-heading font-semibold text-sm text-white drop-shadow">
                {sector.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsSection;
