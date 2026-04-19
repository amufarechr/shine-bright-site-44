const IconTrendUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#2ebd6b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const IconAlertOff = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#2ebd6b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#2ebd6b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#2ebd6b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconActivity = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#2ebd6b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const items = [
  { label: "Mayor productividad (throughput)", icon: <IconTrendUp /> },
  { label: "Reducción de paradas no programadas", icon: <IconAlertOff /> },
  { label: "Menor consumo energético total", icon: <IconZap /> },
  { label: "Mejores condiciones de trabajo", icon: <IconUsers /> },
  { label: "Mayor estabilidad operativa", icon: <IconActivity /> },
];

interface ImpactoSectionProps {}

export default function ImpactoSection({}: ImpactoSectionProps) {
  return (
    <section className="bg-white py-20 px-16">
      <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3.5 text-center">
        Impacto
      </p>
      <h2 className="text-[32px] font-bold text-center leading-[1.2] text-gray-900 mb-12">
        Resultados operativos medibles
      </h2>

      <div className="grid grid-cols-5 gap-4 max-w-[1000px] mx-auto">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-[#f7f7f4] border border-gray-200 rounded-xl p-7 flex flex-col items-center text-center gap-4 aspect-square justify-center"
          >
            <div className="w-12 h-12 rounded-xl bg-[#f0faf4] border border-[#c6ead4] flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-[13px] font-semibold text-gray-900 leading-snug">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
