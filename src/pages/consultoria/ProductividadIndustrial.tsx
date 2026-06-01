import { ArrowLeft, ArrowRight, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigateToContact } from "@/hooks/useNavigateToContact";
import { motion } from "framer-motion";
import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mejora de Productividad Industrial en Perú",
  "provider": {
    "@type": "Organization",
    "@id": "https://swingenieria.com/#organization",
    "name": "SW Ingeniería",
  },
  "serviceType": "Mejora de Productividad Industrial",
  "description":
    "Consultoría para mejorar la productividad industrial en plantas de Perú. Incremento de throughput, disponibilidad de equipos y rendimiento de línea sin ampliar capacidad instalada. SW Ingeniería.",
  "areaServed": { "@type": "Country", "name": "Peru" },
  "url": "https://swingenieria.com/consultoria/productividad-industrial",
};

const metricas = [
  { label: "Throughput por turno", desc: "Unidades producidas por hora de trabajo disponible" },
  { label: "OEE (Efectividad Global del Equipo)", desc: "Disponibilidad × rendimiento × calidad" },
  { label: "Productividad horas-hombre", desc: "Output por HH directa consumida" },
  { label: "Tiempo de ciclo real vs estándar", desc: "Brecha entre lo que tarda y lo que debería tardar" },
  { label: "Tasa de reproceso y merma", desc: "Pérdidas de calidad que consumen capacidad" },
];

const ProductividadIndustrial = () => {
  const navigateToContact = useNavigateToContact();

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Mejora de Productividad Industrial en Perú | SW Ingeniería"
        description="Consultoría para mejorar la productividad industrial en Perú. Incremento de throughput, disponibilidad de equipos y rendimiento de línea en agroindustria y manufactura. SW Ingeniería."
        keywords="mejora de productividad industrial Perú, aumentar productividad planta industrial, productividad agroindustria, OEE industrial Perú, throughput industrial, eficiencia de línea industrial"
        path="/consultoria/productividad-industrial"
        schema={schema}
      />
      <Navbar activePage="consultoria" darkHero={false} />

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
            Consultoría · Productividad
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
            Mejora de productividad industrial en Perú
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Aumentamos el throughput, la disponibilidad de equipos y el rendimiento de la línea
            utilizando la capacidad instalada que ya tiene — sin necesidad de ampliar activos.
          </p>
          <button
            onClick={navigateToContact}
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
            El problema de la capacidad oculta
          </h2>
          <p>
            En la mayoría de plantas industriales y agroindustriales donde hemos trabajado, hay
            más capacidad productiva de la que se está usando. No porque los equipos estén
            subutilizados de manera obvia, sino porque las pérdidas operativas — paradas no
            planificadas, cambios lentos, operaciones fuera de estándar, merma — consumen
            silenciosamente una fracción significativa de la capacidad disponible.
          </p>
          <p>
            La <strong className="text-foreground">mejora de productividad industrial</strong> en
            este contexto no requiere comprar más capacidad: requiere recuperar la que ya existe.
            En plantas donde hemos trabajado, el gap entre el throughput real y el potencial
            alcanzable con la infraestructura actual ha sido típicamente de 20% a 40%.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">
            Métricas que medimos y mejoramos
          </h2>
        </div>

        <div className="mt-4 space-y-3 not-prose">
          {metricas.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-start gap-4 bg-card border border-border rounded-lg px-5 py-4"
            >
              <Gauge size={17} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">{m.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="prose prose-lg prose-invert max-w-none space-y-5 text-muted-foreground leading-relaxed mt-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Cómo abordamos la mejora de productividad
          </h2>
          <p>
            El diagnóstico parte de medir el estado actual con precisión: throughput real por
            turno, disponibilidad de equipos clave, tiempos de ciclo, tasa de OEE cuando es
            aplicable. Luego identificamos los factores que explican la brecha con el potencial
            teórico — generalmente una combinación de paradas cortas no registradas, operaciones
            fuera de estándar, y cuellos de botella que limitan la línea completa.
          </p>
          <p>
            Las intervenciones priorizadas varían: pueden ser cambios en la secuencia de
            operaciones, implementación de estándares de trabajo con seguimiento visual,
            ajustes en el sistema de mantenimiento preventivo, o rediseño de los flujos de
            material. En todos los casos, acompañamos la implementación hasta verificar que
            la mejora se sostiene en los registros operativos reales.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">
            Resultados en operaciones reales
          </h2>
          <p>
            En una panificadora industrial en Lurín (Lima), una intervención de rediseño operativo
            y estándares de trabajo resultó en una mejora del 30% en productividad por
            horas-hombre, con una reducción simultánea del 21% en consumo de insumos críticos.
            La intervención no requirió inversión en equipos nuevos.
          </p>
          <p>
            En operaciones de packing agroindustrial en Ica y Chao, los diagnósticos revelaron
            pérdidas de disponibilidad de equipos de frío y líneas de selección que representaban
            capacidad productiva no aprovechada equivalente a un turno adicional semanal.
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
            ¿Cuánta capacidad productiva tiene su planta sin aprovechar?
          </p>
          <p className="text-muted-foreground text-sm mb-5">
            Lo medimos antes de proponer nada. Primera conversación sin costo.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={navigateToContact}
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

export default ProductividadIndustrial;
