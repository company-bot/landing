import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Logo from './Logo';
import { useStore } from '../store/useStore';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-obsidian/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 h-20'
          : 'bg-transparent h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
        
        <div className="relative h-full w-40 overflow-visible flex items-center group cursor-pointer">
          <Logo
            className="absolute h-30 sm:h-34 md:h-40 w-auto md:max-w-[260px]
                       group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-purple" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
