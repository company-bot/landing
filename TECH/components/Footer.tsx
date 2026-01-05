import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, CheckCircle2, Globe, Send, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <footer id="contact" className="relative z-10 border-t border-gray-200 dark:border-white/10 mt-20 bg-white dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* 1. Lead Capture Form */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="text-cyan-600 dark:text-cyan">Get Started</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Ready to build something exceptional? Reach out and let's discuss your infrastructure needs.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20 transition-all"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                required
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20 transition-all resize-none"
              />
              <button
                type="submit"
                disabled={submitStatus === 'success'}
                className="w-full px-6 py-3 rounded-lg bg-gray-900 dark:bg-gradient-to-r dark:from-cyan dark:to-purple text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                {submitStatus === 'success' ? (
                  <><CheckCircle2 className="w-5 h-5" /> Sent</>
                ) : (
                  <><Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Send Message</>
                )}
              </button>
            </form>
          </div>

          {/* 2. Trust Signals */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-6">Availability</h3>
            
            <div className="mb-8 p-4 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-green-600 dark:text-green-400 font-semibold text-sm">Systems Operational</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs ml-6">Available for new projects</p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-gradient-to-br dark:from-cyan/10 dark:to-purple/10 border border-gray-200 dark:border-white/10 shadow-sm">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan mt-0.5" />
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold text-sm mb-2">Global Support</h4>
                  <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                    <p>🇪🇺 EU: 9 AM - 6 PM CET</p>
                    <p>🇺🇸 US: 9 AM - 6 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Professional Proof & Direct Chat */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-6">Connect</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              
              {/* LinkedIn - Brand Blue Hover */}
              <a 
                href="https://www.linkedin.com/company/syzentric/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-[#0077b5] dark:hover:bg-[#0077b5] group transition-all duration-300 shadow-sm"
              >
                <div className="p-2 rounded bg-gray-100 dark:bg-white/10 group-hover:bg-white/20">
                  <Linkedin className="w-5 h-5 text-[#0077b5] dark:text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-gray-900 dark:text-white font-semibold block text-sm group-hover:text-white">LinkedIn</span>
                </div>
              </a>

              {/* WhatsApp - Brand Green Hover */}
              <a 
                href="https://wa.me/yourphonenumber" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-[#25D366] dark:hover:bg-[#25D366] group transition-all duration-300 shadow-sm"
              >
                <div className="p-2 rounded bg-gray-100 dark:bg-white/10 group-hover:bg-white/20">
                  <MessageCircle className="w-5 h-5 text-[#25D366] dark:text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-gray-900 dark:text-white font-semibold block text-sm group-hover:text-white">WhatsApp</span>
                </div>
              </a>

              {/* Twitter / X - Brand Black Hover */}
              <a 
                href="https://x.com/syzentric" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-black dark:hover:bg-white group transition-all duration-300 shadow-sm"
              >
                <div className="p-2 rounded bg-gray-100 dark:bg-white/10 group-hover:bg-white/20">
                  <Twitter className="w-5 h-5 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-gray-900 dark:text-white font-semibold block text-sm group-hover:text-white dark:group-hover:text-black">Twitter / X</span>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:syzentric@gmail.com" className="flex items-center gap-4 p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-cyan-500 group transition-all shadow-sm">
                <div className="p-2 rounded bg-gray-100 dark:bg-white/10 group-hover:bg-cyan-500/10">
                  <Mail className="w-5 h-5 text-gray-600 dark:text-cyan group-hover:text-cyan-600 transition-colors" />
                </div>
                <div>
                   <span className="text-gray-700 dark:text-white font-semibold block text-sm">Email</span>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© {currentYear} SyZentric Technology.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-cyan-600 dark:hover:text-cyan transition-colors">Privacy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-cyan-600 dark:hover:text-cyan transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;