import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Zap, CheckCircle, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="text-indigo-400" size={24} />,
    title: 'Email Us',
    value: 'hello@neetai.studio',
    link: 'mailto:hello@neetai.studio',
    desc: 'Drop us a line anytime.'
  },
  {
    icon: <Phone className="text-cyan-400" size={24} />,
    title: 'Call Us',
    value: '+91 98765 43210',
    link: 'tel:+919876543210',
    desc: 'Mon-Fri from 9am to 6pm.'
  },
  {
    icon: <MapPin className="text-purple-400" size={24} />,
    title: 'Visit Us',
    value: 'Indore, India',
    link: '#',
    desc: 'Come say hello at our HQ.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <MessageSquare size={14} className="text-cyan-400" />
            <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
            Let's Build Something <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how AI can transform your business? 
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {contactInfo.map((info, idx) => (
              <a 
                key={idx} 
                href={info.link}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-indigo-300 font-medium mb-1 group-hover:text-cyan-300 transition-colors">{info.value}</p>
                    <p className="text-sm text-slate-500">{info.desc}</p>
                  </div>
                  <ArrowUpRight size={18} className="absolute top-6 right-6 text-slate-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </a>
            ))}

            {/* Quick Response Guarantee Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Zap size={18} className="text-yellow-400" />
                Quick Response Guarantee
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                We typically respond within 2-4 hours during business days. For urgent inquiries, 
                please mention "URGENT" in your subject line.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form 
              onSubmit={handleSubmit}
              className="relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl shadow-2xl shadow-black/20"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
              
              <div className="relative space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Navneet Singh"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / AI Integration"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={20} className="text-green-300" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}