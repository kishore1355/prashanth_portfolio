import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText, Download, Building2, GraduationCap, Award, Mail, Phone, MapPin } from 'lucide-react';
import { HERO_DATA, ABOUT_DATA, SKILL_CATEGORIES, EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, ACTIVITIES_DATA, STRENGTHS_LIST, CONTACT_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generatePlainTextResume = () => {
    return `====================================================
PRASHANTH SINGH B M
Aspiring Software Developer | AI & Python Enthusiast
Bengaluru, Karnataka | ${CONTACT_DATA.email} | ${CONTACT_DATA.phone}
====================================================

CAREER OBJECTIVE:
${ABOUT_DATA.careerObjective}

EDUCATION:
- Bachelor of Computer Applications (BCA) | Cambridge College, Bengaluru (2024 - 2027) [Currently Pursuing]
- Senior Secondary (Class XII) | BGS PU College, Malur | Score: 88% (2023)
- Secondary School (Class X) | Ujwala Vidya Mandira, Malur | Score: 92% (2021)

EXPERIENCE:
SDE & AI/ML Intern | IMTDA Infotech Private Limited (July 2026 - Present)
${EXPERIENCE_DATA[0].description}

TECHNICAL SKILLS:
${SKILL_CATEGORIES.map(c => `- ${c.category}: ${c.skills.join(', ')}`).join('\n')}

CERTIFICATIONS & ACTIVITIES:
- Certification: AI in Data Science (NASSCOM Foundation, Bengaluru)
${ACTIVITIES_DATA.map(a => `- ${a.title} (${a.category})`).join('\n')}

CORE STRENGTHS:
${STRENGTHS_LIST.join(', ')}
`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generatePlainTextResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header Controls */}
        <div className="px-6 py-4 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#2563EB]" />
            <span className="font-bold text-sm sm:text-base">Prashanth Singh B M — Official Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-sm"
              title="Print / Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-[#0F172A] font-sans bg-white print:p-0">
          {/* Resume Header */}
          <div className="border-b-2 border-[#0F172A] pb-4 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                {HERO_DATA.name}
              </h1>
              <p className="text-sm font-semibold text-[#2563EB] mt-0.5">
                {HERO_DATA.role}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                BCA Student @ Cambridge College, Bengaluru
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5 font-medium">
                <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{CONTACT_DATA.email}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5 font-medium">
                <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{CONTACT_DATA.phone}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{CONTACT_DATA.location}</span>
              </p>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {ABOUT_DATA.careerObjective}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Professional Experience
            </h2>
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-baseline font-bold text-sm text-[#0F172A]">
                  <span>{exp.role} — <span className="text-[#2563EB]">{exp.company}</span></span>
                  <span className="text-xs font-mono text-slate-500 font-normal">{exp.period}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pt-1">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-2 bg-slate-50 rounded border border-slate-100">
                  <span className="font-bold text-[#0F172A]">{cat.category}: </span>
                  <span className="text-slate-700">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-[#0F172A]">{edu.degree}</span>
                    <span className="text-slate-600 block">{edu.institution} ({edu.location})</span>
                  </div>
                  <div className="text-right font-mono text-slate-500">
                    <span>{edu.period}</span>
                    {edu.score && <span className="block font-bold text-emerald-600">Score: {edu.score}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Activities */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
                Certifications
              </h2>
              {CERTIFICATIONS_DATA.map((c, i) => (
                <div key={i} className="text-xs">
                  <span className="font-bold text-[#0F172A]">{c.title}</span>
                  <span className="text-slate-600 block">{c.issuer}</span>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
                Activities & Leadership
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                {ACTIVITIES_DATA.slice(0, 4).map((a, i) => (
                  <li key={i}><span className="font-semibold">{a.title}</span> ({a.category})</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Strengths */}
          <div>
            <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
              Core Strengths
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {STRENGTHS_LIST.join(' · ')}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 flex-shrink-0">
          <span>Prashanth Singh B M Portfolio & Resume</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
