
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Index = () => {
  // Add a scroll-to-top button functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById("scroll-to-top");
      if (scrollToTopBtn) {
        if (window.scrollY > 500) {
          scrollToTopBtn.classList.remove("opacity-0", "invisible");
          scrollToTopBtn.classList.add("opacity-100", "visible");
        } else {
          scrollToTopBtn.classList.remove("opacity-100", "visible");
          scrollToTopBtn.classList.add("opacity-0", "invisible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-fixer-dark text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <CallToAction />
      </main>
      <Footer />
      
      <button
        id="scroll-to-top"
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-fixer-blue/80 hover:bg-fixer-blue rounded-full flex items-center justify-center text-white shadow-lg opacity-0 invisible transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default Index;
