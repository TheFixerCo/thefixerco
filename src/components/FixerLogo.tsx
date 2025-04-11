
import React from "react";

interface FixerLogoProps {
  size?: number;
  className?: string;
}

const FixerLogo = ({ size = 40, className = "" }: FixerLogoProps) => {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="The Fixer Co Favicon – fast, bold, reliable"
    >
      <img 
        src="/lovable-uploads/8505d01f-5506-497c-bb06-5e81085e9a9f.png" 
        alt="The Fixer Co" 
        className="w-full h-full"
      />
    </div>
  );
};

export default FixerLogo;
