import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { empresa } from "@/data/siteData";

export default function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("https://formspree.io/f/xdkodvvk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      setFormState(res.ok ? "success" : "error");
    } catch {
      setFormState("error");
    }
  };

  const contactInfo = [
    { icon: Phone, text: empresa.telefono, href: empresa.whatsappHref },
  ];

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
            Hablemos de tu <span className="text-gradient">operación</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Cuéntanos el reto que enfrentas. Evaluamos tu caso sin costo y te decimos si tenemos una solución.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-semibold mb-4">Información de contacto</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Estamos disponibles para evaluar tu proyecto, resolver dudas técnicas o coordinar una visita a tu
              operación.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-foreground hover:text-primary transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-foreground">{item.text}</span>
                  )}
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-base leading-none mt-0.5">🇵🇪</span>
                    <span className="text-foreground text-sm">{empresa.direccionPeru}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-base leading-none mt-0.5">🇲🇽</span>
                    <span className="text-foreground text-sm">{empresa.direccionMexico}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                <CheckCircle className="text-primary" size={48} />
                <h3 className="font-heading text-xl font-semibold">¡Mensaje recibido!</h3>
                <p className="text-muted-foreground">Te responderemos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "Nombre", type: "text", placeholder: "Tu nombre" },
                  { id: "company", label: "Empresa", type: "text", placeholder: "Tu empresa" },
                  { id: "email", label: "Email", type: "email", placeholder: "tu@email.com" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-sm font-medium mb-2">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      value={formData[f.id as keyof typeof formData]}
                      onChange={(e) => setFormData((p) => ({ ...p, [f.id]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    ¿Cuál es tu reto?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe brevemente tu operación y el problema que quieres resolver..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                </div>
                {formState === "error" && (
                  <div className="flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle size={16} />
                    <span>Hubo un error. Por favor intenta de nuevo.</span>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  {formState === "sending" ? "Enviando..." : "Enviar mensaje"}
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
