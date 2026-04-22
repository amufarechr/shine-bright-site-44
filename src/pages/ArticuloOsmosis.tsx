import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Droplets, Sprout, Factory, HelpCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import osmosisImg from "@/assets/climatizacion/osmosis.jpeg";

const metricas = [
  { valor: "<0.5 dS/m", label: "CE máxima recomendada para arándano", fuente: "Umbral agronómico" },
  { valor: "95–99%", label: "Eficiencia de remoción de sales en ósmosis inversa", fuente: "Rango típico industrial" },
  { valor: "3–6 años", label: "Payback típico en proyectos agrícolas de mediana escala", fuente: "Proyectos implementados" },
];

const secciones = [
  {
    icon: Droplets,
    titulo: "Qué es la ósmosis inversa y cómo funciona",
    contenido: [
      "La ósmosis inversa es un proceso de filtración a nivel molecular: aplica presión para forzar el agua a través de una membrana semipermeable, reteniendo sales, minerales, metales pesados y contaminantes disueltos. El resultado es agua con parámetros controlados — conductividad eléctrica, pH, dureza — que puede ajustarse con precisión según el uso final.",
      "A diferencia de la filtración convencional, que retiene partículas en suspensión, la ósmosis inversa actúa sobre los iones disueltos — los responsables de la salinidad, la dureza y la mayoría de los parámetros que afectan tanto la calidad del agua potable como la aptitud del agua para riego.",
      "Los sistemas industriales trabajan en continuo, con capacidades desde unos pocos metros cúbicos por hora hasta cientos, y pueden alimentarse de fuentes muy diversas: agua de mar, agua salobre de pozos, agua de red con parámetros fuera de especificación, o efluentes industriales a tratar.",
    ],
  },
  {
    icon: Sprout,
    titulo: "Aplicación agrícola: pozos con alta salinidad en cultivos sensibles",
    contenido: [
      "Uno de los casos de uso más críticos — y menos atendidos — de la ósmosis inversa en Latinoamérica es la mejora de calidad del agua de pozos para riego de cultivos de exportación. En zonas costeras y áridas, los acuíferos subterráneos frecuentemente presentan niveles de conductividad eléctrica (CE) que superan ampliamente los umbrales que cultivos sensibles pueden tolerar.",
      "El arándano es particularmente exigente: requiere agua de riego con CE inferior a 0.5 dS/m para no afectar la absorción de nutrientes, el desarrollo radicular y la calidad del fruto. La uva de mesa de exportación opera con tolerancias algo mayores (hasta 1.5–2.0 dS/m según variedad), pero igualmente es sensible a agua con alta concentración de cloruros o sodio, que puede comprometer la vida de anaquel y el aspecto del fruto.",
      "Cuando el agua del pozo supera estos umbrales — lo que ocurre con frecuencia en la costa peruana, en el norte de Chile y en zonas áridas de México — el productor enfrenta una disyuntiva: comprar agua de otra fuente (costoso y logísticamente complejo), perforar nuevos pozos (incierto y caro), o tratar el agua del pozo existente.",
      "La ósmosis inversa permite una cuarta opción: tomar el agua del pozo disponible y ajustar sus parámetros antes del riego. El sistema puede dimensionarse para el caudal exacto requerido por el sistema de riego, y la mezcla entre agua tratada y agua sin tratar puede ajustarse para alcanzar la CE objetivo sin desperdiciar capacidad de tratamiento.",
    ],
  },
  {
    icon: Factory,
    titulo: "Aplicación industrial y residencial de gran escala",
    contenido: [
      "Más allá de la aplicación agrícola, la ósmosis inversa tiene casos de uso consolidados en múltiples sectores industriales y residenciales de alto consumo.",
      "En la industria farmacéutica y alimentaria, el agua de proceso debe cumplir parámetros muy estrictos de pureza que el agua de red no siempre garantiza. Un sistema de ósmosis inversa centralizado asegura calidad consistente en todos los puntos de uso, sin depender de la variabilidad del suministro público.",
      "En proyectos residenciales de gran escala — condominios, conjuntos habitacionales en zonas sin acceso a red de agua potable, o con agua de red de baja calidad — la desalinización centralizada elimina la dependencia de camiones cisterna y garantiza suministro continuo con calidad controlada.",
      "En zonas costeras donde el único recurso disponible es agua de mar, los sistemas de ósmosis inversa para desalinización son frecuentemente la única solución técnicamente viable para suministro continuo a escala.",
    ],
  },
];

const faqs = [
  {
    q: "¿Cómo sé si el agua de mi pozo necesita tratamiento?",
    a: "El indicador más directo es la conductividad eléctrica (CE), medible con un conductímetro económico. Para arándano, cualquier valor sobre 0.5 dS/m merece atención. Para uva, el umbral es más flexible pero depende de la variedad y el portainjerto. También importa la concentración de cloruros, sodio y boro, que pueden ser fitotóxicos a niveles que la CE total no refleja. Un análisis completo de agua — disponible en laboratorios agronómicos — es el punto de partida correcto.",
  },
  {
    q: "¿El sistema trata toda el agua o solo una parte?",
    a: "Depende del diseño. En muchos casos agrícolas, se trata solo una fracción del caudal y se mezcla con agua sin tratar hasta alcanzar la CE objetivo. Esto reduce el tamaño del sistema y el consumo energético, y es perfectamente viable si la fuente no tiene contaminantes específicos (boro, arsénico, etc.) que requieran remoción completa.",
  },
  {
    q: "¿Cuánto consume energía un sistema de ósmosis inversa?",
    a: "Depende de la fuente. Para agua salobre de pozo (CE 3–8 dS/m), el consumo típico es de 0.5 a 1.5 kWh/m³. Para agua de mar (CE 45–55 dS/m), el consumo sube a 3–5 kWh/m³. En proyectos agrícolas con agua de pozo moderadamente salina, el costo energético es generalmente manejable frente al valor del cultivo que protege.",
  },
  {
    q: "¿Qué pasa con el rechazo — el agua concentrada que descarta el sistema?",
    a: "Todo sistema de ósmosis genera un efluente concentrado (rechazo) que debe gestionarse. Las opciones incluyen descarga a red de alcantarillado, evaporación en pozas, reinyección al acuífero (con permisos) o uso en cultivos tolerantes a sal. El volumen de rechazo depende de la tasa de recuperación del sistema, típicamente entre 50% y 80% para agua salobre.",
  },
];

export default function ArticuloOsmosis() {
  const navigate = useNavigate();

  return (
    <>
      <SeoHead
        title="Ósmosis inversa para agua agrícola e industrial: cuándo y cómo usarla"
        description="Guía técnica sobre ósmosis inversa para mejorar calidad de agua de pozos en cultivos de arándano y uva, desalinización industrial y proyectos residenciales de gran escala."
        keywords="ósmosis inversa agrícola, agua para riego arándano, salinidad agua riego uva, conductividad agua riego, tratamiento agua pozos, desalinización industrial, calidad agua riego exportación"
        path="/articulos/osmosis-inversa"
      />
      <Navbar activePage="soluciones" darkHero={false} />
      <main className="min-h-screen">
        <section className="pt-44 pb-12 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link
              to="/soluciones/agua"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Volver a Gestión de Agua
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Artículo técnico · Agua</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">SW Ingeniería</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ósmosis inversa:{" "}
              <span className="text-gradient">cuándo y cómo mejorar la calidad del agua para riego e industria</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Desde agua de mar hasta pozos con alta salinidad para cultivos de arándano y uva — esta guía explica cómo funciona la ósmosis inversa, en qué casos tiene sentido económico y qué parámetros determinan el diseño correcto del sistema.
            </p>
          </motion.div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="border-t border-border" />
        </div>

        {/* Métricas */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto py-10">
          <div className="grid grid-cols-3 gap-4">
            {metricas.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 text-center"
              >
                <p className="font-heading text-2xl font-bold text-primary mb-1">{m.valor}</p>
                <p className="text-foreground text-xs font-medium mb-1">{m.label}</p>
                <p className="text-muted-foreground text-xs">{m.fuente}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Foto */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="rounded-xl overflow-hidden">
              <img src={osmosisImg} alt="Sistema de ósmosis inversa industrial" className="w-full object-cover max-h-72" />
            </div>
          </motion.div>
        </section>

        {/* Cuerpo */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <div className="space-y-14">
            {secciones.map((sec, i) => {
              const Icon = sec.icon;
              return (
                <motion.div key={sec.titulo} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-primary/10 rounded-lg p-2.5 shrink-0"><Icon size={20} className="text-primary" /></div>
                    <h2 className="font-heading text-xl md:text-2xl font-bold">{sec.titulo}</h2>
                  </div>
                  <div className="space-y-4 md:pl-12">
                    {sec.contenido.map((p, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">{p}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* FAQs */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-lg p-2.5 shrink-0"><HelpCircle size={20} className="text-primary" /></div>
              <h2 className="font-heading text-xl md:text-2xl font-bold">Preguntas frecuentes</h2>
            </div>
            <div className="space-y-6 md:pl-12">
              {faqs.map((item) => (
                <div key={item.q} className="border-l-2 border-primary/30 pl-5">
                  <p className="font-semibold text-sm mb-2">{item.q}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">¿Tienes un problema de calidad de agua?</span>
            <h3 className="font-heading text-2xl font-bold mt-3 mb-3">Evaluamos tu fuente y dimensionamos el sistema correcto</h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Con un análisis de agua y el perfil de consumo de tu operación, determinamos si la ósmosis inversa es la solución correcta y cómo dimensionarla para el retorno más corto posible.
            </p>
            <button onClick={() => navigate("/soluciones/agua")} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Ver solución completa <ArrowRight size={16} />
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
