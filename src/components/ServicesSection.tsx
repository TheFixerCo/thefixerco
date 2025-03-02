
import { useEffect, useRef } from "react";
import { Lightbulb, BarChart3, LineChart, Layers, Globe, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <Lightbulb size={48} className="text-fixer-gold mb-4" />,
    title: "Social Selling Strategy",
    description: "Develop compelling approaches to turn social media followers into customers through content that resonates with your target audience and differentiates you from competitors."
  },
  {
    icon: <BarChart3 size={48} className="text-fixer-gold mb-4" />,
    title: "Content Marketing South Africa",
    description: "Gain deep insights into local market content preferences and position through comprehensive analysis and data-driven content strategy that drives sales."
  },
  {
    icon: <LineChart size={48} className="text-fixer-gold mb-4" />,
    title: "Organic Social Media Growth",
    description: "Create and execute strategic growth plans that scale your business with organic social media strategy without ads for sustainable, long-term success."
  },
  {
    icon: <Layers size={48} className="text-fixer-gold mb-4" />,
    title: "TikTok Marketing Expert",
    description: "Optimize your TikTok marketing in South Africa with creator partnerships that maximize reach and engagement for all business types."
  },
  {
    icon: <Globe size={48} className="text-fixer-gold mb-4" />,
    title: "Cultural Marketing Strategy",
    description: "Navigate African markets with innovative cultural marketing strategies that modernize your business and create competitive advantages."
  },
  {
    icon: <TrendingUp size={48} className="text-fixer-gold mb-4" />,
    title: "B2B Social Selling",
    description: "Enter new B2B markets with customized social selling for service businesses that mitigate risks and accelerate social media ROI improvement."
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".service-card");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-scale-in");
                el.classList.remove("opacity-0");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-gradient-to-b from-fixer-dark to-fixer-dark/95 py-24 relative">
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="section-title">
            Our <span className="text-fixer-blue">Services</span> for South African Businesses
          </h2>
          <p className="section-subtitle">
            Comprehensive social media consulting solutions designed to address your most critical digital challenges and opportunities for growth.
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div key={index} className="service-card opacity-0">
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-fixer-light/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-20 right-0 w-64 h-64 bg-fixer-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-fixer-gold/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ServicesSection;
