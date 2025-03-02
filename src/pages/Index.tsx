
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

// Analytics tracking helper
const trackPageView = () => {
  // This would connect to your analytics platform (Google Analytics, Meta Pixel, etc.)
  console.log("Page view tracked:", {
    page: window.location.pathname,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    utmParams: {
      source: new URLSearchParams(window.location.search).get('utm_source'),
      medium: new URLSearchParams(window.location.search).get('utm_medium'),
      campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
      content: new URLSearchParams(window.location.search).get('utm_content'),
      term: new URLSearchParams(window.location.search).get('utm_term')
    }
  });
};

// Track user engagement
const trackEngagement = (action: string, label: string, value?: number) => {
  console.log("User engagement tracked:", {
    action,
    label,
    value,
    timestamp: new Date().toISOString()
  });
};

const Index = () => {
  // Track page view when component mounts
  useEffect(() => {
    trackPageView();
    
    // Initialize lead tracking from localStorage
    if (!localStorage.getItem('leads')) {
      localStorage.setItem('leads', JSON.stringify([]));
    }
  }, []);

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
      
      // Track scroll depth for engagement
      const scrollPercentage = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercentage === 25 || scrollPercentage === 50 || scrollPercentage === 75 || scrollPercentage === 100) {
        trackEngagement('scroll_depth', `${scrollPercentage}%`);
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
    trackEngagement('button_click', 'scroll_to_top');
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
