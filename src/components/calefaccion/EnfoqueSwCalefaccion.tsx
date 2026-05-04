import { motion } from "framer-motion";

const pasos = [
  { num: "01", label: "Diagnóstico del espacio: tipo de uso, altura, cerramiento, ventilación y fuente de energía disponible" },
  { num: "02", label: "Selección de tecnología: gas vs. eléctrico, baja vs. alta intensidad, según el perfil de cada aplicación" },
  { num: "03", label: "Diseño del sistema: distribución de equipos, cobertura y potencia calculada para el espacio real" },
  { num: "04", label: "Implementación sin obras mayores — la mayoría de los sistemas se instalan en días, no semanas" },
  { num: "05", label: "Ajuste y validación post-instalación con medición de temperatura en puntos críticos" },
];

const diferenciadores = [
  {
    titulo: "No vendemos catálogo — diseñamos sistemas",
    texto: "Antes de recomendar cualquier equipo evaluamos el espacio, la fuente de energía, el tipo de uso y las condiciones de operación. El resultado es un sistema diseñado para tu caso específico.",
  },
  {
    titulo: "Trabajamos con las mejores marcas del mercado",
    texto: "SRP (Superior Radiant Products) y Big Ass Fans son fabricantes con décadas de desarrollo en calefacción radiante industrial. Nuestro rol es seleccionar el producto correcto dentro de esos portfolios.",
  },
  {
    titulo: "Gas y eléctrico en el mismo equipo",
    texto: "Muchos proyectos combinan líneas de gas para las zonas de mayor demanda con eléctrico para zonas puntuales o donde no hay acometida de gas. Diseñamos sistemas mixtos cuando es lo más eficiente.",
  },
  {
    titulo: "Experiencia en agroindustria y hospitality",
    texto: "Los galpones avícolas y las terrazas de restaurante parecen mundos distintos, pero ambos comparten el mismo desafío: calor eficiente en espacios que no pueden cerrarse. Tenemos experiencia en ambos.",
  },
];

export default function EnfoqueSwCalefaccion() {
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: proceso */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Nuestro enfoque
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-8">
              Del diagnóstico al sistema correcto — sin sobredimensionar ni subestimar
            </h2>
            <div className="space-y-4">
              {pasos.map((paso, i) => (
                <motion.div
                  key={paso.num}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-4 bg-background border border-border rounded-xl p-5"
                >
                  <span className="text-primary font-bold text-sm shrink-0 mt-0.5">{paso.num}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{paso.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: diferenciadores */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 lg:pt-16"
          >
            {diferenciadores.map((d, i) => (
              <motion.div
                key={d.titulo}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-5 border-l-2 border-border pl-6"
              >
                <div>
                  <h3 className="font-heading font-semibold text-base mb-2">{d.titulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.texto}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
