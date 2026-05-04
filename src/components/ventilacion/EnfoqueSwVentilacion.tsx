import { motion } from "framer-motion";

const pasos = [
  { num: "01", label: "Levantamiento del espacio: dimensiones, altura libre, obstrucciones (vigas, equipos colgantes, sprinklers) y zonas de ocupación" },
  { num: "02", label: "Análisis térmico: fuentes de calor interno (maquinaria, iluminación, personas) y condiciones climáticas del entorno" },
  { num: "03", label: "Diseño de distribución: selección de modelos, diámetros y posicionamiento para cobertura óptima sin interferencias" },
  { num: "04", label: "Simulación SpecLab®: modelado CFD del flujo de aire en el espacio real, con visualización 3D del resultado esperado" },
  { num: "05", label: "Implementación: instalación certificada, configuración de controles y validación de confort en operación real" },
];

const controles = [
  {
    nombre: "BAFCon™",
    descripcion: "Control centralizado para hasta 8 ventiladores desde un solo touchscreen LED de 5.2\". Modos estacionales, protección por contraseña, diagnósticos onboard y actualización de firmware vía Bluetooth.",
    compatibilidad: "Powerfoil X3.0, Powerfoil D, AirEye",
  },
  {
    nombre: "Dewtect®",
    descripcion: "Sistema de control automático anti-condensación. Detecta temperatura y humedad con sensores indoor/outdoor y activa automáticamente los ventiladores para prevenir condensación. Integración con BACnet y Modbus.",
    compatibilidad: "Todos los fans Big Ass",
  },
];

export default function EnfoqueSwVentilacion() {
  return (
    <section className="section-padding pt-10 lg:pt-16 pb-10 lg:pb-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: proceso */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Nuestro enfoque
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-8">
              Del plano de la nave al flujo de aire correcto
            </h2>
            <div className="space-y-4">
              {pasos.map((paso, i) => (
                <motion.div
                  key={paso.num}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-4 bg-background border border-border rounded-xl p-5"
                >
                  <span className="text-primary font-bold text-sm shrink-0 mt-0.5">{paso.num}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{paso.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: controles avanzados */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:pt-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Controles avanzados
            </span>
            <h3 className="font-heading text-xl font-bold mb-6">
              Más allá del encendido/apagado
            </h3>
            <div className="space-y-5">
              {controles.map((ctrl, i) => (
                <motion.div
                  key={ctrl.nombre}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border border-border rounded-xl p-6"
                >
                  <h4 className="font-heading font-bold text-base mb-2">{ctrl.nombre}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{ctrl.descripcion}</p>
                  <p className="text-xs text-primary font-medium">Compatible: {ctrl.compatibilidad}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5"
            >
              <p className="text-sm font-semibold text-foreground mb-1">SpecLab® — Simulación antes de instalar</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Big Ass Fans ofrece reportes SpecLab® gratuitos: simulaciones CFD 3D de cómo los fans transformarán el confort de tu espacio antes de invertir. Lo gestionamos como parte de nuestra propuesta técnica.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
