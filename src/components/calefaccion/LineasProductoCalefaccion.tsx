import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import logoSrp from "@/assets/marcas/srp.jpeg";
import logoBigAssFans from "@/assets/marcas/bigassfans.jpeg";

const lineas = [
  {
    id: "srp-industrial",
    marca: "SRP — Superior Radiant Products",
    logo: logoSrp,
    logoBg: "bg-white",
    subtitulo: "Calefacción Industrial y Agrícola",
    descripcion:
      "La línea industrial y agrícola de SRP cubre desde naves de manufactura de gran escala hasta galpones avícolas y aplicaciones de precisión. Sistemas de baja y alta intensidad, gas natural o LP, interiores y exteriores.",
    url: "https://www.superiorradiant.com",
    catalogos: [
      { label: "Catálogo Industrial/Comercial", path: "/catalogos/srp-all-products.pdf" },
      { label: "Catálogo Agrícola", path: "/catalogos/srp-ag.pdf" },
    ],
    productos: [
      {
        nombre: "Serie L / LT — Baja Intensidad Agrícola",
        descripcion: "Distribución uniforme de calor sin hot spots. Patentada para galpones avícolas. Reduce runtime hasta 20%. Compatible con techos bajos y cubiertas plásticas.",
        specs: ["40,000–100,000 BTU/h · NG & LP", "Upgrade SMART OPTI-ZONE disponible", "Finishes: MG Aluminio / Negro"],
      },
      {
        nombre: "Brooders BR / BRL / BRST",
        descripcion: "Calefacción de primer ciclo de vida en crianza avícola. 20% más calor al piso vs. competidores. Diseño slim de solo 14\" de alto. IP55 para ambientes húmedos.",
        specs: ["40,000 BTU/h · 24V / 120V / Milivolt", "NG y LP", "Venta unitaria, 6-pack o 24-pack"],
      },
      {
        nombre: "Series T / U / AM — Media y Alta Intensidad Industrial",
        descripcion: "Para naves industriales, talleres y espacios comerciales de gran altura. Dos etapas de modulación, motor ECM, aprobación indoor/outdoor.",
        specs: ["40,000–220,000 BTU/h · NG & LP", "Eficiencia térmica hasta 94% HHV", "Modelos con housing waterproof (X series)"],
      },
      {
        nombre: "Series KMI / M / S — Alta Intensidad Puntual",
        descripcion: "Para zonas frías específicas dentro de espacios grandes o aplicaciones de alta densidad térmica. Factor radiante hasta 81%.",
        specs: ["21,000–160,000 BTU/h · NG & LP", "Reflectores 100% insulated", "Bajo consumo de quemador"],
      },
      {
        nombre: "sWAVE Eléctrico Industrial",
        descripcion: "Calefacción eléctrica de alta eficiencia para cuando no hay gas disponible. 90% de eficiencia radiante, el más alto de su clase. Aprobado para ambientes agrícolas.",
        specs: ["1.8–7.5 kW · 120/208/240/480/600V", "Opciones monofásicas y trifásicas", "3 materiales: MG Alum / SS / Negro"],
      },
    ],
  },
  {
    id: "srp-outdoor",
    marca: "SRP — Superior Radiant Products",
    logo: logoSrp,
    logoBg: "bg-white",
    subtitulo: "Luxury Outdoor — Calefacción Comercial de Exteriores",
    descripcion:
      "La colección SRP Luxury Outdoor está diseñada para espacios comerciales que no pueden cerrarse: terrazas de restaurantes, hoteles, food courts y patios. Cuatro líneas con distintos perfiles de uso, acabado y fuente de energía.",
    url: "https://www.superiorradiant.com",
    catalogos: [
      { label: "Catálogo Outdoor Heaters", path: "/catalogos/srp-outdoor.pdf" },
    ],
    productos: [
      {
        nombre: "evenTUBE — Tubo Infrarrojo de Gas",
        descripcion: "El calefactor de tubo más estético del mercado. Dos etapas de modulación, resistente al viento hasta 12 mph. Aprobado interior/exterior. Ideal para pérgolas y techos con altura de 9–16 pies.",
        specs: ["40,000–100,000 BTU/h · NG & LP", "Steel inoxidable 316 marino / Aluminio negro", "Clearance desde 2\" sobre combustibles"],
      },
      {
        nombre: "evenGLO — Calefactor de Pedestal",
        descripcion: "El más eficiente de su categoría: 58% más cobertura que los competidores con diseño patentado de 4 brazos y reflector inferior. Portátil o fijo, ideal para terrazas y espacios al aire libre.",
        specs: ["Modelos GA201M2, GA301MP, GA301H", "Coberturas desde 192 ft² a 672 ft²", "Acabados: Acero inox 316 / Negro / Bronce"],
      },
      {
        nombre: "the Habanero — Alta Intensidad de Techo",
        descripcion: "Alta intensidad sin ruido — sin ventilador. 124% más cobertura que el top competidor. Montaje en techo, disponible en 33\" y 48\". Clearance desde 3\" sobre combustibles.",
        specs: ["15,000–50,000 BTU/h · NG & LP", "Modelos M20, M40, M50 en negro/inox", "Ideal para techos bajos y espacios con viento"],
      },
      {
        nombre: "eWAVE — Eléctrico IP55",
        descripcion: "Diseño europeo de onda larga. El patrón de calor más uniforme de su clase. IP55, apto outdoor total. Flexible: montaje horizontal o inclinado. Onda larga y media según aplicación.",
        specs: ["1,500–4,500W · 120/208/240/480/600V", "Modelos long wave y medium wave", "Incluye caja de conexión waterproof y soporte"],
      },
    ],
  },
  {
    id: "baf-heaters",
    marca: "Big Ass Fans",
    logo: logoBigAssFans,
    logoBg: "bg-white",
    subtitulo: "Calefacción Infrarroja — Gas y Eléctrica",
    descripcion:
      "Big Ass Fans complementa su línea de climatización industrial con calefactores infrarrojos de gas y eléctricos. Dos líneas diferenciadas: IRH para naves industriales de gran escala, y Obsidian® para espacios comerciales y terrazas.",
    url: "https://bigassfans.com/heaters/",
    catalogos: [
      { label: "Ficha técnica — IRH Infrared Heater (gas)", path: "/catalogos/baf-infrared-heater.pdf" },
      { label: "Ficha técnica — Obsidian® (eléctrico)", path: "/catalogos/baf-obsidian.pdf" },
    ],
    productos: [
      {
        nombre: "IRH Infrared Heater — Gas Industrial",
        descripcion: "Calefacción infrarroja de gas para naves industriales y comerciales de gran escala. Calienta personas y objetos directamente, no el aire. Compatible con HVLS fans para cubrir instalaciones completas. Diseños straight tube y U-tube para patrones de calor uniformes.",
        specs: ["80,000 / 125,000 / 150,000 / 200,000 BTU/h", "Gas natural o propano LP · 120V 60Hz", "Garantía 3 años · Uso interior (ventilado o no ventilado)"],
      },
      {
        nombre: "Obsidian® — Eléctrico IP65 para Exteriores",
        descripcion: "Calefactor eléctrico infrarrojo de baja luminosidad para terrazas, patios y espacios comerciales outdoor. Elemento de fibra de carbono aeroespacial. Calor instantáneo y direccional desde el encendido. Incluye control remoto.",
        specs: ["1,500W / 3,000W / 6,000W · hasta 160 ft² (14.9 m²)", "IP65 — outdoor total · aluminio anodizado epoxi", "8,000 horas de vida del elemento · 120V / 240/208V"],
      },
      {
        nombre: "Vesper™ — Eléctrico Indoor / Covered Outdoor",
        descripcion: "Diseño minimalista flush — 8 pulgadas de ancho, aluminio sólido. Sin brillo, sin ruido, sin movimiento. Instalación tipo luminaria directamente al cableado. Para interiores refinados y exteriores cubiertos donde el diseño importa.",
        specs: ["1,500W / 3,200W · 120V / 208V / 240V", "Indoor + covered outdoor · Sin plug, hardwired", "Control por switch de pared o termostato"],
      },
    ],
  },
];

export default function LineasProductoCalefaccion() {
  return (
    <section id="soluciones" className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Líneas de producto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 max-w-2xl">
            Tres líneas diferenciadas para cada aplicación
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl leading-relaxed">
            Gas o eléctrico, interior o exterior, alta o baja intensidad — la selección correcta depende del espacio, la fuente de energía disponible y el perfil de uso.
          </p>
        </motion.div>

        <div className="space-y-16">
          {lineas.map((linea, li) => (
            <motion.div
              key={linea.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Header de línea */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8 pb-6 border-b border-border">
                <div className={`${linea.logoBg} rounded-xl p-3 flex items-center justify-center h-16 w-28 shrink-0 border border-border`}>
                  <img src={linea.logo} alt={linea.marca} className="max-h-10 max-w-full object-contain" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-1">{linea.marca}</p>
                  <h3 className="font-heading font-bold text-xl mb-2">{linea.subtitulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{linea.descripcion}</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <a
                    href={linea.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:gap-3 transition-all"
                  >
                    Ver sitio oficial <ExternalLink size={12} />
                  </a>
                  {linea.catalogos.map((cat) => (
                    <a
                      key={cat.label}
                      href={cat.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FileText size={12} /> {cat.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Productos */}
              <div className="grid md:grid-cols-2 gap-5">
                {linea.productos.map((prod, pi) => (
                  <motion.div
                    key={prod.nombre}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pi * 0.06 }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h4 className="font-heading font-semibold text-sm mb-2 text-foreground">{prod.nombre}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{prod.descripcion}</p>
                    <div className="space-y-1">
                      {prod.specs.map((spec) => (
                        <div key={spec} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <p className="text-xs text-muted-foreground">{spec}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
