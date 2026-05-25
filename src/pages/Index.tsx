import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBand from "@/components/MarqueeBand";
import ManifestoSection from "@/components/ManifestoSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO, { SITE_URL } from "@/components/SEO";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Emev Labs",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description:
    "Laboratório independente de tecnologia especializado em sites de alta performance, aplicativos sob medida, automações com IA e integrações para empresas.",
  founder: {
    "@type": "Person",
    name: "Marcos Vinicius dos Santos Siqueira",
  },
  taxID: "66.387.225/0001-50",
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  sameAs: ["https://www.linkedin.com/in/marcos-vinicius-dos-s-siqueira/"],
  serviceType: [
    "Desenvolvimento de software",
    "Desenvolvimento de sites",
    "Landing pages",
    "Aplicativos sob medida",
    "Automação com inteligência artificial",
    "Chatbots para WhatsApp",
    "Integração de sistemas",
  ],
};

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background noise-bg">
      <SEO
        title="Emev Labs | Desenvolvimento de Software, Sites, Apps e IA"
        description="Criamos sites de alta performance, aplicativos sob medida, automações com IA e integrações para empresas que querem vender mais e operar melhor."
        jsonLd={homeJsonLd}
      />
      <Navbar />
      <main id="conteudo-principal" tabIndex={-1}>
        <HeroSection />
        <MarqueeBand />
        <ManifestoSection />
        <ServicesSection />
        <PortfolioSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
