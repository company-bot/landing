import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer id="contact" className="relative z-10 pt-20 pb-10 px-4 border-t border-gray-300 dark:border-white/5 bg-gray-100 dark:bg-obsidian/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-14 h-14" />
              <h3 className="font-display text-2xl font-bold tracking-widest text-gray-950 dark:text-white mt-1">SYZENTRIC</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-400 max-w-md font-sans leading-relaxed">
              Engineering the central core of innovation. We provide the structure that allows digital ecosystems to operate, scale, and evolve.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 text-sm font-sans">
            <div>
              <h4 className="text-gray-950 dark:text-white font-bold uppercase tracking-wider mb-4">Coordinates</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-500">
                <li className="hover:text-cyan transition-colors cursor-pointer">San Francisco</li>
                <li className="hover:text-cyan transition-colors cursor-pointer">London</li>
                <li className="hover:text-cyan transition-colors cursor-pointer">Singapore</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-950 dark:text-white font-bold uppercase tracking-wider mb-4">Protocols</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-500">
                <li className="hover:text-purple transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-purple transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-purple transition-colors cursor-pointer">System Status: <span className="text-green-500">Operational</span></li>
                <li className="hover:text-cyan transition-colors cursor-pointer">
                  <a href="mailto:syzentric@gmail.com" className="flex items-center gap-2">
                    <span>Contact us</span>
                    <span className="text-gray-500 dark:text-gray-400">syzentric@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 dark:border-white/5">
          <p className="text-gray-600 dark:text-gray-600 text-xs font-sans uppercase tracking-widest">
            © {new Date().getFullYear()} Syzentric Systems. All rights reserved.
          </p>
          <p className="text-cyan/60 text-sm font-display uppercase tracking-[0.2em] mt-4 md:mt-0">
            Architecture for a universal future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;