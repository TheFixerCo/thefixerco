
import { Linkedin, Instagram } from "lucide-react";

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
                href="https://www.linkedin.com/in/biancasibiya/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-fixer-blue/20 text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/bianca_sibiya/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-fixer-blue/20 text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
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
