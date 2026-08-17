import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { MagicCard } from './MagicCard';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Bot, Server, GraduationCap, LineChart, ExternalLink, Github, Sparkles, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'AI/ML', 'Python Backend', 'Full Stack'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-6 h-6 text-blue-500" />;
      case 'Server': return <Server className="w-6 h-6 text-cyan-500" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-emerald-500" />;
      case 'LineChart': return <LineChart className="w-6 h-6 text-purple-500" />;
      default: return <Code2 className="w-6 h-6 text-blue-500" />;
    }
  };

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#080E1A] transition-colors relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
            Software & AI Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] dark:text-slate-400">
            Real-world applications built during my internship at IMTDA Infotech, college projects, and AI certifications.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <MagicCard
              key={project.id}
              glowColor="rgba(59, 130, 246, 0.25)"
              className="group cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                <div>
                  {/* Top Thumbnail Banner with Dynamic Gradient */}
                  <div className={`w-full h-44 rounded-xl bg-gradient-to-br ${project.imageBgGradient} border border-slate-200/60 dark:border-slate-800 p-6 flex flex-col justify-between mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}>
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-900/90 shadow-sm flex items-center justify-center">
                        {getIcon(project.iconName)}
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 text-[11px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider backdrop-blur-sm border border-slate-200/50 dark:border-slate-700">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-end justify-between pt-4">
                      <div>
                        <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold block">// CLICK TO EXPLORE</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white drop-shadow-xs">
                          {project.title}
                        </h3>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Badges Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto"
            >
              {/* Modal Header */}
              <div className={`p-6 bg-gradient-to-r ${activeProject.imageBgGradient} border-b border-slate-200 dark:border-slate-800 flex items-start justify-between`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md">
                    {getIcon(activeProject.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                      {activeProject.category} PROJECT
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg bg-white/80 dark:bg-slate-800/80 hover:bg-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Details */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Overview</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeProject.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Key Technical Highlights</h4>
                  <div className="space-y-2">
                    {activeProject.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo Link</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
