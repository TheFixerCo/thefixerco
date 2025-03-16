
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
    <section className="bg-fixer-dark py-24">
      <div className="container-custom">
        <div ref={sectionRef} className="flex flex-col items-center">
          <div className="animate-on-scroll opacity-0 transition-all duration-700 mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
              HOW WE <span className="text-purple-500">help</span> LOCAL BUSINESSES <span className="text-purple-500">succeed</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center glass-card p-8 rounded-lg">
              <div className="text-center flex flex-col items-center">
                <p className="text-3xl font-bold text-white mb-2">MORE</p>
                <p className="text-3xl font-bold text-purple-500 mb-6">RELEVANT</p>
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
                <p className="mt-6 text-white">build loyal community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
