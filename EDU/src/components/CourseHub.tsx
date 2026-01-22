import React, { useState, useEffect } from 'react';
import { Lock, Unlock, LucideIcon, ChevronRight } from 'lucide-react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import Scene3D from './Scene3D.tsx';
import { useStore } from '../store/useStore.ts';

export interface Module {
    title: string;
    topics: string[];
}

export interface LevelData {
    title: string;
    description: string;
    modules: Module[];
}

export interface HubData {
    title: string;
    subTitle: string;
    headerIcon: LucideIcon;
    emptyIcon: LucideIcon;
    color: 'cyan' | 'purple' | 'teal' | 'red' | 'blue';
    levels: {
        basic: LevelData;
        advanced: LevelData;
    };
}

interface CourseHubProps {
    data: HubData;
}

const CourseHub: React.FC<CourseHubProps> = ({ data }) => {
    const { isDarkMode } = useStore();
    // Defaulting to 'basic' ensures the curriculum is never empty on load
    const [activeLevel, setActiveLevel] = useState<'basic' | 'advanced'>('basic');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);

        const params = new URLSearchParams(window.location.search);
        const levelParam = params.get('level');
        if (levelParam === 'basic' || levelParam === 'advanced') {
            setActiveLevel(levelParam);
        }
    }, [isDarkMode]);

    const renderContent = () => {
        const levelData = data.levels[activeLevel];
        if (!levelData) return null;

        const modules = levelData.modules;
        const totalModules = modules.length;

        // Logic to show only the first 20% of modules
        const visibleCount = Math.ceil(totalModules * 0.2);
        const visibleModules = modules.slice(0, visibleCount);
        const lockedCount = totalModules - visibleCount;

        return (
            <div className="animate-fade-in-up max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-display font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase flex items-center justify-center gap-3">
                        <span className="text-cyan text-5xl">/</span> {levelData.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
                        {levelData.description}
                    </p>
                </div>

                {/* Module Cards */}
                <div className="space-y-8 mb-16">
                    {visibleModules.map((module, index) => (
                        <div
                            key={index}
                            className="glass-panel border border-white/10 dark:bg-white/5 rounded-3xl p-8 flex gap-8 items-start transition-all duration-500 hover:border-cyan/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] group relative overflow-hidden"
                        >
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-gray-500 font-display font-black rounded-2xl text-xl group-hover:bg-cyan group-hover:text-white transition-all duration-500 shadow-xl">
                                {index + 1}
                            </div>
                            <div className="flex-grow">
                                <h4 className="font-display font-bold text-gray-900 dark:text-white text-2xl mb-4 uppercase tracking-wide">
                                    {module.title}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {module.topics.map((t, i) => (
                                        <span key={i} className="px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-transparent group-hover:border-cyan/20 transition-all">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* THE UNLOCK SECTION - Improved Visibility */}
{/* COMPACT UNLOCK SECTION */}
{lockedCount > 0 && (
    <div className="relative mt-12 max-w-2xl mx-auto group">
        {/* Animated Background Aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-white/80 dark:bg-obsidian/90 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl">
            
            {/* Artistic Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Minimalist Lock Badge */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-purple-500 blur-lg opacity-40 animate-pulse"></div>
                    <div className="relative w-16 h-16 bg-obsidian dark:bg-white rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <Lock className="w-6 h-6 text-white dark:text-purple-600" />
                    </div>
                </div>

                <div className="space-y-2 mb-8 text-center">
                    <span className="text-[10px] font-black tracking-[0.3em] text-purple-500 uppercase">Premium Content</span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white tracking-tight">
                        Unlock The <span className="italic font-serif">Full</span> Curriculum
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-sm text-base leading-relaxed">
                    Ready to go pro? You have <span className="text-gray-900 dark:text-white font-bold px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded">{lockedCount} premium modules</span> left to master.
                </p>
                
                {/* The Modernized Button */}
                <a
                    href="/contact.html"
                    className="group/btn relative inline-flex items-center justify-center px-12 py-4 font-bold text-white transition-all duration-200 bg-gray-900 font-display dark:bg-white dark:text-black rounded-xl hover:bg-purple-600 dark:hover:bg-purple-500 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                    <span className="relative flex items-center gap-2 uppercase tracking-widest text-xs">
                        Access Now
                        <Unlock className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                </a>
            </div>
        </div>
    </div>
)}
            </div>
        );
    };

    const Icon = data.headerIcon;

    return (
        <div className="min-h-screen bg-white dark:bg-obsidian text-gray-900 dark:text-gray-200 relative transition-colors duration-300">
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                    {/* Main Header */}
                    <div className="text-center mb-16 animate-fade-in">
                        <div className="inline-block p-4 rounded-3xl glass-panel border border-purple/20 mb-8 shadow-2xl">
                            <Icon className="w-12 h-12 text-purple drop-shadow-[0_0_15px_rgba(128,0,128,0.3)]" />
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-7xl text-gray-900 dark:text-white mb-6 uppercase tracking-tighter leading-[0.9]">
                            {data.title}
                        </h1>
                    </div>

                    {/* LEVEL NAVIGATION - Rounded pills style from your image */}
                    <div className="flex justify-center mb-24">
                        <div className="inline-flex p-2 bg-purple-100/80 dark:bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-purple-200 dark:border-purple/10 shadow-xl">
                            {['basic', 'advanced'].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setActiveLevel(level as 'basic' | 'advanced')}
                                    className={`relative px-14 py-4 rounded-[1.8rem] font-display font-black text-[15px] uppercase tracking-[0.2em] transition-all duration-700 ${
                                        activeLevel === level
                                            ? 'text-purple-600 dark:text-purple'
                                            : 'text-purple-400 hover:text-purple-600 dark:hover:text-purple-300'
                                    }`}
                                >
                                    {activeLevel === level && (
                                        <div className="absolute inset-0 bg-white dark:bg-purple rounded-[1.8rem] shadow-xl animate-in zoom-in-95 duration-500"></div>
                                    )}
                                    <span className="relative z-10">{level}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="min-h-[600px]">
                        {renderContent()}
                    </div>
                </main>

                <Footer />
            </div>
            <Scene3D />
        </div>
    );
};

export default CourseHub;