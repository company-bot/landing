import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

const Chatbot = () => {
  return (
    <section id="chatbot" className="relative z-10 py-20 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 dark:bg-cyan/5 border border-cyan/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-sm font-semibold text-cyan uppercase tracking-wider">
              AI Assistant
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Ask About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">SyZentric</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Get instant answers about our services, technologies, and solutions
          </p>
        </div>

        <div className="relative">
          {/* Chatbot Container */}
          <div className="relative bg-white/50 dark:bg-obsidian/50 backdrop-blur-xl border-2 border-gray-200 dark:border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-purple/5 to-cyan/5 opacity-50"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px]">
              <div className="mb-8 relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center animate-pulse">
                  <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 text-cyan" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple rounded-full animate-bounce"></div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Coming Soon
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 text-center max-w-md mb-8">
                Our AI-powered chatbot is being trained to provide you with intelligent insights about SyZentric's ecosystem
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 rounded-full bg-cyan/10 dark:bg-cyan/5 border border-cyan/30 text-sm text-cyan font-medium">
                  24/7 Support
                </span>
                <span className="px-4 py-2 rounded-full bg-purple/10 dark:bg-purple/5 border border-purple/30 text-sm text-purple font-medium">
                  Smart Answers
                </span>
                <span className="px-4 py-2 rounded-full bg-cyan/10 dark:bg-cyan/5 border border-cyan/30 text-sm text-cyan font-medium">
                  Instant Response
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-cyan/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
