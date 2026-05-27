import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Heart, Rocket, Users, Award, Globe, Code2, Zap, ChevronRight, Star } from 'lucide-react';

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
  { icon:Globe, title:'Global Impact', desc:'Our technology serves millions across 40+ countries, democratizing access to frontier AI capabilities.', color:'#10b981' },
];

const MILESTONES = [
  { year:'2023 Q1', title:'NEET AI Studio Founded', desc:'Three ex-DeepMind researchers founded NEET AI with a mission to democratize frontier AI.' },
  { year:'2023 Q3', title:'First $10M Seed Round', desc:'Secured $10M from leading AI-focused VCs to begin training our first proprietary foundation model.' },
  { year:'2024 Q1', title:'NEET-1 Model Released', desc:'Launched NEET-1, our flagship model outperforming GPT-4 on 7 of 10 benchmarks.' },
  { year:'2024 Q3', title:'NeetChat & CodeForge Launch', desc:'First two AI bots reached public beta — 50K users in the first 30 days.' },
  { year:'2025 Q1', title:'Series A: $45M Raised', desc:'Closed $45M Series A to expand model capabilities and grow globally to 50+ countries.' },
  { year:'2025 Q2', title:'Full Platform Launch', desc:'All 6 AI bots live. Enterprise tier launched. 50K+ active users across 40 countries.' },
];

const STATS = [
  { value: '50+', label: 'Team Members' },
  { value: '40+', label: 'Countries Served' },
  { value: '50K+', label: 'Active Users' },
  { value: '$55M', label: 'Total Funding' },
];

export default function About() {
  const teamRef = useRef(null);
  const valRef = useRef(null);
  const timelineRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Header
    gsap.fromTo('.about-header', { opacity:0, y:40 }, { opacity:1, y:0, duration:0.8, stagger:0.15, ease:'power3.out' });

    // Mission card
    gsap.fromTo('.mission-card',
      { opacity:0, y:30, scale:0.97 },
      { opacity:1, y:0, scale:1, duration:0.7, ease:'power3.out',
        scrollTrigger:{ trigger:'.mission-card', start:'top 80%' }
      }
    );

    // Stats
    gsap.fromTo('.stat-card',
      { opacity:0, y:20 },
      { opacity:1, y:0, duration:0.5, stagger:0.1, ease:'power2.out',
        scrollTrigger:{ trigger:statsRef.current, start:'top 78%' }
      }
    );

    // Team cards
    gsap.fromTo('.team-card',
      { opacity:0, y:50, rotateY:-5 },
      { opacity:1, y:0, rotateY:0, duration:0.6, stagger:0.12, ease:'power3.out',
        scrollTrigger:{ trigger:teamRef.current, start:'top 75%' }
      }
    );

    // Values
    gsap.fromTo('.val-card',
      { opacity:0, x:-30 },
      { opacity:1, x:0, duration:0.55, stagger:0.12, ease:'power3.out',
        scrollTrigger:{ trigger:valRef.current, start:'top 78%' }
      }
    );

    // Timeline
    gsap.fromTo('.tl-item',
      { opacity:0, x:30 },
      { opacity:1, x:0, duration:0.5, stagger:0.1, ease:'power2.out',
        scrollTrigger:{ trigger:timelineRef.current, start:'top 78%' }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="relative">
      {/* Decorative orbs */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="about-header inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md mb-6 opacity-0">
            <Users size={14} className="text-purple-400" />
            <span className="text-sm font-medium text-purple-200 tracking-wide">About Us</span>
          </div>
          <h1 className="about-header text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 opacity-0">
            <span className="block text-white">Who</span>
            <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">We Are</span>
          </h1>
          <p className="about-header text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed opacity-0">
            A team of ex-DeepMind, Google Brain and OpenAI engineers on a mission to build AI that actually matters — powerful, reliable, and accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mission-card relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-indigo-500/8 to-purple-500/5 backdrop-blur-xl border border-indigo-500/15 opacity-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="text-5xl flex-shrink-0">🎯</div>
              <div>
                <div className="text-xs font-semibold text-indigo-400 tracking-[0.15em] uppercase mb-4">Our Mission</div>
                <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                  "To build AI systems so powerful they feel like <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">superpowers</span> — and make them accessible to every developer, every company, every human on Earth."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <div key={i} className="stat-card group relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-purple-500/30 transition-all duration-400 text-center opacity-0">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto" ref={teamRef}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built by <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">AI Pioneers</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">World-class engineers from the leading AI labs, united by a shared vision.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m, i) => (
              <div key={i} className="team-card group relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-500 opacity-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl mx-auto mb-5 overflow-hidden border-2 border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors duration-300" style={{ background:'rgba(99,102,241,0.1)' }}>
                    <img
                      src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${m.seed}&backgroundColor=6366f1,8b5cf6`}
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white text-center mb-1">{m.name}</h3>
                  <p className="text-sm text-indigo-400 font-medium text-center mb-4">{m.role}</p>
                  <p className="text-xs text-slate-400 leading-relaxed text-center">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto" ref={valRef}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Drives Us</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Our core values shape every decision, every line of code, every product we ship.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="val-card group relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-purple-500/30 transition-all duration-500 opacity-0">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: `${v.color}15`, borderColor: `${v.color}30` }}>
                      <Icon size={20} color={v.color} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Journey</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">From a bold idea to a global AI platform — here's how we got here.</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-cyan-500/30" />
            
            {MILESTONES.map((m, i) => (
              <div key={i} className={`tl-item relative flex items-start gap-8 mb-12 last:mb-0 opacity-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-indigo-500 border-4 border-[#050510] -translate-x-1/2 mt-1 z-10" />
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3">{m.year}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}