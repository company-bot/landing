import React, { useState, useEffect } from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';
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
    // Allow any set of level keys (basic/advanced or age groups)
    levels: Record<string, LevelData>;
}

interface CourseHubProps {
    data: HubData;
}

const CourseHub: React.FC<CourseHubProps> = ({ data }) => {
    const { isDarkMode } = useStore();
    const levelKeys = Object.keys(data.levels);

    // Choose a stable default level: URL param > basic > first available
    const getInitialLevel = () => {
        const params = new URLSearchParams(window.location.search);
        const levelParam = params.get('level');
        if (levelParam && data.levels[levelParam]) return levelParam;
        if (data.levels.basic) return 'basic';
        return levelKeys[0];
    };

    const [activeLevel, setActiveLevel] = useState<string>(getInitialLevel());

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);

        const params = new URLSearchParams(window.location.search);
        const levelParam = params.get('level');
        if (levelParam && data.levels[levelParam]) {
            setActiveLevel(levelParam);
        }
    }, [isDarkMode, data.levels]);

    const renderContent = () => {
        const levelData = data.levels[activeLevel];
        if (!levelData) return null;

        const modules = levelData.modules;

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

                {/* Module Cards - Show ALL with blur for locked ones */}
                <div className="space-y-8 mb-16">
                    {modules.map((module, index) => {
                        const isLocked = index >= 2; // Lock everything after week 2 (index 0 and 1 are unlocked)
                        
                        return (
                            <div
                                key={index}
                                className={`glass-panel border border-white/10 dark:bg-white/5 rounded-3xl p-8 flex gap-8 items-start transition-all duration-500 group relative overflow-hidden ${
                                    isLocked 
                                        ? 'opacity-60 blur-sm' 
                                        : 'hover:border-cyan/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]'
                                }`}
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
                        );
                    })}
                </div>
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
                        <div className="inline-flex p-2 bg-purple-100/80 dark:bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-purple-200 dark:border-purple/10 shadow-xl flex-wrap gap-2 justify-center">
                            {levelKeys.map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setActiveLevel(level)}
                                    className={`relative px-10 md:px-14 py-4 rounded-[1.8rem] font-display font-black text-[15px] uppercase tracking-[0.15em] transition-all duration-700 ${
                                        activeLevel === level
                                            ? 'text-purple-600 dark:text-purple'
                                            : 'text-purple-400 hover:text-purple-600 dark:hover:text-purple-300'
                                    }`}
                                >
                                    {activeLevel === level && (
                                        <div className="absolute inset-0 bg-white dark:bg-purple rounded-[1.8rem] shadow-xl animate-in zoom-in-95 duration-500"></div>
                                    )}
                                    <span className="relative z-10">{level.replace(/-/g, ' ')}</span>
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