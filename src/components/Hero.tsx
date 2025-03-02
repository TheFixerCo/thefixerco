
import { useEffect, useRef } from "react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Simple animation on page load
    const elements = [titleRef.current, subtitleRef.current, buttonRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        
        setTimeout(() => {
          el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 100 + index * 200);
      }
    });
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24"
    >
      {/* Background lifestyle images with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-fixer-dark/90 to-fixer-dark/80 z-10"></div>
        
        <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-30 z-0">
          {/* First image */}
          <div className="relative h-full w-full overflow-hidden">
            <img 
              src="/lovable-uploads/e8a07933-d5f1-4934-a390-156601eb7558.png" 
              alt="South African youth" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-fixer-gold/30 mix-blend-overlay"></div>
          </div>
          
          {/* Second image */}
          <div className="relative h-full w-full overflow-hidden">
            <img 
              src="/lovable-uploads/7faa89c9-2d00-4c46-a499-7ecee6245222.png" 
              alt="South African youth" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-fixer-gold/20 mix-blend-overlay"></div>
          </div>
          
          {/* Third image (repeating first image) */}
          <div className="relative h-full w-full overflow-hidden">
            <img 
              src="/lovable-uploads/e8a07933-d5f1-4934-a390-156601eb7558.png" 
              alt="South African youth" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-fixer-gold/25 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 ref={titleRef} className="font-bold text-balance mb-6">
            Consulting Services That Drive <span className="text-fixer-gold">Business Growth</span>
          </h1>
          
          <p ref={subtitleRef} className="text-xl md:text-2xl mb-10 text-fixer-light/80 text-balance">
            We transform challenges into opportunities, delivering strategic consulting that builds lasting success for our clients.
          </p>
          
          <button 
            ref={buttonRef}
            onClick={handleScrollToContact}
            className="button-primary text-lg bg-fixer-gold hover:bg-fixer-gold/90"
          >
            Get in Touch
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-[slide-down_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
