import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBand from "@/components/MarqueeBand";
import ManifestoSection from "@/components/ManifestoSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background noise-bg">
      <Navbar />
      <main>
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
