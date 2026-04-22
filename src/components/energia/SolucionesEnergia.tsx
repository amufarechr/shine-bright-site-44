import { motion } from "framer-motion";
import { Activity, Cpu, Sun, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import energiaImg from "@/assets/climatizacion/energia.jpeg";

const soluciones = [
  {
    icon: Activity,
    num: "01",
    titulo: "Monitoreo de consumo por carga",
    articleSlug: "/articulos/monitoreo-energetico-industrial",
    articleLabel: "Aprender más sobre monitoreo energético",
    subtitulo: "Visibilidad real, en tiempo real",
    descripcion:
      "Instalamos sistemas de medición desagregada que asignan consumo a cada carga principal de la planta — compresores, hornos, bombas, sistemas de climatización, líneas de producción. El resultado es un dashboard operativo que muestra, en tiempo real, qué consume qué y cuándo.",
    beneficios: [
      "Identificación de equipos ineficientes o con consumo anómalo",
      "Base de datos para toma de decisiones operativas y de mantenimiento",
      "Punto de partida necesario para cualquier iniciativa de reducción de costos",
      "Reportes automáticos por turno, día y mes para gestión gerencial",
    ],
  },
  {
    icon: Cpu,
    num: "02",
    titulo: "Automatización y control inteligente",
    articleSlug: "/articulos/reducir-factura-electrica-industrial",
    articleLabel: "Aprender más sobre automatización y ahorro",
    subtitulo: "Lógica de operación que reduce costo sin reducir producción",
    descripcion:
      "Implementamos controladores que gestionan el encendido y apagado de equipos con criterio — no por inercia operativa. La lógica incorpora variables de demanda real, simultaneidad de arranques, horarios tarifarios y estados de proceso para minimizar el costo de la factura sin afectar la operación.",
    beneficios: [
      "Reducción de picos de demanda mediante escalonamiento de arranques",
      "Aprovechamiento de tarifas horarias diferenciales (punta / valle / nocturna)",
      "Apagado automático de cargas no productivas fuera de ventanas de operación",
      "Integración con sistemas SCADA o BMS existentes",
    ],
  },
  {
    icon: Sun,
    num: "03",
    titulo: "Energía renovable para auto-generación",
    articleSlug: "/articulos/energia-solar-industrial",
    articleLabel: "Aprender más sobre energía solar industrial",
    subtitulo: "Generación propia que reduce dependencia y costo de largo plazo",
    descripcion:
      "Con un perfil de consumo preciso como base, diseñamos e implementamos sistemas de auto-generación — principalmente solar fotovoltaico — correctamente dimensionados para la operación real. El objetivo es maximizar el autoconsumo y reducir la energía comprada a la red, con el retorno de inversión más corto posible.",
    beneficios: [
      "Dimensionamiento basado en datos reales de consumo, no en estimaciones",
      "Evaluación técnica y financiera con payback y TIR proyectados",
      "Integración con la red eléctrica y sistemas de respaldo",
      "Seguimiento del desempeño post-instalación",
    ],
  },
];

export default function SolucionesEnergia() {
  const navigate = useNavigate();
  return (
    <section id="soluciones" className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Cómo intervenimos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 max-w-2xl">
            Tres capas de intervención, en orden lógico
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl leading-relaxed">
            Primero visibilidad, luego control, luego generación propia. Cada capa potencia a la siguiente —
            y ninguna funciona bien sin las anteriores.
          </p>
        </motion.div>

        {/* Imagen + intro visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden mb-14 aspect-[21/6]"
        >
          <img
            src={energiaImg}
            alt="Tablero de control energético industrial"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="space-y-10">
          {soluciones.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid lg:grid-cols-[1fr_2fr] gap-8 bg-background border border-border rounded-xl p-8"
              >
                {/* Left: número + título */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 rounded-lg p-2.5 shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className="text-primary font-bold text-sm">{sol.num}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-1">{sol.titulo}</h3>
                  <p className="text-primary text-sm font-medium">{sol.subtitulo}</p>
                </div>

                {/* Right: descripción + beneficios */}
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {sol.descripcion}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {sol.beneficios.map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <p className="text-muted-foreground text-xs leading-relaxed">{b}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate(sol.articleSlug)}
                    className="mt-5 text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all border-t border-border pt-4 w-full"
                  >
                    {sol.articleLabel} <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
