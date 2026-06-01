import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Shield, Globe, Lightbulb, Quote, Sparkles } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const values = [
  { icon: Target, title: 'Excellence', desc: 'We pursue the highest standards in every line of code, every model, and every interaction.' },
  { icon: Heart, title: 'Human-Centric', desc: 'Technology should serve humanity. We build AI that amplifies human potential, not replaces it.' },
  { icon: Shield, title: 'Trust & Safety', desc: 'Ethics are non-negotiable. Our systems are built with transparency, fairness, and accountability.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We push boundaries daily, challenging assumptions and redefining what AI can achieve.' },
  { icon: Globe, title: 'Global Impact', desc: 'Democratizing access to world-class AI infrastructure for every developer and enterprise.' },
];

const team = [
  { name: 'Neetesh Kumar', role: 'Founder & CEO', bio: '15+ years in AI research and distributed systems. Former lead at DeepMind and Google Brain.' },
  { name: 'Priya Sharma', role: 'CTO', bio: 'Architected ML pipelines at scale. PhD in Neural Networks from MIT.' },
  { name: 'Arjun Mehta', role: 'Head of Engineering', bio: 'Built production AI systems serving 100M+ users. Expert in Kubernetes and microservices.' },
  { name: 'Ananya Patel', role: 'Head of AI Research', bio: 'Published 30+ papers in NLP and reinforcement learning. Leads our foundational model team.' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="section-badge">
            <Users size={14} />
            <span>About Us</span>
          </div>
          <h1>
            We're on a Mission to <span className="gradient-text">Democratize AI</span>
          </h1>
          <p>
            NEET AI Studio was founded with a simple belief: the most powerful AI should be accessible to everyone — from solo developers to global enterprises.
          </p>
        </motion.div>
      </section>

      {/* ===== STORY ===== */}
      <section className="section-premium">
        <motion.div className="glass-card-heavy p-10 md:p-14 max-w-4xl mx-auto" {...fadeUp}>
          <Quote size={36} className="text-indigo-400/40 mb-6" />
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6 italic">
            "We started NEET AI Studio because we saw a gap. The world's best AI infrastructure was locked behind enterprise contracts and six-figure licensing fees. We believed that intelligence — real, powerful, autonomous intelligence — should be a utility, not a luxury."
          </p>
          <p className="text-slate-400 leading-relaxed">
            Today, we serve over 500 companies across 40 countries, processing billions of inferences daily. Our platform powers everything from Fortune 500 supply chains to indie developer side projects. And we're just getting started.
          </p>
          <div className="mt-6 text-sm text-indigo-400 font-semibold">— Neetesh Kumar, Founder</div>
        </motion.div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="section-premium">
        <motion.div className="section-header" {...fadeUp}>
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Our Values</span>
          </div>
          <h2 className="section-title">
            What <span className="gradient-text">Drives Us</span>
          </h2>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 group"
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <v.icon size={22} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="section-premium">
        <motion.div className="section-header" {...fadeUp}>
          <h2 className="section-title">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="section-subtitle">
            We're a global team of engineers, researchers, and dreamers building the future of AI.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {team.map((m, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 text-center group"
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
              }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-indigo-300">{m.name[0]}</span>
              </div>
              <h3 className="text-base font-semibold text-white">{m.name}</h3>
              <div className="text-xs text-indigo-400 font-mono mb-2">{m.role}</div>
              <p className="text-xs text-slate-500 leading-relaxed">{m.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}