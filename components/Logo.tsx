import React from 'react';
import logoSrc from '../logo/logo.png';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <img src={logoSrc} alt="SYZENTRIC logo" className={className} />
  );
};

export default Logo;