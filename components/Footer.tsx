import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 py-8 px-4 border-t border-gray-200 dark:border-white/5 bg-white/50 dark:bg-obsidian/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 font-sans">
          © {new Date().getFullYear()} SyZentric. The Zenith of Intelligence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
