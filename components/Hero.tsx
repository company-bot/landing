import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Cpu, ArrowRight, Box } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-3 sm:px-4 pt-24 sm:pt-20 pb-12">
      <div className="max-w-6xl w-full mx-auto text-center space-y-6 sm:space-y-8">
        
        {/* Decorative Top Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          // className="w-px h-16 sm:h-24 bg-gradient-to-b from-transparent via-cyan to-transparent mx-auto mb-4 sm:mb-8"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <img src="/logo/favicon.png" alt="SyZentric" className="w-16 h-16" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold tracking-[0.15em] sm:tracking-[0.2em] text-cyan text-xs sm:text-sm uppercase"
        >
          The Zenith of Intelligence
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter text-gray-950 dark:text-white mix-blend-screen leading-none"
        >
          <span className="block text-glow-cyan">SYZENTRIC</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-400 font-sans leading-relaxed glass-panel p-4 sm:p-6 rounded-lg"
        >
         <b> We build the Technology <br/> You master the Understanding</b>
        </motion.p>

        {/* Cards for Tech and Education */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pt-8 sm:pt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Tech Card */}
          <a 
            href="https://tech.syzentric.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-hover glass-panel p-8 rounded-2xl group cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-cyan/50 dark:hover:border-cyan/50 transition-colors bg-white/50 dark:bg-gray-900/50"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-full bg-cyan/10 group-hover:bg-cyan/20 transition-colors">
                <Cpu className="w-12 h-12 text-cyan" />
              </div>
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                Technology
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                AI engineering, data science, and software architecture unified into one execution layer.
              </p>
              <div className="flex items-center gap-2 text-cyan font-semibold group-hover:gap-3 transition-all">
                <span>Explore Tech</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </a>

          {/* Education Card */}
          <a 
            href="https://learn.syzentric.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-hover glass-panel p-8 rounded-2xl group cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-cyan/50 dark:hover:border-cyan/50 transition-colors bg-white/50 dark:bg-gray-900/50"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-full bg-cyan/10 group-hover:bg-cyan/20 transition-colors">
                <GraduationCap className="w-12 h-12 text-cyan" />
              </div>
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                Education
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Empowering minds with knowledge and skills for the future of technology.
              </p>
              <div className="flex items-center gap-2 text-cyan font-semibold group-hover:gap-3 transition-all">
                <span>Explore Learning</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
