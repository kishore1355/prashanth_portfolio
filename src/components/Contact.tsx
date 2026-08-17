import React, { useState } from 'react';
import { CONTACT_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare, Quote } from 'lucide-react';
import { MagicCard } from './MagicCard';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Engineering Inquiry / Hello Prashanth',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Trigger mailto link for direct user engagement
    const mailtoUrl = `mailto:${CONTACT_DATA.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Software Engineering Inquiry / Hello Prashanth', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800 transition-colors">
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
            Contact Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Let's discuss software engineering roles, AI/ML projects, or potential collaborations.
          </p>
        </motion.div>

        {/* Motto Banner */}
        <MagicCard glowColor="rgba(59, 130, 246, 0.2)" className="max-w-3xl mx-auto mb-12">
          <div className="p-6 text-center relative">
            <Quote className="w-8 h-8 text-blue-600/20 dark:text-blue-400/20 absolute top-4 left-4" />
            <p className="text-sm sm:text-base text-slate-900 dark:text-white font-medium italic leading-relaxed px-6">
              "{CONTACT_DATA.motto}"
            </p>
            <span className="inline-block mt-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              — PRASHANTH SINGH B M
            </span>
          </div>
        </MagicCard>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Direct Channels
            </h3>

            {/* Email Card */}
            <MagicCard glowColor="rgba(59, 130, 246, 0.2)">
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Email Address</span>
                    <a
                      href={`mailto:${CONTACT_DATA.email}`}
                      className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      {CONTACT_DATA.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(CONTACT_DATA.email, 'email')}
                  className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all border border-transparent"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </MagicCard>

            {/* Phone Card */}
            <MagicCard glowColor="rgba(59, 130, 246, 0.2)">
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${CONTACT_DATA.phone}`}
                      className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {CONTACT_DATA.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(CONTACT_DATA.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all border border-transparent"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </MagicCard>

            {/* Location Card */}
            <MagicCard glowColor="rgba(59, 130, 246, 0.2)">
              <div className="p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Location</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    {CONTACT_DATA.location}
                  </span>
                </div>
              </div>
            </MagicCard>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <span className="font-semibold text-slate-900 dark:text-white block">📌 Response Time:</span>
              <span>Typically responds within 24 hours for career opportunities and code collaborations.</span>
            </div>
          </div>

          {/* Right Column: Contact Form inside MagicCard */}
          <MagicCard glowColor="rgba(59, 130, 246, 0.25)" className="lg:col-span-7">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in your details below to open a pre-filled email directly to Prashanth.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-base">Opening Email Client...</h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400">
                    Thank you for reaching out! Your default email client will launch with your message pre-filled.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 dark:text-white mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-900 dark:text-white mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g., alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 dark:text-white mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 dark:text-white mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your opportunity, project details, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-blue-700 active:scale-[0.99] transition-all shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Prashanth</span>
                  </button>
                </form>
              )}
            </div>
          </MagicCard>
        </div>
      </div>
    </section>
  );
};

