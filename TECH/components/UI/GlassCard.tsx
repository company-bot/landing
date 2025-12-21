import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'none';
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'none',
  delay = 0 
}) => {
  const glowStyles = {
    cyan: 'hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(123,44,158,0.15)]',
    purple: 'hover:border-purple/50 hover:shadow-[0_0_30px_rgba(74,31,98,0.15)]',
    none: ''
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={`glass-panel rounded-xl p-6 transition-all duration-300 group relative overflow-hidden ${glowStyles[glowColor]} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-transparent group-hover:border-cyan/50 transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-hover:border-purple/50 transition-colors duration-300" />
    </motion.div>
  );
};

export default GlassCard;
