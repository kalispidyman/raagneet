import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Globe, Shield, Zap, Network } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

export default function Home() {
  const features = [
    {
      icon: Bot,
      title: 'Autonomous AI Agents',
      description: 'Deploy intelligent bots that learn, adapt, and execute complex tasks without human intervention. Our agents integrate with any API or system.',
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      icon: Cpu,
      title: 'Neural Engine Core',
      description: 'Custom neural architectures optimized for real-time inference. Reduce latency by 70% while maintaining state-of-the-art accuracy.',
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: Globe,
      title: 'Edge Intelligence',
      description: 'Run AI models on devices, edge servers, and distributed networks. Secure, private, and lightning-fast decision-making anywhere.',
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      icon: Shield,
      title: 'AI Security Suite',
      description: 'Enterprise-grade encryption, adversarial resistance, and continuous monitoring. Keep your models and data safe from threats.',
      gradient: 'from-rose-500/20 to-orange-500/20',
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Stream processing and instant insights powered by our lightweight inference engine. No batch delays, no compromises.',
      gradient: 'from-amber-500/20 to-yellow-500/20',
    },
    {
      icon: Network,
      title: 'Federated Learning',
      description: 'Train models across decentralized data sources without moving sensitive information. Collaborative intelligence with privacy guarantees.',
      gradient: 'from-violet-500/20 to-pink-500/20',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center md:pt-40 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="mb-6 inline-block rounded-full border border-glass-border bg-glass px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-indigo-300 backdrop-blur-lg">
            v4.2.1 — Neural Core
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--ffd)' }}>
            Build{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Smarter
            </span>
            <br />
            with NEET AI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            We craft autonomous AI systems that think, adapt, and scale. From real-time neural engines to enterprise-grade security — intelligence redefined.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/products" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:scale-105">
              Explore Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/packages" className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-glass px-6 py-3 text-sm font-semibold text-slate-300 backdrop-blur-lg transition-all hover:border-indigo-500/40 hover:text-white hover:shadow-lg hover:shadow-indigo-500/10">
              View Pricing
            </a>
          </div>
        </motion.div>
      </section>

      {/* Features Grid - Animated Colour Cards */}
      <section className="relative px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: 'var(--ffd)' }}
          >
            Why Choose <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">NEET</span>
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <AnimatedCard key={i} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-3xl border border-glass-border bg-glass p-10 text-center backdrop-blur-2xl md:p-16"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'var(--ffd)' }}>
            Ready to{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Automate
            </span>{' '}
            Everything?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-400">
            One conversation can start a revolution. Let's build your future AI infrastructure.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </section>
    </div>
  );
}