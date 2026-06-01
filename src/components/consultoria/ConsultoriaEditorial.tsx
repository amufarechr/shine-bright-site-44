import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ConsultoriaEditorial = () => (
  <section className="section-padding pt-16 pb-12 bg-background" id="que-es-consultoria-operativa">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          Consultoría operativa
        </span>
        <h2 className="font-heading text-2xl md:text-4xl font-bold mt-3 mb-6">
          Eficiencia operativa industrial en Perú y México
        </h2>

        <div className="prose prose-lg prose-invert max-w-none space-y-5 text-muted-foreground leading-relaxed">
          <p>
            La <strong className="text-foreground">eficiencia operativa industrial</strong> no es un
            objetivo que se alcanza una vez y se mantiene solo. En plantas agroindustriales,
            manufactureras y de proceso, las ineficiencias se acumulan silenciosamente: en el
            consumo de horas-hombre, en el uso de insumos, en los tiempos de ciclo, en la
            disponibilidad de equipos. El resultado visible es una rentabilidad que no mejora
            aunque las ventas crezcan.
          </p>

          <p>
            Una <strong className="text-foreground">consultoría en eficiencia operativa</strong> tiene
            como propósito identificar exactamente dónde está la brecha entre la operación actual
            y su potencial real — y luego cerrarla. No a través de recomendaciones genéricas, sino
            mediante intervenciones concretas en procesos, equipos, flujos y sistemas de gestión.
          </p>

          <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">
            Optimización de procesos industriales
          </h3>
          <p>
            La <strong className="text-foreground">optimización de procesos industriales</strong> en
            entornos de agroindustria, manufactura y logística requiere entender primero la causa
            raíz de cada pérdida. Un proceso que tarda más de lo necesario, consume más energía
            de la requerida o genera más merma que sus benchmarks no es un problema de esfuerzo:
            es un problema de diseño del sistema operativo.
          </p>
          <p>
            En SW Ingeniería diagnosticamos los flujos de valor completos — desde la recepción de
            materia prima hasta el despacho — y diseñamos las intervenciones de mayor impacto. En
            una panificadora industrial en Lurín, esto significó rediseñar la secuencia de
            producción y los estándares de consumo: el resultado fue un aumento de 30% en{" "}
            <strong className="text-foreground">productividad industrial</strong> y una reducción
            del 21% en consumo de insumos críticos, sin inversión significativa en activos.
          </p>

          <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">
            Reducción de costos operativos en industria
          </h3>
          <p>
            La <strong className="text-foreground">reducción de costos operativos</strong> sostenible
            no proviene de recortes, sino de eliminar el desperdicio estructural que cada operación
            acumula con el tiempo. Los costos que más impactan el margen — energía, mano de obra
            directa, insumos de proceso — tienen siempre una fracción recuperable sin afectar la
            producción.
          </p>
          <p>
            Nuestro proceso de diagnóstico cuantifica esa brecha con precisión: definimos el
            potencial de ahorro real antes de proponer ninguna intervención. Esto permite priorizar
            las acciones por ROI y construir un caso de negocio sólido internamente. En operaciones
            de agroindustria en Perú — uva de mesa en Ica, arándanos y palta en Chao, packing en
            el Callao — hemos identificado oportunidades de{" "}
            <strong className="text-foreground">reducción de costos operativos</strong> de entre
            15% y 35% en las áreas intervenidas.
          </p>

          <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">
            Sectores de actuación: agroindustria y manufactura en Perú
          </h3>
          <p>
            Trabajamos principalmente con operaciones de{" "}
            <strong className="text-foreground">agroindustria</strong> —packing de exportación,
            almacenamiento refrigerado, procesamiento primario — y con plantas de{" "}
            <strong className="text-foreground">manufactura</strong> que buscan mejorar su
            competitividad en mercados exigentes. Nuestras intervenciones se han ejecutado en Lima
            (Lurín, Callao, Ate), Ica, Chao, Trujillo, Piura y, en escenarios específicos, en
            México.
          </p>
          <p>
            A diferencia de consultoras que entregan un informe y se retiran, nosotros
            acompañamos la implementación. Los socios del proyecto — ambos ingenieros con MBA por
            MIT y experiencia directa en planta — trabajan junto al equipo operativo hasta
            verificar los resultados en los números reales de la operación.
          </p>

          <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">
            Tres líneas de intervención
          </h3>
          <p>
            Nuestra práctica de consultoría opera en tres ejes complementarios:
          </p>
          <ul className="space-y-2 text-muted-foreground list-none pl-0">
            {[
              {
                label: "Optimización de procesos industriales",
                desc: "Rediseño de flujos, estándares operativos y sistemas de control de pérdidas.",
                href: "/consultoria/optimizacion-procesos-industriales",
              },
              {
                label: "Reducción de costos operativos",
                desc: "Diagnóstico de brechas en energía, insumos y mano de obra directa con cuantificación del potencial de ahorro.",
                href: "/consultoria/reduccion-costos-operativos",
              },
              {
                label: "Mejora de productividad industrial",
                desc: "Incremento de throughput, disponibilidad de equipos y rendimiento de la línea sin ampliar capacidad instalada.",
                href: "/consultoria/productividad-industrial",
              },
            ].map((item) => (
              <li key={item.href} className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>
                  <Link
                    to={item.href}
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  {" — "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>

          <p className="pt-2">
            Si su operación enfrenta márgenes bajo presión, costos que crecen más rápido que los
            ingresos, o productividad estancada, el primer paso es una conversación directa.
            Identificamos rápidamente si existe potencial de mejora y qué tipo de intervención
            tiene más sentido.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ConsultoriaEditorial;
