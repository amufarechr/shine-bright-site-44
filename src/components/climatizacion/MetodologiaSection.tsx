const pasos = [
  "Entendemos el proceso y su interacción con el ambiente",
  "Analizamos flujo de aire, calor y distribución",
  "Identificamos pérdidas de eficiencia",
  "Rediseñamos la solución dentro del sistema operativo",
  "Implementamos y ajustamos en operación",
];

interface MetodologiaSectionProps {}

export default function MetodologiaSection({}: MetodologiaSectionProps) {
  return (
    <section className="bg-[#0d1b2a] py-20 px-16">
      <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3.5 text-center">
        Metodología
      </p>
      <h2 className="text-[32px] font-bold text-center leading-[1.2] text-white mb-12">
        Cómo intervenimos la climatización en planta
      </h2>

      <div className="max-w-[700px] mx-auto flex flex-col">
        {pasos.map((texto, i) => (
          <div
            key={i}
            className={`flex items-start gap-6 py-6 ${
              i < pasos.length - 1 ? "border-b border-white/10" : ""
            }`}
          >
            <span className="text-[38px] font-bold text-[#2ebd6b] leading-none min-w-[52px] tracking-[-2px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-base font-medium text-white/90 leading-relaxed pt-2.5">
              {texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
