import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './UI/GlassCard.tsx';
import { UserPlus, BookOpen, Code, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Enroll',
      description: 'Choose your course and register in minutes. Get instant access to learning materials.',
      color: 'cyan' as const
    },
    {
      icon: BookOpen,
      title: 'Learn',
      description: 'Follow structured lessons, watch tutorials, and understand concepts step by step.',
      color: 'purple' as const
    },
    {
      icon: Code,
      title: 'Practice',
      description: 'Build real projects, solve problems, and apply what you learn with hands-on exercises.',
      color: 'cyan' as const
    },
    // {
    //   icon: Award,
    //   number: '04',
    //   title: 'Certify',
    //   description: 'Complete assessments, showcase your projects, and earn your certification.',
    //   color: 'purple' as const
    // }
  ];

  return (
    <section id="how-it-works" className="relative z-10 py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-display font-bold text-cyan text-sm sm:text-base uppercase tracking-[0.2em] mb-4">
            Your Learning Path
          </h2>
          <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-5xl text-gray-950 dark:text-white">
            How It <span className="text-glow-purple">Works</span>
          </h3>
          <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            A simple, proven process from enrollment to certification
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <GlassCard 
                key={index} 
                glowColor={step.color} 
                delay={index * 0.15}
              >
                <div className="text-center relative">
                  {/* Step Number */}
                  <div className={`absolute -top-6 -right-6 font-display font-black text-6xl ${
                    step.color === 'cyan' ? 'text-cyan/10' : 'text-purple/10'
                  }`}>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${
                    step.color === 'cyan' 
                      ? 'from-cyan/20 to-purple/10' 
                      : 'from-purple/20 to-cyan/10'
                  }`}>
                    <Icon className={`w-8 h-8 ${step.color === 'cyan' ? 'text-cyan' : 'text-purple'}`} />
                  </div>
                  
                  {/* Title */}
                  <h4 className={`font-display font-bold text-xl sm:text-2xl mb-3 ${
                    step.color === 'cyan' ? 'text-cyan' : 'text-purple'
                  }`}>
                    {step.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <a 
            href="#programs"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan to-purple hover:from-cyan/90 hover:to-purple/90 text-white font-display uppercase tracking-widest text-sm font-bold transition-all duration-300 shadow-lg shadow-purple/50 hover:shadow-xl hover:shadow-purple/70"
          >
            Start Learning Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
