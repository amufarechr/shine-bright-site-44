import { motion } from "framer-motion";
import { Wrench, Factory, Cog, ShieldCheck, Zap, Truck } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Diseño Industrial",
    description: "Ingeniería de detalle y diseño de equipos para plantas industriales con tecnología de punta.",
  },
  {
    icon: Wrench,
    title: "Fabricación",
    description: "Manufactura de estructuras metálicas, tanques, recipientes a presión y líneas de tubería.",
  },
  {
    icon: Cog,
    title: "Montaje & Instalación",
    description: "Montaje mecánico de equipos, tuberías y estructuras con personal altamente calificado.",
  },
  {
    icon: ShieldCheck,
    title: "Control de Calidad",
    description: "Inspección, ensayos no destructivos y certificación bajo normas internacionales.",
  },
  {
    icon: Zap,
    title: "Mantenimiento",
    description: "Mantenimiento preventivo y correctivo para maximizar la vida útil de tus equipos.",
  },
  {
    icon: Truck,
    title: "Logística",
    description: "Transporte especializado y maniobras de carga para equipos de gran tamaño.",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Servicios</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
          Lo que <span className="text-gradient">hacemos</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-lg p-8 hover:border-primary/40 hover:glow-box transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition">
              <service.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
