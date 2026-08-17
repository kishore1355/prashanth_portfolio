import React, { useState, useEffect } from 'react';
import { HERO_DATA, STAT_METRICS, CONTACT_DATA } from '../data/portfolioData';
import { FileDown, Send, Terminal, Play, Copy, Check, Sparkles, Code2, ArrowUpRight, Github, Linkedin, MessageCircle, Camera, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'developer'>('developer');
  const [copied, setCopied] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string>('/assets/pic.jpeg');
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [customInputUrl, setCustomInputUrl] = useState('');

  // Typewriter effect state
  const rolesList = [
    "Aspiring Software Developer",
    "AI & Python Enthusiast",
    "BCA Student @ Cambridge College",
    "SDE & AI/ML Intern @ IMTDA"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = rolesList[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (textIndex < currentRole.length) {
          setTextIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (textIndex > 0) {
          setTextIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % rolesList.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [textIndex, isDeleting, roleIndex]);

const codeSnippets = {
    developer: `class Developer:
    def __init__(self):
        self.name = "Prashanth Singh B M"
        self.degree = "BCA @ Cambridge College, Bengaluru"
        self.role = "SDE & AI/ML Intern"
        self.location = "Bengaluru, Karnataka"
        self.primary_stack = ["Python", "AI APIs", "Java", "Django/Flask"]
    
    def get_career_goal(self):
        return "Building practical, AI-driven software solutions."

dev = Developer()
print(dev.get_career_goal())`
  };

  const presetAvatars = [
    { label: 'Current Photo', url: '/assets/pic.jpeg' }
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAvatarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInputUrl.trim()) {
      setAvatarUrl(customInputUrl.trim());
      setShowAvatarModal(false);
      setCustomInputUrl('');
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text, Developer Profile Photo & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Profile Avatar Banner (Naveen Portfolio Structure) */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative group">
                {/* Glowing Gradient Ring */}
                <div className="absolute -inset-2 rounded-full opacity-90 group-hover:opacity-100 transition duration-500 animate-pulse-glow" style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.12), rgba(139,92,246,0.12), rgba(236,72,153,0.12))', filter: 'blur(8px)' }} />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-900 flex-shrink-0">
                  <img
                    src={avatarUrl}
                    alt="Prashanth Singh B M"
                    className="w-full h-full object-cover transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div>
                {/* Monospaced Log Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:text-blue-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold tracking-wider uppercase">
                    Developer
                  </span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Prashanth Singh B M
              </span>
            </h1>

            {/* Typewriter Animated Role Title */}
            <div className="h-8 flex items-center gap-2 text-base sm:text-lg lg:text-xl font-bold text-blue-600 dark:text-blue-400 font-mono">
              <Sparkles className="w-5 h-5 flex-shrink-0" />
              <span>{rolesList[roleIndex].substring(0, textIndex)}</span>
              <span className="w-0.5 h-6 bg-blue-600 dark:bg-blue-400 animate-pulse" />
            </div>

            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {HERO_DATA.intro}
            </p>

            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-slate-900 dark:text-white">SDE & AI/ML Intern @ IMTDA</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <span>📍</span>
                <span className="font-semibold text-slate-900 dark:text-white">Bengaluru, Karnataka</span>
              </div>
            </div>

            {/* Primary Action Buttons & Social Dock */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 btn-primary text-sm font-semibold rounded-xl active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                id="hero-download-resume-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-xs cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Resume PDF</span>
              </button>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 text-sm font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick Social Icons Dock */}
            <div className="pt-2 flex items-center gap-3 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Connect:</span>
              <a
                href={CONTACT_DATA.githubUrl || "https://github.com"}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_DATA.linkedinUrl || "https://linkedin.com"}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-emerald-500 transition-colors"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Metric Stats Banner */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200/80 dark:border-slate-800/80">
              {STAT_METRICS.map((stat, i) => (
                <div key={i} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                  <span className="block text-xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                    {stat.value}
                  </span>
                  <span className="block text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Code IDE Terminal Sandbox */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden transition-all hover:border-slate-700">
              {/* IDE Header */}
              <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400 hidden sm:inline">prashanth_workspace</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy code snippet"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  {activeTab === 'terminal' && (
                    <button
                      onClick={handleRunTerminal}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-600 text-white text-xs font-semibold rounded hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3" />
                      <span>Run</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Code Tabs */}
              <div className="flex items-center bg-slate-950 border-b border-slate-800 px-2 overflow-x-auto text-xs">
                <button
                  onClick={() => setActiveTab('developer')}
                  className={`px-3 py-2 border-b-2 font-mono flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === 'developer'
                      ? 'border-blue-500 text-blue-400 bg-slate-900/80 font-medium'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  Developer.py
                </button>
              </div>

              {/* Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-slate-300 min-h-[270px] overflow-x-auto leading-relaxed">
                <pre className="text-slate-200 whitespace-pre">
                  <code>
                    {codeSnippets[activeTab].split('\n').map((line, idx) => (
                      <div key={idx} className="table-row">
                        <span className="table-cell text-slate-600 select-none pr-4 text-right w-6">
                          {idx + 1}
                        </span>
                        <span className="table-cell">
                          {line.startsWith('#') ? (
                            <span className="text-slate-500 italic">{line}</span>
                          ) : line.includes('class ') || line.includes('def ') || line.includes('import ') ? (
                            <span className="text-purple-400">{line}</span>
                          ) : line.includes('="') || line.includes('=["') ? (
                            <span className="text-emerald-300">{line}</span>
                          ) : (
                            <span>{line}</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* IDE Footer */}
              <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Python 3.12 · UTF-8
                </span>
                <span>Bengaluru · Karnataka</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avatar Change Customization Modal */}
      <AnimatePresence>
        {showAvatarModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Camera className="w-5 h-5 text-blue-600" />
                  Update Profile Picture
                </h3>
                <button
                  onClick={() => setShowAvatarModal(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Choose Preset Developer Styles
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {presetAvatars.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setAvatarUrl(preset.url);
                        setShowAvatarModal(false);
                      }}
                      className="group relative rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 hover:border-blue-600 transition-all cursor-pointer p-1"
                    >
                      <img src={preset.url} alt={preset.label} className="w-full h-16 object-cover rounded-lg" />
                      <span className="block text-[10px] font-medium text-slate-700 dark:text-slate-300 mt-1 truncate">
                        {preset.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleAvatarSubmit} className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Or Paste Direct Custom Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/my-photo.jpg"
                  value={customInputUrl}
                  onChange={(e) => setCustomInputUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Apply Custom Image
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

