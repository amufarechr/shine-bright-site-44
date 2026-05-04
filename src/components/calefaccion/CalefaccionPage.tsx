import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SeoHead from "@/components/SeoHead";
import CalefaccionHero from "./CalefaccionHero";
import PorQueRadiantSection from "./PorQueRadiantSection";
import CuandoAplicaCalefaccion from "./CuandoAplicaCalefaccion";
import LineasProductoCalefaccion from "./LineasProductoCalefaccion";
import EnfoqueSwCalefaccion from "./EnfoqueSwCalefaccion";
import MarcasCalefaccion from "./MarcasCalefaccion";
import CasosCalefaccion from "./CasosCalefaccion";

export default function CalefaccionPage() {
  return (
    <>
      <SeoHead
        title="Calefacción Radiante Industrial — SRP y Big Ass Fans"
        description="Sistemas de calefacción infrarroja para naves industriales, galpones avícolas, invernaderos y terrazas comerciales. SRP Superior Radiant Products y Big Ass Fans Heaters."
        keywords="calefacción radiante industrial, calefacción infrarroja, SRP calefacción, galpones avícolas calefacción, terrazas calefacción, evenTUBE, evenGLO, calefacción invernadero"
        path="/soluciones/climatizacion/calefaccion"
      />
      <Navbar activePage="soluciones" />
      <CalefaccionHero />
      <PorQueRadiantSection />
      <CuandoAplicaCalefaccion />
      <LineasProductoCalefaccion />
      <EnfoqueSwCalefaccion />
      <MarcasCalefaccion />
      <CasosCalefaccion />
      <ContactSection />
      <Footer />
    </>
  );
}
