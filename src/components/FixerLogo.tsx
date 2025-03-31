
import React from "react";
import { Sparkles } from "lucide-react";

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
      <div className="absolute inset-0 bg-blue-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold" style={{ fontSize: size * 0.6 }}>F</span>
      </div>
      <Sparkles 
        className="absolute -top-2 -right-2 text-yellow-400" 
        size={size * 0.4}
      />
    </div>
  );
};

export default FixerLogo;
