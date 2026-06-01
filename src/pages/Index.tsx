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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://swingenieria.com/#organization",
  "name": "SW Ingeniería",
  "url": "https://swingenieria.com",
  "logo": "https://swingenieria.com/og-image.jpg",
  "description": "Soluciones de climatización industrial, gestión energética y tratamiento de agua para agroindustria e industria en Perú y México.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lima",
    "addressCountry": "PE"
  },
  "areaServed": [
    { "@type": "Country", "name": "Peru" },
    { "@type": "Country", "name": "Mexico" }
  ],
  "serviceType": ["Climatización Industrial", "Eficiencia Energética", "Tratamiento de Agua", "Consultoría Operativa"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "areaServed": ["PE", "MX"],
    "availableLanguage": "Spanish"
  }
};

const Index = () => (
  <div className="min-h-screen bg-background">
    <SeoHead
      title="Climatización y Eficiencia Industrial en Perú y México | SW Ingeniería"
      description="Soluciones de climatización industrial, gestión energética y tratamiento de agua para agroindustria e industria en Perú y México. Más de 80 implementaciones en Lima y principales regiones agroindustriales."
      path="/"
      schema={organizationSchema}
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
