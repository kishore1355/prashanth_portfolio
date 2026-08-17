import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, School, Award, Calendar, MapPin } from 'lucide-react';
import { MagicCard } from './MagicCard';
import { motion } from 'motion/react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#080E1A] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Strong academic background in computer applications and science.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <MagicCard key={idx} glowColor="rgba(59, 130, 246, 0.2)">
              <div className="p-6 sm:p-7 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  {/* Header Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      {idx === 0 ? (
                        <GraduationCap className="w-5 h-5" />
                      ) : (
                        <School className="w-5 h-5" />
                      )}
                    </div>

                    {edu.score ? (
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-xs font-bold">
                        <Award className="w-3.5 h-3.5" />
                        <span>{edu.score}</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50 text-xs font-semibold">
                        <span>{edu.status}</span>
                      </div>
                    )}
                  </div>

                  {/* Degree & College */}
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </p>
                  </div>

                  {edu.details && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                      {edu.details}
                    </p>
                  )}
                </div>

                {/* Period Footer */}
                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    {edu.period}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">{edu.status}</span>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

