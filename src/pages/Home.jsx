import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Brain, Cpu, Shield, Zap, BarChart3, Globe } from 'lucide-react';
import gsap from 'gsap';

const features = [
  {
    icon: <Brain size={28} />,
    title: 'Neural AI Agents',
    desc: 'Autonomous agents that learn, adapt, and execute complex tasks across any platform with zero human intervention.',
    accent: '#6366f1'
  },
  {
    icon: <Cpu size={28} />,
    title: 'Cognitive Architecture',
    desc: 'Distributed neural infrastructure that processes billion-parameter models with sub-millisecond latency.',
    accent: '#22d3ee'
  },
  {
    icon: <Shield size={28} />,
    title: 'Self-Evolving Security',
    desc: 'Quantum-resistant encryption and adaptive threat detection that evolves faster than emerging vulnerabilities.',
    accent: '#a855f7'
  },
  {
    icon: <Zap size={28} />,
    title: 'Hyper-Optimization',
    desc: 'Real-time performance tuning across your entire AI stack using reinforcement learning feedback loops.',
    accent: '#d946ef'
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Predictive Intelligence',
    desc: 'Forecast market trends, user behavior, and system anomalies with 97.4% accuracy using our proprietary models.',
    accent: '#f59e0b'
  },
  {
    icon: <Globe size={28} />,
    title: 'Decentralized Swarm',
    desc: 'Federated learning network of AI nodes collaborating in real-time across 47 global data centers.',
    accent: '#10b981'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, delay: 0.3 })
      .fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.7')
      .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5');
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-6">
        {/* Restored color blobs */}
        <div className="color-blob purple" />
        <div className="color-blob cyan" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm mb-8">
              <Sparkles size={14} className="text-indigo-400" />
              <span className="text-xs font-mono text-indigo-300 tracking-widest uppercase">Now in Public Beta</span>
            </div>
          </motion.div>

          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-display leading-[1.05] mb-8"
          >
            <span className="gradient-text">Intelligence</span>
            <br />
            <span style={{ color: '#f1f5f9' }}>Without Limits</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            NEET AI Studio builds autonomous neural agents that transcend traditional AI boundaries.
            Deploy, scale, and evolve — without writing a single line of code.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="glow-btn text-base px-8 py-4">
              Deploy Your Agent <ArrowUpRight size={18} />
            </Link>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium px-6 py-4 rounded-xl border border-slate-700/40 hover:border-slate-500/60 transition-all duration-300"
            >
              Explore Technology <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Floating stat badges */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[{ value: '500+', label: 'AI Nodes' }, { value: '99.97%', label: 'Uptime' }, { value: '12ms', label: 'Avg Latency' }].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl font-bold font-display text-white">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1 tracking-wider uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===== FEATURES GRID SECTION ===== */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-display mb-6">
              <span className="gradient-text">Core Capabilities</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Six integrated pillars that power the next generation of autonomous intelligence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="color-pulse-card feature-card-glow p-8"
              >
                <div
                  className="icon-float w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${f.accent}22, ${f.accent}08)`,
                    border: `1px solid ${f.accent}40`,
                    color: f.accent,
                  }}
                >
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="color-pulse-card p-12 sm:p-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Ready to Build the <span className="gradient-text">Future</span>?
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed text-base">
              Join 200+ forward-thinking enterprises already running production workloads on our neural infrastructure.
            </p>
            <Link to="/contact" className="glow-btn text-base px-10 py-4">
              Start Building Free <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}