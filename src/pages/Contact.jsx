import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-premium"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you. Let's create something extraordinary together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card-modern p-10 space-y-8 border-white/[0.05]">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-slate-400 mb-8">Reach out to us through any of these channels. Our team typically responds within 24 hours.</p>
              
              <div className="space-y-6">
                {[
                  { icon: <Mail className="text-accent-teal" />, label: 'Email Us', value: 'hello@raagneet.com' },
                  { icon: <Phone className="text-accent-cyan" />, label: 'Call Us', value: '+1 (555) 123-4567' },
                  { icon: <MapPin className="text-accent-purple" />, label: 'Visit Us', value: '123 Future Tech Lane, Digital City, DC 10101' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl glass-container flex items-center justify-center group-hover:bg-white/5 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimal Map Placeholder */}
              <div className="mt-12 h-48 rounded-[1.5rem] glass-container border-white/[0.05] relative overflow-hidden bg-slate-900/50">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-teal via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-accent-teal mx-auto mb-2 animate-bounce" />
                    <span className="text-xs text-slate-400 font-medium">Interactive Map Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <form className="glass-card-modern p-10 lg:p-16 space-y-8 border-white/[0.05]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                    <User size={14} className="group-focus-within:text-accent-teal transition-colors" />
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-teal/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(13,148,136,0.1)] transition-all"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                    <AtSign size={14} className="group-focus-within:text-accent-cyan transition-colors" />
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-cyan/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                  <MessageSquare size={14} className="group-focus-within:text-accent-purple transition-colors" />
                  Subject
                </label>
                <select className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-purple/50 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer">
                  <option className="bg-slate-900">General Inquiry</option>
                  <option className="bg-slate-900">Project Proposal</option>
                  <option className="bg-slate-900">Service Support</option>
                  <option className="bg-slate-900">Partnership</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                  <Send size={14} className="group-focus-within:text-accent-teal transition-colors" />
                  Your Message
                </label>
                <textarea 
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-teal/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(13,148,136,0.1)] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary-glass w-full py-5 flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
