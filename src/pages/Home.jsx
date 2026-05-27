import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Brain, Cpu, Globe, ArrowRight, Sparkles, Shield, Rocket, Code2, Layers, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Models',
    description: 'Custom-trained neural networks optimized for your specific business needs, delivering unmatched accuracy and performance.'
  },
  {
    icon: Cpu,
    title: 'Autonomous Systems',
    description: 'Self-operating AI agents that handle complex, multi-step workflows with minimal human intervention and maximum efficiency.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Cloud-native infrastructure engineered to serve millions of concurrent requests across continents with sub-50ms latency.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption, SOC2 compliance, and zero-trust architectures to protect your most sensitive proprietary data.'
  }
];

const stats = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '50M+', label: 'API Calls/Day' },
  { value: '<45ms', label: 'Avg Latency' },
  { value: '200+', label: 'Enterprise Clients' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md mb-8"
          >
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-sm font-medium text-indigo-200 tracking-wide">Next-Gen AI Platform v2.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            <span className="block text-white">Building the</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Future of Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            NEET AI Studio engineers world-class artificial intelligence systems, autonomous agents, and next-generation platforms that transform how enterprises operate at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.03] transition-all duration-300"
            >
              <Rocket size={18} />
              <span>Start Building</span>
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link 
              to="/technology" 
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-slate-200 font-semibold text-base hover:bg-white/10 hover:border-white/20 hover:scale-[1.03] transition-all duration-300"
            >
              <span>Explore Tech</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-400 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium tracking-wide uppercase">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              Powered by <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Cutting-Edge</span> Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              Our AI infrastructure is engineered for extreme performance, rock-solid reliability, and infinite horizontal scalability.
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-7 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-400"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-indigo-400/40 transition-all duration-300">
                    <feature.icon size={22} className="text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-10 md:p-14 rounded-3xl overflow-hidden text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.04) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.15)'
            }}
          >
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Ready to <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Let's architect a custom AI solution that accelerates your growth, automates your workflows, and gives you an unfair competitive advantage.
              </p>
              <Link 
                to="/contact" 
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.03] transition-all duration-300"
              >
                <Zap size={18} />
                <span>Get in Touch</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}