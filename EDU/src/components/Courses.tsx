import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './UI/GlassCard.tsx';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Advanced AI Engineering',
      duration: '16 Weeks',
      students: '250+ Students',
      level: 'Advanced',
      price: '$2,499',
      color: 'cyan' as const,
      topics: ['Deep Learning', 'NLP', 'Computer Vision', 'Model Deployment'],
      startDate: 'Feb 15, 2026'
    },
    {
      title: 'Data Science Bootcamp',
      duration: '12 Weeks',
      students: '400+ Students',
      level: 'Intermediate',
      price: '$1,999',
      color: 'purple' as const,
      topics: ['Python', 'SQL', 'Statistics', 'Machine Learning'],
      startDate: 'Mar 1, 2026'
    },
    {
      title: 'Full-Stack Web Development',
      duration: '20 Weeks',
      students: '350+ Students',
      level: 'Beginner to Advanced',
      price: '$2,299',
      color: 'cyan' as const,
      topics: ['React', 'Node.js', 'Databases', 'Cloud Services'],
      startDate: 'Feb 22, 2026'
    }
  ];

  return (
    <section id="courses" className="relative z-10 py-20 sm:py-32 px-4 sm:px-6">
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
            Featured Courses
          </h2>
          <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-950 dark:text-white">
            Start Your <span className="text-glow-cyan">Journey</span>
          </h3>
          <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive programs with everything you need to succeed
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <GlassCard key={index} glowColor={course.color} delay={index * 0.15}>
              <div className="flex flex-col h-full">
                
                {/* Header */}
                <div className="mb-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                    course.color === 'cyan'
                      ? 'bg-cyan/20 text-cyan'
                      : 'bg-purple/20 text-purple'
                  }`}>
                    {course.level}
                  </div>
                  
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-4">
                    {course.title}
                  </h4>

                  {/* Course Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Starts {course.startDate}</span>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6 flex-grow">
                  <h5 className="text-sm font-bold text-gray-700 dark:text-gray-400 mb-3 uppercase tracking-wider">
                    What You'll Learn:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 dark:bg-white/5 text-gray-700 dark:text-gray-400 border border-gray-200 dark:border-white/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-display font-bold text-2xl ${
                      course.color === 'cyan' ? 'text-cyan' : 'text-purple'
                    }`}>
                      {course.price}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-500">
                      One-time payment
                    </span>
                  </div>
                  
                  <button className={`group w-full px-6 py-3 border ${
                    course.color === 'cyan'
                      ? 'border-cyan/30 hover:border-cyan/100'
                      : 'border-purple/30 hover:border-purple/100'
                  } rounded-none bg-transparent overflow-hidden relative transition-colors duration-300`}>
                    <div className={`absolute inset-0 w-0 ${
                      course.color === 'cyan' ? 'bg-cyan/10' : 'bg-purple/10'
                    } transition-all duration-[250ms] ease-out group-hover:w-full opacity-50`} />
                    <span className={`relative font-display uppercase tracking-widest text-xs flex items-center justify-center gap-2 ${
                      course.color === 'cyan' ? 'text-cyan' : 'text-purple'
                    }`}>
                      Enroll Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
