
import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Mail, ArrowDown, Smartphone } from "lucide-react";
import StrategyElements from './StrategyElements';

const backgroundImages = [
  "/lovable-uploads/5387a9b5-616f-4de1-ae11-ed1db9a864da.png",
  "/lovable-uploads/7faa89c9-2d00-4c46-a499-7ecee6245222.png",
  "/lovable-uploads/e8a07933-d5f1-4934-a390-156601eb7558.png"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-purple-custom/30 z-10"></div>
            <img 
              src={image} 
              alt={`Background ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="font-mokoto text-4xl md:text-6xl lg:text-7xl mb-6 text-balance text-purple-custom mt-16">
            Unlock Real Online Growth
          </h1>
          <p className="font-poppins text-lg md:text-xl text-black dark:text-white mb-8 max-w-3xl mx-auto">
            Our data-driven approach to social selling and content strategy helps startups and founders like you achieve significant online growth, drive more sales, and increase revenue. In just 90 days, you could transform your online presence and start seeing real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-purple-custom hover:bg-purple-accent font-open-sans text-[20px] font-bold animate-pulse">
              <a href="tel:+27847402418" className="flex items-center">
                <Smartphone className="mr-2 h-4 w-4" />
                GET IN TOUCH
                <ArrowDown 
                  className="ml-2 animate-bounce"
                  size={20}
                />
              </a>
            </Button>
          </div>
        </div>
        
        <StrategyElements />
        
        <div className="text-center mt-16">
          <p className="font-open-sans text-black dark:text-white text-xl font-bold mb-4">
            READY TO LEVEL-UP YOUR SOCIAL SELLING?
          </p>
          <Button asChild variant="outline" className="border-purple-custom text-purple-custom hover:bg-purple-accent hover:text-white font-open-sans text-[20px] font-bold">
            <a href="mailto:bianca@thefixerco.com" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              GET IN TOUCH
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
