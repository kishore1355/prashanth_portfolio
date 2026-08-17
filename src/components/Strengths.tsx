import React from 'react';
import { STRENGTHS_LIST, WHY_HIRE_ME } from '../data/portfolioData';
import { Sparkles, CheckCircle2, Zap, Rocket } from 'lucide-react';
import { MagicCard } from './MagicCard';
import { motion } from 'motion/react';

export const Strengths: React.FC = () => {
  return (
    <section id="strengths" className="py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#080E1A] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Strengths & Value
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Soft skills, technical capabilities, and personal attributes that drive engineering productivity.
          </p>
        </motion.div>

        {/* Strengths Chips Cloud in MagicCard */}
        <MagicCard glowColor="rgba(59, 130, 246, 0.2)" className="max-w-4xl mx-auto mb-16">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Core Strengths Matrix</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">10 Key Attributes</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {STRENGTHS_LIST.map((strength) => (
                <div
                  key={strength}
                  className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold border border-blue-200/60 dark:border-blue-800/60 hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-xs flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </MagicCard>

        {/* WHY HIRE ME? Highlighted Section */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* Subtle Accent Glows */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <Rocket className="w-3.5 h-3.5" />
                <span>WHY HIRE PRASHANTH?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Dedicated BCA Student with Internship & AI API Exposure
              </h3>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal italic">
              "{WHY_HIRE_ME.statement}"
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
              {WHY_HIRE_ME.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-extrabold text-white text-base">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

