
import React from 'react';

const StrategyElement = ({ title, description }: { title: string; description: string }) => {
  // Function to bold specific keywords in description
  const boldKeywords = (text: string) => {
    return text.split(' ').map((word, index) => {
      // Bold words like "unified", "data-driven", "personalized", "targeted", etc.
      const keyWords = [
        "unified", "data-driven", "personalized", "targeted", "engagement", 
        "conversion", "unique", "engaging", "social proof", "social media marketing",
        "social strategy", "digital marketing", "growth"
      ];
      
      if (keyWords.some(keyword => word.toLowerCase().includes(keyword.toLowerCase()))) {
        return <strong key={index}>{word} </strong>;
      }
      return word + " ";
    });
  };

  return (
    <div className="flex flex-col gap-4 glass-card p-6 rounded-lg">
      <div className="flex items-center justify-center">
        <span className="bg-white dark:bg-white text-fixer-dark px-6 py-3 rounded-full font-neopixel text-[28px] uppercase">
          {title}
        </span>
      </div>
      <p className="font-poppins text-white">{boldKeywords(description)}</p>
    </div>
  );
};

const StrategyElements = () => {
  return (
    <div className="space-y-8 mt-16">
      <h2 className="text-3xl md:text-4xl font-open-sans font-bold text-center mb-12 text-white">
        Our <span className="text-purple-custom">STRATEGY</span> is rooted in <span className="text-purple-custom">3 PILLARS</span>
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
