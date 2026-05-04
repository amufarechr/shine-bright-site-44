import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SeoHead from "@/components/SeoHead";
import VentilacionHero from "./VentilacionHero";
import PorQueHvlsSection from "./PorQueHvlsSection";
import CuandoAplicaVentilacion from "./CuandoAplicaVentilacion";
import LineasProductoVentilacion from "./LineasProductoVentilacion";
import EnfoqueSwVentilacion from "./EnfoqueSwVentilacion";
import CasosVentilacion from "./CasosVentilacion";

export default function VentilacionPage() {
  return (
    <>
      <SeoHead
        title="Ventilación Industrial HVLS — Big Ass Fans"
        description="Ventiladores industriales de gran volumen y baja velocidad (HVLS) para naves industriales, almacenes y espacios comerciales. Representantes exclusivos de Big Ass Fans en Perú y México."
        keywords="ventilación industrial, ventiladores HVLS, Big Ass Fans, Powerfoil, ventiladores industriales grandes, circulación aire nave industrial, ventiladores techo industrial"
        path="/soluciones/climatizacion/ventilacion"
      />
      <Navbar activePage="soluciones" />
      <VentilacionHero />
      <PorQueHvlsSection />
      <CuandoAplicaVentilacion />
      <LineasProductoVentilacion />
      <EnfoqueSwVentilacion />
      <CasosVentilacion />
      <ContactSection />
      <Footer />
    </>
  );
}
