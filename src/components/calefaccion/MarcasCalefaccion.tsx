import { motion } from "framer-motion";
import logoSrp from "@/assets/marcas/srp.jpeg";
import logoBigAssFans from "@/assets/marcas/bigassfans.jpeg";

const marcas = [
  {
    nombre: "SRP — Superior Radiant Products",
    logo: logoSrp,
    bg: "bg-white",
    url: "https://www.superiorradiant.com",
    descripcion:
      "Fabricante norteamericano líder en sistemas de calefacción radiante infrarroja. Portfolio completo desde calefacción industrial de alta intensidad hasta luxury outdoor para hospitality y calefacción agrícola de precisión. Certificaciones ISO, CSA y UL.",
    logoSize: "max-h-12",
  },
  {
    nombre: "Big Ass Fans",
    logo: logoBigAssFans,
    bg: "bg-white",
    url: "https://bigassfans.com/heaters/",
    descripcion:
      "La marca más reconocida en circulación de aire industrial extiende su línea con calefactores eléctricos infrarrojos de alta eficiencia. Obsidian® y Vesper™ complementan sus sistemas de ventilación para crear ambientes completos de confort térmico.",
    logoSize: "max-h-16",
  },
];

export default function MarcasCalefaccion() {
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Marcas que representamos
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-3">
            Los fabricantes detrás de los sistemas que implementamos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {marcas.map((marca, i) => (
            <motion.a
              key={marca.nombre}
              href={marca.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-7 flex gap-6 items-start hover:border-primary/40 transition-colors group"
            >
              <div className={`${marca.bg} rounded-xl p-3 flex items-center justify-center h-20 w-32 shrink-0 border border-border`}>
                <img
                  src={marca.logo}
                  alt={marca.nombre}
                  className={`${marca.logoSize} max-w-full object-contain`}
                />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                  {marca.nombre}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{marca.descripcion}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
