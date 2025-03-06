
import React from 'react';

const StrategyElement = ({ title, description }: { title: string; description: string }) => (
  <div className="flex flex-col gap-4 glass-card p-6 rounded-lg">
    <div className="flex items-center gap-4">
      <span className="bg-white text-fixer-dark px-4 py-2 rounded-full font-mokoto text-sm">
        {title}
      </span>
    </div>
    <p className="font-poppins text-fixer-light/80">{description}</p>
  </div>
);

const StrategyElements = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-mokoto text-center mb-12 text-fixer-gold">
        Our strategy is rooted in 3 essential elements
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <StrategyElement
          title="PLATFORMS"
          description="Mastering more platforms with a unified data collection strategy that connects your website, email, and social media touchpoints. This means you'll have a single, comprehensive view of your customers and be able to make data-driven decisions to drive growth."
        />
        <StrategyElement
          title="PEOPLE"
          description="Gaining deeper people insights to drive personalized experiences through content. For example, you'll be able to create targeted social media campaigns that speak directly to your ideal customer, increasing engagement and conversion rates."
        />
        <StrategyElement
          title="CULTURE"
          description="Building a stronger brand with actionable strategies that grow your community, increase brand awareness, and drive purchases. This might include developing a unique tone of voice, creating engaging content, and leveraging user-generated content to build social proof."
        />
      </div>
    </div>
  );
};

export default StrategyElements;
