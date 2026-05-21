import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, Code2, Eye, BarChart3, Mic, Bot, ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BOTS = [
  { name:'NeetChat', icon:MessageSquare, color:'#6366f1', bg:'rgba(99,102,241,0.08)', desc:'Advanced conversational AI with emotional intelligence, context memory and 40+ language support.', tags:['NLP','Emotions','40+ Langs'], status:'Live' },
  { name:'CodeForge', icon:Code2, color:'#10b981', bg:'rgba(16,185,129,0.08)', desc:'Autonomous developer AI — writes full-stack apps, debugs errors, and deploys to cloud in minutes.', tags:['Full-Stack','CI/CD','Cloud'], status:'Live' },
  { name:'VisionCore', icon:Eye, color:'#f59e0b', bg:'rgba(245,158,11,0.08)', desc:'Real-time computer vision: object detection, scene understanding, and visual question answering.', tags:['Vision','Detection','VQA'], status:'Live' },
  { name:'DataMind', icon:BarChart3, color:'#06b6d4', bg:'rgba(6,182,212,0.08)', desc:'AI analytics engine that surfaces insights, forecasts trends, and auto-generates dashboards.', tags:['Analytics','Forecast','Reports'], status:'Beta' },
  { name:'VoiceCore', icon:Mic, color:'#ec4899', bg:'rgba(236,72,153,0.08)', desc:'Neural speech AI with real-time transcription, speaker ID, and emotion recognition from audio.', tags:['Speech','Transcription','ID'], status:'Beta' },
  { name:'AutoPilot', icon:Bot, color:'#8b5cf6', bg:'rgba(139,92,246,0.08)', desc:'Fully autonomous task agent — browse web, write code, send emails, manage schedules end-to-end.', tags:['Agents','Automation','Tasks'], status:'Preview' },
];

const PLANS = [
  { name:'Starter', price:'Free', desc:'For indie developers exploring AI', features:['1 AI Bot access','1,000 API calls/mo','Community support','Basic analytics'], accent:'#6366f1', popular:false },
  { name:'Pro', price:'$49', desc:'For growing teams building with AI', features:['All 6 AI Bots','50,000 API calls/mo','Priority support','Advanced analytics','Custom fine-tuning'], accent:'#8b5cf6', popular:true },
  { name:'Enterprise', price:'Custom', desc:'For large-scale AI deployments', features:['Unlimited access','Unlimited API calls','24/7 dedicated support','Custom models','On-premise deploy'], accent:'#06b6d4', popular:false },
];

export default function Products() {
  const cardsRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.page-header-anim',
      { opacity:0, y:30 },
      { opacity:1, y:0, duration:0.7, stagger:0.12, ease:'power3.out' }
    );
    gsap.fromTo('.bot-card-p',
      { opacity:0, y:40 },
      { opacity:1, y:0, duration:0.55, stagger:0.1,
        scrollTrigger:{ trigger:cardsRef.current, start:'top 78%' }
      }
    );
    gsap.fromTo('.plan-card',
      { opacity:0, y:40, scale:0.96 },
      { opacity:1, y:0, scale:1, duration:0.55, stagger:0.12,
        scrollTrigger:{ trigger:pricingRef.current, start:'top 78%' }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const statusColor = s => s === 'Live' ? '#10b981' : s === 'Beta' ? '#f59e0b' : '#8b5cf6';

  return (
    <div style={{ position:'relative', zIndex:1 }}>
      <div className="orb" style={{ width:500, height:500, background:'radial-gradient(circle,rgba(99,102,241,0.1),transparent 70%)', top:0, right:0 }} />

      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div className="badge page-header-anim" style={{ marginBottom:16 }}><Bot size={12} /> AI Products</div>
          <h1 className="section-title page-header-anim" style={{ marginBottom:16 }}>
            Our <span className="gradient-text">AI Bots</span> & Tools
          </h1>
          <p className="section-sub page-header-anim" style={{ margin:'0 auto' }}>
            Six powerful AI systems — each engineered for a specific domain, all connected through the NEET AI Platform.
          </p>
        </div>
      </div>

      {/* Bot grid */}
      <section className="section-sm">
        <div className="container">
          <div className="grid-3" ref={cardsRef}>
            {BOTS.map((bot, i) => {
              const Icon = bot.icon;
              return (
                <div key={i} className="glass-card bot-card-p" style={{ padding:'28px', opacity:0 }}>
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:18 }}>
                    <div style={{ width:50, height:50, borderRadius:14, background:bot.bg, border:`1px solid ${bot.color}25`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <Icon size={22} color={bot.color} />
                    </div>
                    <span style={{ fontSize:'.68rem', fontWeight:700, color:statusColor(bot.status), background:`${statusColor(bot.status)}18`, border:`1px solid ${statusColor(bot.status)}30`, padding:'3px 10px', borderRadius:99, letterSpacing:'.04em' }}>
                      ● {bot.status}
                    </span>
                  </div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.15rem', marginBottom:10, color:bot.color }}>{bot.name}</h3>
                  <p style={{ color:'#94a3b8', fontSize:'.85rem', lineHeight:1.7, marginBottom:18 }}>{bot.desc}</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
                    {bot.tags.map(t => (
                      <span key={t} style={{ fontSize:'.67rem', fontWeight:600, color:bot.color, background:`${bot.color}14`, border:`1px solid ${bot.color}25`, padding:'3px 9px', borderRadius:6, textTransform:'uppercase', letterSpacing:'.04em' }}>{t}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="btn btn-outline btn-sm" style={{ width:'100%', justifyContent:'center' }}>
                    Request Access <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" ref={pricingRef} style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom:52 }}>
            <div className="badge" style={{ marginBottom:14 }}>Pricing</div>
            <h2 className="section-title">Simple, <span className="gradient-text">Transparent</span> Pricing</h2>
            <p className="section-sub" style={{ marginTop:14 }}>Start free, scale as you grow. No hidden fees.</p>
          </div>
          <div className="grid-3">
            {PLANS.map((plan, i) => (
              <div key={i} className="glass-card plan-card" style={{ padding:'36px 28px', opacity:0, position:'relative', border: plan.popular ? `1px solid ${plan.accent}50` : undefined, background: plan.popular ? `rgba(99,102,241,0.06)` : undefined }}>
                {plan.popular && (
                  <div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', background:`linear-gradient(135deg,${plan.accent},#06b6d4)`, color:'#fff', fontSize:'.7rem', fontWeight:700, padding:'5px 18px', borderRadius:99, letterSpacing:'.06em', textTransform:'uppercase', whiteSpace:'nowrap' }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontSize:'.8rem', color:'#94a3b8', fontWeight:600, textTransform:'uppercase', letterSpacing:'.08em', marginBottom:8 }}>{plan.name}</div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'2.4rem', color:plan.accent, marginBottom:6 }}>{plan.price}<span style={{ fontSize:'1rem', fontWeight:400, color:'#475569' }}>{plan.price !== 'Free' && plan.price !== 'Custom' ? '/mo' : ''}</span></div>
                <p style={{ color:'#94a3b8', fontSize:'.82rem', marginBottom:28, lineHeight:1.6 }}>{plan.desc}</p>
                <div style={{ marginBottom:28 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                      <Check size={14} color={plan.accent} />
                      <span style={{ fontSize:'.85rem', color:'#94a3b8' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`} style={{ width:'100%', justifyContent:'center' }}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
