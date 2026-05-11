import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, ShieldCheck, Award, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "La implementación de enfriadores evaporativos en nuestras plantas tuvo dos impactos muy claros. En las personas: bajar la temperatura en packing durante los meses de cosecha marcó una diferencia real para más de 500 trabajadores. En la fruta: atacamos la deshidratación en las zonas más críticas (recepción y espera de materia prima) y en el proceso. El control de temperatura y humedad relativa ahí logra extender la vida de anaquel. Y todo esto con una inversión muy pequeña, sin necesidad de refrigeración convencional ni aislamiento térmico.",
    author: "Juan Pedro Illescas",
    role: "Gerente de Planta",
    company: "Safco Perú",
  },
  {
    quote:
      "SW Ingeniería llegó a entender nuestra planta. Rediseñaron una parte del proceso productivo, eliminaron tiempos muertos que habíamos normalizado e implementaron soluciones a medida, de bajo costo. El resultado fue una transformación operativa real, considerando los retos de la industria alimentaria donde mantener los estándares sanitarios es crucial.",
    author: "Aránzazu Vega",
    role: "Gerente General",
    company: "El Cedro",
  },
  {
    quote:
      "Instalamos ventilación evaporativa en nuestra sala de selección automatizada. El resultado fue doble: mejor conservación del huevo en proceso y mayor vida útil de los brazos robóticos de empaque. Una solución de bajo costo con impacto directo en calidad y productividad.",
    author: "Pedro José de Zavala de Romaña",
    role: "Gerente General",
    company: "La Calera",
  },
];

const CARD_WIDTH = 520;
const CARD_GAP = 24;

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? CARD_WIDTH + CARD_GAP : -(CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  };

  return (
  <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonios & Confianza</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
          Nuestros clientes <span className="text-gradient">confían</span> en nosotros
        </h2>
      </motion.div>

      {/* Carousel */}
      <div className="relative mb-16">
        {/* Nav buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:border-primary/40 transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={18} className="text-muted-foreground" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:border-primary/40 transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight size={18} className="text-muted-foreground" />
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-background border border-border rounded-xl p-8 flex flex-col shrink-0 snap-start"
              style={{ width: CARD_WIDTH, maxWidth: "85vw" }}
            >
              <Quote className="text-primary/30 mb-4 shrink-0" size={32} />
              <p className="text-foreground leading-relaxed mb-6 italic flex-1">"{t.quote}"</p>
              <div className="border-t border-border pt-4 mt-auto">
                <p className="font-heading font-semibold">{t.author}</p>
                <p className="text-muted-foreground text-sm">{t.role} — {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
};

export default TestimonialsSection;
