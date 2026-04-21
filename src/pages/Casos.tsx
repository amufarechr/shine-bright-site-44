import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import casoChincha from "@/assets/evaporativo/caso-chincha.jpg";
import casoIca from "@/assets/evaporativo/caso-ica.jpg";
import casoCallao from "@/assets/evaporativo/caso-callao.jpg";

// ─── Tipos ───────────────────────────────────────────────────────────────────

interface Resultado {
  periodo: string;
  label: string;
}

interface Caso {
  id: string;
  sector: string;
  solucion: string;
  client: string;
  location: string;
  description: string;
  result: string;
  img: string | null;
  proximamente: boolean;
  situacion?: string;
  intervencion?: string;
  resultados?: Resultado[];
}

// ─── Datos ────────────────────────────────────────────────────────────────────

const casos: Caso[] = [
  {
    id: "chincha",
    sector: "Avícola",
    solucion: "Enfriamiento Evaporativo",
    client: "Planta de clasificación y empaque de huevos",
    location: "Chincha, Perú",
    description: "Alta temperatura por las tardes afectaba maquinaria de alta sensibilidad y generaba ausentismo en una planta de 3,000 m².",
    result: "−9°C · −50% ausentismo · inversión 80% menor",
    img: casoChincha,
    proximamente: false,
    situacion: "Planta de 3,000 m² con alta temperatura por la tarde, que afectaba maquinaria de alta sensibilidad y generaba ausentismo.",
    intervencion: "Diseño de sistema evaporativo Big Ass Fans y extractores de aire, con distribución inteligente que logró reducir la temperatura por debajo de 25°C, sin obras civiles ni paradas de operación.",
    resultados: [
      { periodo: "Semana 1", label: "−9°C en zona de trabajo principal" },
      { periodo: "Mes 1", label: "−50% en ausentismo por calor" },
      { periodo: "Menores costos", label: "Inversión 80% menor que alternativa de refrigeración industrial, con 90% menos de consumo eléctrico" },
    ],
  },
  {
    id: "ica-uva",
    sector: "Agroindustria",
    solucion: "Enfriamiento Evaporativo",
    client: "Packing de uva de exportación",
    location: "Ica, Perú",
    description: "Empaque de más de 5,000 m² con deshidratación de fruta por altas temperaturas en verano, afectando vida de anaquel.",
    result: "−35% deshidratación · HR >80% · +20% utilidad neta",
    img: casoIca,
    proximamente: false,
    situacion: "Empaque de más de 5,000 m² con áreas de recepción, clasificación y empaque. Las altas temperaturas del verano generaban deshidratación de la fruta y reducción de vida de anaquel.",
    intervencion: "Implementación de flujo integral de aire combinando enfriadores Portacool con salidas superiores de aire caliente.",
    resultados: [
      { periodo: "Condiciones", label: "Humedad relativa >80% y temperatura de trabajo <25°C" },
      { periodo: "Producto", label: "−35% en tasa de deshidratación de fruta (<0.1%/hr)" },
      { periodo: "Rentabilidad", label: "+20% de incremento en utilidad neta por operación post-cosecha" },
    ],
  },
  {
    id: "callao",
    sector: "Logística",
    solucion: "Enfriamiento Evaporativo",
    client: "Centro de distribución farmacéutico",
    location: "Callao, Perú",
    description: "6,000 m² de almacén farmacéutico que requería temperatura controlada para cumplimiento regulatorio, con presupuesto acotado.",
    result: "<27°C garantizados · 85% menos inversión · solo 20 kW",
    img: casoCallao,
    proximamente: false,
    situacion: "Centro de distribución de productos farmacéuticos en Callao requería implementación para cumplimiento regulatorio. La alternativa de refrigeración industrial excedía el presupuesto considerado.",
    intervencion: "Se identificó distribución óptima de flujo adaptada al diseño existente de pasillos, y se implementaron enfriadores evaporativos de alto caudal complementados por extractores eólicos de techo.",
    resultados: [
      { periodo: "Cumplimiento", label: "Temperatura garantizada por debajo de los 27°C requeridos" },
      { periodo: "Inversión", label: "Costo de instalación 85% menor a la alternativa originalmente evaluada" },
      { periodo: "Energía", label: "Solo 20 kW de potencia consumida vs. +180 kW de sistema de refrigeración convencional" },
    ],
  },
  {
    id: "chao",
    sector: "Agroindustria",
    solucion: "Enfriamiento Evaporativo",
    client: "Acopios de campo para cosecha de arándanos y palta",
    location: "Chao, La Libertad, Perú",
    description: "Operación agrícola de gran escala requería reducir la deshidratación de fruta durante la cosecha, antes de llegar al centro de empaque. Más de 800 hectáreas a cubrir.",
    result: "+10 centros de acopio · T<25°C y HR>80% · 4 años de crecimiento acompañado",
    img: null,
    proximamente: false,
    situacion: "Operación agrícola de gran escala en Chao, La Libertad, requería reducir la deshidratación de fruta durante el proceso de cosecha, antes de llegar al centro de empaque. Con más de 800 hectáreas a cubrir, la fruta cosechada acumulaba tiempo de espera en campo sin condiciones térmicas adecuadas.",
    intervencion: "Se implementaron centros de acopio con enfriamiento evaporativo estratégicamente distribuidos en campo, para consolidar la cosecha al tamaño de carga de transporte. Estructuras simples con cobertura de malla raschel, sin material aislante, con bajo costo de implementación y fácil reubicación.",
    resultados: [
      { periodo: "Escala", label: "+10 centros de acopio implementados, acompañando el crecimiento de campo a lo largo de 4 años" },
      { periodo: "Condiciones", label: "T<25°C y HR>80%, reduciendo drásticamente la tasa de deshidratación en campo" },
      { periodo: "Operación", label: "Reducción de tiempos de espera desde el punto de cosecha, con total adaptación al ritmo y requerimientos de la operación" },
    ],
  },
  {
    id: "iquitos",
    sector: "Retail",
    solucion: "Ventilación Industrial",
    client: "Tienda de retail de gran formato",
    location: "Iquitos, Perú",
    description: "Próximamente",
    result: "",
    img: null,
    proximamente: true,
  },
  {
    id: "lurin",
    sector: "Industrial",
    solucion: "Consultoría",
    client: "Planta industrial",
    location: "Lurín, Perú",
    description: "Próximamente",
    result: "",
    img: null,
    proximamente: true,
  },
  {
    id: "pesca",
    sector: "Pesca",
    solucion: "Consultoría",
    client: "Operación pesquera",
    location: "Litoral peruano",
    description: "Próximamente",
    result: "",
    img: null,
    proximamente: true,
  },
  {
    id: "automotriz",
    sector: "Automotriz",
    solucion: "Enfriamiento Evaporativo",
    client: "Concesionario automotriz",
    location: "Lima, Perú",
    description: "Próximamente",
    result: "",
    img: null,
    proximamente: true,
  },
  {
    id: "transporte-ica",
    sector: "Transporte",
    solucion: "Enfriamiento Evaporativo",
    client: "Empresa de transporte",
    location: "Ica, Perú",
    description: "Próximamente",
    result: "",
    img: null,
    proximamente: true,
  },
  {
    id: "canete",
    sector: "Agroindustria",
    solucion: "Enfriamiento Evaporativo",
    client: "Operación agroindustrial",
    location: "Cañete, Perú",
    description: "Próximamente",
    result: "",
    img: null,
    proximamente: true,
  },
];

const sectores = ["Todos", ...Array.from(new Set(casos.map((c) => c.sector)))];

// ─── Modal ────────────────────────────────────────────────────────────────────

function Modal({ caso, onClose }: { caso: Caso; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.25 }}
          className="bg-background rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Photo */}
          {caso.img ? (
            <div className="aspect-[16/7] overflow-hidden">
              <img src={caso.img} alt={caso.client} className="w-full h-full object-cover object-center" />
            </div>
          ) : caso.situacion ? (
            <div className="aspect-[16/7] bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-xs tracking-widest uppercase">Foto próximamente</span>
            </div>
          ) : null}

          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                    {caso.sector} · {caso.location}
                  </span>
                </div>
                <h2 className="font-heading text-xl md:text-2xl font-bold">{caso.client}</h2>
                <p className="text-primary text-sm font-semibold mt-1">{caso.solucion}</p>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors ml-4 shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Situación + Intervención */}
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm font-semibold mb-1">Situación inicial</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{caso.situacion}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Intervención</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{caso.intervencion}</p>
              </div>
            </div>

            {/* Resultados */}
            {caso.resultados && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x divide-border bg-card rounded-xl p-6">
                {caso.resultados.map((r) => (
                  <div key={r.periodo} className="sm:flex-1 sm:px-5 first:sm:pl-0 last:sm:pr-0">
                    <p className="text-xs font-semibold text-primary mb-1">{r.periodo}</p>
                    <p className="text-sm text-foreground">{r.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Página ───────────────────────────────────────────────────────────────────

export default function CasosPage() {
  const [filtro, setFiltro] = useState("Todos");
  const [casoActivo, setCasoActivo] = useState<Caso | null>(null);

  const casosFiltrados = filtro === "Todos" ? casos : casos.filter((c) => c.sector === filtro);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Casos de éxito</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-4">
            Operaciones reales.{" "}
            <span className="text-gradient">Resultados medibles.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Cada caso representa un problema operativo real resuelto — con datos concretos, sin estimaciones.
          </p>
        </section>

        {/* Filtros */}
        <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-8">
          <div className="flex flex-wrap gap-2">
            {sectores.map((s) => (
              <button
                key={s}
                onClick={() => setFiltro(s)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filtro === s
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </section>

        {/* Grid de casos */}
        <section className="section-padding pt-0 pb-10 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {casosFiltrados.map((caso, i) => (
                <motion.div
                  key={caso.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`bg-card border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
                    caso.proximamente
                      ? "opacity-60"
                      : "hover:border-primary/40 hover:glow-box cursor-pointer"
                  }`}
                  onClick={() => !caso.proximamente && setCasoActivo(caso)}
                >
                  {/* Foto o placeholder */}
                  <div className="aspect-video overflow-hidden bg-muted">
                    {caso.img ? (
                      <img src={caso.img} alt={caso.client} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">Próximamente</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                        {caso.sector}
                      </span>
                      <span className="text-xs text-muted-foreground">{caso.solucion}</span>
                    </div>
                    <h3 className="font-heading font-semibold mb-1">{caso.client}</h3>
                    <p className="text-muted-foreground text-xs mb-3">{caso.location}</p>

                    {!caso.proximamente && (
                      <>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                          {caso.description}
                        </p>
                        <div className="border-t border-border pt-4 mt-auto">
                          <p className="text-primary font-semibold text-sm mb-3">{caso.result}</p>
                          <span className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                            Ver caso completo
                            <ArrowRight size={16} />
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />

      {/* Modal */}
      {casoActivo && <Modal caso={casoActivo} onClose={() => setCasoActivo(null)} />}
    </>
  );
}
