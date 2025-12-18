import React from 'react';
import { Brain, Database, Code2, Globe, Cpu, Sigma } from 'lucide-react';
import GlassCard from './UI/GlassCard';
import { CapabilityItem } from '../types';

const capabilities: CapabilityItem[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence & ML',
    description: 'Neural networks designed to learn, adapt, and predict.',
    keywords: ['Deep Learning', 'CNNs', 'NLP', 'Computer Vision'],
    icon: <Brain className="w-8 h-8 text-cyan" />
  },
  {
    id: 'data',
    title: 'Data Science & Analytics',
    description: 'Transforming raw chaos into structured, actionable intelligence.',
    keywords: ['Predictive Analytics', 'BI Dashboards', 'Modeling'],
    icon: <Database className="w-8 h-8 text-purple" />
  },
  {
    id: 'software',
    title: 'Software Engineering',
    description: 'Robust backbones for mission-critical digital infrastructures.',
    keywords: ['Python Backend', 'FastAPI', 'RBAC', 'DB Design'],
    icon: <Code2 className="w-8 h-8 text-cyan" />
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'High-performance interfaces for the modern web.',
    keywords: ['Full-stack', 'API-first', 'Scalability'],
    icon: <Globe className="w-8 h-8 text-purple" />
  },
  {
    id: 'apps',
    title: 'AI-Powered Web Apps',
    description: 'Next-gen applications with embedded intelligence.',
    keywords: ['Smart Admin Panels', 'Real-time Viz'],
    icon: <Cpu className="w-8 h-8 text-cyan" />
  },
  {
    id: 'math',
    title: 'Applied Math & Algorithms',
    description: 'The pure logic driving optimization and probability.',
    keywords: ['Optimization', 'Logic', 'Probability'],
    icon: <Sigma className="w-8 h-8 text-purple" />
  }
];

const Capabilities = () => {
  return (
    <section className="relative z-10 py-16 sm:py-24 md:py-32 px-3 sm:px-4" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
           <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-950 dark:text-white mb-4 sm:mb-6 uppercase tracking-wider">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">Capabilities</span>
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {capabilities.map((item, index) => (
            <GlassCard 
              key={item.id} 
              glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
              delay={index * 0.1}
              className="h-full flex flex-col"
            >
              <div className="mb-6 p-3 bg-white/5 dark:bg-white/5 rounded-lg w-fit backdrop-blur-sm border border-gray-300 dark:border-white/10">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-gray-950 dark:text-white mb-3 tracking-wide">{item.title}</h3>
              <p className="font-sans text-gray-700 dark:text-gray-400 mb-6 flex-grow leading-relaxed">{item.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.keywords.map((kw) => (
                  <span 
                    key={kw} 
                    className="text-xs font-sans uppercase tracking-wider px-2 py-1 rounded bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-800 dark:text-gray-300"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
