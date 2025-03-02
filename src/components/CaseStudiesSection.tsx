
import { useEffect, useRef } from "react";

const caseStudies = [
  {
    title: "Global Expansion Strategy for Tech Startup",
    description: "Developed a comprehensive market entry strategy that helped a SaaS startup expand into 5 new international markets within 18 months, resulting in a 140% revenue increase.",
    metrics: [
      { label: "Revenue Growth", value: "140%" },
      { label: "Market Expansion", value: "5 Countries" },
      { label: "Timeline", value: "18 Months" }
    ],
    imagePosition: "right"
  },
  {
    title: "Brand Repositioning for Retail Chain",
    description: "Executed a complete brand overhaul for a struggling retail chain, revitalizing their market position and customer perception, leading to a 35% increase in store traffic and 28% sales growth.",
    metrics: [
      { label: "Store Traffic", value: "+35%" },
      { label: "Sales Growth", value: "+28%" },
      { label: "Customer Retention", value: "+42%" }
    ],
    imagePosition: "left"
  },
  {
    title: "Digital Transformation for Financial Services Firm",
    description: "Guided a traditional financial services company through comprehensive digital transformation, modernizing operations and customer experience, resulting in 50% improved efficiency and 62% higher customer satisfaction scores.",
    metrics: [
      { label: "Operational Efficiency", value: "+50%" },
      { label: "Customer Satisfaction", value: "+62%" },
      { label: "Cost Reduction", value: "32%" }
    ],
    imagePosition: "right"
  }
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
    <section id="case-studies" className="bg-fixer-dark py-24 relative">
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="section-title">
            Case <span className="text-fixer-blue">Studies</span>
          </h2>
          <p className="section-subtitle">
            Real results for real clients. Explore how our strategic consulting has transformed businesses across industries.
          </p>
        </div>
        
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="opacity-0 transition-all duration-700"
            >
              <div className={`flex flex-col ${study.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} glass-card overflow-hidden rounded-lg`}>
                <div className="lg:w-1/2 aspect-video">
                  <div className="w-full h-full bg-gradient-to-br from-fixer-blue/20 to-fixer-gold/20 relative overflow-hidden">
                    <img 
                      src={`/lovable-uploads/5387a9b5-616f-4de1-ae11-ed1db9a864da.png`} 
                      alt={study.title} 
                      className="w-full h-full object-cover mix-blend-overlay opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fixer-dark/80"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-3">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded">
                            <p className="text-xs text-fixer-light/70">{metric.label}</p>
                            <p className="text-lg font-bold text-fixer-gold">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h3>
                  <p className="text-fixer-light/80 mb-6">{study.description}</p>
                  <button className="button-secondary self-start mt-4">View Case Study</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
