import { ArrowRight } from "lucide-react";
import consultoriaImg from "@/assets/consultoria.jpg";

const ConsultoriaHero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-[560px] flex items-center overflow-hidden bg-[#0d1b2a] pt-[88px]">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${consultoriaImg})` }}
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
          Consultoría de Eficiencia Operativa
        </p>
        <h1 className="text-[42px] font-bold leading-[1.1] text-white mb-3">
          Consultoría en Eficiencia<br />
          Operativa Industrial
        </h1>
        <p className="text-xl font-medium text-white/85 mb-4 leading-snug">
          Las ineficiencias de operación<br />
          no se resuelven con más gasto
        </p>
        <p className="text-base leading-[1.7] text-white/75 mb-9 max-w-[440px]">
          La solución es un sistema que integra y alinea personas, procesos e infraestructura.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("contacto")}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-primary hover:brightness-110 border-none rounded-md text-sm font-semibold text-white cursor-pointer transition-colors duration-200"
          >
            Evaluar operación <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("como-intervenimos")}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-white/30 rounded-md text-sm font-semibold text-white hover:bg-white/10 cursor-pointer transition-colors duration-200"
          >
            Cómo trabajamos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultoriaHero;
