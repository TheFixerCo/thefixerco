
import React from 'react';

const StrategyElement = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex flex-col gap-4 glass-card p-6 rounded-lg">
      <div className="flex items-center justify-center">
        <span className="bg-white dark:bg-white text-fixer-dark px-6 py-3 rounded-full font-neopixel text-[28px] uppercase">
          {title}
        </span>
      </div>
      <p className="font-poppins text-white">{description}</p>
    </div>
  );
};

const StrategyElements = () => {
  return (
    <div className="space-y-8 mt-16">
      <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-white">
        OUR <span>strategy</span> IS ROOTED IN <span>3 pillars</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <StrategyElement
          title="PLATFORMS"
          description="Mastering more platforms with a unified data collection strategy that connects your website, email, and social media touchpoints for a comprehensive view of your customers."
        />
        <StrategyElement
          title="PEOPLE"
          description="Gaining deeper people insights to drive personalized experiences through content, creating targeted social media campaigns that speak directly to your ideal customer."
        />
        <StrategyElement
          title="CULTURE"
          description="Building a stronger brand with actionable strategies that grow your community, increase brand awareness, and drive purchases."
        />
      </div>
    </div>
  );
};

export default StrategyElements;
