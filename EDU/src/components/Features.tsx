import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './UI/GlassCard.tsx';
import { Clock, Video, FileText, Users2, Headphones, Trophy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Video,
      title: 'Live & On-Demand',
      description: 'Interactive live sessions plus recorded content available 24/7'
    },
    {
      icon: Users2,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world experience'
    },
    {
      icon: FileText,
      title: 'Project-Based Learning',
      description: 'Build portfolio-worthy projects that demonstrate your skills'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Get help when you need it with 1-on-1 mentorship'
    },
    {
      icon: Trophy,
      title: 'Career Services',
      description: 'Resume reviews, interview prep, and job placement assistance'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with lifetime access to materials'
    }
  ];

  return (
    <section id="features" className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-cyan/5 to-transparent dark:via-cyan/2">
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
            Why Choose Us
          </h2>
          <h4 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-5xl text-gray-950 dark:text-white">
            Premium Learning Experience
          </h4>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <GlassCard 
                key={index} 
                glowColor={index % 2 === 0 ? 'cyan' : 'purple'} 
                delay={index * 0.1}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${
                    index % 2 === 0 
                      ? 'from-cyan/20 to-purple/10' 
                      : 'from-purple/20 to-cyan/10'
                  }`}>
                    <Icon className={`w-8 h-8 ${index % 2 === 0 ? 'text-cyan' : 'text-purple'}`} />
                  </div>
                  
                  <h4 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h4>
                  
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
