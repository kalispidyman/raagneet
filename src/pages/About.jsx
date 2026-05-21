import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Heart, Rocket, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  { name:'Aria Chen', role:'CEO & Co-Founder', seed:'aria-chen', desc:'Former AI Research Lead at DeepMind. PhD from MIT. Pioneer of sparse transformer architectures.' },
  { name:'Marcus Riel', role:'CTO & Co-Founder', seed:'marcus-riel', desc:'Ex-Google Brain engineer. Built scalable ML infra serving 1B+ users. Expert in distributed training.' },
  { name:'Priya Nair', role:'Head of Research', seed:'priya-nair', desc:'Published 40+ AI papers. Former OpenAI researcher specializing in RLHF and alignment.' },
  { name:'Leo Tanaka', role:'VP of Engineering', seed:'leo-tanaka', desc:'Built AI systems at Anthropic. Expert in real-time inference optimization and edge deployment.' },
];

const VALUES = [
  { icon:Target, title:'Precision First', desc:'Every model, every system is engineered with obsessive attention to accuracy, reliability and edge-case safety.', color:'#6366f1' },
  { icon:Heart, title:'Human-Centric AI', desc:'We build AI that amplifies human potential — never replacing human judgment, always enhancing it.', color:'#ec4899' },
  { icon:Rocket, title:'Relentless Progress', desc:'We operate at the frontier, shipping innovations that others consider research-only — every single quarter.', color:'#f59e0b' },
];

const MILESTONES = [
  { year:'2023 Q1', title:'NEET AI Studio Founded', desc:'Three ex-DeepMind researchers founded NEET AI with a mission to democratize frontier AI.' },
  { year:'2023 Q3', title:'First $10M Seed Round', desc:'Secured $10M from leading AI-focused VCs to begin training our first proprietary foundation model.' },
  { year:'2024 Q1', title:'NEET-1 Model Released', desc:'Launched NEET-1, our flagship model outperforming GPT-4 on 7 of 10 benchmarks.' },
  { year:'2024 Q3', title:'NeetChat & CodeForge Launch', desc:'First two AI bots reached public beta — 50K users in the first 30 days.' },
  { year:'2025 Q1', title:'Series A: $45M Raised', desc:'Closed $45M Series A to expand model capabilities and grow globally to 50+ countries.' },
  { year:'2025 Q2', title:'Full Platform Launch', desc:'All 6 AI bots live. Enterprise tier launched. 50K+ active users across 40 countries.' },
];

export default function About() {
  const teamRef = useRef(null);
  const valRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.page-header-anim', { opacity:0, y:30 }, { opacity:1, y:0, duration:0.7, stagger:0.12 });
    gsap.fromTo('.mission-anim', { opacity:0, scale:0.97 }, { opacity:1, scale:1, duration:0.7,
      scrollTrigger:{ trigger:'.mission-anim', start:'top 80%' }
    });
    gsap.fromTo('.team-card-a',
      { opacity:0, y:40 },
      { opacity:1, y:0, duration:0.55, stagger:0.12,
        scrollTrigger:{ trigger:teamRef.current, start:'top 78%' }
      }
    );
    gsap.fromTo('.val-card',
      { opacity:0, x:-20 },
      { opacity:1, x:0, duration:0.55, stagger:0.12,
        scrollTrigger:{ trigger:valRef.current, start:'top 78%' }
      }
    );
    gsap.fromTo('.timeline-item-a',
      { opacity:0, x:20 },
      { opacity:1, x:0, duration:0.45, stagger:0.1,
        scrollTrigger:{ trigger:timelineRef.current, start:'top 78%' }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div style={{ position:'relative', zIndex:1 }}>
      <div className="orb" style={{ width:500, height:500, background:'radial-gradient(circle,rgba(139,92,246,0.1),transparent 70%)', top:0, right:0 }} />

      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div className="badge page-header-anim" style={{ marginBottom:16 }}><Users size={12} /> About Us</div>
          <h1 className="section-title page-header-anim" style={{ marginBottom:16 }}>
            Who <span className="gradient-text">We Are</span>
          </h1>
          <p className="section-sub page-header-anim" style={{ margin:'0 auto' }}>
            A team of ex-DeepMind, Google Brain and OpenAI engineers on a mission to build AI that matters.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section-sm">
        <div className="container">
          <div className="glass mission-anim" style={{ borderRadius:24, padding:'48px 40px', background:'linear-gradient(135deg,rgba(99,102,241,0.08),rgba(139,92,246,0.05))', border:'1px solid rgba(99,102,241,0.2)', opacity:0 }}>
            <div style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
              <div style={{ fontSize:'2.5rem', flexShrink:0 }}>🎯</div>
              <div>
                <div style={{ fontFamily:"var(--ffm)", fontSize:'.72rem', color:'#6366f1', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:12, fontWeight:600 }}>Our Mission</div>
                <blockquote style={{ fontFamily:"var(--ffd)", fontWeight:700, fontSize:'clamp(1.2rem,2.5vw,1.7rem)', lineHeight:1.4, letterSpacing:'-0.02em' }}>
                  "To build AI systems so powerful they feel like <span className="gradient-text">superpowers</span> — and make them accessible to every developer, every company, every human on Earth."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" ref={teamRef}>
          <div style={{ marginBottom:48 }}>
            <div className="badge" style={{ marginBottom:12 }}>The Team</div>
            <h2 className="section-title" style={{ fontSize:'clamp(1.6rem,3.5vw,2.4rem)' }}>Built by <span className="gradient-text">AI Pioneers</span></h2>
          </div>
          <div className="grid-4">
            {TEAM.map((m, i) => (
              <div key={i} className="glass-card team-card team-card-a" style={{ opacity:0 }}>
                <img
                  src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${m.seed}&backgroundColor=6366f1,8b5cf6`}
                  alt={m.name}
                  className="team-avatar"
                  style={{ background:'rgba(99,102,241,0.15)' }}
                />
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <p style={{ color:'#475569', fontSize:'.78rem', marginTop:10, lineHeight:1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values + Timeline */}
      <section className="section-sm" style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap:48, alignItems:'start' }}>
            {/* Values */}
            <div ref={valRef}>
              <div className="badge" style={{ marginBottom:12 }}>Our Values</div>
              <h2 className="section-title" style={{ fontSize:'clamp(1.4rem,3vw,2rem)', marginBottom:28 }}>What <span className="gradient-text">Drives Us</span></h2>
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {VALUES.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div key={i} className="glass-card val-card" style={{ padding:'22px', display:'flex', gap:16, alignItems:'flex-start', opacity:0 }}>
                      <div style={{ width:40, height:40, borderRadius:12, background:`${v.color}18`, border:`1px solid ${v.color}30`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <Icon size={18} color={v.color} />
                      </div>
                      <div>
                        <h4 style={{ fontFamily:"var(--ffd)", fontWeight:700, marginBottom:5 }}>{v.title}</h4>
                        <p style={{ color:'#94a3b8', fontSize:'.83rem', lineHeight:1.65 }}>{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div ref={timelineRef}>
              <div className="badge" style={{ marginBottom:12 }}>Journey</div>
              <h2 className="section-title" style={{ fontSize:'clamp(1.4rem,3vw,2rem)', marginBottom:28 }}>Our <span className="gradient-text">Story</span></h2>
              <div className="timeline">
                {MILESTONES.map((m, i) => (
                  <div key={i} className="timeline-item timeline-item-a" style={{ opacity:0 }}>
                    <div className="timeline-dot" />
                    <div className="timeline-year">{m.year}</div>
                    <div className="timeline-title">{m.title}</div>
                    <div className="timeline-desc">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}