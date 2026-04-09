interface CtaFinalSectionProps {}

export default function CtaFinalSection({}: CtaFinalSectionProps) {
  return (
    <section className="bg-white text-center py-[88px] px-16 border-t border-gray-200">
      <h2 className="text-[34px] font-bold text-gray-900 leading-[1.2] mb-8">
        Evaluar climatización
        <br />
        en tu operación
      </h2>
      <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2ebd6b] hover:bg-[#1a9e54] text-white text-sm font-bold rounded-md transition-colors duration-200 cursor-pointer border-none">
        Evaluar desempeño de climatización →
      </button>
    </section>
  );
}
