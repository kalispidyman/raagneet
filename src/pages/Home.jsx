import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Zap, Shield, Globe, Code2, Eye, ArrowRight, Users, Server, Activity, Sparkles, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { val: '5,000+', lbl: 'AI Models', color: '#6366f1' },
  { val: '200+', lbl: 'Active Bots', color: '#8b5cf6' },
  { val: '50K+', lbl: 'Global Users', color: '#06b6d4' },
  { val: '99.9%', lbl: 'Uptime SLA', color: '#10b981' },
];

const FEATURES = [
  { icon: Brain, label: 'Neural AI', color: '#6366f1' },
  { icon: Zap, label: 'Real-time', color: '#f59e0b' },
  { icon: Shield, label: 'Secure', color: '#10b981' },
  { icon: Globe, label: 'Global Edge', color: '#06b6d4' },
  { icon: Code2, label: 'Dev-First', color: '#8b5cf6' },
  { icon: Eye, label: 'Multimodal', color: '#ec4899' },
];

const BOTS = [
  {
    name: 'NeetChat', icon: '💬', color: '#6366f1', bg: 'rgba(99,102,241,0.08)',
    desc: 'Conversational AI with deep context understanding, emotion detection and multi-language support.',
    tags: ['NLP', 'Real-time', 'Multi-lang'],
  },
  {
    name: 'CodeForge', icon: '⚡', color: '#10b981', bg: 'rgba(16,185,129,0.08)',
    desc: 'AI developer that writes, refactors, debugs and deploys production-grade code autonomously.',
    tags: ['Code Gen', 'Debugging', 'Deploy'],
  },
  {
    name: 'VisionCore', icon: '👁', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)',
    desc: 'Computer vision AI for image analysis, object detection and visual intelligence at scale.',
    tags: ['Vision', 'Detection', 'Analysis'],
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const featRef = useRef(null);
  const botsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Hero entrance
    const tl = gsap.timeline({ delay: 0.1 });
    tl.fromTo('.hero-chip', { opacity:0, y:20 }, { opacity:1, y:0, duration:0.6 })
      .fromTo('.hero-h1', { opacity:0, y:40 }, { opacity:1, y:0, duration:0.7 }, '-=0.3')
      .fromTo('.hero-p', { opacity:0, y:20 }, { opacity:1, y:0, duration:0.5 }, '-=0.4')
      .fromTo('.hero-btns', { opacity:0, y:20 }, { opacity:1, y:0, duration:0.5 }, '-=0.3')
      .fromTo('.stat-card', { opacity:0, y:30, scale:0.95 }, { opacity:1, y:0, scale:1, duration:0.5, stagger:0.1 }, '-=0.2');

    // Feature pills scroll
    gsap.fromTo('.feature-pill',
      { opacity:0, y:20 },
      { opacity:1, y:0, duration:0.5, stagger:0.08,
        scrollTrigger: { trigger: featRef.current, start:'top 80%' }
      }
    );

    // Bot cards scroll
    gsap.fromTo('.bot-card',
      { opacity:0, y:40 },
      { opacity:1, y:0, duration:0.6, stagger:0.15,
        scrollTrigger: { trigger: botsRef.current, start:'top 75%' }
      }
    );

    // CTA scroll
    gsap.fromTo(ctaRef.current,
      { opacity:0, scale:0.97 },
      { opacity:1, scale:1, duration:0.6,
        scrollTrigger: { trigger: ctaRef.current, start:'top 80%' }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div style={{ position:'relative', zIndex:1 }}>

      {/* ── HERO ── */}
      <section ref={heroRef} className="page-hero">
        {/* Orbs */}
        <div className="orb" style={{ width:600, height:600, background:'radial-gradient(circle,rgba(99,102,241,0.12),transparent 70%)', top:'-10%', right:'-5%' }} />
        <div className="orb" style={{ width:400, height:400, background:'radial-gradient(circle,rgba(139,92,246,0.1),transparent 70%)', bottom:'10%', left:'-5%' }} />

        <div className="container">
          <div style={{ maxWidth:680 }}>
            <div className="hero-chip" style={{ opacity:0 }}>
              <span className="hero-chip-dot" />
              Next-Generation AI Platform
            </div>

            <h1 className="hero-h1" style={{ opacity:0 }}>
              Building the<br />
              <span className="gradient-text">Future of</span><br />
              Intelligence
            </h1>

            <p className="hero-p" style={{ opacity:0 }}>
              NEET AI Studio engineers the world's most powerful AI systems, autonomous bots,
              and cutting-edge intelligence platforms — transforming ideas into autonomous reality.
            </p>

            <div className="hero-btns" style={{ opacity:0 }}>
              <Link to="/products" className="btn btn-primary">
                Explore AI Products <ArrowRight size={16} />
              </Link>
              <Link to="/technology" className="btn btn-outline">
                Our Technology <ChevronRight size={16} />
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {STATS.map((s, i) => (
                <div key={i} className="stat-card" style={{ opacity:0 }}>
                  <div className="val" style={{ color:s.color }}>{s.val}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section ref={featRef} className="section-sm" style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <p style={{ color:'#475569', fontSize:'.75rem', fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', marginBottom:16, fontFamily:"'JetBrains Mono',monospace" }}>
            Why NEET AI Studio
          </p>
          <div className="features-strip">
            {FEATURES.map(({ icon: Icon, label, color }, i) => (
              <div key={i} className="feature-pill" style={{ opacity:0 }}>
                <Icon size={16} color={color} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOT SHOWCASE ── */}
      <section ref={botsRef} className="section">
        <div className="container">
          <div style={{ marginBottom:56 }}>
            <div className="badge" style={{ marginBottom:14 }}>
              <Sparkles size={12} /> Featured Products
            </div>
            <h2 className="section-title">AI That <span className="gradient-text">Works For You</span></h2>
            <p className="section-sub" style={{ marginTop:14 }}>
              Our flagship AI systems are built to operate autonomously, learn continuously, and deliver real-world impact.
            </p>
          </div>

          <div className="grid-3" ref={botsRef}>
            {BOTS.map((bot, i) => (
              <div key={i} className="glass-card bot-card" style={{ padding:'32px', opacity:0 }}>
                <div style={{ width:56, height:56, borderRadius:16, background:bot.bg, border:`1px solid ${bot.color}30`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem', marginBottom:20 }}>
                  {bot.icon}
                </div>
                <h3 style={{ fontFamily:"var(--ffd)", fontWeight:800, fontSize:'1.25rem', marginBottom:10, color:bot.color }}>{bot.name}</h3>
                <p style={{ color:'#94a3b8', fontSize:'.88rem', lineHeight:1.7, marginBottom:20 }}>{bot.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:24 }}>
                  {bot.tags.map(t => (
                    <span key={t} className="card-tag" style={{ background:`${bot.color}18`, color:bot.color, border:`1px solid ${bot.color}30` }}>{t}</span>
                  ))}
                </div>
                <Link to="/products" className="btn btn-outline btn-sm" style={{ width:'100%', justifyContent:'center' }}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign:'center', marginTop:40 }}>
            <Link to="/products" className="btn btn-outline">
              View All AI Products <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-sm">
        <div className="container">
          <div ref={ctaRef} className="glass" style={{ borderRadius:24, padding:'60px 48px', textAlign:'center', background:'linear-gradient(135deg,rgba(99,102,241,0.1),rgba(139,92,246,0.08))', border:'1px solid rgba(99,102,241,0.2)', position:'relative', overflow:'hidden', opacity:0 }}>
            <div className="orb" style={{ width:300, height:300, background:'radial-gradient(circle,rgba(99,102,241,0.15),transparent 70%)', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }} />
            <div style={{ position:'relative', zIndex:1 }}>
              <div className="badge" style={{ marginBottom:20 }}>
                <Activity size={12} /> Ready to Deploy
              </div>
              <h2 style={{ fontFamily:"var(--ffd)", fontWeight:800, fontSize:'clamp(1.8rem,4vw,2.8rem)', letterSpacing:'-0.03em', marginBottom:16 }}>
                Start Building with AI <span className="gradient-text">Today</span>
              </h2>
              <p style={{ color:'#94a3b8', fontSize:'1.05rem', maxWidth:480, margin:'0 auto 32px', lineHeight:1.7 }}>
                Join thousands of developers and companies already building the next generation of AI-powered products.
              </p>
              <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Get Early Access <ArrowRight size={16} /></Link>
                <Link to="/technology" className="btn btn-outline">Explore Tech <Server size={15} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}