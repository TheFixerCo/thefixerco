
import { MobileNav } from "./navigation/MobileNav";
import { DesktopNav } from "./navigation/DesktopNav";
import { useScroll } from "@/hooks/useScroll";

const Header = () => {
  const { isScrolled, activeLink, setActiveLink } = useScroll();

  const handleNavLinkClick = (sectionId: string) => {
    setActiveLink(sectionId);
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
        <DesktopNav activeLink={activeLink} handleNavLinkClick={handleNavLinkClick} />

        <a href="#home" className="z-10 flex items-center">
          <img 
            src="/lovable-uploads/8505d01f-5506-497c-bb06-5e81085e9a9f.png" 
            alt="The Fixer Co" 
            className="h-8 w-8 mr-3" 
          />
          <span className="text-white font-neopixel font-medium text-xl">The Fixer Co.</span>
        </a>
        
        <MobileNav activeLink={activeLink} handleNavLinkClick={handleNavLinkClick} />
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-purple-custom via-purple-accent to-purple-custom"></div>
    </header>
  );
};

export default Header;
