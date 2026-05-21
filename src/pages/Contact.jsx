import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MessageCircle, MapPin, Send, ChevronDown, ChevronUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  { q:'How do I get access to NEET AI bots?', a:'Sign up for free and get instant access to NeetChat and CodeForge. Pro and Enterprise plans unlock all 6 bots. Apply for the waitlist for Preview-tier bots.' },
  { q:'What models power the NEET AI platform?', a:'Our platform runs NEET-1 (our proprietary model), plus integrations with Claude 3.5 Sonnet, Gemini 2.5 Flash, and GPT-4o — selectable per use case.' },
  { q:'Can I fine-tune a model on my own data?', a:'Yes. Pro and Enterprise users can upload datasets and trigger fine-tuning jobs via our dashboard or API. Results deploy in hours, not days.' },
  { q:'Is there an API I can integrate into my app?', a:'Absolutely. Our REST and WebSocket APIs are fully documented. SDK libraries available for JavaScript, Python, and Go. Rate limits scale with your plan.' },
  { q:'Do you offer on-premise or private cloud deployment?', a:'Enterprise customers can deploy NEET AI systems in their own VPC or on bare-metal servers. Contact our sales team for architecture details.' },
];

const INFO = [
  { icon:Mail, label:'Email', value:'hello@neetai.studio', color:'#6366f1' },
  { icon:MessageCircle, label:'Discord', value:'discord.gg/neetai', color:'#8b5cf6' },
  { icon:MapPin, label:'Headquarters', value:'San Francisco, CA', color:'#06b6d4' },
];

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'general', message:'' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    gsap.fromTo('.page-header-anim', { opacity:0, y:30 }, { opacity:1, y:0, duration:0.7, stagger:0.12 });
    gsap.fromTo('.contact-form-card',
      { opacity:0, y:40 },
      { opacity:1, y:0, duration:0.65, scrollTrigger:{ trigger:'.contact-form-card', start:'top 80%' } }
    );
    gsap.fromTo('.info-card',
      { opacity:0, y:30 },
      { opacity:1, y:0, duration:0.5, stagger:0.1, scrollTrigger:{ trigger:'.info-card', start:'top 85%' } }
    );
    gsap.fromTo('.faq-section',
      { opacity:0, y:30 },
      { opacity:1, y:0, duration:0.6, scrollTrigger:{ trigger:'.faq-section', start:'top 80%' } }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1400));
    setSending(false);
    setSent(true);
    setForm({ name:'', email:'', subject:'general', message:'' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div style={{ position:'relative', zIndex:1 }}>
      <div className="orb" style={{ width:450, height:450, background:'radial-gradient(circle,rgba(99,102,241,0.1),transparent 70%)', top:0, left:'30%' }} />

      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div className="badge page-header-anim" style={{ marginBottom:16 }}><Mail size={12} /> Contact</div>
          <h1 className="section-title page-header-anim" style={{ marginBottom:16 }}>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="section-sub page-header-anim" style={{ margin:'0 auto' }}>
            Questions, partnership enquiries, or just want to say hi — we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Form + Info */}
      <section className="section-sm">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'clamp(1fr,1.4fr,1.4fr) clamp(1fr,1fr,1fr)', gap:28, alignItems:'start' }} className="contact-grid">

            {/* Form */}
            <div className="glass-card contact-form-card" style={{ padding:'36px', opacity:0 }}>
              {sent ? (
                <div style={{ textAlign:'center', padding:'40px 0' }}>
                  <div style={{ fontSize:'2.5rem', marginBottom:16 }}>✅</div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, marginBottom:8 }}>Message Sent!</h3>
                  <p style={{ color:'#94a3b8', fontSize:'.88rem' }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.2rem', marginBottom:24 }}>Send a Message</h3>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                    <div className="form-group">
                      <label>Name</label>
                      <input name="name" className="form-input" placeholder="Your name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input name="email" type="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <select name="subject" className="form-select" value={form.subject} onChange={handleChange}>
                      <option value="general">General Inquiry</option>
                      <option value="enterprise">Enterprise Sales</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="press">Press & Media</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" className="form-textarea" placeholder="Tell us what's on your mind..." value={form.message} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }} disabled={sending}>
                    {sending ? (
                      <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation:'spin 0.7s linear infinite' }}><path d="M4 4v5h.582m15.356 2A8 8 0 1 1 4.582 9"/></svg> Sending…</>
                    ) : (
                      <>Send Message <Send size={15} /></>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info cards */}
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              {INFO.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div key={i} className="glass-card info-card" style={{ padding:'22px 24px', display:'flex', gap:16, alignItems:'center', opacity:0 }}>
                    <div style={{ width:44, height:44, borderRadius:12, background:`${info.color}18`, border:`1px solid ${info.color}30`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <Icon size={20} color={info.color} />
                    </div>
                    <div>
                      <div style={{ fontSize:'.72rem', color:'#475569', fontWeight:600, textTransform:'uppercase', letterSpacing:'.08em', marginBottom:3 }}>{info.label}</div>
                      <div style={{ fontWeight:600, fontSize:'.9rem', color:'#f1f5f9' }}>{info.value}</div>
                    </div>
                  </div>
                );
              })}

              {/* Response time */}
              <div className="glass-card info-card" style={{ padding:'22px 24px', opacity:0, background:'rgba(99,102,241,0.06)', border:'1px solid rgba(99,102,241,0.2)' }}>
                <div style={{ fontSize:'.72rem', color:'#6366f1', fontWeight:600, textTransform:'uppercase', letterSpacing:'.08em', marginBottom:8 }}>Typical Response Time</div>
                <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
                  {[{ t:'Community', v:'48h' }, { t:'Pro', v:'12h' }, { t:'Enterprise', v:'2h' }].map(r => (
                    <div key={r.t}>
                      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontWeight:700, fontSize:'1.1rem', color:'#a5b4fc' }}>{r.v}</div>
                      <div style={{ fontSize:'.7rem', color:'#475569' }}>{r.t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div className="container faq-section" style={{ opacity:0 }}>
          <div className="text-center" style={{ marginBottom:48 }}>
            <div className="badge" style={{ marginBottom:14 }}>FAQ</div>
            <h2 className="section-title" style={{ fontSize:'clamp(1.6rem,3.5vw,2.4rem)' }}>
              Common <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div style={{ maxWidth:720, margin:'0 auto' }}>
            {FAQS.map((faq, i) => (
              <div key={i} className="accordion-item">
                <button className="accordion-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  {openFaq === i ? <ChevronUp size={18} color="#6366f1" style={{ flexShrink:0 }} /> : <ChevronDown size={18} color="#475569" style={{ flexShrink:0 }} />}
                </button>
                {openFaq === i && (
                  <div className="accordion-body">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
