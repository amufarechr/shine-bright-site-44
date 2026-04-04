import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contacto</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Hablemos de tu <span className="text-gradient">proyecto</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4">Información de contacto</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Estamos listos para atender tu consulta. Contáctanos y te responderemos a la brevedad.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "aplicaciones@swingenieria.com" },
                { icon: Phone, label: "+51 922330784" },
                { icon: MapPin, label: "Perú" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <span className="text-muted-foreground text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-background border border-border rounded-lg p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nombre</label>
                <input
                  required
                  type="text"
                  className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  required
                  type="email"
                  className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Empresa</label>
              <input
                type="text"
                className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Nombre de tu empresa"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Mensaje</label>
              <textarea
                required
                rows={4}
                className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Describe tu proyecto o necesidad..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold text-sm hover:brightness-110 transition inline-flex items-center gap-2 glow-box"
            >
              {submitted ? "¡Mensaje enviado!" : (
                <>Enviar mensaje <Send size={16} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
