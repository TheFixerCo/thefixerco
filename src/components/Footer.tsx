
import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fixer-dark border-t border-white/10 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/b361399a-6af3-4332-8b41-7903efdc4b9b.png" 
                alt="The Fixer Co" 
                className="h-8 w-8 mr-3" 
              />
              <span className="text-white font-medium text-xl">The Fixer Co.</span>
            </div>
            <p className="text-fixer-light/70 max-w-md mb-8">
              The Fixer Co provides strategic consulting services that help businesses navigate challenges and 
              capitalize on opportunities for sustainable growth and success.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-fixer-blue/20 text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-fixer-blue/20 text-white transition-colors"
                aria-label="TikTok"
              >
                <Twitter size={20} /> {/* Using Twitter as a placeholder for TikTok */}
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-fixer-blue/20 text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-fixer-blue/20 text-white transition-colors"
                aria-label="Substack"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4H21V6H3V4ZM3 8H21V10H3V8ZM11 12H21V14H11V12ZM11 16H21V18H11V16ZM11 20H21V22H11V20ZM3 12H9V22H3V12Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-fixer-light/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-fixer-light/70 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#case-studies" className="text-fixer-light/70 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="text-fixer-light/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-fixer-light/70">
                Forbes Road<br />
                Johannesburg<br />
                South Africa<br />
                2194
              </li>
              <li>
                <a href="mailto:bianca@thefixerco.com" className="text-fixer-light/70 hover:text-white transition-colors">
                  bianca@thefixerco.com
                </a>
              </li>
              <li>
                <a href="tel:+27847402418" className="text-fixer-light/70 hover:text-white transition-colors">
                  +27 84 740 2418
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-fixer-light/50 mb-4 md:mb-0">
            &copy; {currentYear} The Fixer Co. All rights reserved.
          </p>
          
          <div className="flex space-x-8">
            <a href="#" className="text-fixer-light/50 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-fixer-light/50 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
