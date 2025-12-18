import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Crescent / Orbit */}
      <path 
        d="M 30 15 A 45 45 0 0 0 30 85" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round" 
        className="text-cyan opacity-90" 
      />
      
      {/* Head Profile Outline */}
      <path 
        d="M 45 25 C 62 25, 75 32, 75 48 C 75 58, 68 62, 68 68 V 78 H 50" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        className="text-white opacity-90"
      />
      
      {/* Tech Lines/Network inside head */}
      <g className="text-cyan">
        {/* Nodes */}
        <circle cx="55" cy="40" r="2.5" fill="currentColor" />
        <circle cx="65" cy="35" r="2.5" fill="currentColor" />
        <circle cx="62" cy="50" r="2.5" fill="currentColor" />
        <circle cx="52" cy="55" r="2.5" fill="currentColor" />
        
        {/* Connections */}
        <line x1="55" y1="40" x2="65" y2="35" stroke="currentColor" strokeWidth="1.5" />
        <line x1="55" y1="40" x2="62" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <line x1="65" y1="35" x2="62" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <line x1="62" y1="50" x2="52" y2="55" stroke="currentColor" strokeWidth="1.5" />
        
        {/* External Connection */}
        <line x1="75" y1="48" x2="88" y2="48" stroke="currentColor" strokeWidth="2" />
        <circle cx="90" cy="48" r="2.5" fill="currentColor" />
        
        {/* Lower Connection */}
        <line x1="50" y1="78" x2="80" y2="78" stroke="currentColor" strokeWidth="2" />
        <circle cx="82" cy="78" r="2.5" fill="currentColor" />
      </g>
    </svg>
  );
};

export default Logo;