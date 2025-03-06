
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    region: "South Africa",
    city: "",
    subject: "",
    message: "",
    source: "website"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Dropdown options
  const regions = [
    "South Africa",
    "East Africa",
    "West Africa",
    "USA",
    "Asia",
    "Europe",
    "Australia",
    "Middle East",
    "Canada",
    "Other"
  ];
  
  const cities = {
    "South Africa": ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein", "Other"],
    "East Africa": ["Nairobi", "Dar es Salaam", "Kampala", "Kigali", "Addis Ababa", "Other"],
    "West Africa": ["Lagos", "Accra", "Abuja", "Dakar", "Other"],
    "USA": ["New York", "Los Angeles", "Chicago", "San Francisco", "Miami", "Other"],
    "Asia": ["Tokyo", "Singapore", "Hong Kong", "Mumbai", "Shanghai", "Other"],
    "Europe": ["London", "Paris", "Berlin", "Madrid", "Rome", "Other"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Other"],
    "Middle East": ["Dubai", "Riyadh", "Doha", "Abu Dhabi", "Other"],
    "Canada": ["Toronto", "Vancouver", "Montreal", "Calgary", "Other"],
    "Other": ["Other"]
  };
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Reset city when region changes
    if (id === 'region') {
      setFormData(prev => ({
        ...prev,
        city: ""
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add UTM parameters if available
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    
    const leadData = {
      ...formData,
      timestamp: new Date().toISOString(),
      utmSource,
      utmMedium,
      utmCampaign,
      page: window.location.pathname
    };
    
    // Log lead data to console (in a real app, you would send this to your backend)
    console.log("Lead captured:", leadData);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Store lead in localStorage as a simple database
      const leads = JSON.parse(localStorage.getItem('leads') || '[]');
      leads.push(leadData);
      localStorage.setItem('leads', JSON.stringify(leads));
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        region: "South Africa",
        city: "",
        subject: "",
        message: "",
        source: "website"
      });
      
      setIsSubmitting(false);
      
      // Show success message
      toast.success("Thank you for your message!", {
        description: "We'll get back to you soon.",
        duration: 5000
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-fixer-dark/95 to-fixer-dark relative">
      <div className="container-custom">
        <div 
          ref={ctaRef}
          className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12 relative overflow-hidden opacity-0"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              CONNECT WITH US
            </h2>
            <p className="text-fixer-light/80 max-w-2xl mx-auto">
              Let's start a conversation about how our consulting services can help you achieve your business goals and drive sustainable growth.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-fixer-light/90">
                  Name <span className="text-purple-custom">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom text-white placeholder:text-white/40"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-fixer-light/90">
                  Email <span className="text-purple-custom">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom text-white placeholder:text-white/40"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1 text-fixer-light/90">
                  Company <span className="text-purple-custom">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Company name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom text-white placeholder:text-white/40"
                  required
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-1 text-fixer-light/90">
                  Your Role <span className="text-purple-custom">*</span>
                </label>
                <input
                  type="text"
                  id="role"
                  placeholder="Your job title"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom text-white placeholder:text-white/40"
                  required
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="region" className="block text-sm font-medium mb-1 text-fixer-light/90">
                  Region <span className="text-purple-custom">*</span>
                </label>
                <select
                  id="region"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom text-white"
                  required
                  value={formData.region}
                  onChange={handleChange}
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-1 text-fixer-light/90">
                  City <span className="text-purple-custom">*</span>
                </label>
                <select
                  id="city"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom text-white"
                  required
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a city</option>
                  {formData.region && cities[formData.region as keyof typeof cities].map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1 text-fixer-light/90">
                Subject <span className="text-purple-custom">*</span>
              </label>
              <input
                type="text"
                id="subject"
                placeholder="How can we help?"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom text-white placeholder:text-white/40"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-fixer-light/90">
                Message <span className="text-purple-custom">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom text-white placeholder:text-white/40 resize-none"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="button-primary px-8 py-4 text-lg relative"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="opacity-0">Contact Us</span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  </>
                ) : (
                  'Get in Touch'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-custom/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-custom/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CallToAction;
