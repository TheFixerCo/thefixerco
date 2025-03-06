
import React from 'react';
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import StrategyElements from './StrategyElements';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="font-mokoto text-4xl md:text-6xl lg:text-7xl mb-6 text-balance text-purple-custom">
            Unlock Real Online Growth
          </h1>
          <p className="font-poppins text-lg md:text-xl text-black mb-8 max-w-3xl mx-auto">
            Our data-driven approach to social selling and content strategy helps startups and founders like you achieve significant online growth, drive more sales, and increase revenue. In just 90 days, you could transform your online presence and start seeing real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-purple-custom hover:bg-purple-custom/90 font-mokoto font-bold animate-pulse">
              <a href="mailto:bianca@thefixerco.com" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="ml-2 animate-bounce"
                >
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </a>
            </Button>
          </div>
        </div>
        
        <StrategyElements />
        
        <div className="text-center mt-16">
          <p className="font-poppins text-black text-xl mb-4">
            Ready to level-up your social selling?
          </p>
          <Button asChild variant="outline" className="border-purple-custom text-purple-custom hover:bg-purple-custom hover:text-white font-mokoto font-bold">
            <a href="mailto:bianca@thefixerco.com">
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
