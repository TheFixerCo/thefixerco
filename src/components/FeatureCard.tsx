
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  href,
}) => {
  return (
    <div className="glass-card rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-[1.03] bg-white dark:bg-fixer-dark/80 border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-open-sans font-bold mb-2 text-black dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 font-poppins mb-4">{description}</p>
      <Button variant="link" asChild className="text-purple-custom hover:text-purple-accent">
        <Link to={href}>Learn more</Link>
      </Button>
    </div>
  );
};
