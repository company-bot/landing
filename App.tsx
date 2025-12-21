import React, { Suspense, useEffect } from 'react';
import Scene3D from './components/Scene3D';
import Hero from './components/Hero';
import ChatbotWidget from './components/ChatbotWidget';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useStore } from './store/useStore';

function App() {
  const { isDarkMode } = useStore();

  useEffect(() => {
    // Initialize theme on mount - default to light mode
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-obsidian text-gray-900 dark:text-gray-200 selection:bg-cyan/30 selection:text-white relative transition-colors duration-300">
      <Suspense fallback={<div className="fixed inset-0 bg-white dark:bg-obsidian z-0" />}>
        <Scene3D />
      </Suspense>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
        </main>
        <Footer />
      </div>
      
      {/* Floating Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}

export default App;
