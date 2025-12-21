import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer id="contact" className="relative z-10 py-12 sm:py-16 px-4 border-t border-gray-200 dark:border-white/5 bg-white/50 dark:bg-obsidian/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-12 h-12" />
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                SyZentric
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-400 mb-6">
              The Zenith of Intelligence. Innovating at the intersection of technology and human potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-700 dark:text-gray-400 hover:text-cyan transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 dark:text-gray-400 hover:text-cyan transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 dark:text-gray-400 hover:text-cyan transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="flex gap-4">
              <a 
                href="mailto:syzentric@gmail.com" 
                className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-cyan/10 dark:hover:bg-cyan/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-400 hover:text-cyan" />
              </a>
              <a 
                href="https://x.com/syzentric" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-cyan/10 dark:hover:bg-cyan/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-400 hover:text-cyan" />
              </a>
              <a 
                href="https://www.linkedin.com/company/syzentric/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-cyan/10 dark:hover:bg-cyan/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-400 hover:text-cyan" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-sans">
            © {new Date().getFullYear()} SyZentric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
