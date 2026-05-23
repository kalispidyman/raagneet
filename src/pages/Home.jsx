import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Zap, Shield, TrendingUp, Users, Star, 
  Bot, Globe, Brain, ChevronRight, CheckCircle2, Sparkles,
  BarChart3, Clock, Award
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] } })
};

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3x', label: 'Average ROI Increase' },
  { value: '24/7', label: 'Support Available' },
];

const services = [
  {
    icon: <Bot size={24} />,
    title: 'AI-Powered Solutions',
    desc: 'Custom AI bots, automation workflows, and intelligent systems that reduce costs and scale your operations.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Premium Web Development',
    desc: 'High-performance websites and web apps with stunning 3D visuals that convert visitors into customers.',
  },
  {
    icon: <Brain size={24} />,
    title: 'Business Automation',
    desc: 'End-to-end process automation that eliminates manual work and lets your team focus on growth.',
  },
];

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'CEO, TechVentures',
    text: 'NEET AI Studio transformed our entire customer service with their AI bot. Response times dropped by 80% and customer satisfaction skyrocketed.',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'Founder, GrowthLab',
    text: 'The website they built for us isn\'t just beautiful — it\'s a conversion machine. Our leads increased 3x within the first month of launch.',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    role: 'Director, InnovateCo',
    text: 'Their automation systems saved us 40+ hours per week. The ROI was visible within weeks, not months. Absolutely recommend.',
    rating: 5,
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We dive deep into your business goals, audience, and challenges to craft the perfect strategy.' },
  { step: '02', title: 'Design & Build', desc: 'Our team designs and develops your solution with precision, keeping you in the loop at every stage.' },
  { step: '03', title: 'Launch & Scale', desc: 'We deploy, optimize, and provide ongoing support to ensure your solution delivers maximum results.' },
];

export default function Home() {
  return (
    <div className="page-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-elements">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="container-hero">
          <motion.div className="hero-badge" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <Sparkles size={14} />
            <span>AI-Powered Digital Solutions</span>
          </motion.div>
          <motion.h1 className="hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            We Build Systems That
            <span className="hero-gradient-text"> Grow Your Business</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            From intelligent AI bots to premium web experiences — we create technology solutions 
            that drive real revenue, reduce costs, and give you an unfair competitive advantage.
          </motion.p>
          <motion.div className="hero-cta-group" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <Link to="/contact" className="btn-primary-lg">
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/products" className="btn-secondary-lg">
              <span>View Our Services</span>
            </Link>
          </motion.div>
          <motion.div className="hero-trust" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
            <div className="trust-avatars">
              <div className="trust-avatar" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}>R</div>
              <div className="trust-avatar" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}>P</div>
              <div className="trust-avatar" style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }}>A</div>
              <div className="trust-avatar" style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}>S</div>
            </div>
            <div className="trust-text">
              <div className="trust-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />)}
              </div>
              <span>Trusted by 50+ businesses across India</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container-section">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div key={i} className="stat-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="container-section">
          <motion.div className="section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="section-badge">What We Do</span>
            <h2 className="section-title">Solutions That Drive <span className="text-gradient">Real Results</span></h2>
            <p className="section-desc">We don't just build technology — we build growth engines. Every solution is designed to increase your revenue, efficiency, and market position.</p>
          </motion.div>
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div key={i} className="service-card-premium" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div className="service-icon-wrap">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/products" className="service-card-link">
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container-section">
          <div className="why-grid">
            <motion.div className="why-content" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="section-badge">Why NEET AI Studio</span>
              <h2 className="section-title left-align">We Don't Just Code. <span className="text-gradient">We Solve Business Problems.</span></h2>
              <p className="why-desc">Most agencies deliver pretty websites. We deliver systems that generate revenue. Here's what makes us different:</p>
              <ul className="why-list">
                <li><CheckCircle2 size={18} className="check-icon" /> <span><strong>ROI-Focused:</strong> Every feature we build is tied to a business outcome — more leads, more sales, less cost.</span></li>
                <li><CheckCircle2 size={18} className="check-icon" /> <span><strong>AI-First Approach:</strong> We integrate intelligent automation into everything, giving you an edge competitors can't match.</span></li>
                <li><CheckCircle2 size={18} className="check-icon" /> <span><strong>Premium Quality:</strong> Glassmorphism UI, 3D experiences, and pixel-perfect design that positions you as a market leader.</span></