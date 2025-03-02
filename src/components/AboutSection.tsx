
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0");
            entry.target.classList.remove("translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-fixer-dark py-24 relative">
      <div className="container-custom">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              We <span className="text-fixer-blue">Transform</span> Businesses Through Strategic Consulting
            </h2>
            
            <p className="text-lg mb-6 text-fixer-light/80">
              At The Fixer, we believe in a collaborative approach to consulting. We work closely with our clients to understand their unique challenges and objectives, then develop custom strategies that drive meaningful results.
            </p>
            
            <p className="text-lg mb-8 text-fixer-light/80">
              Our team combines deep industry expertise with innovative thinking to help our clients navigate complex business landscapes and achieve sustainable growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="glass-card px-5 py-3 rounded-md">
                <span className="text-fixer-gold font-bold">10+ Years</span>
                <p className="text-sm text-fixer-light/70">Industry Experience</p>
              </div>
              
              <div className="glass-card px-5 py-3 rounded-md">
                <span className="text-fixer-gold font-bold">150+</span>
                <p className="text-sm text-fixer-light/70">Clients Worldwide</p>
              </div>
              
              <div className="glass-card px-5 py-3 rounded-md">
                <span className="text-fixer-gold font-bold">96%</span>
                <p className="text-sm text-fixer-light/70">Client Retention</p>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden neo-blur">
                <img 
                  src="/lovable-uploads/5387a9b5-616f-4de1-ae11-ed1db9a864da.png" 
                  alt="Strategic consulting session" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-fixer-gold rounded-lg z-[-1]"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-fixer-blue/30 rounded-lg z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
