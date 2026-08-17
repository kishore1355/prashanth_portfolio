import React from 'react';
import { ABOUT_DATA } from '../data/portfolioData';
import { Target, BookOpen, Compass, Lightbulb, Sparkles } from 'lucide-react';
import { MagicCard } from './MagicCard';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-[#030712] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Passionate BCA student building practical software solutions with Python & Artificial Intelligence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            {ABOUT_DATA.paragraphs.map((p, idx) => (
              <MagicCard key={idx} glowColor="rgba(59, 130, 246, 0.15)">
                <div className="p-6">
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {p}
                  </p>
                </div>
              </MagicCard>
            ))}
          </div>

          {/* Right Column: Highlights & Career Objective */}
          <div className="lg:col-span-5 space-y-6">
            {/* College Badge Card */}
            <MagicCard glowColor="rgba(139, 92, 246, 0.2)">
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Cambridge College, Bengaluru</h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Bachelor of Computer Applications (2024 – 2027)</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal pt-1">
                  Actively combining computer science theory with hands-on AI/ML applications, club leadership, and software internship projects.
                </p>
              </div>
            </MagicCard>

            {/* Career Objective Banner */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-950 text-white space-y-4 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold tracking-wider uppercase">
                <Target className="w-4 h-4 text-blue-400" />
                <span>CAREER OBJECTIVE</span>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal italic">
                "{ABOUT_DATA.careerObjective}"
              </p>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  Primary Focus: Python, AI & SDE
                </span>
                <span className="text-blue-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

