import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xkoyvjka", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="section-padding pt-10 lg:pt-16">
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
                { icon: Mail, text: "aplicaciones@swingenieria.com" },
                { icon: Phone, text: "+51 922330784" },
                { icon: MapPin, text: "Oficina Central: Calle Alcanfores 1245 Miraflores, Lima, Perú" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <span className="text-muted-foreground text-sm">{item.text}</span>
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
            <input type="hidden" name="_cc" value="aplicaciones@swingenieria.com" />
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Nombre <span className="text-primary">*</span>
                </label>
                <input
                  required
                  name="nombre"
                  type="text"
                  className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Empresa <span className="text-primary">*</span>
              </label>
              <input
                required
                name="empresa"
                type="text"
                className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Nombre de tu empresa"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Mensaje <span className="text-primary">*</span>
              </label>
              <textarea
                required
                name="mensaje"
                rows={4}
                className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Describe tu proyecto o necesidad..."
              />
            </div>

            {status === "success" && (
              <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-md px-4 py-3">
                <CheckCircle size={18} className="text-primary shrink-0" />
                <p className="text-sm text-primary font-medium">
                  ¡Mensaje enviado! Te responderemos a la brevedad.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-3 bg-destructive/10 border border-destructive/30 rounded-md px-4 py-3">
                <AlertCircle size={18} className="text-destructive shrink-0" />
                <p className="text-sm text-destructive font-medium">
                  Hubo un error al enviar. Inténtalo de nuevo o escríbenos directamente.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold text-sm hover:brightness-110 transition inline-flex items-center gap-2 glow-box disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>Enviando...</>
              ) : status === "success" ? (
                <><CheckCircle size={16} /> Enviado</>
              ) : (
                <>Enviar mensaje <Send size={16} /></>
              )}
            </button>

            <p className="text-xs text-muted-foreground">
              Los campos marcados con <span className="text-primary">*</span> son obligatorios.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
