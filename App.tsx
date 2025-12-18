import React, { Suspense } from 'react';
import Scene3D from './components/Scene3D';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Vision from './components/Vision';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-gray-200 selection:bg-cyan/30 selection:text-white relative">
      <Suspense fallback={<div className="fixed inset-0 bg-obsidian z-0" />}>
        <Scene3D />
      </Suspense>
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Capabilities />
          <Vision />
        </main>
        <Footer />
      </div>
      
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[60] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

export default App;
