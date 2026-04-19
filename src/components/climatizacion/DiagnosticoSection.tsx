import {
  TrendingDown,
  Activity,
  Zap,
  ThermometerSnowflake,
  Wind,
  Unplug,
} from "lucide-react";

const PlantaSVG = () => (
  <svg width="220" height="320" viewBox="0 0 220 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="240" width="160" height="12" rx="3" fill="#e5e7eb" stroke="#c6ead4" strokeWidth="1.5" />
    <rect x="50" y="160" width="120" height="82" rx="4" fill="#f0faf4" stroke="#2ebd6b" strokeWidth="1.5" />
    <polygon points="40,160 110,110 180,160" fill="#e8f7f0" stroke="#2ebd6b" strokeWidth="1.5" />
    <rect x="62" y="175" width="22" height="16" rx="2" fill="#c6ead4" stroke="#2ebd6b" strokeWidth="1" />
    <rect x="98" y="175" width="22" height="16" rx="2" fill="#c6ead4" stroke="#2ebd6b" strokeWidth="1" />
    <rect x="134" y="175" width="22" height="16" rx="2" fill="#c6ead4" stroke="#2ebd6b" strokeWidth="1" />
    <rect x="62" y="203" width="22" height="16" rx="2" fill="#c6ead4" stroke="#2ebd6b" strokeWidth="1" />
    <rect x="98" y="203" width="22" height="16" rx="2" fill="#c6ead4" stroke="#2ebd6b" strokeWidth="1" />
    <rect x="134" y="203" width="22" height="16" rx="2" fill="#c6ead4" stroke="#2ebd6b" strokeWidth="1" />
    <rect x="70" y="120" width="14" height="44" rx="2" fill="#e5e7eb" stroke="#6b7280" strokeWidth="1.2" />
    <rect x="136" y="128" width="14" height="36" rx="2" fill="#e5e7eb" stroke="#6b7280" strokeWidth="1.2" />
    <path d="M77 116 Q80 108 77 100 Q74 92 77 84" stroke="#9ca3af" strokeWidth="1.2" fill="none" strokeDasharray="3,2" />
    <path d="M143 124 Q146 116 143 108 Q140 100 143 92" stroke="#9ca3af" strokeWidth="1.2" fill="none" strokeDasharray="3,2" />
    <circle cx="110" cy="132" r="14" fill="#f0faf4" stroke="#2ebd6b" strokeWidth="1.5" />
    <circle cx="110" cy="132" r="6" fill="#c6ead4" stroke="#2ebd6b" strokeWidth="1" />
    <rect x="107" y="116" width="6" height="5" rx="1" fill="#2ebd6b" />
    <rect x="107" y="143" width="6" height="5" rx="1" fill="#2ebd6b" />
    <rect x="94" y="129" width="5" height="6" rx="1" fill="#2ebd6b" />
    <rect x="121" y="129" width="5" height="6" rx="1" fill="#2ebd6b" />
    <line x1="50" y1="185" x2="28" y2="185" stroke="#c6ead4" strokeWidth="1.5" strokeDasharray="4,3" />
    <line x1="50" y1="200" x2="28" y2="200" stroke="#c6ead4" strokeWidth="1.5" strokeDasharray="4,3" />
    <line x1="50" y1="215" x2="28" y2="215" stroke="#c6ead4" strokeWidth="1.5" strokeDasharray="4,3" />
    <line x1="170" y1="185" x2="192" y2="185" stroke="#c6ead4" strokeWidth="1.5" strokeDasharray="4,3" />
    <line x1="170" y1="200" x2="192" y2="200" stroke="#c6ead4" strokeWidth="1.5" strokeDasharray="4,3" />
    <line x1="170" y1="215" x2="192" y2="215" stroke="#c6ead4" strokeWidth="1.5" strokeDasharray="4,3" />
    <rect x="100" y="60" width="8" height="28" rx="4" fill="#fef9c3" stroke="#f59e0b" strokeWidth="1.2" />
    <circle cx="104" cy="90" r="5" fill="#f59e0b" />
    <rect x="102" y="64" width="4" height="16" rx="2" fill="#f59e0b" fillOpacity={0.6} />
  </svg>
);

interface InfItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  reverse?: boolean;
}

function InfItem({ icon, title, description, reverse = false }: InfItemProps) {
  return (
    <div className={`flex items-start gap-3.5 ${reverse ? "flex-row-reverse text-right" : ""}`}>
      <div className="w-12 h-12 min-w-[48px] rounded-xl bg-[#f0faf4] border border-[#c6ead4] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <strong className="block text-[13px] font-semibold text-gray-900 mb-1 leading-snug">
          {title}
        </strong>
        <span className="text-[12px] text-gray-500 leading-relaxed">{description}</span>
      </div>
    </div>
  );
}

export default function DiagnosticoSection() {
  return (
    <section className="bg-white py-[88px] px-16">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
          Situación Sub-óptima
        </p>
        <h2 className="text-[28px] font-bold leading-[1.35] text-gray-900 max-w-[760px] mx-auto">
          Un control térmico deficiente en entornos industriales deteriora la eficiencia
          operativa y afecta el desempeño del sistema productivo
        </h2>
      </div>

      {/* Infografía: 3 columnas */}
      <div className="grid grid-cols-[1fr_auto_1fr] max-w-[960px] mx-auto items-center">
        {/* Izquierda */}
        <div className="flex flex-col gap-8 pr-12">
          <InfItem
            icon={<TrendingDown className="w-6 h-6 text-[#2ebd6b]" />}
            title="Caídas de productividad"
            description="Throughput reducido por condiciones térmicas inadecuadas"
          />
          <InfItem
            icon={<Activity className="w-6 h-6 text-[#2ebd6b]" />}
            title="Variabilidad en procesos"
            description="Control ambiental inestable afecta la consistencia productiva"
          />
          <InfItem
            icon={<Zap className="w-6 h-6 text-[#2ebd6b]" />}
            title="Consumo energético elevado"
            description="Sistemas mal dimensionados operan con ineficiencia energética crónica"
          />
        </div>

        {/* Centro — planta SVG */}
        <div className="px-2">
          <PlantaSVG />
        </div>

        {/* Derecha */}
        <div className="flex flex-col gap-8 pl-12">
          <InfItem
            reverse
            icon={<ThermometerSnowflake className="w-6 h-6 text-[#2ebd6b]" />}
            title="Pérdida de calidad de producto"
            description="Frescos y perecederos afectados por temperatura no controlada"
          />
          <InfItem
            reverse
            icon={<Wind className="w-6 h-6 text-[#2ebd6b]" />}
            title="Distribución ineficiente de aire"
            description="Bolsillos térmicos que crean zonas con temperatura desigual"
          />
          <InfItem
            reverse
            icon={<Unplug className="w-6 h-6 text-[#2ebd6b]" />}
            title="Desalineación con el proceso"
            description="La climatización no está integrada al sistema productivo"
          />
        </div>
      </div>
    </section>
  );
}
