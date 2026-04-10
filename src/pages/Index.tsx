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
    <Navbar activePage="home" />
    <HeroSection />
    <TechnicalSolutionsSection />
    <ConsultingSection />
    <EnergyEfficiencySection />
    <CaseStudiesSection />
    <SectorsSection />
    <TestimonialsSection />
    <CTASection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
