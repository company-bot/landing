import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Programs from './components/Programs.tsx';
import Features from './components/Features.tsx';
import Courses from './components/Courses.tsx';
import Footer from './components/Footer.tsx';
import Scene3D from './components/Scene3D.tsx';
import { useStore } from './store/useStore.ts';

function App() {
  const { isDarkMode } = useStore();

  useEffect(() => {
    // Initialize theme on mount
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-obsidian text-gray-900 dark:text-gray-200 selection:bg-cyan/30 selection:text-white relative transition-colors duration-300">
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Programs />
          <Features />
          <Courses />
        </main>
        <Footer />
      </div>
      
      {/* 3D Background */}
      <Scene3D />
    </div>
  );
}

export default App;
