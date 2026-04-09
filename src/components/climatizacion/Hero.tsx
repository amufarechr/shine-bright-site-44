import heroBg from "../../assets/climatizacion/hero.jpg";

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <section className="relative min-h-[560px] flex items-center overflow-hidden bg-[#0d1b2a] pt-[88px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient overlay — opaque left, transparent right */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(13,27,42,0.82) 0%, rgba(13,27,42,0.72) 30%, rgba(13,27,42,0.22) 58%, rgba(13,27,42,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 px-24 py-20 max-w-[640px]">
        <p className="text-[11px] font-bold tracking-[0.14em] text-[#2ebd6b] uppercase mb-4">
          Climatización Industrial
        </p>
        <h1 className="text-[44px] font-bold leading-[1.1] text-white mb-4">
          Climatización diseñada para mejorar la operación
        </h1>
        <p className="text-base leading-[1.7] text-white/75 mb-9 max-w-[420px]">
          Control térmico y ventilación que impactan directamente productividad,
          estabilidad y consumo energético.
        </p>
        <button className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#2ebd6b] hover:bg-[#1a9e54] border-none rounded-md text-sm font-semibold text-white cursor-pointer transition-colors duration-200">
          Evaluar desempeño de climatización →
        </button>
      </div>
    </section>
  );
}
