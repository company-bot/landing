import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section id="vision" className="relative z-10 py-16 sm:py-24 md:py-32 px-3 sm:px-4 overflow-hidden">
      {/* Background Graphic Suggestion */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Abstract Gravitational Visualization CSS */}
            <div className="relative aspect-square w-full max-w-xs sm:max-w-md mx-auto">
              <div className="absolute inset-0 border border-cyan/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border border-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-16 border border-cyan/10 rounded-full animate-[spin_10s_linear_infinite]" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_30px_10px_rgba(255,255,255,0.3)] z-10" />
              
              {/* Nodes connected by lines */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan rounded-full shadow-[0_0_10px_rgba(123,44,158,0.8)]" />
              <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple rounded-full shadow-[0_0_10px_rgba(74,31,98,0.8)]" />
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan rounded-full shadow-[0_0_10px_rgba(123,44,158,0.8)]" />
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/20" strokeWidth="1">
                <line x1="50%" y1="50%" x2="25%" y2="25%" />
                <line x1="50%" y1="50%" x2="75%" y2="66%" />
                <line x1="50%" y1="50%" x2="66%" y2="33%" />
              </svg>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-left"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-950 dark:text-white uppercase">
              The <span className="text-purple">Gravity</span> of Infrastructure
            </h2>
            
            <div className="glass-panel p-4 sm:p-8 rounded-xl border-l-4 border-l-cyan">
              <p className="font-sans text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                "Just as gravity holds a galaxy together, Syzentric provides the invisible structure that allows digital ecosystems to operate, scale, and evolve."
              </p>
              <p className="font-sans text-sm sm:text-base text-gray-700 dark:text-gray-400">
                We don't just build apps; we engineer the fundamental forces that keep your business universe in motion. From the atomic level of code to the galactic scale of cloud architecture.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Vision;