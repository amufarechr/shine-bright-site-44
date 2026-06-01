import { ArrowLeft, ArrowRight, TrendingDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Reducción de Costos Operativos Industrial en Perú",
  "provider": {
    "@type": "Organization",
    "@id": "https://swingenieria.com/#organization",
    "name": "SW Ingeniería",
  },
  "serviceType": "Reducción de Costos Operativos",
  "description":
    "Consultoría para reducir costos operativos en plantas industriales y agroindustriales en Perú. Diagnóstico de brechas en energía, insumos y mano de obra directa. SW Ingeniería.",
  "areaServed": { "@type": "Country", "name": "Peru" },
  "url": "https://swingenieria.com/consultoria/reduccion-costos-operativos",
};

const rubros = [
  { label: "Energía eléctrica y combustibles", rango: "10%–25% de reducción típica" },
  { label: "Insumos de proceso y embalaje", rango: "15%–30% de reducción típica" },
  { label: "Horas-hombre directas", rango: "20%–35% de mejora en productividad" },
  { label: "Costos de mantenimiento correctivo", rango: "Reducción por mayor confiabilidad" },
  { label: "Merma y reproceso", rango: "Variable según sector y proceso" },
];

const ReduccionCostos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Reducción de Costos Operativos Industrial en Perú | SW Ingeniería"
        description="Consultoría en reducción de costos operativos para plantas industriales y agroindustriales en Perú. Diagnóstico de brechas en energía, insumos y mano de obra. SW Ingeniería."
        keywords="reducción de costos operativos industrial, reducir costos planta industrial Perú, optimización costos producción, ahorro energético industrial, reducir costos agroindustria"
        path="/consultoria/reduccion-costos-operativos"
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
            Consultoría · Costos
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
            Reducción de costos operativos en industria y agroindustria
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Cuantificamos la brecha entre sus costos actuales y el potencial alcanzable — sin
            recortes que afecten la producción — y ejecutamos las intervenciones con mayor impacto
            en margen.
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
            El problema: costos que crecen más rápido que los ingresos
          </h2>
          <p>
            Una de las señales más frecuentes que vemos en operaciones industriales y
            agroindustriales en Perú es esta: las ventas crecen, la producción aumenta, pero el
            margen no mejora — o incluso se deteriora. Los costos de producción suben de forma
            casi proporcional al volumen, sin capturar economías de escala.
          </p>
          <p>
            Esto no es inevitable. En la mayoría de los casos, una fracción significativa de los
            costos operativos es recuperable sin invertir en nueva infraestructura: está atrapada
            en ineficiencias que se han normalizado con el tiempo. La{" "}
            <strong className="text-foreground">reducción de costos operativos</strong> sostenible
            empieza por medir con precisión dónde están esas pérdidas.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">
            Cómo cuantificamos el potencial de ahorro
          </h2>
          <p>
            Antes de proponer ninguna intervención, hacemos el diagnóstico. Analizamos los datos
            reales de la operación — facturas de energía, consumos de insumos por unidad producida,
            horas-hombre por turno, registros de mantenimiento — y los comparamos con benchmarks
            alcanzables para el tipo de operación.
          </p>
          <p>
            El resultado es un mapa de brechas por rubro de costo, con la cuantificación del
            potencial de ahorro de cada uno. Esto permite construir un caso de negocio sólido y
            priorizar las intervenciones por ROI antes de comprometer recursos.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">
            Rubros con mayor potencial de reducción
          </h2>
        </div>

        <div className="mt-4 space-y-3 not-prose">
          {rubros.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center justify-between gap-4 bg-card border border-border rounded-lg px-5 py-4"
            >
              <div className="flex items-center gap-3">
                <TrendingDown size={16} className="text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{r.label}</span>
              </div>
              <span className="text-xs font-semibold text-primary whitespace-nowrap">{r.rango}</span>
            </motion.div>
          ))}
        </div>

        <div className="prose prose-lg prose-invert max-w-none space-y-5 text-muted-foreground leading-relaxed mt-8">
          <p className="text-xs italic">
            * Los rangos son referenciales basados en proyectos ejecutados. El potencial específico
            depende del punto de partida de cada operación y se cuantifica en el diagnóstico inicial.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">
            Experiencia en agroindustria e industria peruana
          </h2>
          <p>
            Hemos ejecutado proyectos de reducción de costos operativos en packing de exportación
            (uva, arándanos, palta), manufactura de alimentos en Lima, operaciones logísticas en
            Callao, y procesamiento industrial en Ica y Trujillo. En cada caso, el diagnóstico
            reveló oportunidades que no eran evidentes desde la gerencia y que el equipo operativo
            había dejado de ver por familiaridad.
          </p>
          <p>
            A diferencia de un análisis financiero externo, trabajamos desde adentro de la
            operación: los socios del proyecto tienen experiencia directa en planta y en
            implementación, no solo en diagnóstico. Eso hace la diferencia entre identificar el
            problema y resolverlo.
          </p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-card rounded-xl border border-border"
        >
          <p className="font-heading text-xl font-bold mb-2">
            ¿Cuánto puede recuperar su operación?
          </p>
          <p className="text-muted-foreground text-sm mb-5">
            Lo cuantificamos antes de proponer ninguna intervención. Primera conversación sin costo.
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

export default ReduccionCostos;
