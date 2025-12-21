import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer id="contact" className="relative z-10 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-10 px-3 sm:px-4 border-t border-gray-300 dark:border-white/5 bg-gray-100 dark:bg-obsidian/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Logo className="w-10 sm:w-14 h-10 sm:h-14" />
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-widest text-gray-950 dark:text-white mt-1">SYZENTRIC</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-400 max-w-md font-sans leading-relaxed">
              Engineering the central core of innovation. We provide the structure that allows digital ecosystems to operate, scale, and evolve.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 sm:gap-8 text-xs sm:text-sm font-sans">
            <div>
              <h4 className="text-gray-950 dark:text-white font-bold uppercase tracking-wider mb-3 sm:mb-4">Coordinates</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-500">
                <li className="hover:text-cyan transition-colors cursor-pointer">San Francisco</li>
                <li className="hover:text-cyan transition-colors cursor-pointer">London</li>
                <li className="hover:text-cyan transition-colors cursor-pointer">Singapore</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-950 dark:text-white font-bold uppercase tracking-wider mb-3 sm:mb-4">Protocols</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-500">
                <li className="hover:text-purple transition-colors cursor-pointer text-xs sm:text-sm">Privacy Policy</li>
                <li className="hover:text-purple transition-colors cursor-pointer text-xs sm:text-sm">Terms of Service</li>
                <li className="hover:text-purple transition-colors cursor-pointer text-xs sm:text-sm">System Status: <span className="text-green-500">Operational</span></li>
                <li className="hover:text-cyan transition-colors cursor-pointer text-xs sm:text-sm">
                  <a href="mailto:syzentric@gmail.com" className="flex items-center gap-2">
                    <span>Contact us</span>
                    <span className="text-gray-500 dark:text-gray-400 truncate">syzentric@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-gray-300 dark:border-white/5 gap-4 text-center sm:text-left">
          <p className="text-gray-600 dark:text-gray-600 text-xs font-sans uppercase tracking-widest">
            © {new Date().getFullYear()} Syzentric Systems. All rights reserved.
          </p>
          <p className="text-cyan/60 text-xs sm:text-sm font-display uppercase tracking-[0.2em]">
            Architecture for a universal future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
