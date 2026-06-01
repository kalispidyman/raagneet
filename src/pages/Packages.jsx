import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Zap, Shield, Globe, Code, Palette, Headphones, Rocket } from 'lucide-react';

const PACKAGES = [
  {
    name: 'Starter',
    price: 4000,
    color: 'from-cyan-400 to-blue-500',
    borderGlow: 'rgba(6, 182, 212, 0.3)',
    features: [
      { icon: Globe, text: '1 Page Responsive Website' },
      { icon: Palette, text: 'Basic UI/UX Design' },
      { icon: Code, text: 'HTML5 / CSS3 / Tailwind' },
      { icon: Zap, text: 'Mobile‑Friendly Layout' },
      { icon: Shield, text: 'SSL Certificate Setup' },
      { icon: Headphones, text: '1 Week Email Support' },
    ],
    notIncluded: ['Custom Backend', 'CMS', 'SEO Optimization', 'Source Files'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: 8000,
    color: 'from-purple-500 to-indigo-600',
    borderGlow: 'rgba(139, 92, 246, 0.3)',
    features: [
      { icon: Globe, text: 'Up to 5 Pages + Blog' },
      { icon: Palette, text: 'Premium UI/UX Design' },
      { icon: Code, text: 'React / Next.js Frontend' },
      { icon: Zap, text: 'Speed & SEO Optimization' },
      { icon: Shield, text: 'Advanced Security Config' },
      { icon: Rocket, text: 'Deployment & Hosting Help' },
      { icon: Headphones, text: '1 Month Priority Support' },
    ],
    notIncluded: ['Custom Backend', 'E‑commerce'],
    cta: 'Go Professional',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 15000,
    color: 'from-amber-400 to-orange-600',
    borderGlow: 'rgba(251, 191, 36, 0.3)',
    features: [
      { icon: Globe, text: 'Unlimited Pages & Sections' },
      { icon: Palette, text: 'Custom UI/UX & Branding' },
      { icon: Code, text: 'Full‑Stack Development' },
      { icon: Shield, text: 'API Integration & Backend' },
      { icon: Rocket, text: 'E‑commerce / Payments Setup' },
      { icon: Zap, text: 'Advanced SEO & Analytics' },
      { icon: Headphones, text: '3 Months Dedicated Support' },
      { icon: Star, text: 'Source Files Included' },
    ],
    notIncluded: [],
    cta: 'Go Enterprise',
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 18 }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Packages() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Header with entrance animation */}
      <section className="relative pt-32 pb-16 px-4 text-center">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md mb-6">
            <Rocket size={14} className="text-cyan-400" />
            <span className="text-sm font-medium text-cyan-200 tracking-wide">Website Creation Packages</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-5 text-white">
            Build Your <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Dream Website</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. All packages include modern design, lightning‑fast performance, and expert support.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards with entrance animation */}
      <section className="relative pb-24 px-4">
        <motion.div
          className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              className={`relative group p-8 rounded-3xl backdrop-blur-xl
                border border-white/[0.06] hover:border-white/[0.14]
                transition-all duration-500
                ${pkg.popular ? 'bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_0_40px_rgba(139,92,246,0.15)]' : 'bg-white/[0.02]'}
                hover:-translate-y-2`}
            >
              {/* Animated border glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"
                style={{ background: `linear-gradient(135deg, ${pkg.borderGlow}, transparent)` }} />

              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative z-10 flex flex-col gap-6">
                {/* Name */}
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-slate-400">₹</span>
                  <span className="text-5xl font-extrabold text-white tracking-tight">{pkg.price.toLocaleString()}</span>
                  <span className="text-sm text-slate-500 ml-1">/ project</span>
                </div>

                {/* Divider */}
                <hr className="border-white/[0.05]" />

                {/* Features list */}
                <ul className="space-y-3.5 flex-1">
                  {pkg.features.map((feat, i) => {
                    const Icon = feat.icon;
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center bg-gradient-to-br ${pkg.color} p-0.5`}>
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-sm text-slate-300 leading-tight">{feat.text}</span>
                      </li>
                    );
                  })}
                  {pkg.notIncluded.map((item, i) => (
                    <li key={`ni-${i}`} className="flex items-start gap-3 opacity-40">
                      <span className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center bg-white/[0.04]">
                        <Check size={12} className="text-slate-500" />
                      </span>
                      <span className="text-sm text-slate-500 line-through decoration-slate-500/50">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide uppercase text-center
                    bg-gradient-to-r ${pkg.color} text-white
                    hover:shadow-lg transition-all duration-300 group/link`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {pkg.cta}
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}