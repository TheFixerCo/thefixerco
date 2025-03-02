
import { useEffect, useRef } from "react";
import { Smartphone, Users, Eye, Sliders } from "lucide-react";

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
              In today's social-first landscape, there is a tremendous opportunity for South African businesses to improve social media ROI through:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center flex flex-col items-center">
                <p className="text-3xl font-bold text-white mb-2">more</p>
                <p className="text-3xl font-bold text-purple-500 mb-6">relevant</p>
                <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
                  <p className="text-xl">to</p>
                </div>
              </div>
              
              <div className="text-center flex flex-col items-center">
                <p className="text-3xl font-bold text-white mb-2">more</p>
                <p className="text-3xl font-bold text-purple-500 mb-6">consumer segments</p>
                <div className="hidden md:block">
                  {/* This div is empty for layout purposes */}
                </div>
              </div>
              
              <div className="text-center flex flex-col items-center">
                <p className="text-3xl font-bold text-white mb-2">more</p>
                <p className="text-3xl font-bold text-purple-500 mb-6">often</p>
                <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
                  <p className="text-lg text-center">showing<br />up</p>
                </div>
              </div>
            </div>
            
            <p className="text-3xl md:text-4xl font-bold mt-16 text-purple-500 text-center">
              with content strategy that drives sales and actual business results.
            </p>
          </div>
          
          {/* How we can help brands succeed section */}
          <div className="animate-on-scroll opacity-0 transition-all duration-700 text-center max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How we help <span className="text-purple-500">local businesses succeed with organic social media strategy without ads.</span>
            </h2>
            
            <p className="text-lg mb-10 text-fixer-light/80 max-w-4xl mx-auto">
              As an African social selling expert, our goal with every engagement is to provide more value than you paid for, 
              leaving you with a volume of creator-driven marketing tactics & knowledge, actionable solutions & market-ready ideas 
              as well as a practical plan to turn social media followers into customers.
            </p>
            
            <p className="text-xl font-semibold mb-12">
              Everything we do is tied back to these four main pillars:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* PAC Pillar */}
              <div className="bg-white text-fixer-dark p-8 rounded-lg flex flex-col items-center text-center">
                <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Smartphone size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">PAC (Platforms & Culture)</h3>
                <p className="text-gray-700">
                  Educate and upskill your team on TikTok marketing in South Africa and how to capture consumer attention.
                </p>
              </div>
              
              {/* Social at the Center Pillar */}
              <div className="bg-white text-fixer-dark p-8 rounded-lg flex flex-col items-center text-center">
                <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Social at the Center</h3>
                <p className="text-gray-700">
                  Brand is built on social, we help with content strategy for service businesses that makes your brand more relevant to more people.
                </p>
              </div>
              
              {/* Underpriced Attention Pillar */}
              <div className="bg-white text-fixer-dark p-8 rounded-lg flex flex-col items-center text-center">
                <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Eye size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Underpriced Attention</h3>
                <p className="text-gray-700">
                  The media landscape is changing constantly. We help your team become "day traders" of attention through effective cultural marketing strategies.
                </p>
              </div>
              
              {/* Holistic Commerce Pillar */}
              <div className="bg-white text-fixer-dark p-8 rounded-lg flex flex-col items-center text-center">
                <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Sliders size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Holistic Commerce</h3>
                <p className="text-gray-700">
                  We guide your team on social selling for e-commerce and enhance capabilities to optimize sales and brand performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-fixer-gold/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HowWeWorkSection;
