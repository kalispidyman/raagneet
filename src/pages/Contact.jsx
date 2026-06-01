import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h1>
            Let's Build Something <span className="gradient-text">Amazing Together</span>
          </h1>
          <p>
            Have a project in mind? Want to learn more about our platform? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="section-premium">
        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div className="lg:col-span-2 space-y-6" {...fadeUp}>
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-indigo-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Email</h4>
                <p className="text-sm text-slate-400">hello@neetaistudio.com</p>
                <p className="text-sm text-slate-400">support@neetaistudio.com</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Location</h4>
                <p className="text-sm text-slate-400">San Francisco, CA</p>
                <p className="text-sm text-slate-400">Bangalore, India</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-purple-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Phone</h4>
                <p className="text-sm text-slate-400">+1 (555) 123-4567</p>
                <p className="text-sm text-slate-400">+91 80000 00000</p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="text-sm font-semibold text-white mb-3">Response Time</h4>
              <p className="text-sm text-slate-400">
                We typically respond within 2-4 hours during business hours. Enterprise clients receive priority support within 30 minutes.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3 glass-card-heavy p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent! 🚀</h3>
                <p className="text-slate-400">We'll get back to you within 2-4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2 font-mono uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-300"
                      placeholder="Neetesh Kumar"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2 font-mono uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-300"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 font-mono uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 font-mono uppercase tracking-wider">Message</label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}