import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Hero from "./Hero";
import DiagnosticoSection from "./DiagnosticoSection";
import MetodologiaSection from "./MetodologiaSection";
import SolucionesSection from "./SolucionesSection";
import ImpactoSection from "./ImpactoSection";
import CasosRealesSection from "./CasosRealesSection";
import CtaFinalSection from "./CtaFinalSection";

export default function ClimatizacionPage() {
  return (
    <>
      <SeoHead
        title="Climatización Industrial en Perú y México — Enfriamiento, Calefacción y Ventilación"
        description="Sistemas de climatización industrial para agroindustria, plantas de empaque y almacenes en Perú y México. Enfriamiento evaporativo, calefacción radiante y ventilación HVLS en Lima, Ica, Piura y regiones agroindustriales."
        path="/soluciones/climatizacion"
      />
      <Navbar activePage="soluciones" />
      <main>
        <Hero />
        <DiagnosticoSection />
        <MetodologiaSection />
        <SolucionesSection />
        <ImpactoSection />
        <CasosRealesSection />
        <CtaFinalSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
