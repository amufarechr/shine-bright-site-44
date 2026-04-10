import { motion } from "framer-motion";
import aguaImg from "@/assets/climatizacion/agua.jpeg";

const segmentosOsmosis = [
  {
    nombre: "Residencial de gran volumen",
    descripcion:
      "Condominios y conjuntos habitacionales con alta demanda de agua potable. Sistemas centralizados de ósmosis inversa que eliminan la dependencia de cisternas y camiones.",
  },
  {
    nombre: "Comercial",
    descripcion:
      "Oficinas, centros comerciales y retail con requerimientos de agua potable de calidad. Reducimos costos de agua embotellada y garantizamos suministro continuo.",
  },
  {
    nombre: "Industrial",
    descripcion:
      "Agroindustria, manufactura y plantas que requieren agua de proceso con parámetros específicos. Diseñamos sistemas a medida según caudal, calidad requerida y tipo de fuente.",
  },
];

export default function SolucionesSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="soluciones" className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* — Bloque 1: Ósmosis Inversa — */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Solución 1
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-3">
              Desalinización por Ósmosis Inversa
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Somos representantes de fabricantes líderes en sistemas de ósmosis
              inversa para desalinización. Agua pura desde fuentes salobres o
              de red, para cualquier escala de operación.
            </p>
          </motion.div>

          {/* Image + segmentos */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={aguaImg}
                alt="Sistema de ósmosis inversa industrial"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {segmentosOsmosis.map((seg, i) => (
                <div
                  key={seg.nombre}
                  className="bg-background border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary font-bold text-sm">
                      0{i + 1}
                    </span>
                    <h3 className="font-heading font-semibold text-base">
                      {seg.nombre}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                    {seg.descripcion}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* — Bloque 2: Waha — */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Solución 2
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-3">
              Agua desde el Aire — Tecnología Waha
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Somos representantes de Waha, empresa pionera en generación
              atmosférica de agua. Su tecnología extrae agua pura directamente
              del aire — sin red hídrica, sin infraestructura de distribución.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Content left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  titulo: "Tecnología basada en investigación Nobel",
                  texto:
                    "El WaHa Vaporator® usa desecantes sólidos (MOFs) — tecnología derivada del trabajo de Omar Yaghi, Premio Nobel de Química — para capturar humedad del aire con una eficiencia energética sin precedentes.",
                },
                {
                  titulo: "Opera en cualquier clima, sin infraestructura",
                  texto:
                    "Desde zonas costeras húmedas hasta desiertos con baja humedad relativa. Ideal para locaciones remotas: proyectos agrícolas, mineros, comunitarios o de emergencia donde no hay acceso a red hídrica.",
                },
                {
                  titulo: "Escalable desde residencial hasta industrial",
                  texto:
                    "El Oasis-20,000 genera hasta 20,000 litros/día para parques industriales o desarrollos residenciales grandes. Modelos menores cubren oficinas, comunidades o usos críticos.",
                },
                {
                  titulo: "Agua pura de punto de uso",
                  texto:
                    "Elimina redes de distribución, bombeo y tuberías. El agua se genera donde se consume, reduciendo costos de ciclo de vida y garantizando calidad en el punto de entrega.",
                },
              ].map((item) => (
                <div key={item.titulo} className="flex gap-4">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">{item.titulo}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.texto}
                    </p>
                  </div>
                </div>
              ))}

              <button
                onClick={() => scrollTo("contacto")}
                className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
              >
                Consultar disponibilidad de Waha →
              </button>
            </motion.div>

            {/* Visual right — placeholder para foto Waha */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden bg-muted aspect-[4/3] flex flex-col items-center justify-center gap-4 border border-border"
            >
              {/* Waha brand block */}
              <div className="text-center px-8">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">
                  Representantes exclusivos
                </p>
                <p className="font-heading text-4xl font-bold text-foreground mb-2">
                  Waha
                </p>
                <p className="text-muted-foreground text-sm">
                  WaHa Vaporator® — Generación atmosférica de agua
                </p>
              </div>
              <div className="text-muted-foreground text-xs text-center px-8">
                [Foto Waha Vaporator® — próximamente]
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
