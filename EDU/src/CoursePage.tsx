import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Scene3D from './components/Scene3D.tsx';
import { useStore } from './store/useStore.ts';

interface CoursePageProps {
    title: string;
    description: string;
    syllabus: string[];
}

const CoursePage: React.FC<CoursePageProps> = ({ title, description, syllabus }) => {
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

                        {/* Syllabus */}
                        <div className="space-y-6">
                            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white flex items-center gap-3">
                                <span className="w-2 h-8 bg-cyan rounded-full"></span>
                                Course Syllabus
                            </h2>
                            <div className="grid gap-4">
                                {syllabus.map((item, idx) => (
                                    <div key={idx} className="glass-panel p-5 rounded-xl flex items-start gap-4 hover:border-cyan/30 transition-colors duration-300 group">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan/10 text-cyan flex items-center justify-center font-bold font-display group-hover:bg-cyan group-hover:text-white transition-all duration-300">
                                            {idx + 1}
                                        </span>
                                        <span className="text-lg text-gray-800 dark:text-gray-200 pt-0.5 font-medium">{item}</span>
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
