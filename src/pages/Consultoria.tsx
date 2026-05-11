import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ConsultoriaHero from "@/components/consultoria/ConsultoriaHero";
import DiagnosticoInicialSection from "@/components/consultoria/DiagnosticoInicialSection";
import NuestraExperiencia from "@/components/consultoria/NuestraExperiencia";
import ComoIntervenimos from "@/components/consultoria/ComoIntervenimos";
import ResultadosOperativos from "@/components/consultoria/ResultadosOperativos";
import CasosReales from "@/components/consultoria/CasosReales";
import ConsultoriaCTA from "@/components/consultoria/ConsultoriaCTA";

const Consultoria = () => (
  <div className="min-h-screen bg-background">
    <SeoHead
      title="Consultoría en Eficiencia Operativa para Agroindustria e Industria"
      description="Diagnóstico, diseño e implementación de soluciones de climatización, energía y agua para plantas industriales en Perú y México. Metodología comprobada en más de 80 proyectos."
      path="/consultoria"
    />
    <Navbar activePage="consultoria" />
    <ConsultoriaHero />
    <DiagnosticoInicialSection />
    <NuestraExperiencia />
    <ComoIntervenimos />
    <ResultadosOperativos />
    <CasosReales />
    <ConsultoriaCTA />
    <ContactSection />
    <Footer />
  </div>
);

export default Consultoria;
