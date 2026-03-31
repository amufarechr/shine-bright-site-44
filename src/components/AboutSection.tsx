import { motion } from "framer-motion";
import { Target, Award, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Precisión", text: "Cada proyecto se ejecuta con tolerancias exactas y atención al detalle." },
  { icon: Award, title: "Calidad", text: "Certificados bajo normas ASME, AWS y API para garantizar excelencia." },
  { icon: Users, title: "Compromiso", text: "Equipo multidisciplinario dedicado al éxito de cada cliente." },
];

const AboutSection = () => (
  <section id="nosotros" className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Nosotros</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">
            Más de <span className="text-gradient">15 años</span> de excelencia industrial
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            SW Ingeniería es una empresa líder en soluciones industriales, especializada en el diseño, fabricación y montaje de equipos para los sectores petrolero, petroquímico, energético y de manufactura. Nuestro compromiso es entregar proyectos de la más alta calidad, en tiempo y forma.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Contamos con instalaciones equipadas con tecnología de última generación y un equipo de ingenieros y técnicos altamente capacitados que garantizan resultados excepcionales en cada proyecto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-5 p-6 bg-card border border-border rounded-lg"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <v.icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
