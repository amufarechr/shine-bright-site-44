import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Hero from "./Hero";
import DiagnosticoSection from "./DiagnosticoSection";
import SolucionesSection from "./SolucionesSection";
import ImpactoSection from "./ImpactoSection";
import CtaFinalSection from "./CtaFinalSection";

export default function AguaPage() {
  return (
    <>
      <Navbar activePage="soluciones" />
      <main>
        <Hero />
        <DiagnosticoSection />
        <SolucionesSection />
        <ImpactoSection />
        <CtaFinalSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
