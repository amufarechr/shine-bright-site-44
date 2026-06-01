import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Optimización de Procesos Industriales en Perú",
  "provider": {
    "@type": "Organization",
    "@id": "https://swingenieria.com/#organization",
    "name": "SW Ingeniería",
  },
  "serviceType": "Optimización de Procesos Industriales",
  "description":
    "Diagnóstico y rediseño de procesos productivos en plantas industriales y agroindustriales en Perú. Reducción de tiempos de ciclo, merma y cuellos de botella. SW Ingeniería.",
  "areaServed": { "@type": "Country", "name": "Peru" },
  "url": "https://swingenieria.com/consultoria/optimizacion-procesos-industriales",
};

const puntos = [
  "Mapeo de flujos de valor y diagnóstico de cuellos de botella",
  "Análisis de tiempos de ciclo, disponibilidad y rendimiento por línea",
  "Cuantificación de merma, reproceso y desperdicios en proceso",
  "Rediseño de secuencias operativas y estándares de trabajo",
  "Implementación de controles visuales y sistemas de seguimiento",
  "Acompañamiento hasta verificación de resultados en operación real",
];

const OptimizacionProcesos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Optimización de Procesos Industriales en Perú | SW Ingeniería"
        description="Consultoría en optimización de procesos industriales en Perú. Diagnóstico de cuellos de botella, rediseño operativo y reducción de merma en agroindustria y manufactura. SW Ingeniería."
        keywords="optimización de procesos industriales Perú, mejora de procesos industriales, diagnóstico operativo planta industrial, reducción cuellos de botella, eficiencia productiva agroindustria"
        path="/consultoria/optimizacion-procesos-industriales"
        schema={schema}
      />
      <Navbar activePage="consultoria" />

      {/* Hero */}
      <section className="pt-[120px] pb-16 px-8 md:px-24 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/consultoria"
            className="inline-flex items-center gap-2 text-sm text-primary font-semibold mb-8 hover:underline"
          >
            <ArrowLeft size={15} /> Consultoría operativa
          </Link>

          <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-4">
            Consultoría · Procesos
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
            Optimización de procesos industriales en Perú
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Identificamos y eliminamos las pérdidas estructurales de sus procesos productivos —
            tiempos de ciclo excesivos, merma evitable, cuellos de botella — con un diagnóstico en
            campo y un plan de intervención priorizado por impacto económico.
          </p>
          <button
            onClick={() => navigate("/consultoria#contacto")}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary hover:brightness-110 rounded-md text-sm font-semibold text-white transition-all"
          >
            Solicitar diagnóstico <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>

      {/* Body */}
      <section className="pb-16 px-8 md:px-24 max-w-4xl mx-auto">
        <div className="prose prose-lg prose-invert max-w-none space-y-5 text-muted-foreground leading-relaxed">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Por qué los procesos se degradan con el tiempo
          </h2>
          <p>
            En la mayoría de plantas industriales y agroindustriales en Perú, los procesos
            productivos no fueron diseñados una sola vez: fueron construidos de manera incremental,
            con adaptaciones acumuladas que rara vez se revisaron en conjunto. El resultado es un
            proceso que funciona, pero que esconde pérdidas que se han normalizado: secuencias
            subóptimas, tiempos muertos que nadie mide, insumos que se usan por hábito en
            cantidades que ya no responden a ningún estándar técnico.
          </p>
          <p>
            La <strong className="text-foreground">optimización de procesos industriales</strong> no
            requiere necesariamente inversión en nuevos equipos. En la mayoría de los proyectos
            que ejecutamos, la mayor parte del potencial de mejora está en el rediseño de cómo se
            usan los recursos existentes: personas, tiempo, insumos, y capacidad instalada.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">
            Nuestro enfoque de diagnóstico operativo
          </h2>
          <p>
            Trabajamos con los datos de la operación real — no con proyecciones o modelos teóricos.
            El diagnóstico combina observación directa en planta con análisis cuantitativo de los
            registros operativos disponibles: tiempos de ciclo, rendimientos, consumos, historial
            de mantenimiento, registros de merma.
          </p>
          <p>
            A partir de ese análisis construimos un mapa de oportunidades con la brecha cuantificada
            para cada proceso. Esto permite al equipo directivo priorizar con información precisa:
            qué intervenir primero, qué inversión requiere, y qué resultado se puede esperar.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">
            Qué incluye la intervención
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 not-prose mt-4">
            {puntos.map((p, i) => (
              <div key={i} className="flex gap-3 items-start bg-card rounded-lg p-4 border border-border">
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-snug">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">
            Sectores y geografía
          </h2>
          <p>
            Hemos ejecutado proyectos de optimización de procesos en packing de uva de mesa y
            arándanos en Ica y Chao, en plantas de manufactura en Lima (Lurín, Ate), en
            operaciones logísticas en Callao, y en agroindustria de palta en el norte peruano.
            Nuestro radio de acción principal es Perú, con proyectos específicos en México.
          </p>
        </div>

        {/* CTA interno */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-card rounded-xl border border-border"
        >
          <p className="font-heading text-xl font-bold mb-2">
            ¿Su operación tiene oportunidades de mejora sin explotar?
          </p>
          <p className="text-muted-foreground text-sm mb-5">
            La primera conversación es sin costo. Identificamos en 30 minutos si hay potencial real
            de intervención.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => navigate("/consultoria#contacto")}
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary hover:brightness-110 rounded-md text-sm font-semibold text-white transition-all"
            >
              Conversar con el equipo <ArrowRight size={15} />
            </button>
            <Link
              to="/consultoria"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-md text-sm font-semibold text-foreground hover:bg-card/80 transition-all"
            >
              Ver consultoría completa
            </Link>
          </div>
        </motion.div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default OptimizacionProcesos;
