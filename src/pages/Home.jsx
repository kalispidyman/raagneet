import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Brain, Cpu, Globe, ArrowRight, Sparkles, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Models',
    description: 'Custom-trained neural networks optimized for your specific business needs and workflows.'
  },
  {
    icon: Cpu,
    title: 'Autonomous Systems',
    description: 'Self-operating AI agents that handle complex tasks with minimal human intervention.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Cloud-native infrastructure designed to serve millions of requests across continents.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and compliance frameworks to protect your sensitive data.'
  }
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50M+', label: 'API Calls/Day' },
  { value: '<50ms', label: 'Avg Latency' },
  { value: '200+', label: 'Enterprise Clients' }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="nb-bg-back-mountain" />
        <div className="nb-bg-aurora nb-bg-aurora-1" />
        <div className="nb-bg-aurora nb-bg-aurora-2" />
        <div className="nb-bg-vignette" />
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-sm font-medium text-indigo-300">Next-Gen AI Platform</span>
            </div>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Building the{' '}
            <span className="gradient-text">Future</span>
            {' '}of Intelligence
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            NEET AI Studio engineers world-class artificial intelligence systems, autonomous bots, and next-generation platforms that transform how businesses operate at scale.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/contact" className="btn-primary">
              <Rocket size={18} />
              <span>Start Building</span>
            </Link>
            <Link to="/technology" className="btn-secondary">
              <span>Explore Tech</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powered by <span className="gradient-text">Cutting-Edge</span> Technology
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our AI infrastructure is built for performance, reliability, and infinite scalability.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/20 flex items-center justify-center mb-4">
                <feature.icon size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          className="glass-card text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.04) 100%)',
            borderColor: 'rgba(99, 102, 241, 0.2)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4">Ready to <span className="gradient-text">Transform</span> Your Business?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Let's discuss how our AI solutions can accelerate your growth and streamline your operations.
          </p>
          <Link to="/contact" className="btn-primary">
            <Zap size={18} />
            <span>Get in Touch</span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}