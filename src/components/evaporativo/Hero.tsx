import almacenImg from "@/assets/evaporativo/almacen.jpeg";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[560px] flex items-center overflow-hidden bg-[#0d1b2a] pt-[88px]">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 brightness-75 contrast-110"
        style={{ backgroundImage: `url(${almacenImg})` }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(13,27,42,0.90) 0%, rgba(13,27,42,0.75) 35%, rgba(13,27,42,0.25) 65%, rgba(13,27,42,0) 100%)",
        }}
      />
      <div className="relative z-20 px-8 md:px-24 py-20 max-w-[660px]">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
          Enfriamiento evaporativo
        </p>
        <h1 className="text-[42px] font-bold leading-[1.1] text-white mb-5">
          La solución de climatización más eficiente para espacios industriales
        </h1>
        <p className="text-base leading-[1.7] text-white/75 mb-9 max-w-[440px]">
          Temperatura controlada a una fracción — entre 10 y 15 veces menos — del costo de instalación y operación de la refrigeración convencional, sin obras mayores ni interrupciones a la operación.
        </p>
        <button
          onClick={() => scrollTo("contacto")}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-primary hover:brightness-110 border-none rounded-md text-sm font-semibold text-white cursor-pointer transition-colors duration-200"
        >
          Solicitar evaluación gratuita →
        </button>
      </div>
    </section>
  );
}
