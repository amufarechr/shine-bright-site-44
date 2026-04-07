import { motion } from "framer-motion";

const SistemaOperativo = () => (
  <section className="section-padding bg-card">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-2xl md:text-4xl font-bold mb-16"
      >
        El problema no está en un equipo.
      </motion.h2>

      {/* Triángulo SVG */}
      <motion.div
        className="flex justify-center mb-14"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <svg
          width="480"
          height="300"
          viewBox="0 0 480 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-sm md:max-w-lg"
        >
          {/* Líneas diagonales */}
          <line x1="240" y1="68"  x2="80"  y2="212" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <line x1="240" y1="68"  x2="400" y2="212" stroke="hsl(var(--border))" strokeWidth="1.5" />
          {/* Línea horizontal */}
          <line x1="160" y1="240" x2="320" y2="240" stroke="hsl(var(--border))" strokeWidth="1.5" />

          {/* Puntos diagonales */}
          <circle cx="240" cy="68"  r="4" fill="hsl(var(--primary))" opacity="0.5" />
          <circle cx="80"  cy="212" r="4" fill="hsl(var(--primary))" opacity="0.5" />
          <circle cx="400" cy="212" r="4" fill="hsl(var(--primary))" opacity="0.5" />
          {/* Puntos horizontales */}
          <circle cx="160" cy="240" r="4" fill="hsl(var(--primary))" opacity="0.5" />
          <circle cx="320" cy="240" r="4" fill="hsl(var(--primary))" opacity="0.5" />

          {/* Nodo: Personas (arriba, centro) */}
          <foreignObject x="160" y="12" width="160" height="56">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="flex items-center justify-center w-full h-full rounded-lg border border-border bg-background font-heading font-semibold text-sm text-foreground"
            >
              Personas
            </div>
          </foreignObject>

          {/* Nodo: Procesos (abajo izquierda) — activo */}
          <foreignObject x="0" y="212" width="160" height="56">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="flex items-center justify-center w-full h-full rounded-lg border border-primary bg-primary/5 font-heading font-semibold text-sm text-primary"
            >
              Procesos
            </div>
          </foreignObject>

          {/* Nodo: Infraestructura (abajo derecha) */}
          <foreignObject x="320" y="212" width="160" height="56">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="flex items-center justify-center w-full h-full rounded-lg border border-border bg-background font-heading font-semibold text-sm text-foreground"
            >
              Infraestructura
            </div>
          </foreignObject>
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
      >
        El desempeño óptimo depende de la correcta interacción entre personas, procesos e infraestructura.
      </motion.p>
    </div>
  </section>
);

export default SistemaOperativo;
