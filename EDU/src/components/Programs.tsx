import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './UI/GlassCard.tsx';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Coding Logic & Python',
      description:
        'Learn how to think like a programmer. This course focuses on logic, problem-solving, and Python basics for absolute beginners.',
      color: 'cyan' as const,
      highlights: [
        'Programming Logic',
        'Python',
        'Problem Solving Skills'
      ]
    },
    {
      icon: Users,
      title: 'Web Development Foundations',
      description:
        'Understand how websites work by building them step by step. No shortcuts, only real understanding.',
      color: 'purple' as const,
      highlights: [
        'HTML, CSS & JavaScript',
        'Backend',
        'Build Real Websites'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Data Science',
      description:
        'Learn how data is cleaned, analyzed, and understood using simple tools and real examples.',
      color: 'cyan' as const,
      highlights: [
        'Python for EDA',
        'Data Cleaning',
        'Data Analysis'
      ]
    },
    {
      icon: Award,
      title: 'Machine Learning Fundamentals',
      description:
        'Understand how machine learning works behind the scenes instead of just using ready-made tools.',
      color: 'purple' as const,
      highlights: [
        'ML Concepts & Logic',
        'Model Training & Evaluation',
        'Mini ML Projects'
      ]
    },
    {
      icon: BookOpen,
      title: 'Final Year Project Guidance',
      description:
        'Step-by-step help for academic projects including idea selection, coding, and documentation.',
      color: 'cyan' as const,
      highlights: [
        'Project Planning',
        'Implementation Support',
        'Report & Presentation Help'
      ]
    },
    {
      icon: Users,
      title: 'Tech Starter Program',
      description:
        'A beginner-friendly program for school and college students to learn logic, coding basics, and tech thinking before university.',
      color: 'purple' as const,
      highlights: [
        'Logic Building',
        'Intro to Coding',
        'Confidence Before University'
      ]
    }
  ];


  return (
    <section id="programs" className="relative z-10 py-20 sm:py-32 px-4 sm:px-6">
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
            Our Programs
          </h2>
          <h4 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-5xl text-gray-950 dark:text-white">
            Learn by Doing, Think by Logic
          </h4>
          <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            Build strong fundamentals and use logic to create real solutions
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <GlassCard key={index} glowColor={program.color} delay={index * 0.1}>
                <div className="flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${
                    program.color === 'cyan' 
                      ? 'from-cyan/20 to-purple/10' 
                      : 'from-purple/20 to-cyan/10'
                  } flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${program.color === 'cyan' ? 'text-cyan' : 'text-purple'}`} />
                  </div>
                  
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-3">
                    {program.title}
                  </h4>
                  
                  <p className="text-gray-700 dark:text-gray-400 mb-6 flex-grow">
                    {program.description}
                  </p>

                  <div className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          program.color === 'cyan' ? 'bg-cyan' : 'bg-purple'
                        }`} />
                        <span className="text-sm text-gray-600 dark:text-gray-500">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
