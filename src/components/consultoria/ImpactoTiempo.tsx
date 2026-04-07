import { motion } from "framer-motion";

const ImpactoTiempo = () => (
  <section className="section-padding bg-card">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-2xl md:text-4xl font-bold mb-16"
      >
        Los resultados reales permanecen, más allá de la instalación.
      </motion.h2>

      {/* Conceptual chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto mb-16"
      >
        <svg viewBox="0 0 600 260" className="w-full" aria-label="Gráfico conceptual de performance vs tiempo">
          {/* Axes */}
          <line x1="60" y1="220" x2="580" y2="220" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <line x1="60" y1="220" x2="60" y2="30" stroke="hsl(var(--border))" strokeWidth="1.5" />

          {/* Axis labels */}
          <text x="30" y="130" fill="hsl(var(--muted-foreground))" fontSize="11" textAnchor="middle" transform="rotate(-90, 30, 130)" fontFamily="var(--font-body)">
            Performance
          </text>
          <text x="320" y="250" fill="hsl(var(--muted-foreground))" fontSize="11" textAnchor="middle" fontFamily="var(--font-body)">
            Tiempo
          </text>

          {/* Traditional approach — spike then decay */}
          <path
            d="M80,180 C120,170 160,80 220,70 C260,65 300,90 360,120 C420,150 480,170 560,175"
            fill="none"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.5"
          />

          {/* SW approach — gradual stable rise */}
          <path
            d="M80,185 C140,180 180,160 240,130 C300,105 360,90 420,80 C460,75 520,72 560,70"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
          />

          {/* Labels */}
          <text x="460" y="185" fill="hsl(var(--muted-foreground))" fontSize="10" opacity="0.6" fontFamily="var(--font-body)">
            Enfoque tradicional
          </text>
          <text x="460" y="62" fill="hsl(var(--primary))" fontSize="10" fontWeight="600" fontFamily="var(--font-body)">
            SW Ingeniería
          </text>
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
      >
        Nuestro objetivo son mejoras que se sostienen, no ilusiones que se desvanecen.
      </motion.p>
    </div>
  </section>
);

export default ImpactoTiempo;
