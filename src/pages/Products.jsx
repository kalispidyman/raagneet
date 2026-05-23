import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Globe, Box, Workflow, Smartphone, Palette, CheckCircle2, Sparkles } from 'lucide-react';

const mainServices = [
  {
    icon: <Bot size={28} />,
    title: "AI & Autonomous Agents",
    description: "Custom AI bots, LLM integrations, and autonomous agentic workflows that automate complex business operations.",
    features: ["Custom LLM Fine-tuning", "Agentic Workflows", "RAG Systems"]
  },
  {
    icon: <Globe size={28} />,
    title: "Premium Web Applications",
    description: "High-performance, scalable web platforms built with modern React, Next.js, and glassmorphic UI/UX design.",
    features: ["SaaS Dashboards", "E-commerce Platforms", "Custom Portals"]
  },
  {
    icon: <Box size={28} />,
    title: "Immersive 3D Experiences",
    description: "Interactive WebGL and React Three Fiber environments that push the boundaries of digital storytelling and branding.",
    features: ["WebGL Animations", "Product Configurators", "Virtual Showrooms"]
  },
  {
    icon: <Workflow size={28} />,
    title: "Business Automation",
    description: "End-to-end process automation, API integrations, and custom internal tools to eliminate manual bottlenecks.",
    features: ["CRM Integrations", "Automated Pipelines", "Data Scraping"]
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile-First Solutions",
    description: "Responsive, cross-platform mobile applications and PWA solutions designed for seamless user experiences.",
    features: ["React Native Apps", "Progressive Web Apps", "Offline Support"]
  },
  {
    icon: <Palette size={28} />,
    title: "UI/UX & Brand Identity",
    description: "Strategic design systems, premium interfaces, and brand identities that convert visitors into loyal customers.",
    features: ["Design Systems", "Prototyping", "Brand Guidelines"]
  }
];

const processSteps = [
  { step: "01", title: "Discovery & Strategy", desc: "We deep-dive into your business goals, target audience, and technical requirements to map out a winning strategy." },
  { step: "02", title: "Design & Prototype", desc: "Our designers craft premium, glassmorphic interfaces and interactive prototypes for your approval before coding begins." },
  { step: "03", title: "Agile Development", desc: "Our engineering team builds your solution using cutting-edge tech stacks, ensuring scalability and blazing-fast performance." },
  { step: "04", title: "Launch & Scale", desc: "We handle deployment, CI/CD pipelines, and post-launch support to ensure your product scales seamlessly with your growth." }
];

export default function Products() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-glass-border mb-6">
            <Sparkles size={16} className="text-accent-cyan" />
            <span className="text-sm font-medium text-slate-300">Premium Digital Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Services That <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Drive Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
            We engineer high-end AI systems, immersive 3D web experiences, and scalable applications tailored to elevate your brand and automate your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 transition-all duration-300 flex items-center gap-2">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/technology" className="px-8 py-3.5 rounded-xl bg-glass border border-glass-border text-white font-semibold hover:bg-glass-heavy hover:border-glass-border-hover transition-all duration-300">
              Explore Our Tech Stack
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Core Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">From intelligent automation to breathtaking visual interfaces, we deliver end-to-end digital excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-glass border border-glass-border backdrop-blur-md hover:border-glass-border-hover hover:bg-glass-heavy transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/10 flex items-center justify-center text-accent-cyan mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-accent-cyan flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-16 bg-dark-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Proven Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A streamlined, transparent workflow designed to deliver exceptional results on time and within budget.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-display font-black text-white/5 absolute -top-6 -left-2 select-none">{step.step}</div>
                <div className="relative pt-10">
                  <h3 className="text-xl font-display font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="p-10 md:p-16 rounded-3xl bg-glass border border-glass-border backdrop-blur-md text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Ready to Build Something Extraordinary?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
                Let's discuss your vision. Whether you need an autonomous AI agent, a premium 3D website, or a full-scale SaaS platform, we have the expertise to bring it to life.
              </p>
              <Link to="/contact" className="inline-flex px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 transition-all duration-300 items-center gap-2">
                Schedule a Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}