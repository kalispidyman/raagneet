import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Layers, GitBranch, Cpu, Zap, Shield, Sparkles, Hexagon } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const techs = [
  {
    icon: Cpu,
    title: 'Neural Architecture',
    desc: 'Our custom transformer architecture processes 4x more context with 40% fewer parameters than traditional models, enabling deeper reasoning at lower cost.'
  },
  {
    icon: Layers,
    title: 'Multi-Modal Fusion',
    desc: 'Native multi-modal processing that understands text, images, audio, and code simultaneously, with cross-modal attention mechanisms.'
  },
  {
    icon: GitBranch,
    title: 'Self-Evolving Models',
    desc: 'Models that continuously improve through reinforcement learning from human feedback and automated self-play training loops.'
  },
  {
    icon: Zap,
    title: 'Real-Time Inference',
    desc: 'Sub-8ms inference through optimized tensor operations, dynamic batching, and hardware-aware quantization strategies.'
  },
  {
    icon: Shield,
    title: 'Privacy-First Design',
    desc: 'On-device processing with differential privacy guarantees. Your data never leaves your infrastructure unless you explicitly allow it.'
  },
  {
    icon: Microscope,
    title: 'Explainable AI',
    desc: 'Every decision is traceable with our interpretability layer. See exactly why your AI made each recommendation or action.'
  }
];

const stack = [
  { label: 'PyTorch', role: 'Deep Learning Framework' },
  { label: 'TensorRT', role: 'Inference Optimization' },
  { label: 'CUDA', role: 'GPU Acceleration' },
  { label: 'ONNX', role: 'Model Interchange' },
  { label: 'Docker', role: 'Containerization' },
  { label: 'Kubernetes', role: 'Orchestration' },
  { label: 'Redis', role: 'Real-Time Cache' },
  { label: 'Kafka', role: 'Stream Processing' },
];

export default function Technology() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[180px]" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
          <div className="section-badge">
            <Hexagon size={14} />
            <span>Tech Stack</span>
          </div>
          <h1>
            Built on <span className="gradient-text">Cutting-Edge Science</span>
          </h1>
          <p>
            Our technology stack combines the latest advances in deep learning, distributed systems, and hardware acceleration to deliver unmatched performance.
          </p>
        </motion.div>
      </section>

      {/* ===== TECHNOLOGY GRID ===== */}
      <section className="section-premium">
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {techs.map((t, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 group"
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <t.icon size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== STACK ===== */}
      <section className="section-premium">
        <motion.div className="section-header" {...fadeUp}>
          <h2 className="section-title">
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="section-subtitle">
            Carefully selected and battle-tested technologies powering production AI systems.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {stack.map((s, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 text-center group"
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.05 } }
              }}
            >
              <div className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{s.label}</div>
              <div className="text-xs text-slate-500">{s.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-premium text-center">
        <motion.div className="glass-card-heavy max-w-3xl mx-auto p-12 md:p-16" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Dive Deeper?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            We publish our research papers, architecture overviews, and technical documentation.
          </p>
          <a href="/contact" className="btn-primary text-base px-10 py-4">
            Get Access to Docs <Sparkles size={16} />
          </a>
        </motion.div>
      </section>
    </div>
  );
}