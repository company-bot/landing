import React, { useState, useEffect } from 'react';
import {
    Lock, Unlock, LucideIcon
} from 'lucide-react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import Scene3D from './Scene3D.tsx';
import { useStore } from '../store/useStore.ts';

// --- Types ---
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
    const [activeLevel, setActiveLevel] = useState<'basic' | 'advanced' | null>(null);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);

        const params = new URLSearchParams(window.location.search);
        const levelParam = params.get('level');
        if (levelParam === 'basic' || levelParam === 'advanced') {
            setActiveLevel(levelParam);
        }
    }, [isDarkMode]);

    const renderContent = () => {
        if (!activeLevel) {
            const EmptyIcon = data.emptyIcon;
            return (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400 animate-fade-in-up">
                    <EmptyIcon className="w-20 h-20 mb-6 opacity-30" />
                    <p className="text-xl font-display uppercase tracking-widest">Select a level to view curriculum</p>
                </div>
            );
        }

        const levelData = data.levels[activeLevel];
        const modules = levelData.modules;
        const totalModules = modules.length;

        // 20% visible logic
        const visibleCount = Math.ceil(totalModules * 0.2);
        const visibleModules = modules.slice(0, visibleCount);
        const lockedCount = totalModules - visibleCount;

        return (
            <div className="animate-fade-in-up max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-3 tracking-wide text-glow-cyan">
                        <span className="inline-block w-2 h-8 mr-3 rounded-full align-middle bg-cyan shadow-lg shadow-cyan/50"></span>
                        {levelData.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">{levelData.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                    {visibleModules.map((module, index) => (
                        <div
                            key={index}
                            className="glass-panel border border-cyan/30 dark:border-cyan/20 rounded-xl p-6 flex gap-5 items-start transition-all duration-300 hover:border-cyan/50 dark:hover:border-cyan/40 hover:shadow-lg hover:shadow-cyan/20 group relative overflow-hidden"
                        >
                            {/* Subtle glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan/10 dark:bg-cyan/20 text-cyan font-display font-bold rounded-lg text-lg group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan/30 transition-all relative z-10">
                                {index + 1}
                            </div>
                            <div className="relative z-10">
                                <h4 className="font-display font-bold text-gray-900 dark:text-white text-xl mb-3">{module.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {module.topics.map((t, i) => (
                                        <span key={i} className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wide bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Locked Section */}
                {lockedCount > 0 && (
                    <div className="relative mt-8 p-1 rounded-2xl bg-gradient-to-br from-cyan/20 to-purple/20 dark:from-cyan/10 dark:to-purple/10">
                        <div className="relative rounded-2xl glass-panel border border-cyan/30 dark:border-cyan/20 p-10 text-center overflow-hidden">
                            {/* Glow effects */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan opacity-20 dark:opacity-30 blur-[80px] rounded-full pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple opacity-20 dark:opacity-30 blur-[80px] rounded-full pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-6 bg-gradient-to-br from-cyan to-purple">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Unlock Full Curriculum</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg text-lg">
                                    Get access to the remaining <span className="text-cyan font-bold">{lockedCount} modules</span>, including advanced projects, mentorship, and certification.
                                </p>
                                <a
                                    href="/contact.html"
                                    className="inline-flex items-center gap-3 px-10 py-4 bg-cyan hover:bg-cyan/90 text-white font-display uppercase tracking-widest text-sm font-bold transition-all duration-300 shadow-lg shadow-cyan/50 hover:shadow-xl hover:shadow-cyan/70"
                                >
                                    <Unlock className="w-5 h-5" />
                                    Enroll Now
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
        <div className="min-h-screen bg-white dark:bg-obsidian text-gray-900 dark:text-gray-200 selection:bg-cyan/30 selection:text-white relative transition-colors duration-300">
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-grow pt-32 pb-20 px-4 max-w-7xl mx-auto w-full">

                    {/* Header Section */}
                    <div className="text-center mb-16 animate-fade-in-up">
                        <div className="inline-block p-4 rounded-2xl glass-panel border border-cyan/30 dark:border-cyan/20 mb-6 shadow-2xl shadow-cyan/20">
                            <Icon className="w-12 h-12 text-cyan drop-shadow-[0_0_15px_rgba(123,44,158,0.5)]" />
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-7xl text-gray-900 dark:text-white mb-6 uppercase tracking-tight text-glow-cyan">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            {data.subTitle}
                        </p>
                    </div>

                    {/* Levels Navigation */}
                    <div className="flex justify-center mb-16">
                        <div className="flex p-1 glass-panel rounded-xl border border-cyan/30 dark:border-cyan/20">
                            {['basic', 'advanced'].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setActiveLevel(level as 'basic' | 'advanced')}
                                    className={`px-8 py-3 rounded-lg font-display font-bold text-sm uppercase tracking-widest transition-all duration-300 ${activeLevel === level
                                        ? 'bg-cyan text-white shadow-lg shadow-cyan/50'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-white/5'
                                        }`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="min-h-[400px]">
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
