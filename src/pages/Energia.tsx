import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SeoHead from "@/components/SeoHead";
import EnergiaHero from "@/components/energia/EnergiaHero";
import ElProblema from "@/components/energia/ElProblema";
import SolucionesEnergia from "@/components/energia/SolucionesEnergia";
import EnfoqueSW from "@/components/energia/EnfoqueSW";
import MetricasEnergia from "@/components/energia/MetricasEnergia";

const Energia = () => (
  <div className="min-h-screen bg-background">
    <SeoHead
      title="Gestión Energética Industrial — Monitoreo, Automatización y Energía Renovable"
      description="Reducción del costo energético en operaciones industriales: monitoreo de consumo por carga, automatización inteligente de arranques y generación solar. Resultados medibles desde el primer mes."
      keywords="gestión energética industrial, monitoreo consumo eléctrico planta, automatización energética, ahorro energético industria, energía solar industrial, eficiencia energética"
      path="/soluciones/energia"
    />
    <Navbar activePage="soluciones" />
    <EnergiaHero />
    <ElProblema />
    <SolucionesEnergia />
    <EnfoqueSW />
    <MetricasEnergia />
    <ContactSection />
    <Footer />
  </div>
);

export default Energia;
