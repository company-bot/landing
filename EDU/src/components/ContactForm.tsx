import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, Phone, MapPin, GraduationCap, Building2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    institute: '',
    education: '',
    purpose: 'information',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using Web3Forms - Replace ACCESS_KEY with your actual key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c4ec3767-c977-417f-bf42-5061dae59962', // Replace with your Web3Forms access key
          subject: `New Student Inquiry from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          institute: formData.institute,
          education: formData.education,
          purpose: formData.purpose,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          institute: '',
          education: '',
          purpose: 'information',
          message: ''
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-purple/5 to-transparent dark:via-purple/2">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-display font-bold text-cyan text-sm sm:text-base uppercase tracking-[0.2em] mb-4">
            Get In Touch
          </h2>
          <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-950 dark:text-white mb-6">
            <span className="text-glow-cyan">Start Your Journey</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-8 sm:p-12 rounded-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <User className="w-4 h-4 text-cyan" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="w-4 h-4 text-cyan" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Phone and City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <Phone className="w-4 h-4 text-cyan" />
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="+92 300 1234567"
                />
              </div>
              
              <div>
                <label htmlFor="city" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <MapPin className="w-4 h-4 text-cyan" />
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="Enter your city"
                />
              </div>
            </div>

            {/* Institute and Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="institute" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <Building2 className="w-4 h-4 text-cyan" />
                  Institute/University *
                </label>
                <input
                  type="text"
                  id="institute"
                  name="institute"
                  required
                  value={formData.institute}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="Your institute name"
                />
              </div>
              
              <div>
                <label htmlFor="education" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <GraduationCap className="w-4 h-4 text-cyan" />
                  Current Education Level *
                </label>
                <select
                  id="education"
                  name="education"
                  required
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-gray-900 dark:text-white"
                >
                  <option value="">Select your level</option>
                  <option value="matric">Matric</option>
                  <option value="fsc">FSc / A-Levels</option>
                  <option value="bachelors">Bachelors (BS/BSc)</option>
                  <option value="masters">Masters (MS/MSc)</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Purpose */}
            <div>
              <label htmlFor="purpose" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                I want to *
              </label>
              <select
                id="purpose"
                name="purpose"
                required
                value={formData.purpose}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-gray-900 dark:text-white"
              >
                <option value="information">Get Information</option>
                <option value="apply">Apply for a Program</option>
                <option value="consultation">Schedule Consultation</option>
                <option value="project">Final Year Project Help</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-gray-900 dark:text-white resize-none"
                placeholder="Tell us more about your requirements..."
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400">
                ✓ Thank you! Your message has been sent successfully. We'll contact you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400">
                ✗ Something went wrong. Please try again or email us directly at syzentric@gmail.com
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full group relative px-8 py-4 bg-transparent overflow-hidden rounded-lg border border-cyan/30 hover:border-cyan/100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 w-0 bg-cyan/10 transition-all duration-[250ms] ease-out group-hover:w-full opacity-50" />
              <span className="relative font-display uppercase tracking-widest text-sm flex items-center justify-center gap-2 text-cyan">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                {status !== 'sending' && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
