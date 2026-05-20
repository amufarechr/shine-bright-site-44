import SeoHead from "@/components/SeoHead";
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
      <SeoHead
        title="Gestión de Agua Industrial en Perú — Tratamiento, Osmosis y Eficiencia Hídrica"
        description="Gestión y tratamiento de agua para agroindustria e industria en Perú y México. Osmosis inversa, captación y eficiencia hídrica para plantas en zonas sin red hídrica como desiertos costeros y sierra."
        path="/soluciones/agua"
      />
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
