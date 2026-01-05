import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Code2, Globe, Cpu, Sigma, ArrowUpRight } from 'lucide-react';

const Vision = () => {
  // Mapping icons to orbits to show clients your full "System Capabilities"
  const orbits = [
    { 
      id: 'outer', 
      size: 'inset-0', 
      duration: '30s', 
      icons: [
        { Icon: Globe, label: 'Web', pos: 'top-0 left-1/2', color: 'text-purple' },
        { Icon: Cpu, label: 'AI Apps', pos: 'bottom-0 left-1/2', color: 'text-cyan' }
      ] 
    },
    { 
      id: 'middle', 
      size: 'inset-16', 
      duration: '20s', 
      reverse: true,
      icons: [
        { Icon: Brain, label: 'AI/ML', pos: 'top-1/2 left-0', color: 'text-cyan' },
        { Icon: Database, label: 'Data', pos: 'top-1/2 right-0', color: 'text-purple' },
        { Icon: Code2, label: 'Software', pos: 'bottom-0 right-1/4', color: 'text-cyan' }
      ] 
    },
    { 
      id: 'inner', 
      size: 'inset-32', 
      duration: '12s', 
      icons: [
        { Icon: Sigma, label: 'Logic', pos: 'top-0 right-0', color: 'text-purple' }
      ] 
    }
  ];

  return (
    <section id="vision" className="relative z-10 py-20 md:py-32 px-4 overflow-hidden">
      {/* Deep Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ORBIT VISUALIZATION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square w-full max-w-[500px] mx-auto">
              
              {/* Central Core: The SyZentric Logo/Favicon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-cyan to-purple rounded-full z-20 shadow-[0_0_60px_rgba(0,255,255,0.4)] flex items-center justify-center overflow-hidden">
                <img src="/logo/favicon.png" alt="SyZentric" className="w-12 h-12 object-contain filter drop-shadow-lg" />
              </div>

              {/* Dynamic Orbits */}
              {orbits.map((orbit) => (
                <div 
                  key={orbit.id}
                  className={`absolute ${orbit.size} border border-gray-500/10 dark:border-white/5 rounded-full ${
                    orbit.reverse ? 'animate-[spin_var(--duration)_linear_infinite_reverse]' : 'animate-[spin_var(--duration)_linear_infinite]'
                  }`}
                  style={{ '--duration': orbit.duration } as React.CSSProperties}
                >
                  {orbit.icons.map((item, idx) => (
                    <div 
                      key={idx}
                      className={`absolute ${item.pos} -translate-x-1/2 -translate-y-1/2 group`}
                    >
                      {/* Floating Icon Badge */}
                      <div className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-md p-2 rounded-lg border border-gray-200 dark:border-white/10 shadow-lg transform transition-transform hover:scale-110">
                        <item.Icon className={`w-5 h-5 ${item.color}`} />
                        {/* Tooltip Label */}
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-gray-950 dark:text-white">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Gravitational Pull Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-cyan/10" strokeWidth="0.5">
                <circle cx="50%" cy="50%" r="48%" fill="none" strokeDasharray="4 4" />
              </svg>
            </div>
          </motion.div>

          {/* CONTENT SECTION */}
          <motion.div 
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="text-left order-1 lg:order-2"
>
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold uppercase tracking-widest mb-6">
    <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
    Expert Tech Partner
  </div>

  <h2 className="font-display text-4xl md:text-5xl font-black mb-8 text-gray-950 dark:text-white leading-tight">
    The <span className="text-purple">Foundation</span> <br /> 
    of Your Success
  </h2>
  
  <div className="glass-panel p-6 sm:p-8 rounded-2xl border-l-4 border-l-purple bg-white/5 backdrop-blur-md mb-8">
    <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4 font-semibold">
      "We build the invisible systems that keep your business running 24/7."
    </p>
    <p className="text-gray-600 dark:text-gray-400">
      Stop worrying about server crashes or slow apps. We engineer high-speed AI models and secure backends designed to grow alongside your company.
    </p>
  </div>

  {/* <div className="flex flex-wrap gap-4">
    <button className="flex items-center gap-2 px-8 py-4 bg-purple text-white font-bold uppercase tracking-tighter text-sm rounded-lg hover:bg-cyan transition-all group">
      Get a Free Tech Audit <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </button>
  </div> */}
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Vision;