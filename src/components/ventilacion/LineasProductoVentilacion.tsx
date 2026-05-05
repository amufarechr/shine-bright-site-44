import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import logoBigAssFans from "@/assets/marcas/bigassfans.jpeg";

const lineas = [
  {
    id: "hvls-industrial",
    subtitulo: "Ventiladores HVLS Industriales",
    descripcion:
      "La línea insignia de Big Ass Fans. Ventiladores de techo de gran diámetro (2.4–7.3 metros) diseñados para naves industriales, almacenes y espacios de gran escala. Motor de alta eficiencia, sistemas de seguridad multi-redundantes y hasta 15 años de garantía mecánica en los modelos premium.",
    productos: [
      {
        nombre: "Powerfoil® X3.0 — El fan más vendido del mundo",
        descripcion:
          "El ventilador industrial de referencia global. Sistema NitroSeal™ sellado herméticamente, 8 airfoils anodizados con AirFence® y winglets, mayor área de cobertura que cualquier otro fan Big Ass. Diseñado para las condiciones más exigentes.",
        specs: ["Diámetro 3.7–7.3 m · Motor NitroSeal Drive", "Garantía de fábrica, extendida", "Score Total Fan Value: 100/100"],
        url: "https://bigassfans.com/powerfoil-x30",
      },
      {
        nombre: "Powerfoil® D — Direct Drive silencioso",
        descripcion:
          "Motor de imán permanente de accionamiento directo — sin caja reductora, sin aceite, sin ruido. IP66 para entornos con polvo, humedad y vapores. Temperatura máxima de operación: 55°C. Ideal para talleres, fundiciones y espacios con condiciones extremas.",
        specs: ["Diámetro 2.4–7.3 m · Motor direct-drive IP66", "Integración BACnet y Modbus para habilitar automatización", "Garantía hasta 10 años mecánica + 10 años eléctrica"],
        url: "https://bigassfans.com/powerfoil-d",
      },
      {
        nombre: "Powerfoil® 8 — Performance premium",
        descripcion:
          "El punto de entrada a la línea Powerfoil. Motor industrial IP56 con caja de transmisión de doble lip-seal. Opción Plus Hybrid Airfoil para direccionar el flujo sobre obstrucciones. Velocidad variable con controller táctil resistivo.",
        specs: ["Diámetro 2.4–7.3 m · Motor IP56 industrial grade", "Opción Hybrid Airfoil para espacios con obstáculos", "Garantía hasta 7 años mecánica + 3 años eléctrica"],
        url: "https://bigassfans.com/powerfoil-8",
      },
      {
        nombre: "Basic 6® — Confort industrial económico",
        descripcion:
          "La opción de entrada a la línea industrial. Mismo ADN de seguridad y calidad que los modelos premium, a un costo de inversión menor. Amplia cobertura de aire mejora la eficiencia de los sistemas HVAC existentes.",
        specs: ["Diámetro 2.4–7.3 m · Motor industrial grade", "Digital touchscreen controller incluido", "Garantía hasta 7 años mecánica + 3 años eléctrica"],
        url: "https://bigassfans.com/basic-6",
      },
    ],
  },
  {
    id: "directional",
    subtitulo: "Ventiladores Direccionales",
    descripcion:
      "Para zonas donde los fans de techo no llegan: pasillos de racks, debajo de puentes grúa, líneas de producción, fosas de taller o cualquier espacio donde una obstrucción impide el flujo vertical. Portátiles, de pared, de columna o de viga — cada aplicación tiene su modelo.",
    productos: [
      {
        nombre: "Black Jack® + AirGo® — Portátiles de alta potencia",
        descripcion:
          "Black Jack: 2 metros de diámetro, ruedas todo terreno, motor EC silencioso, cobertura hasta 37 metros. AirGo: 2.4 metros con tecnología HVLS portátil, tilt 360° con 16 posiciones bloqueables — el más potente de la línea direccional.",
        specs: ["Black Jack: ø2.0 m · Motor IPX5 · Garantía 5 años", "AirGo: ø2.4 m · HVLS portable · Garantía 5 años", "Voltaje 110–125V o 200–240V multi-phase"],
        url: "https://bigassfans.com/floor-fans/",
      },
      {
        nombre: "Pivot 2.0 — De pared, flexible",
        descripcion:
          "Montaje en vigas, columnas o paredes. Más de 1,000 configuraciones de posición. Motor direct-drive silencioso con variable speed. Ideal para almacenes con racks, pasillos o áreas específicas donde se necesita flujo dirigido sin ocupar piso.",
        specs: ["ø1.9 m · Direct-drive · >1,000 posiciones", "Cobertura hasta 37 metros de distancia", "Garantía 5 años · 110–240V"],
        url: "https://bigassfans.com/wall-fans/",
      },
      {
        nombre: "AirEye® — Inteligente y versátil",
        descripcion:
          "El fan direccional más avanzado del mercado. Motor EC IP65, 50% más CFM/watt que motores de inducción básica. Sensor de ocupación disponible para encendido automático. 5 opciones de montaje diferentes. Ideal para distribución, manufactura y aplicaciones donde la eficiencia energética importa.",
        specs: ["ø51, 61 o 76 cm · Motor EC IP65", "Sensor de ocupación disponible", "Score Total Fan Value: 99/100"],
        url: "https://bigassfans.com/wall-fans/",
      },
      {
        nombre: "Yellow Jacket® + Sweat Bee® — Industrial extremo",
        descripcion:
          "Yellow Jacket: el fan direccional más robusto — frame heavy-gauge, motor IPX5, 10 velocidades, 360° de rotación. Sweat Bee: cobertura hasta 37 metros, ideal sobre líneas de conveyor o zonas de trabajo con materiales calientes que necesitan enfriamiento rápido.",
        specs: ["Yellow Jacket: ø76 cm · Motor 1/2 HP · Garantía 5 años", "Sweat Bee: ø46 o 76 cm · Motor 1HP / 1/3 HP", "Disponibles en 110–480V multi-phase"],
        url: "https://bigassfans.com/floor-fans/",
      },
    ],
  },
  {
    id: "commercial",
    subtitulo: "Ventiladores Comerciales y Residenciales",
    descripcion:
      "Para espacios donde el rendimiento aerodinámico debe convivir con el diseño del ambiente: lobbies de hotel, restaurantes, gimnasios, oficinas abiertas. La línea comercial de Big Ass Fans combina su ingeniería de clase mundial con acabados premium y tecnología inteligente.",
    productos: [
      {
        nombre: "Essence® — Para espacios que importan",
        descripcion:
          "8 airfoils anodizados, motor direct-drive prácticamente silencioso, modelos indoor y outdoor disponibles. Personalización de color y kit LED integrado. Montaje en vigas, bar joists o purlins. Confort certificado ENERGY STAR® con Total Fan Value de 98/100.",
        specs: ["Diámetro 2.4–4.3 m · Motor direct-drive silencioso", "Indoor y outdoor · Kit LED disponible", "Garantía hasta 10 años mecánica + eléctrica"],
        url: "https://bigassfans.com/essence",
      },
      {
        nombre: "i6 + Haiku® — Smart fans residenciales y comerciales",
        descripcion:
          "Tecnología SenseMe™ con sensores ambientales integrados, control por app móvil y voz (Alexa / Google). Motor DC brushless silencioso. Haiku: el fan de techo más eficiente del mundo (ENERGY STAR). i6: diseño industrial con smart functionality — 60, 72 y 84 pulgadas.",
        specs: ["i6: ø152/183/213 cm · Bluetooth + App + Voice", "Haiku: ø132/152/213 cm · El más eficiente del mundo", "Garantía hasta 5 años indoor / 3 años outdoor"],
        url: "https://bigassfans.com/fans/",
      },
    ],
  },
];

export default function LineasProductoVentilacion() {
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
            Tres familias de ventiladores para cada aplicación
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl leading-relaxed">
            Desde naves industriales de gran escala hasta lobbies comerciales — Big Ass Fans tiene el modelo correcto para cada espacio.
          </p>
        </motion.div>

        {/* Catálogo download */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-4 flex-wrap"
        >
          <div className="bg-white border border-border rounded-xl p-3 flex items-center justify-center h-14 w-28">
            <img src={logoBigAssFans} alt="Big Ass Fans" className="max-h-9 max-w-full object-contain" />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-1">Big Ass Fans · Representantes exclusivos</p>
            <div className="flex flex-wrap gap-4">
              <a href="/catalogos/baf-fans-catalog.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline">
                <FileText size={13} /> Catálogo completo de ventiladores
              </a>
              <a href="https://bigassfans.com/fans/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={13} /> Ver todos los productos en bigassfans.com
              </a>
            </div>
          </div>
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
              <div className="mb-8 pb-6 border-b border-border">
                <h3 className="font-heading font-bold text-xl mb-2">{linea.subtitulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">{linea.descripcion}</p>
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
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-heading font-semibold text-sm text-foreground leading-snug">{prod.nombre}</h4>
                      <a
                        href={prod.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:opacity-70 transition-opacity shrink-0 mt-0.5"
                      >
                        <ExternalLink size={13} />
                      </a>
                    </div>
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
