import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Scene3D from './components/Scene3D.tsx';
import { useStore } from './store/useStore.ts';
import { Week } from './data/courses.ts';

interface CoursePageProps {
    title: string;
    description: string;
    weeks: Week[];
}

const CoursePage: React.FC<CoursePageProps> = ({ title, description, weeks }) => {
    const { isDarkMode } = useStore();

    useEffect(() => {
        // Initialize theme on mount
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <div className="min-h-screen bg-white dark:bg-obsidian text-gray-900 dark:text-gray-200 selection:bg-cyan/30 selection:text-white relative transition-colors duration-300">

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-32 px-4 sm:px-6 mb-20">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="mb-12 text-center sm:text-left">
                            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple mb-6 leading-tight">
                                {title}
                            </h1>
                            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
                                {/* Glow effect */}
                                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan/20 blur-[100px] rounded-full pointers-events-none group-hover:bg-cyan/30 transition-colors duration-500"></div>
                                <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 relative z-10">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* Curriculum */}
                        <div className="space-y-6">
                            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white flex items-center gap-3">
                                <span className="w-2 h-8 bg-cyan rounded-full"></span>
                                Course Curriculum
                            </h2>
                            <div className="grid gap-6">
                                {weeks.map((week, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`glass-panel p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                                            week.isLocked 
                                                ? 'opacity-60 blur-sm' 
                                                : 'hover:border-cyan/30'
                                        }`}
                                    >
                                        {/* Week Header */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-purple flex items-center justify-center">
                                                <span className="font-display font-black text-xl text-white">{week.weekNumber}</span>
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white uppercase tracking-wider">
                                                    {week.title}
                                                </h3>
                                            </div>
                                        </div>
                                        
                                        {/* Topics */}
                                        <div className="space-y-3 ml-16">
                                            {week.topics.map((topic, topicIdx) => (
                                                <div 
                                                    key={topicIdx} 
                                                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                                                >
                                                    <div className="w-2 h-2 rounded-full bg-cyan/50"></div>
                                                    <span className="text-base sm:text-lg font-medium">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-16 text-center">
                            <a
                                href="/#contact"
                                className="inline-block px-10 py-4 bg-cyan hover:bg-cyan/90 text-white font-display uppercase tracking-widest text-sm font-bold transition-all duration-300 shadow-lg shadow-cyan/50 hover:shadow-xl hover:shadow-cyan/70 rounded-lg"
                            >
                                Enroll Now
                            </a>
                        </div>

                    </div>
                </main>
                <Footer />
            </div>

            {/* 3D Background */}
            <Scene3D />
        </div>
    );
};

export default CoursePage;
