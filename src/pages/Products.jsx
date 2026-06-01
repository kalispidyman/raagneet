import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Code2, Cloud, Database, Workflow, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const services = [
  {
    icon: Bot,
    title: 'Autonomous Agents',
    desc: 'Deploy intelligent agents that autonomously execute complex workflows, make decisions, and adapt to changing environments in real-time.',
    features: ['Multi-agent orchestration', 'Reinforcement learning', 'Contextual memory', 'API integration layer']
  },
  {
    icon: Code2,
    title: 'AI Development Suite',
    desc: 'Full-stack AI development platform with integrated training pipelines, model evaluation, and one-click deployment to production.',
    features: ['Custom model training', 'Automated testing', 'Version control', 'CI/CD integration']
  },
  {
    icon: Cloud,
    title: 'Cloud AI Infrastructure',
    desc: 'Enterprise-grade cloud infrastructure optimized for AI workloads with auto-scaling, load balancing, and global edge distribution.',
    features: ['Auto-scaling clusters', 'Edge deployment', '99.99% uptime', 'Multi-region failover']
  },
  {
    icon: Database,
    title: 'Intelligent Data Pipeline',
    desc: 'End-to-end data processing pipeline with automated cleaning, labeling, augmentation, and real-time streaming capabilities.',
    features: ['Real-time ingestion', 'Automated labeling', 'Data augmentation', 'Quality monitoring']
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Visual workflow builder with AI-powered process optimization, scheduled triggers, and cross-platform integration.',
    features: ['Drag-and-drop builder', 'AI optimization', 'Webhook triggers', 'Custom actions']
  }
];

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Our Services</span>
          </div>
          <h1>
            AI Solutions for <span className="gradient-text">Every Scale</span>
          </h1>
          <p>
            From solo developers to Fortune 500 enterprises — we provide the tools, infrastructure, and intelligence to transform your workflow.
          </p>
        </motion.div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section-premium">
        <div className="space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 md:p-10 flex flex-col md:flex-row gap-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="md:w-16 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <s.icon size={28} className="text-indigo-400" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 mb-5 leading-relaxed">{s.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:self-center">
                <Link to="/contact" className="btn-outline whitespace-nowrap">
                  Get Started <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-premium text-center">
        <motion.div className="glass-card-heavy max-w-3xl mx-auto p-12 md:p-16" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            We'll help you design the perfect AI solution for your specific use case.
          </p>
          <Link to="/contact" className="btn-primary text-base px-10 py-4">
            Book a Free Consultation <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}