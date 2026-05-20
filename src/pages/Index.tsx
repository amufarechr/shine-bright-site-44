import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ConsultingSection from "@/components/ConsultingSection";
import TechnicalSolutionsSection from "@/components/TechnicalSolutionsSection";
import EnergyEfficiencySection from "@/components/EnergyEfficiencySection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SectorsSection from "@/components/SectorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <SeoHead
      title="Climatización y Eficiencia Industrial en Perú y México | SW Ingeniería"
      description="Soluciones de climatización industrial, gestión energética y tratamiento de agua para agroindustria e industria en Perú y México. Más de 80 implementaciones en Lima y principales regiones agroindustriales."
      path="/"
    />
    <Navbar activePage="home" />
    <HeroSection />
    <TechnicalSolutionsSection />
    <ConsultingSection />
    <EnergyEfficiencySection />
    <SectorsSection />
    <CaseStudiesSection />
    <TestimonialsSection />
    <CTASection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
