
import { useEffect, useRef } from "react";

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a form submission API
    console.log("Form submitted");
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-fixer-dark/95 to-fixer-dark relative">
      <div className="container-custom">
        <div 
          ref={ctaRef}
          className="glass-card max-w-4xl mx-auto rounded-2xl p-8 md:p-12 relative overflow-hidden opacity-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-fixer-blue/10 to-fixer-gold/10 z-[-1]"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-fixer-light/80 max-w-2xl mx-auto">
              Let's start a conversation about how our consulting services can help you achieve your business goals and drive sustainable growth.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-fixer-light/90">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-fixer-blue text-white placeholder:text-white/40"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-fixer-light/90">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-fixer-blue text-white placeholder:text-white/40"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1 text-fixer-light/90">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="How can we help?"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-fixer-blue text-white placeholder:text-white/40"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-fixer-light/90">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-fixer-blue text-white placeholder:text-white/40 resize-none"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button type="submit" className="button-primary px-8 py-4 text-lg">
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-fixer-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-fixer-gold/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CallToAction;
