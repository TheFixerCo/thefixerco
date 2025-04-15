
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileNavProps {
  activeLink: string;
  handleNavLinkClick: (sectionId: string) => void;
}

export const MobileNav = ({ activeLink, handleNavLinkClick }: MobileNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button 
            className="md:hidden z-20 text-white"
            aria-label="Toggle menu"
            variant="ghost"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="left"
          className="fixed inset-0 bg-fixer-dark/95 backdrop-blur-md flex flex-col justify-center items-center space-y-8 transform transition-transform duration-300 ease-in-out md:hidden"
        >
          <Button 
            asChild
            className="bg-purple-custom hover:bg-purple-accent font-neopixel font-bold text-[20px] text-white transition-all duration-300"
          >
            <a 
              href="https://cal.read.ai/biancathefixer?step=duration" 
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar size={18} className="text-white" />
              Connect with me
            </a>
          </Button>
          <a 
            href="#home" 
            className={`nav-link font-poppins font-bold text-[20px] ${activeLink === "home" ? "active" : ""} hover:text-purple-accent`}
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("home");
              setIsMenuOpen(false);
            }}
          >
            home
          </a>
          <a 
            href="#services" 
            className={`nav-link font-poppins font-bold text-[20px] ${activeLink === "services" ? "active" : ""} hover:text-purple-accent`}
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("services");
              setIsMenuOpen(false);
            }}
          >
            services
          </a>
          <a 
            href="#case-studies" 
            className={`nav-link font-poppins font-bold text-[20px] ${activeLink === "case-studies" ? "active" : ""} hover:text-purple-accent`}
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("case-studies");
              setIsMenuOpen(false);
            }}
          >
            case studies
          </a>
          <Link 
            to="/new-landing" 
            className="nav-link font-poppins font-bold text-[20px] hover:text-purple-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            new page
          </Link>
        </SheetContent>
      </Sheet>
    </>
  );
};
