import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultoriaHero from "@/components/consultoria/ConsultoriaHero";
import ContrasteSection from "@/components/consultoria/ContrasteSection";
import SistemaOperativo from "@/components/consultoria/SistemaOperativo";
import ComoMedimos from "@/components/consultoria/ComoMedimos";
import ImpactoTiempo from "@/components/consultoria/ImpactoTiempo";
import NuestraExperiencia from "@/components/consultoria/NuestraExperiencia";
import ComoIntervenimos from "@/components/consultoria/ComoIntervenimos";
import ResultadosOperativos from "@/components/consultoria/ResultadosOperativos";
import CasosReales from "@/components/consultoria/CasosReales";
import ConsultoriaCTA from "@/components/consultoria/ConsultoriaCTA";

const Consultoria = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <ConsultoriaHero />
    <ContrasteSection />
    <SistemaOperativo />
    <ComoMedimos />
    <ImpactoTiempo />
    <NuestraExperiencia />
    <ComoIntervenimos />
    <ResultadosOperativos />
    <CasosReales />
    <ConsultoriaCTA />
    <Footer />
  </div>
);

export default Consultoria;
