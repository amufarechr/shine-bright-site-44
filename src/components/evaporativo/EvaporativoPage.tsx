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
