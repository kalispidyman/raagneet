import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Network, Layers, FlaskConical, Zap, Globe, Shield, Code2, Database, Brain, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STACK = [
  { step:'01', label:'Foundation Models', desc:"Trained on trillion-token corpora using NEET's distributed training infrastructure across 10,000 GPUs.", color:'#6366f1', icon: Brain },
  { step:'02', label:'RAG & Memory', desc:'Retrieval-Augmented Generation with persistent long-term memory for context-aware, grounded responses.', color:'#8b5cf6', icon: Database },
  { step:'03', label:'Agent Orchestration', desc:'Multi-agent systems with tool use, planning, reasoning, and autonomous decision-making loops.', color:'#06b6d4', icon: Network },
  { step:'04', label:'Multimodal Fusion', desc:'Unified architecture processing text, images, audio, code and structured data simultaneously.', color:'#10b981', icon: Layers },
];

const INNOVATIONS = [
  { icon:Cpu, title:'NEET-1 Architecture', desc:'Our proprietary sparse mixture-of-experts model achieving 98.4% benchmark performance at 1/10th compute.', progress:94, color:'#6366f1', detail:'MoE · Sparse Attention · FlashAttention 3' },
  { icon:Network, title:'Neural Memory System', desc:'Persistent cross-session memory that adapts and improves with every interaction — no forgetting.', progress:88, color:'#8b5cf6', detail:'Vector DB · Episodic · Semantic' },
  { icon:Layers, title:'Edge Inference Engine', desc:'Sub-50ms inference on edge devices with our quantized model serving 50+ global PoPs.', progress:82, color:'#06b6d4', detail:'INT4 Quant · ONNX · TensorRT' },
  { icon:FlaskConical, title:'Self-Improving Loop', desc:'Models that autonomously identify weaknesses, generate training data, and fine-tune in production.', progress:76, color:'#10b981', detail:'RLHF · Constitutional AI · DPO' },
];

const FEATURES = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Sub-50ms inference with optimized tensor operations and edge deployment.' },
  { icon: Globe, title: 'Global Scale', desc: '50+ PoPs worldwide with intelligent routing and load balancing.' },
  { icon: Shield, title: 'Enterprise Secure', desc: 'SOC2 compliant, zero-trust architecture with end-to-end encryption.' },
  { icon: Code2, title: 'Developer First', desc: 'Clean APIs, comprehensive SDKs, and extensive documentation.' },
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
  if (v === true) return <span className="text-emerald-400">✓</span>;
  if (v === false) return <span className="text-red-400">✗</span>;
  return v;
};

export default function Technology() {
  const stackRef = useRef(null);
  const innoRef = useRef(null);
  const tableRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Header animations
    gsap.fromTo('.tech-header', { opacity:0, y:40 }, { opacity:1, y:0, duration:0.8, stagger:0.15, ease:'power3.out' });

    // Stack items
    gsap.fromTo('.stack-card',
      { opacity:0, x:-50, scale:0.95 },
      { opacity:1, x:0, scale:1, duration:0.6, stagger:0.15, ease:'power3.out',
        scrollTrigger:{ trigger:stackRef.current, start:'top 75%' }
      }
    );

    // Innovation cards
    gsap.fromTo('.inno-card',
      { opacity:0, y:50, rotateX:5 },
      { opacity:1, y:0, rotateX:0, duration:0.6, stagger:0.12, ease:'power3.out',
        scrollTrigger:{ trigger:innoRef.current, start:'top 75%' }
      }
    );

    // Features
    gsap.fromTo('.feat-card',
      { opacity:0, y:30 },
      { opacity:1, y:0, duration:0.5, stagger:0.1, ease:'power2.out',
        scrollTrigger:{ trigger:featuresRef.current, start:'top 78%' }
      }
    );

    // Progress bars
    document.querySelectorAll('.prog-bar-fill').forEach(el => {
      const target = el.dataset.progress;
      gsap.fromTo(el, { width:'0%' }, { width:target+'%', duration:1.4, ease:'power3.out',
        scrollTrigger:{ trigger:el, start:'top 85%' }
      });
    });

    // Table
    gsap.fromTo(tableRef.current,
      { opacity:0, y:40 },
      { opacity:1, y:0, duration:0.7, ease:'power3.out',
        scrollTrigger:{ trigger:tableRef.current, start:'top 78%' }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="relative">
      {/* Decorative orbs */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="tech-header inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md mb-6 opacity-0">
            <Cpu size={14} className="text-cyan-400" />
            <span className="text-sm font-medium text-indigo-200 tracking-wide">Technology Stack</span>
          </div>
          <h1 className="tech-header text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 opacity-0">
            <span className="block text-white">Powering</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Tomorrow's AI</span>
          </h1>
          <p className="tech-header text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed opacity-0">
            Our AI stack spans from foundation model training to edge deployment — engineered for extreme performance, reliability and infinite scale.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto" ref={stackRef}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">NEET AI Stack</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Four layers of intelligence, working in perfect harmony.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {STACK.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="stack-card group relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-500 opacity-0" style={{ perspective: '1000px' }}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110" style={{ background: `${s.color}15`, borderColor: `${s.color}30` }}>
                        <Icon size={22} color={s.color} />
                      </div>
                      <div className="font-mono text-2xl font-bold" style={{ color: s.color }}>{s.step}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{s.label}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto" ref={featuresRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="feat-card group relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-400 opacity-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Cards */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto" ref={innoRef}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Innovations</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Breakthrough research powering the next generation of AI.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {INNOVATIONS.map((inn, i) => {
              const Icon = inn.icon;
              return (
                <div key={i} className="inno-card group relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-500 opacity-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: `${inn.color}15`, borderColor: `${inn.color}30` }}>
                        <Icon size={20} color={inn.color} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{inn.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{inn.desc}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-mono text-slate-500">{inn.detail}</span>
                        <span className="text-sm font-bold" style={{ color: inn.color }}>{inn.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className="prog-bar-fill h-full rounded-full transition-all duration-300" data-progress={inn.progress} style={{ background: `linear-gradient(90deg, ${inn.color}, #06b6d4)`, width: '0%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">NEET-1 vs <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Leading Models</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">See how we stack up against the competition.</p>
          </div>
          <div ref={tableRef} className="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] overflow-hidden opacity-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left p-5 text-sm font-semibold text-slate-300">Feature</th>
                    <th className="p-5 text-sm font-semibold text-indigo-300">NEET-1 ✦</th>
                    <th className="p-5 text-sm font-semibold text-slate-400">GPT-4o</th>
                    <th className="p-5 text-sm font-semibold text-slate-400">Claude 3.5</th>
                    <th className="p-5 text-sm font-semibold text-slate-400">Gemini 2.5</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="p-5 text-sm text-slate-300 font-medium">{row.feature}</td>
                      <td className="p-5 text-sm text-indigo-300 font-semibold text-center">{renderCell(row.neet)}</td>
                      <td className="p-5 text-sm text-slate-400 text-center">{renderCell(row.gpt)}</td>
                      <td className="p-5 text-sm text-slate-400 text-center">{renderCell(row.claude)}</td>
                      <td className="p-5 text-sm text-slate-400 text-center">{renderCell(row.gemini)}</td>
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