
import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle section visibility to update active link
  useEffect(() => {
    const handleSectionVisibility = () => {
      const sections = ["home", "services", "case-studies", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleSectionVisibility);
    return () => window.removeEventListener("scroll", handleSectionVisibility);
  }, []);

  const handleNavLinkClick = (sectionId: string) => {
    setActiveLink(sectionId);
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-fixer-dark/90 backdrop-blur-md shadow-lg" 
          : "py-6 bg-black"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <nav className="hidden md:flex space-x-8 items-center">
          <Button 
            asChild
            className="bg-purple-custom hover:bg-purple-accent font-neopixel text-[20px] font-bold text-white transition-all duration-300 animate-pulse"
          >
            <a 
              href="mailto:bianca@thefixerco.com" 
              className="flex items-center gap-2"
            >
              <Mail size={18} className="text-white" />
              GET IN TOUCH
            </a>
          </Button>
          <a 
            href="#home" 
            className={`nav-link font-open-sans font-bold text-[20px] ${activeLink === "home" ? "active" : ""} hover:text-purple-accent`}
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("home");
            }}
          >
            HOME
          </a>
          <a 
            href="#services" 
            className={`nav-link font-open-sans font-bold text-[20px] ${activeLink === "services" ? "active" : ""} hover:text-purple-accent`}
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("services");
            }}
          >
            SERVICES
          </a>
          <a 
            href="#case-studies" 
            className={`nav-link font-open-sans font-bold text-[20px] ${activeLink === "case-studies" ? "active" : ""} hover:text-purple-accent`}
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("case-studies");
            }}
          >
            CASE STUDIES
          </a>
        </nav>

        <a href="#home" className="z-10 flex items-center">
          <img 
            src="/lovable-uploads/b361399a-6af3-4332-8b41-7903efdc4b9b.png" 
            alt="The Fixer Co" 
            className="h-8 w-8 mr-3" 
          />
          <span className="text-white font-neopixel font-medium text-xl">The Fixer Co.</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden z-20 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-fixer-dark/95 backdrop-blur-md flex flex-col justify-center items-center space-y-8 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Button 
            asChild
            className="bg-purple-custom hover:bg-purple-accent font-neopixel font-bold text-[20px] text-white transition-all duration-300"
          >
            <a 
              href="mailto:bianca@thefixerco.com" 
              className="flex items-center gap-2"
            >
              <Mail size={18} className="text-white" />
              GET IN TOUCH
            </a>
          </Button>
          <a 
            href="#home" 
            className={`nav-link font-open-sans font-bold text-[20px] ${activeLink === "home" ? "active" : ""} hover:text-purple-accent`}
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("home");
            }}
          >
            HOME
          </a>
          <a 
            href="#services" 
            className={`nav-link font-open-sans font-bold text-[20px] ${activeLink === "services" ? "active" : ""} hover:text-purple-accent`}
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("services");
            }}
          >
            SERVICES
          </a>
          <a 
            href="#case-studies" 
            className={`nav-link font-open-sans font-bold text-[20px] ${activeLink === "case-studies" ? "active" : ""} hover:text-purple-accent`}
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("case-studies");
            }}
          >
            CASE STUDIES
          </a>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-purple-custom via-purple-accent to-purple-custom"></div>
    </header>
  );
};

export default Header;
