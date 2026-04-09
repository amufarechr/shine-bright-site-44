import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import DiagnosticoSection from "./DiagnosticoSection";
import MetodologiaSection from "./MetodologiaSection";
import SolucionesSection from "./SolucionesSection";
import ImpactoSection from "./ImpactoSection";
import CtaFinalSection from "./CtaFinalSection";

export default function ClimatizacionPage() {
  return (
    <>
      <Navbar activePage="soluciones" />
      <main>
        <Hero />
        <DiagnosticoSection />
        <MetodologiaSection />
        <SolucionesSection />
        <ImpactoSection />
        <CtaFinalSection />
      </main>
    </>
  );
}
