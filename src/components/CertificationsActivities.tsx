import React from 'react';
import { CERTIFICATIONS_DATA, ACTIVITIES_DATA } from '../data/portfolioData';
import { Award, Users, BookMarked, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { MagicCard } from './MagicCard';
import { motion } from 'motion/react';

export const CertificationsActivities: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white dark:bg-[#030712] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Activities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Professional certifications, technical workshops, and campus leadership roles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Verified Certification</span>
            </h3>

            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <MagicCard key={idx} glowColor="rgba(59, 130, 246, 0.2)">
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
                    <Award className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                      {cert.badge}
                    </span>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {cert.title}
                    </h4>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      📍 {cert.location}
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Comprehensive training in AI, Machine Learning algorithms, and Data Science workflow.</span>
                  </div>
                </div>
              </MagicCard>
            ))}

            {/* Club Leadership Spotlight */}
            <MagicCard glowColor="rgba(139, 92, 246, 0.2)">
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">Co-Lead — Bugsy Club</h4>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Student Technical Club</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Co-leading technical sessions, hackathons, and debugging contests for peer computer science students at Cambridge College.
                </p>
              </div>
            </MagicCard>
          </div>

          {/* Right Column: Workshops & Campus Activities Grid */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Workshops & Activities</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {ACTIVITIES_DATA.map((act, idx) => (
                <MagicCard key={idx} glowColor="rgba(59, 130, 246, 0.15)">
                  <div className="p-5 space-y-2.5 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                          act.category === 'Workshop'
                            ? 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400'
                            : act.category === 'Leadership'
                            ? 'bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-400'
                            : act.category === 'Volunteer'
                            ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}>
                          {act.category}
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                      </div>

                      <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                        {act.title}
                      </h4>
                    </div>

                    {act.description && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                        {act.description}
                      </p>
                    )}
                  </div>
                </MagicCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

