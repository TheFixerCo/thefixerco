
import { useEffect, useRef } from "react";

const caseStudies = [
  {
    title: "SAAS launching globally",
    category: "ESG",
    date: "April 2025",
  },
  {
    title: "Culture Intersects Heritage",
    category: "Heritage",
    date: "May 2025",
  },
  {
    title: "Curation of ZA Culture Start-Ups",
    category: "SAAS",
    date: "June 2025",
  },
];

const CaseStudiesSection = () => {
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);
  
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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="case-studies" className="bg-fixer-dark py-24">      
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="section-title text-[20px] md:text-4xl lg:text-5xl font-open-sans font-bold mb-4">
            CASE <span>studies</span>
          </h2>
          <p className="section-subtitle text-white">
            Real results for real clients. Explore how our strategic consulting has transformed businesses across industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="opacity-0 transition-all duration-700 flex flex-col"
            >
              <div className="glass-card p-6 rounded-lg h-64 flex items-center justify-center">
                <h3 className="text-center font-open-sans font-bold text-white text-xl">{study.title}</h3>
              </div>
              
              <div className="mt-4 bg-black/40 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <span className="text-purple-custom font-open-sans font-bold">{study.category}</span>
                </div>
                <div className="h-6 w-px bg-white/30 mx-2"></div>
                <div>
                  <span className="text-white/80 text-sm">{study.date}</span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <span className="inline-block px-4 py-2 bg-purple-custom text-white font-open-sans font-bold rounded">
                  {index === 0 ? "ESG" : index === 1 ? "ARTS" : "TECH"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
