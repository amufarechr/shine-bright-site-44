import NavBar from "./NavBar";
import Hero from "./Hero";
import DiagnosticoSection from "./DiagnosticoSection";
import MetodologiaSection from "./MetodologiaSection";
import SolucionesSection from "./SolucionesSection";
import ImpactoSection from "./ImpactoSection";
import CtaFinalSection from "./CtaFinalSection";

interface ClimatizacionPageProps {}

export default function ClimatizacionPage({}: ClimatizacionPageProps) {
  return (
    <>
      <NavBar activeSection="soluciones" />
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
