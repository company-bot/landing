import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import ContactForm from './components/ContactForm.tsx';
import Scene3D from './components/Scene3D.tsx';
import { useStore } from './store/useStore.ts';

const ContactPage = () => {
    const { isDarkMode } = useStore();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        // Scroll to top on load
        window.scrollTo(0, 0);
    }, [isDarkMode]);

    return (
        <div className="min-h-screen bg-white dark:bg-obsidian text-gray-900 dark:text-gray-200 selection:bg-cyan/30 selection:text-white relative transition-colors duration-300">
            <Navbar />

            <main className="pt-24 min-h-screen relative z-10 flex flex-col justify-center">
                {/* Reuse the existing ContactForm but in a standalone page context */}
                <ContactForm />
            </main>

            <Footer />
            <Scene3D />
        </div>
    );
};

export default ContactPage;
