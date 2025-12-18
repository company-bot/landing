import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Logo';
import { useStore } from '../store/useStore';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Vision', href: '#vision' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-obsidian/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          <img src="/logo/logo.png" alt="SyZentric logo - company branding symbol" className="h-12 sm:h-16 md:h-20 w-auto group-hover:scale-105 transition-transform duration-500" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="font-sans text-sm uppercase tracking-widest text-gray-800 dark:text-gray-400 hover:text-cyan dark:hover:text-cyan transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan transition-all group-hover:w-full" />
            </a>
          ))}
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

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
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
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-900 dark:text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-obsidian border-b border-gray-300 dark:border-white/10 p-4 sm:p-6 md:hidden flex flex-col gap-4 shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto">
           {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-xs sm:text-sm uppercase tracking-widest text-gray-800 dark:text-gray-300 py-3 border-b border-gray-300 dark:border-white/5 hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;