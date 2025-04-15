
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface DesktopNavProps {
  activeLink: string;
  handleNavLinkClick: (sectionId: string) => void;
}

export const DesktopNav = ({ activeLink, handleNavLinkClick }: DesktopNavProps) => {
  return (
    <nav className="hidden md:flex space-x-8 items-center">
      <Button 
        asChild
        className="bg-purple-custom hover:bg-purple-accent font-neopixel text-[20px] font-bold text-white transition-all duration-300 animate-pulse"
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
        }}
      >
        case studies
      </a>
      <Link 
        to="/new-landing" 
        className="nav-link font-poppins font-bold text-[20px] hover:text-purple-accent"
      >
        new page
      </Link>
    </nav>
  );
};
