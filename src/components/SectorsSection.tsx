import { motion } from "framer-motion";
import { Wheat, Truck, Factory, ShoppingBag, Egg } from "lucide-react";

const sectors = [
  { icon: Wheat, name: "Agro" },
  { icon: Truck, name: "Logística" },
  { icon: Factory, name: "Manufactura" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Egg, name: "Avícola" },
];

const SectorsSection = () => (
  <section id="sectores" className="section-padding">
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/40 hover:glow-box transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
              <sector.icon className="text-primary" size={28} />
            </div>
            <span className="font-heading font-semibold text-sm">{sector.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsSection;
