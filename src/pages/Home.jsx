import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Zap, Code2, Bot, Shield, Globe, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Hero animations
    gsap.fromTo('.hero-badge', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' });
    gsap.fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' });
    gsap.fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.6, ease: 'power3.out' });
    gsap.fromTo('.hero-cta', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.8, ease: 'power2.out' });

    // Features section
    gsap.fromTo('.feature-card',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: featuresRef.current, start: 'top 78%' }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="relative">
      {/* Ambient orbs */}
      <div className="fixed top-0 right-0 w-[700px] h-[700px] bg-indigo-600/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/6 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4">
        <div className="max-w-5xl text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md mb-6 opacity-0">
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-sm font-medium text-indigo-200 tracking-wide">NEET AI Studio Presents</span>
          </div>

          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6 text-white opacity-0">
            Future‑Ready<br />
            <span className="bg-gradient-to-br from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">AI & Websites</span>
          </h1>

          <p className="hero-desc text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 opacity-0">
            We engineer state‑of‑the‑art AI bots and craft stunning, high‑converting websites that elevate your brand into the next dimension.
          </p>

          <div className="hero-cta flex flex-wrap gap-4 justify-center opacity-0">
            <Link
              to="/packages"  {/* UPDATED: now points to the new Packages page */}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              Start Building
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-white font-semibold text-lg hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1"
            >
              Explore AI
              <Zap size={20} className="text-cyan-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 px-4" ref={featuresRef}>
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One Platform, <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Endless Possibilities</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From intelligent automation to pixel‑perfect web experiences — we deliver the full tech stack.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Bot, title: 'AI Bots', desc: 'Custom chatbots, automation agents, and neural cores trained on your data.' },
            { icon: Code2, title: 'Web Development', desc: 'Blazing‑fast React/Next.js sites with glassmorphism UI and stellar performance.' },
            { icon: Shield, title: 'Enterprise Security', desc: 'SSL, DDoS protection, and zero‑trust architecture embedded in every project.' },
            { icon: Globe, title: 'Global CDN', desc: 'Worldwide edge delivery ensuring sub‑100ms load times from any location.' },
          ].map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="feature-card group p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-indigo-500/25 transition-all duration-400 hover:-translate-y-1 opacity-0">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-cyan-600/10 border border-white/10 backdrop-blur-2xl p-10 md:p-16 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Ready to level up?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Choose a website package or let us build a custom AI solution just for you.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/packages" className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300">
              View Packages
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-xl border border-white/10 bg-white/[0.04] text-white font-semibold hover:bg-white/[0.08] transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}