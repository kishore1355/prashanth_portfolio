import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { MagicCard } from './MagicCard';
import { motion } from 'motion/react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-white dark:bg-[#030712] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Internship & Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Hands-on software development and AI engineering experience in production environments.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((item, idx) => (
            <div
              key={idx}
              className="relative pl-6 sm:pl-8 border-l-2 border-blue-600/40 space-y-6"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 ring-2 ring-blue-600/30" />

              {/* Card Container */}
              <MagicCard glowColor="rgba(59, 130, 246, 0.25)">
                <div className="p-6 sm:p-8 space-y-5">
                  {/* Header Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                          Active Role
                        </span>
                        <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">// AI / ML INTERNSHIP</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                        <Building2 className="w-4 h-4" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium pt-2 sm:pt-0">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                        <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Primary Description */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Achievements Bullet List */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Key Contributions & Engineering Highlights:
                    </h4>
                    <div className="grid gap-2.5">
                      {item.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Chips */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 mr-2">Technologies Used:</span>
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-200/50 dark:border-blue-800/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

