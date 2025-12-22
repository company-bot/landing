import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative z-10 border-t border-gray-200 dark:border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
              SyZentric <span className="text-cyan">TECH</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mb-6">
              Engineering the central core of innovation. We provide the structure that allows digital ecosystems to operate, scale, and evolve.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:syzentric@gmail.com" 
                className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-cyan/10 dark:hover:bg-cyan/10 transition-colors"
                aria-label="Email"
                title="info@syzentric.com"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-400 hover:text-cyan" />
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
              <a 
                href="https://x.com/syzentric" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-cyan/10 dark:hover:bg-cyan/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-400 hover:text-cyan" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#capabilities" className="text-gray-700 dark:text-gray-400 hover:text-cyan transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#vision" className="text-gray-700 dark:text-gray-400 hover:text-cyan transition-colors">
                  Vision
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-cyan transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-cyan transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-cyan transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-cyan transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-cyan transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-cyan transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-500">
              © {currentYear} SyZentric Technology. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-500 hover:text-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-500 hover:text-cyan transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-500 hover:text-cyan transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
