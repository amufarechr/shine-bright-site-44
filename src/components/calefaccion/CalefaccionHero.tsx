import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/climatizacion/calefaccion.jpg";

export default function CalefaccionHero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-[560px] flex items-center overflow-hidden bg-[#0d1b2a] pt-[88px]">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.78) 35%, rgba(13,27,42,0.28) 62%, rgba(13,27,42,0) 100%)",
        }}
      />
      <div className="relative z-20 px-8 md:px-24 py-20 max-w-[660px]">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
          Calefacción Radiante Industrial
        </p>
        <h1 className="text-[42px] font-bold leading-[1.1] text-white mb-5">
          Calor donde se necesita,<br />
          sin desperdiciar energía<br />
          en calentar el aire
        </h1>
        <p className="text-base leading-[1.7] text-white/75 mb-9 max-w-[440px]">
          La calefacción radiante transfiere calor directamente a personas, animales y superficies —
          sin depender del aire como intermediario. El resultado: confort inmediato, eficiencia superior
          y operación viable en espacios abiertos o mal sellados.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("contacto")}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-primary hover:brightness-110 border-none rounded-md text-sm font-semibold text-white cursor-pointer transition-colors duration-200"
          >
            Evaluar mi proyecto <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("soluciones")}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-white/30 rounded-md text-sm font-semibold text-white hover:bg-white/10 cursor-pointer transition-colors duration-200"
          >
            Ver líneas de producto
          </button>
        </div>
      </div>
    </section>
  );
}
