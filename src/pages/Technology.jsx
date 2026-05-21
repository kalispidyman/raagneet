import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Network, Layers, FlaskConical, Check, X, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STACK = [
  { step:'01', label:'Foundation Models', desc:"Trained on trillion-token corpora using NEET's distributed training infrastructure across 10,000 GPUs.", color:'#6366f1' },
  { step:'02', label:'RAG & Memory', desc:'Retrieval-Augmented Generation with persistent long-term memory for context-aware, grounded responses.', color:'#8b5cf6' },
  { step:'03', label:'Agent Orchestration', desc:'Multi-agent systems with tool use, planning, reasoning, and autonomous decision-making loops.', color:'#06b6d4' },
  { step:'04', label:'Multimodal Fusion', desc:'Unified architecture processing text, images, audio, code and structured data simultaneously.', color:'#10b981' },
];

const INNOVATIONS = [
  { icon:Cpu, title:'NEET-1 Architecture', desc:'Our proprietary sparse mixture-of-experts model achieving 98.4% benchmark performance at 1/10th compute.', progress:94, color:'#6366f1', detail:'MoE · Sparse Attention · FlashAttention 3' },
  { icon:Network, title:'Neural Memory System', desc:'Persistent cross-session memory that adapts and improves with every interaction — no forgetting.', progress:88, color:'#8b5cf6', detail:'Vector DB · Episodic · Semantic' },
  { icon:Layers, title:'Edge Inference Engine', desc:'Sub-50ms inference on edge devices with our quantized model serving 50+ global PoPs.', progress:82, color:'#06b6d4', detail:'INT4 Quant · ONNX · TensorRT' },
  { icon:FlaskConical, title:'Self-Improving Loop', desc:'Models that autonomously identify weaknesses, generate training data, and fine-tune in production.', progress:76, color:'#10b981', detail:'RLHF · Constitutional AI · DPO' },
];

const TABLE_ROWS = [
  { feature:'Context Window', neet:'2M tokens', gpt:'128K', claude:'200K', gemini:'1M' },
  { feature:'Reasoning Score', neet:'97.4%', gpt:'91.2%', claude:'93.1%', gemini:'89.8%' },
  { feature:'Inference Speed', neet:'<50ms', gpt:'120ms', claude:'90ms', gemini:'80ms' },
  { feature:'Multilingual', neet:'127 langs', gpt:'100+', claude:'80+', gemini:'100+' },
  { feature:'Vision + Audio', neet:true, gpt:true, claude:false, gemini:true },
  { feature:'On-Premise Deploy', neet:true, gpt:false, claude:false, gemini:false },
  { feature:'Custom Fine-tuning', neet:true, gpt:true, claude:true, gemini:true },
];

const renderCell = (v) => {
  if (v === true) return <Check size={16} color="#10b981" />;
  if (v === false) return <X size={16} color="#ef4444" />;
  return v;
};

export default function Technology() {
  const stackRef = useRef(null);
  const innoRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.page-header-anim', { opacity:0, y:30 }, { opacity:1, y:0, duration:0.7, stagger:0.12 });

    gsap.fromTo('.stack-item',
      { opacity:0, x:-30 },
      { opacity:1, x:0, duration:0.55, stagger:0.13,
        scrollTrigger:{ trigger:stackRef.current, start:'top 78%' }
      }
    );

    gsap.fromTo('.inno-card',
      { opacity:0, y:40 },
      { opacity:1, y:0, duration:0.55, stagger:0.12,
        scrollTrigger:{ trigger:innoRef.current, start:'top 78%' }
      }
    );

    // Animate progress bars
    document.querySelectorAll('.prog-fill').forEach(el => {
      const target = el.dataset.w;
      gsap.fromTo(el, { width:'0%' }, { width:target+'%', duration:1.2, ease:'power2.out',
        scrollTrigger:{ trigger:el, start:'top 85%' }
      });
    });

    gsap.fromTo(tableRef.current,
      { opacity:0, y:30 },
      { opacity:1, y:0, duration:0.6,
        scrollTrigger:{ trigger:tableRef.current, start:'top 78%' }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div style={{ position:'relative', zIndex:1 }}>
      <div className="orb" style={{ width:500, height:500, background:'radial-gradient(circle,rgba(6,182,212,0.1),transparent 70%)', top:0, left:'20%' }} />

      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div className="badge page-header-anim" style={{ marginBottom:16 }}><Cpu size={12} /> Technology</div>
          <h1 className="section-title page-header-anim" style={{ marginBottom:16 }}>
            Powering <span className="gradient-text">Tomorrow's AI</span>
          </h1>
          <p className="section-sub page-header-anim" style={{ margin:'0 auto' }}>
            Our AI stack spans from foundation model training to edge deployment — built for performance, reliability and scale.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <section className="section-sm">
        <div className="container" ref={stackRef}>
          <div style={{ marginBottom:40 }}>
            <div className="badge" style={{ marginBottom:12 }}>Architecture</div>
            <h2 className="section-title" style={{ fontSize:'clamp(1.6rem,3.5vw,2.4rem)' }}>The <span className="gradient-text">NEET AI Stack</span></h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {STACK.map((s, i) => (
              <div key={i} className="glass-card stack-item" style={{ padding:'24px 28px', display:'flex', gap:24, alignItems:'flex-start', opacity:0 }}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'1.3rem', fontWeight:700, color:s.color, minWidth:36 }}>{s.step}</div>
                <div style={{ flex:1 }}>
                  <h3 style={{ fontFamily:"var(--ffd)", fontWeight:700, fontSize:'1rem', marginBottom:6, color:s.color }}>{s.label}</h3>
                  <p style={{ color:'#94a3b8', fontSize:'.87rem', lineHeight:1.7 }}>{s.desc}</p>
                </div>
                <div style={{ width:4, alignSelf:'stretch', borderRadius:99, background:`linear-gradient(to bottom,${s.color},transparent)`, flexShrink:0, minHeight:60 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Cards */}
      <section className="section" style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" ref={innoRef}>
          <div style={{ marginBottom:48 }}>
            <div className="badge" style={{ marginBottom:12 }}>Research</div>
            <h2 className="section-title" style={{ fontSize:'clamp(1.6rem,3.5vw,2.4rem)' }}>Core <span className="gradient-text">Innovations</span></h2>
          </div>
          <div className="grid-2">
            {INNOVATIONS.map((inn, i) => {
              const Icon = inn.icon;
              return (
                <div key={i} className="glass-card inno-card" style={{ padding:'28px', opacity:0 }}>
                  <div style={{ display:'flex', gap:14, alignItems:'flex-start', marginBottom:16 }}>
                    <div style={{ width:44, height:44, borderRadius:12, background:`${inn.color}18`, border:`1px solid ${inn.color}30`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <Icon size={20} color={inn.color} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily:"var(--ffd)", fontWeight:700, fontSize:'.95rem', marginBottom:4 }}>{inn.title}</h3>
                      <p style={{ color:'#94a3b8', fontSize:'.82rem', lineHeight:1.65 }}>{inn.desc}</p>
                    </div>
                  </div>
                  <div style={{ marginTop:16 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                      <span style={{ fontSize:'.7rem', color:'#475569', fontFamily:"'JetBrains Mono',monospace" }}>{inn.detail}</span>
                      <span style={{ fontSize:'.72rem', fontWeight:700, color:inn.color }}>{inn.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill prog-fill" data-w={inn.progress} style={{ background:`linear-gradient(90deg,${inn.color},#06b6d4)` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-sm" style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ marginBottom:40 }}>
            <div className="badge" style={{ marginBottom:12 }}>Comparison</div>
            <h2 className="section-title" style={{ fontSize:'clamp(1.6rem,3.5vw,2.4rem)' }}>NEET-1 vs <span className="gradient-text">Leading Models</span></h2>
          </div>
          <div ref={tableRef} className="glass" style={{ borderRadius:20, overflow:'hidden', opacity:0 }}>
            <div style={{ overflowX:'auto' }}>
              <table className="gl-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th style={{ color:'#a5b4fc' }}>NEET-1 ✦</th>
                    <th>GPT-4o</th>
                    <th>Claude 3.5</th>
                    <th>Gemini 2.5</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, i) => (
                    <tr key={i}>
                      <td>{row.feature}</td>
                      <td style={{ color:'#a5b4fc', fontWeight:600 }}>{renderCell(row.neet)}</td>
                      <td>{renderCell(row.gpt)}</td>
                      <td>{renderCell(row.claude)}</td>
                      <td>{renderCell(row.gemini)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}