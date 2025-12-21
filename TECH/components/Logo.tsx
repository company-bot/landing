import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <img src="/logo/logo.png" alt="SYZENTRIC logo" className={className} />
  );
};

export default Logo;
