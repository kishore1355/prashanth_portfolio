import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Layout, Server, Brain, Wrench, CheckCircle2, Search, Cpu, Zap, Code, Palette, Network, Cable, Sparkles, TrendingUp, Github, Terminal, BookOpen, Globe, Database, Package } from 'lucide-react';
import { MagicCard } from './MagicCard';
import { motion } from 'motion/react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-orange-600 dark:text-orange-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Database': return <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-violet-600 dark:text-violet-400" />;
      case 'Package': return <Package className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Server': return <Server className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Brain': return <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Code': return <Code className="w-6 h-6 text-slate-600 dark:text-slate-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-pink-600 dark:text-pink-400" />;
      case 'Network': return <Network className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Cable': return <Cable className="w-6 h-6 text-orange-600 dark:text-orange-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />;
      case 'Github': return <Github className="w-6 h-6 text-gray-800 dark:text-gray-300" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-lime-600 dark:text-lime-400" />;
      default: return <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  const getSkillIcon = (iconName?: string) => {
    if (!iconName) return <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />;
    
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0" />;
      case 'Globe': return <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />;
      case 'Database': return <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400 flex-shrink-0" />;
      case 'Package': return <Package className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />;
      case 'Code': return <Code className="w-4 h-4 text-slate-600 dark:text-slate-400 flex-shrink-0" />;
      case 'Zap': return <Zap className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />;
      case 'Palette': return <Palette className="w-4 h-4 text-pink-600 dark:text-pink-400 flex-shrink-0" />;
      case 'Network': return <Network className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />;
      case 'Cable': return <Cable className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />;
      case 'Brain': return <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />;
      case 'Github': return <Github className="w-4 h-4 text-gray-800 dark:text-gray-300 flex-shrink-0" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-lime-600 dark:text-lime-400 flex-shrink-0" />;
      default: return <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
    const matchesSearch =
      cat.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.skills.some((s) => {
        const skillName = typeof s === 'string' ? s : s.name;
        return skillName.toLowerCase().includes(searchQuery.toLowerCase());
      });
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#080E1A] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A structured breakdown of core programming languages, AI concepts, web tech, and tools.
          </p>
        </motion.div>

        {/* Filters & Search Row */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.category.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter skill (e.g., Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
            />
          </div>
        </div>

        {/* Skill Cards Grid (Magic Cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredCategories.map((cat) => (
            <MagicCard key={cat.id} glowColor="rgba(59, 130, 246, 0.2)">
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  {/* Header Icon + Title */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-800/50 flex items-center justify-center mb-4">
                    {getIcon(cat.iconName)}
                  </div>

                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg mb-2">
                    {cat.category}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Skills List as Clean Tags */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {cat.skills.map((skill) => {
                    const skillName = typeof skill === 'string' ? skill : skill.name;
                    const skillIcon = typeof skill === 'string' ? undefined : skill.iconName;
                    return (
                      <div
                        key={skillName}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-xs font-semibold text-slate-900 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 transition-colors"
                      >
                        {getSkillIcon(skillIcon)}
                        <span>{skillName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-12 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            <span className="font-semibold text-slate-900 dark:text-white">Primary Stack:</span>
            <span>Python, AI APIs, Django/Flask, Java, REST APIs</span>
          </div>
          <div className="text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold">
            // FULL STACK & AI/ML INTERNSHIP READY
          </div>
        </div>
      </div>
    </section>
  );
};

