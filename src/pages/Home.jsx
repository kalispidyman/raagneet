import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp, Users, Clock, CheckCircle2, Star } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3x', label: 'Average ROI' },
  { value: '24/7', label: 'Support Available' },
];

const services = [
  {
    icon: <Sparkles size={24} />,
    title: 'AI-Powered Solutions',
    desc: 'Custom AI agents, chatbots, and automation workflows that save hundreds of hours and reduce operational costs by up to 60%.',
    highlight: 'Most Popular'
  },
  {
    icon: <Zap size={24} />,
    title: 'Premium Web Applications',
    desc: 'High-performance websites and web apps with stunning 3D visuals, glassmorphism design, and lightning-fast load times.',
    highlight: null
  },
  {
    icon: <Shield size={24} />,
    title: 'Business Automation',
    desc: 'End-to-end process automation that eliminates manual work, reduces errors, and scales your operations effortlessly.',
    highlight: null
  },
];

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your business goals, challenges, and vision in a free 30-minute consultation.' },
  { step: '02', title: 'Strategy & Design', desc: 'Our team crafts a tailored solution with clear timelines, milestones, and expected outcomes.' },
  { step: '03', title: 'Development', desc: 'We build your solution using cutting-edge technology with weekly progress updates.' },
  { step: '04', title: 'Launch & Scale', desc: 'We deploy, monitor, and continuously optimize your system for maximum performance.' },
];

const testimonials = [
  { name: 'Rajesh Kumar', role: 'CEO, TechVentures', text: 'NEET AI Studio transformed our entire customer service with their AI chatbot. Response time dropped from 4 hours to 30 seconds. Revenue increased 40% in 3 months.', rating: 5 },
  { name: 'Priya Sharma', role: 'Founder, StyleHub', text: 'The 3D website they built for us is absolutely stunning. Our bounce rate dropped 65% and conversions tripled. Best investment we ever made.', rating: 5 },
  { name: 'Arjun Patel', role: 'CTO, DataFlow', text: 'Their automation system saved us 200+ hours per month. The team is brilliant, responsive, and truly understands business needs.', rating: 5 },
];

export default function Home() {
  return (
    <div className="home-premium">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Star size={14} className="hero-badge-star" />
            <span>Trusted by 50+ businesses across India</span>
          </div>
          <h1 className="hero-title">
            We Build AI Systems That
            <span className="hero-gradient-text"> Grow Your Revenue</span>
          </h1>
          <p className="hero-subtitle">
            Premium AI solutions, stunning web experiences, and intelligent automation — designed to save you time, cut costs, and multiply your profits.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-hero-primary">
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>
            <Link to="/products" className="btn-hero-secondary">
              View Our Services
            </Link>
          </div>
          <div className="hero-trust">
            <div className="hero-avatars">
              <div className="avatar-circle" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>R</div>
              <div className="avatar-circle" style={{ background: 'linear-gradient(135deg, #06b6d4, #22d3ee)' }}>P</div>
              <div className="avatar-circle" style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }}>A</div>
              <div className="avatar-circle" style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}>S</div>
            </div>
            <span className="hero-trust-text">Join 50+ happy clients growing with AI</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Services That Drive Real Results</h2>
            <p className="section-desc">Every solution we build is designed with one goal: measurable business growth.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card-premium">
                {s.highlight && <span className="service-badge">{s.highlight}</span>}
                <div className="service-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/contact" className="service-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">From Idea to Launch in 4 Simple Steps</h2>
            <p className="section-desc">No complexity. No confusion. Just a clear path to your AI-powered future.</p>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <div key={i} className="process-card">
                <span className="process-step">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Client Success</span>
            <h2 className="section-title">Real Results From Real Businesses</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="#fbbf24" color="#fbbf24" />)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready to 10x Your Business with AI?</h2>
          <p>Book a free 30-minute strategy call. We'll show you exactly how AI can save you time, cut costs, and grow revenue — no obligations, no pressure.</p>
          <div className="cta-features">
            <span><CheckCircle2 size={16} /> Free consultation</span>
            <span><CheckCircle2 size={16} /> Custom strategy</span>
            <span><CheckCircle2 size={16} /> No obligations</span>
          </div>
          <Link to="/contact" className="btn-cta-main">
            Book Your Free Call Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}