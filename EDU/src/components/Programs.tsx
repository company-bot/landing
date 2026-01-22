import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './UI/GlassCard.tsx';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Python',
      description: '',
      levels: [
        { name: 'BASIC', url: '/python.html?level=basic' },
        { name: 'ADVANCED', url: '/python.html?level=advanced' }
      ],
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
      description: '',
      levels: [
        { name: 'BASIC', url: '/web-development.html?level=basic' },
        { name: 'ADVANCED', url: '/web-development.html?level=advanced' }
      ],
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
      description: '',
      levels: [
        { name: 'BASIC', url: '/data-science.html?level=basic' },
        { name: 'ADVANCED', url: '/data-science.html?level=advanced' }
      ],
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
      description: '',
      levels: [
        { name: 'BASIC', url: '/machine-learning.html?level=basic' },
        { name: 'ADVANCED', url: '/machine-learning.html?level=advanced' }
      ],
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
      description: '',
      levels: [
        { name: 'BASIC', url: '/fyp.html?level=basic' },
        { name: 'ADVANCED', url: '/fyp.html?level=advanced' }
      ],
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
      description: '',
      levels: [
        { name: 'BASIC', url: '/tech-starter.html?level=basic' },
        { name: 'ADVANCED', url: '/tech-starter.html?level=advanced' }
      ],
      color: 'purple' as const,
      highlights: [
        'Logic Building',
        'Intro to Coding',
        'Confidence Before University'
      ]
    },
    {
      icon: Users,
      title: 'Coding Kids Hub',
      description: '',
      levels: [
        { name: 'AGES 5-7', url: '/kids-coding.html?level=group1' },
        { name: 'AGES 7-10', url: '/kids-coding.html?level=group2' },
        { name: 'AGES 10-13', url: '/kids-coding.html?level=group3' }
      ],
      color: 'cyan' as const,
      highlights: [
        'Game Creation',
        'Visual Coding',
        'Creativity'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Logic and Math',
      description: '',
      levels: [
        { name: 'BASIC', url: '/logic-math.html?level=basic' },
        { name: 'ADVANCED', url: '/logic-math.html?level=advanced' }
      ],
      color: 'purple' as const,
      highlights: [
        'Critical Thinking',
        'Math Puzzles',
        'Abstract Logic'
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
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${program.color === 'cyan'
                    ? 'from-cyan/20 to-purple/10'
                    : 'from-purple/20 to-cyan/10'
                    } flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${program.color === 'cyan' ? 'text-cyan' : 'text-purple'}`} />
                  </div>

                  <h4 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-3">
                    {program.title}
                  </h4>

                  {/* @ts-ignore */}
                  {program.levels ? (
                    <div className="mb-6 flex-grow flex gap-3">
                      {/* @ts-ignore */}
                      {program.levels.map((level) => (
                        <a
                          key={level.name}
                          href={level.url}
                          className={`flex-1 py-2 text-center rounded-lg font-bold text-sm tracking-wider border transition-all duration-300 ${program.color === 'cyan'
                            ? 'border-cyan/50 text-cyan hover:bg-cyan hover:text-white'
                            : 'border-purple/50 text-purple hover:bg-purple hover:text-white'
                            }`}
                        >
                          {level.name}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-400 mb-6 flex-grow">
                      {program.description}
                    </p>
                  )}

                  {/* Highlights section removed as per user request */}
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
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-10 py-4 bg-cyan hover:bg-cyan/90 text-white font-display uppercase tracking-widest text-sm font-bold transition-all duration-300 shadow-lg shadow-cyan/50 hover:shadow-xl hover:shadow-cyan/70"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
