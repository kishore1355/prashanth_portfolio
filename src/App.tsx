import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { CertificationsActivities } from './components/CertificationsActivities';
import { Strengths } from './components/Strengths';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ThemeMode } from './types';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    // Default to dark mode for the Magic Portfolio look, or user saved choice
    const saved = localStorage.getItem('theme_mode');
    return (saved as ThemeMode) || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme_mode', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar onOpenResume={handleOpenResume} theme={theme} setTheme={setTheme} />

      {/* Main Portfolio Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={handleOpenResume} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Featured Projects Section */}
        <Projects />

        {/* 4. Technical Skills Section */}
        <Skills />

        {/* 5. Internship / Experience Section */}
        <Experience />

        {/* 6. Education Section */}
        <Education />

        {/* 7. Certifications & Activities Section */}
        <CertificationsActivities />

        {/* 8. Core Strengths & Why Hire Me Section */}
        <Strengths />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Downloadable / Printable Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
}

