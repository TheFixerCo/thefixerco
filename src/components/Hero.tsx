
import React from 'react';
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import StrategyElements from './StrategyElements';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="font-mokoto text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
            Unlock Real Online Growth
          </h1>
          <p className="font-poppins text-lg md:text-xl text-fixer-light/80 mb-8 max-w-3xl mx-auto">
            Our data-driven approach to social selling and content strategy helps startups and founders like you achieve significant online growth, drive more sales, and increase revenue. In just 90 days, you could transform your online presence and start seeing real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-fixer-gold hover:bg-fixer-gold/90">
              <a href="mailto:bianca@thefixerco.com">
                <Mail className="mr-2 h-4 w-4" />
                Start Your Growth Journey
              </a>
            </Button>
          </div>
        </div>
        
        <StrategyElements />
        
        <div className="text-center mt-16">
          <p className="font-poppins text-xl text-fixer-light/90 mb-4">
            Ready to take your online presence to the next level?
          </p>
          <Button asChild variant="outline" className="border-fixer-gold text-fixer-gold hover:bg-fixer-gold hover:text-white">
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
