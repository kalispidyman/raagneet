import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Cpu, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-indigo-300 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm">
            <Sparkles size={14} /> Next-Gen AI Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Building the Future of <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            NEET AI Studio crafts autonomous systems, premium 3D web experiences, and intelligent automation platforms that scale your business into the future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group flex items-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/40">
              Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/products" className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all backdrop-blur-sm">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features / Why Choose Us Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We don't just write code; we engineer competitive advantages.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:border-indigo-500/30 transition-all"
            >
              <Cpu className="text-indigo-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Autonomous AI Agents</h3>
              <p className="text-slate-400 leading-relaxed">Deploy intelligent agents that handle complex workflows, data processing, and customer interactions 24/7.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:border-cyan-500/30 transition-all"
            >
              <Shield className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-slate-400 leading-relaxed">Bank-grade encryption and secure architectures ensure your proprietary data and models remain protected.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="text-yellow-400" size={28} /> The NEET AI Advantage
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="check-icon text-indigo-400 mt-1 flex-shrink-0" /> <span><strong>ROI-Focused:</strong> Every feature we build is tied to a business outcome — more leads, more sales, less cost.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="check-icon text-indigo-400 mt-1 flex-shrink-0" /> <span><strong>AI-First Approach:</strong> We integrate intelligent automation into everything, giving you an edge competitors can't match.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="check-icon text-indigo-400 mt-1 flex-shrink-0" /> <span><strong>Premium Quality:</strong> Glassmorphism UI, 3D experiences, and pixel-perfect design that positions you as a market leader.</span></li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}