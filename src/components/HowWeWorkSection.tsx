
import { useEffect, useRef } from "react";

const HowWeWorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
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
    <section className="bg-fixer-dark py-24 relative">
      <div className="container-custom">
        <div ref={sectionRef} className="flex flex-col items-center">
          {/* Social-first opportunity section */}
          <div className="animate-on-scroll opacity-0 transition-all duration-700 mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
              HOW WE <span className="text-purple-500">HELP</span> LOCAL BUSINESSES <span className="text-purple-500">SUCCEED</span> WITH ORGANIC SOCIAL MEDIA STRATEGY WITHOUT ADS:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center flex flex-col items-center">
                <p className="text-3xl font-bold text-white mb-2">MORE</p>
                <p className="text-3xl font-bold text-purple-500 mb-6">RELEVANT</p>
                <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
                  <p className="text-xl">to</p>
                </div>
                <p className="mt-6 text-white">grow relevance</p>
              </div>
              
              <div className="text-center flex flex-col items-center">
                <p className="text-3xl font-bold text-white mb-2">MORE</p>
                <p className="text-3xl font-bold text-purple-500 mb-6">CONSUMER SEGMENTS</p>
                <p className="mt-6 text-white">gather customer insights</p>
              </div>
              
              <div className="text-center flex flex-col items-center">
                <p className="text-3xl font-bold text-white mb-2">MORE</p>
                <p className="text-3xl font-bold text-purple-500 mb-6">OFTEN</p>
                <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
                  <p className="text-lg text-center">showing<br />up</p>
                </div>
                <p className="mt-6 text-white">to build loyal community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
