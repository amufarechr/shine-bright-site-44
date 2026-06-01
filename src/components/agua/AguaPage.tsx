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
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Gestión de Agua Industrial",
          "provider": { "@type": "Organization", "@id": "https://swingenieria.com/#organization", "name": "SW Ingeniería" },
          "serviceType": "Tratamiento y Gestión de Agua Industrial",
          "description": "Tratamiento de agua, osmosis inversa y eficiencia hídrica para agroindustria e industria en Perú y México.",
          "areaServed": [{ "@type": "Country", "name": "Peru" }, { "@type": "Country", "name": "Mexico" }],
          "url": "https://swingenieria.com/soluciones/agua"
        }}
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
