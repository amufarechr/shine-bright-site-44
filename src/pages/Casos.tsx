import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import casoChincha from "@/assets/evaporativo/caso-chincha.jpg";
import casoIca from "@/assets/evaporativo/caso-ica.jpg";
import casoCallao from "@/assets/evaporativo/caso-callao.jpg";
import casoTransporteIca from "@/assets/evaporativo/caso-transporte-ica.jpg";
import casoTransporteIcaChart from "@/assets/evaporativo/caso-transporte-ica-chart.jpg";
import casoViveroAte from "@/assets/evaporativo/caso-vivero-ate.jpg";
import casoChao from "@/assets/evaporativo/caso-chao.jpg";
import casoIquitos from "@/assets/evaporativo/caso-iquitos.jpg";
import casoLurin from "@/assets/evaporativo/caso-lurin.jpg";
import casoAutomotrizLima from "@/assets/evaporativo/caso-automotriz-lima.jpg";
import casoAutomotrizLima2 from "@/assets/evaporativo/caso-automotriz-lima-2.jpg";
import casoPesca from "@/assets/evaporativo/caso-pesca.jpg";
import { casosChincha, casosIca, casosCallao, casosChao, casosViveroAte, casosIquitos, casosLurin, casosPesca, casosAutomotriz, casosTransporteIca } from "@/data/siteData";

// ─── Tipos ───────────────────────────────────────────────────────────────────

interface Resultado {
  periodo: string;
  label: string;
}

interface Caso {
  id: string;
  sector: string;
  soluciones: string[];
  client: string;
  location: string;
  description: string;
  result: string;
  img: string | null;
  imgChart?: string | null;
  proximamente: boolean;
  situacion?: string;
  intervencion?: string;
  resultados?: Resultado[];
  quote?: { text: string; author: string; role: string };
}

// ─── Datos ────────────────────────────────────────────────────────────────────

const casos: Caso[] = [
  {
    id: "chincha",
    sector: casosChincha.sector,
    soluciones: ["Enfriamiento Evaporativo"],
    client: casosChincha.client,
    location: casosChincha.location,
    description: casosChincha.description,
    result: casosChincha.resultCard,
    img: casoChincha,
    proximamente: false,
    situacion: casosChincha.situacion,
    intervencion: casosChincha.intervencion,
    resultados: casosChincha.resultados,
    quote: casosChincha.quote,
  },
  {
    id: "ica-uva",
    sector: casosIca.sector,
    soluciones: ["Enfriamiento Evaporativo"],
    client: casosIca.client,
    location: casosIca.location,
    description: casosIca.description,
    result: casosIca.resultCard,
    img: casoIca,
    proximamente: false,
    situacion: casosIca.situacion,
    intervencion: casosIca.intervencion,
    resultados: casosIca.resultados,
    quote: casosIca.quote,
  },
  {
    id: "callao",
    sector: "Logística",
    soluciones: ["Enfriamiento Evaporativo"],
    client: "Centro de distribución farmacéutico",
    location: casosCallao.location,
    description: casosCallao.description,
    result: casosCallao.resultCard,
    img: casoCallao,
    proximamente: false,
    situacion: casosCallao.situacion,
    intervencion: casosCallao.intervencion,
    resultados: casosCallao.resultados,
  },
  {
    id: "chao",
    sector: casosChao.sector,
    soluciones: ["Enfriamiento Evaporativo"],
    client: casosChao.client,
    location: casosChao.location,
    description: casosChao.description,
    result: casosChao.resultCard,
    img: casoChao,
    proximamente: false,
    situacion: casosChao.situacion,
    intervencion: casosChao.intervencion,
    resultados: casosChao.resultados,
  },
  {
    id: "vivero-ate",
    sector: casosViveroAte.sector,
    soluciones: ["Enfriamiento Evaporativo", "Calefacción Radiante"],
    client: casosViveroAte.client,
    location: casosViveroAte.location,
    description: casosViveroAte.description,
    result: casosViveroAte.resultCard,
    img: casoViveroAte,
    proximamente: false,
    situacion: casosViveroAte.situacion,
    intervencion: casosViveroAte.intervencion,
    resultados: casosViveroAte.resultados,
  },
  {
    id: "iquitos",
    sector: casosIquitos.sector,
    soluciones: ["Ventiladores Industriales", "Enfriamiento Evaporativo"],
    client: casosIquitos.client,
    location: casosIquitos.location,
    description: casosIquitos.description,
    result: casosIquitos.resultCard,
    img: casoIquitos,
    proximamente: false,
    situacion: casosIquitos.situacion,
    intervencion: casosIquitos.intervencion,
    resultados: casosIquitos.resultados,
  },
  {
    id: "lurin",
    sector: casosLurin.sector,
    soluciones: ["Consultoría de Eficiencia Operativa"],
    client: casosLurin.client,
    location: casosLurin.location,
    description: casosLurin.description,
    result: casosLurin.resultCard,
    img: casoLurin,
    proximamente: false,
    situacion: casosLurin.situacion,
    intervencion: casosLurin.intervencion,
    resultados: casosLurin.resultados,
    quote: casosLurin.quote,
  },
  {
    id: "pesca",
    sector: casosPesca.sector,
    soluciones: ["Consultoría de Eficiencia Operativa"],
    client: casosPesca.client,
    location: casosPesca.location,
    description: casosPesca.description,
    result: casosPesca.resultCard,
    img: casoPesca,
    proximamente: false,
    situacion: casosPesca.situacion,
    intervencion: casosPesca.intervencion,
    resultados: casosPesca.resultados,
  },
  {
    id: "automotriz",
    sector: casosAutomotriz.sector,
    soluciones: ["Enfriamiento Evaporativo"],
    client: casosAutomotriz.client,
    location: casosAutomotriz.location,
    description: casosAutomotriz.description,
    result: casosAutomotriz.resultCard,
    img: casoAutomotrizLima,
    imgChart: casoAutomotrizLima2,
    proximamente: false,
    situacion: casosAutomotriz.situacion,
    intervencion: casosAutomotriz.intervencion,
    resultados: casosAutomotriz.resultados,
  },
  {
    id: "transporte-ica",
    sector: casosTransporteIca.sector,
    soluciones: ["Enfriamiento Evaporativo"],
    client: casosTransporteIca.client,
    location: casosTransporteIca.location,
    description: casosTransporteIca.description,
    result: casosTransporteIca.resultCard,
    img: casoTransporteIca,
    imgChart: casoTransporteIcaChart,
    proximamente: false,
    situacion: casosTransporteIca.situacion,
    intervencion: casosTransporteIca.intervencion,
    resultados: casosTransporteIca.resultados,
  },

];

const sectores = ["Todos", ...Array.from(new Set(casos.map((c) => c.sector)))];
const soluciones = ["Todas", ...Array.from(new Set(casos.flatMap((c) => c.soluciones)))];

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
          {/* Photos */}
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
                <p className="text-primary text-sm font-semibold mt-1">{caso.soluciones.join(" + ")}</p>
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

            {/* Quote */}
            {caso.quote && (
              <div className="mt-6 border-l-2 border-primary/40 pl-5 py-1">
                <p className="text-foreground text-sm leading-relaxed italic mb-3">"{caso.quote.text}"</p>
                <p className="text-sm font-semibold">{caso.quote.author}</p>
                <p className="text-muted-foreground text-xs">{caso.quote.role}</p>
              </div>
            )}

            {/* Chart */}
            {caso.imgChart && (
              <div className="mt-6">
                <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-3">Datos de campo</p>
                <div className="rounded-xl overflow-hidden bg-white p-3">
                  <img
                    src={caso.imgChart}
                    alt="Gráfico de resultados"
                    className="w-full object-contain"
                  />
                </div>
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
  const [filtroSector, setFiltroSector] = useState("Todos");
  const [filtroSolucion, setFiltroSolucion] = useState("Todas");
  const [casoActivo, setCasoActivo] = useState<Caso | null>(null);

  const casosFiltrados = casos.filter((c) => {
    const porSector = filtroSector === "Todos" || c.sector === filtroSector;
    const porSolucion = filtroSolucion === "Todas" || c.soluciones.includes(filtroSolucion);
    return porSector && porSolucion;
  });

  return (
    <>
      <SeoHead
        title="Casos de Éxito en Agroindustria e Industria — Perú y México | SW Ingeniería"
        description="Más de 80 implementaciones en plantas agroindustriales, almacenes y retail en Perú. Proyectos en Lima, Ica, Piura, Trujillo y Callao. Datos reales de reducción de temperatura y ahorro energético."
        path="/casos"
      />
      <Navbar darkHero={false} />
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
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative">
              <select
                value={filtroSector}
                onChange={(e) => setFiltroSector(e.target.value)}
                className="appearance-none bg-card border border-border text-sm font-medium text-foreground rounded-lg px-4 py-2 pr-9 cursor-pointer hover:border-primary/40 focus:outline-none focus:border-primary transition-colors"
              >
                {sectores.map((s) => (
                  <option key={s} value={s}>{s === "Todos" ? "Sector: Todos" : s}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
            </div>
            <div className="relative">
              <select
                value={filtroSolucion}
                onChange={(e) => setFiltroSolucion(e.target.value)}
                className="appearance-none bg-card border border-border text-sm font-medium text-foreground rounded-lg px-4 py-2 pr-9 cursor-pointer hover:border-primary/40 focus:outline-none focus:border-primary transition-colors"
              >
                {soluciones.map((s) => (
                  <option key={s} value={s}>{s === "Todas" ? "Solución: Todas" : s}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
            </div>
            {(filtroSector !== "Todos" || filtroSolucion !== "Todas") && (
              <button
                onClick={() => { setFiltroSector("Todos"); setFiltroSolucion("Todas"); }}
                className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
              >
                Limpiar filtros
              </button>
            )}
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
                      <span className="text-xs text-muted-foreground">{caso.soluciones.join(" + ")}</span>
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
