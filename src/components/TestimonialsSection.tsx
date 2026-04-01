import { motion } from "framer-motion";
import { Quote, ShieldCheck, Award } from "lucide-react";

const TestimonialsSection = () => (
  <section className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonios & Confianza</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
          Nuestros clientes <span className="text-gradient">confían</span> en nosotros
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {[
          {
            quote: "SW Ingeniería transformó nuestra planta. Redujimos costos energéticos y mejoramos las condiciones para nuestros colaboradores.",
            author: "Carlos Mendoza",
            role: "Director de Operaciones",
            company: "Grupo Industrial del Norte",
          },
          {
            quote: "Su equipo de consultoría identificó oportunidades que no habíamos considerado. El ROI superó nuestras expectativas en el primer año.",
            author: "Ana Sofía Ramírez",
            role: "Gerente de Planta",
            company: "Avícola San Pedro",
          },
        ].map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <Quote className="text-primary/30 mb-4" size={32} />
            <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div>
              <p className="font-heading font-semibold">{t.author}</p>
              <p className="text-muted-foreground text-sm">{t.role} — {t.company}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-8"
      >
        {[
          { icon: ShieldCheck, label: "ISO 9001 Certificado" },
          { icon: Award, label: "ASME Certified" },
          { icon: ShieldCheck, label: "Empresa Socialmente Responsable" },
        ].map((badge) => (
          <div key={badge.label} className="flex items-center gap-3 text-muted-foreground">
            <badge.icon className="text-primary" size={20} />
            <span className="text-sm font-medium">{badge.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
