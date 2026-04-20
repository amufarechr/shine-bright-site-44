import { motion } from "framer-motion";
import logoBigAssFans from "@/assets/marcas/bigassfans.jpeg";
import logoPortacool from "@/assets/marcas/portacool.jpeg";
import logoBiocool from "@/assets/marcas/biocool.jpeg";

const marcas = [
  {
    nombre: "Big Ass Fans",
    logo: logoBigAssFans,
    bg: "bg-white",
    url: "https://www.bigassfans.com",
    descripcion:
      "Sistemas evaporativos de techo de alta eficiencia para grandes naves industriales. Diseñados para cubrir superficies superiores a 500 m² con distribución de aire uniforme y bajo mantenimiento.",
    catalogo: "https://www.bigassfans.com/resources/",
  },
  {
    nombre: "Portacool",
    logo: logoPortacool,
    bg: "bg-white",
    url: "https://www.portacool.com",
    descripcion:
      "Unidades portátiles de enfriamiento evaporativo de alta eficiencia. Ideales para zonas de trabajo específicas, áreas de carga y descarga, o como complemento a un sistema central. Rango de 60,000 a 230,000 BTU/h.",
    catalogo: "https://www.portacool.com/resources/",
  },
  {
    nombre: "BioCool",
    logo: logoBiocool,
    bg: "bg-[#4a4a4a]",
    url: "https://biocool.info/",
    descripcion:
      "Soluciones evaporativas fijas de alta capacidad para instalaciones permanentes. Sistemas modulares con paneles evaporativos de celulosa de alta eficiencia, diseñados para climas cálidos.",
    catalogo: "https://biocool.info/",
  },
];

export default function MarcasSection() {
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Equipos y marcas
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-3">
            Trabajamos con las marcas líderes globales
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Somos representantes y distribuidores exclusivos en la región. Seleccionamos cada equipo en función del requerimiento específico de cada operación — no por disponibilidad de inventario.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {marcas.map((marca, i) => (
            <motion.div
              key={marca.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-xl overflow-hidden flex flex-col"
            >
              {/* Logo */}
              <a
                href={marca.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${marca.bg} flex items-center justify-center h-24 px-8 hover:opacity-80 transition-opacity`}
              >
                <img
                  src={marca.logo}
                  alt={marca.nombre}
                  className="max-h-12 max-w-full object-contain"
                />
              </a>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  {marca.descripcion}
                </p>
                <a
                  href={marca.catalogo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Ver catálogo →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
