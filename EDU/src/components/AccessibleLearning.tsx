import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './UI/GlassCard.tsx';
import { MessageCircle, BookOpen, ArrowRight } from 'lucide-react';

const AccessibleLearning = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Connect & Explore',
      description: 'Start by connecting with us. Get free access to basic guidance, course information, and answers to your questions.',
      badge: '100% Free',
      color: 'cyan' as const,
      features: [
        'Course recommendations',
        'Learning path guidance',
        'Basic resources and tips',
        'No commitment required'
      ]
    },
    {
      icon: BookOpen,
      title: 'Continue Learning',
      description: 'When you\'re ready, access deeper structured guidance with detailed lessons, projects, and personalized support.',
      badge: 'Student Friendly Budget',
      color: 'purple' as const,
      features: [
      'Full course materials',
      'Step-by-step projects',
      'Mentor support',
      'Financial aid available for deserving students'
    ],
    affordabilityNote: 'Cheaper than a monthly mobile data plan.'
    }
  ];

  return (
    <section id="accessible-learning" className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-purple/5 to-transparent dark:via-purple/2">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-display font-bold text-purple text-sm sm:text-base uppercase tracking-[0.2em] mb-4">
            Accessible for Everyone
          </h2>
          <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-5xl text-gray-950 dark:text-white">
            Learn at Your <span className="text-glow-purple">Own Pace</span>
          </h3>
          <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            We believe learning should be accessible to everyone. Start exploring for free, 
            then decide if you want to continue with structured guidance.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <GlassCard 
                key={index} 
                glowColor={step.color} 
                delay={index * 0.2}
              >
                <div className="flex flex-col h-full">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${
                    step.color === 'cyan'
                      ? 'bg-cyan/20 text-cyan'
                      : 'bg-purple/20 text-purple'
                  }`}>
                    {step.badge}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${
                    step.color === 'cyan' 
                      ? 'from-cyan/20 to-purple/10' 
                      : 'from-purple/20 to-cyan/10'
                  } flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${step.color === 'cyan' ? 'text-cyan' : 'text-purple'}`} />
                  </div>
                  
                  {/* Title */}
                  <h4 className={`font-display font-bold text-2xl sm:text-3xl mb-4 ${
                    step.color === 'cyan' ? 'text-cyan' : 'text-purple'
                  }`}>
                    {step.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 flex-grow">
                    {step.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3"
                      >
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          step.color === 'cyan' ? 'bg-cyan' : 'bg-purple'
                        }`} />
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-500">
                          {feature}
                        </span>
                      </div>
                    ))
                    }
                    {step.affordabilityNote && (
                    <div className="mt-6 p-3 bg-purple/5 border border-purple/10 rounded-lg italic text-lg text-purple/80">
                      " {step.affordabilityNote} "
                    </div>
                  )}
                  </div>

                  {/* CTA */}
                  {index === 0 && (
                     <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.6 }}
                              className="text-center mt-12 sm:mt-16"
                            >
                              <a 
                                href="#contact"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const target = document.getElementById('contact');
                                  if (target) {
                                    target.scrollIntoView({ behavior: 'smooth' });
                                  } else {
                                    window.location.assign('/#contact');
                                  }
                                }}
                                className="inline-block px-10 py-4 bg-gradient-to-r from-cyan to-purple hover:from-cyan/90 hover:to-purple/90 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] font-display uppercase tracking-widest text-sm font-bold transition-all duration-300 shadow-lg shadow-purple/50 hover:shadow-xl hover:shadow-purple/70"
                              >
                                Connect Now
                              </a>
                            </motion.div>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass-panel inline-block px-6 sm:px-8 py-4 sm:py-5 rounded-lg max-w-4xl">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 leading-relaxed">
              <span className="font-bold text-gray-900 dark:text-white">No pressure, no hidden costs.</span> 
              {' '}Our goal is to help you understand your options and make an informed decision about your learning journey. 
              The small fee for structured courses helps us maintain quality materials and provide dedicated support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccessibleLearning;
