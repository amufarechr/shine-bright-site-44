import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Hero from "./Hero";
import CuandoAplicaSection from "./CuandoAplicaSection";
import EnfoqueSwSection from "./EnfoqueSwSection";
import TecnologiaSection from "./TecnologiaSection";
import MarcasSection from "./MarcasSection";
import CasoRealSection from "./CasoRealSection";

export default function EvaporativoPage() {
  return (
    <>
      <SeoHead
        title="Enfriamiento Evaporativo Industrial — Sistemas Portacool, BioCool y Big Ass Fans"
        description="Soluciones de enfriamiento evaporativo para agroindustria, plantas de empaque y almacenes en Perú y México. Hasta −12°C con 90% menos consumo eléctrico que refrigeración convencional."
        path="/soluciones/climatizacion/evaporativo"
      />
      <Navbar activePage="soluciones" />
      <main>
        <Hero />
        <CuandoAplicaSection />
        <EnfoqueSwSection />
        <TecnologiaSection />
        <MarcasSection />
        <CasoRealSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
