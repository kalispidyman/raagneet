import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Cpu, Brain, Globe, Shield, Zap, Network } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

const features = [
  { icon: Brain, title: 'Neural Processing', desc: 'Advanced transformer architectures with real-time learning capabilities and adaptive reasoning engines.' },
  { icon: Network, title: 'Autonomous Agents', desc: 'Self-orchestrating AI agents that execute complex workflows across distributed systems.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Military-grade encryption with zero-trust architecture and on-premise deployment options.' },
  { icon: Globe, title: 'Global Scale', desc: 'Deploy across 200+ edge nodes with sub-10ms latency and automatic failover.' },
  { icon: Cpu, title: 'Edge Intelligence', desc: 'Run inference directly on device with optimized quantized models and minimal footprint.' },
  { icon: Zap, title: 'Real-Time Sync', desc: 'Synchronize model states across clusters in milliseconds with conflict resolution.' },
];

const stats = [
  { label: 'Models Deployed', value: '12K+' },
  { label: 'Enterprise Clients', value: '500+' },
  { label: 'Avg. Latency', value: '<8ms' },
  { label: 'Uptime SLA', value: '99.99%' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="page-hero min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-mono mb-8"
          >
            <Sparkles size={14} />
            <span>Now in Public Beta — v4.0</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 tracking-tight">
            <span className="gradient-text">Intelligence</span>
            <br />
            <span style={{ color: '#f1f5f9' }}>Without Limits</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            NEET AI Studio builds autonomous AI systems that think, adapt, and scale — 
            from neural inference engines to self-improving agent networks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/products" className="btn-primary text-base px-8 py-4">
              Explore Services <ArrowRight size={18} />
            </Link>
            <Link to="/technology" className="btn-outline text-base px-8 py-4">
              See Technology
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-slate-500 font-mono mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section-premium">
        <motion.div className="section-header" {...fadeUp}>
          <div className="section-badge">
            <Cpu size={14} />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="gradient-text">Peak Performance</span>
          </h2>
          <p className="section-subtitle">
            Every component is designed from the ground up for maximum throughput, minimal latency, and infinite scalability.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" {...stagger}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 group"
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <f.icon size={22} className="text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-premium text-center">
        <motion.div className="glass-card-heavy max-w-3xl mx-auto p-12 md:p-16" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build <span className="gradient-text">the Future</span>?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Join 500+ enterprises already using NEET AI Studio to power their autonomous systems.
          </p>
          <Link to="/contact" className="btn-primary text-base px-10 py-4">
            Start Your Project <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}