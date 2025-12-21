import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex flex-col justify-center items-center px-3 sm:px-4 pt-24 sm:pt-20">
      <div className="max-w-6xl w-full mx-auto text-center space-y-6 sm:space-y-8">
        
        {/* Decorative Top Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-px h-16 sm:h-24 bg-gradient-to-b from-transparent via-cyan to-transparent mx-auto mb-4 sm:mb-8"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 rounded-full bg-gradient-to-br from-cyan/20 to-purple/20 glass-panel">
            <GraduationCap className="w-16 h-16 text-cyan" />
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-bold tracking-[0.15em] sm:tracking-[0.2em] text-cyan text-xs sm:text-sm uppercase"
        >
          SyZentric Education
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-gray-950 dark:text-white mix-blend-screen leading-none"
        >
          <span className="block text-glow-cyan">ELEVATE</span>
          <span className="block text-glow-purple mt-2">YOUR SKILLS</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-400 font-sans leading-relaxed glass-panel p-4 sm:p-6 rounded-lg"
        >
          Transform your career with cutting-edge <span className="text-cyan">AI</span>, <span className="text-purple">Data Science</span>, and <span className="text-cyan">Software Engineering</span> training. Industry-led curriculum designed for the future of technology.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pt-4 sm:pt-8 flex justify-center gap-3 sm:gap-6 flex-wrap"
        >
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent overflow-hidden rounded-none border border-cyan/30 hover:border-cyan/100 transition-colors duration-300">
            <div className="absolute inset-0 w-0 bg-cyan/10 transition-all duration-[250ms] ease-out group-hover:w-full opacity-50" />
            <span className="relative font-display uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 text-cyan">
              Explore Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
