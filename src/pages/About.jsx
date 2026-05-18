import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Rocket } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2020', title: 'The Genesis', desc: 'RAAGNEET was founded with a vision to redefine digital aesthetics.' },
    { year: '2021', title: 'Global Reach', desc: 'Expanded our operations to serve clients across 3 continents.' },
    { year: '2022', title: 'Innovation Peak', desc: 'Launched our proprietary design system for high-end glassmorphism.' },
    { year: '2023', title: 'Future Ready', desc: 'Integrated AI-driven development workflows to speed up delivery.' },
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-premium"
          >
            Our Story & Vision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            We are a team of passionate designers and engineers dedicated to creating immersive digital experiences that leave a lasting impression.
          </motion.p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Story Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-modern p-10 lg:p-16 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/10 blur-3xl group-hover:bg-accent-teal/20 transition-colors" />
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <Target className="text-accent-teal" size={32} />
              The Mission
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                At RAAGNEET, we believe that design is not just how it looks, but how it works and feels. Our mission is to bridge the gap between complex technology and human-centric design.
              </p>
              <p>
                Every project we undertake is a journey into the future of digital interaction. We specialize in glassmorphism and motion-rich interfaces that provide a tactile, premium feel to every user.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <Users size={18} className="text-accent-cyan" />
                    Community
                  </h4>
                  <p className="text-sm">Building lasting relationships with our clients and the tech community.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <Award size={18} className="text-accent-purple" />
                    Quality
                  </h4>
                  <p className="text-sm">Uncompromising standards in every line of code and pixel of design.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Milestone Timeline */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 px-4">
              <Rocket className="text-accent-purple" size={32} />
              Key Milestones
            </h2>
            <div className="relative pl-8 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-accent-teal before:via-accent-purple before:to-transparent">
              {milestones.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full glass-container flex items-center justify-center border-accent-teal/50 bg-slate-900">
                    <div className="w-2 h-2 rounded-full bg-accent-teal" />
                  </div>
                  <div className="glass-card-modern p-6">
                    <span className="text-accent-cyan font-bold text-sm mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: 'Transparency', desc: 'Clear communication at every step.' },
            { title: 'Innovation', desc: 'Pushing the boundaries of tech.' },
            { title: 'Reliability', desc: 'Dependable delivery, always.' },
            { title: 'Impact', desc: 'Designs that drive real results.' },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-container p-8 rounded-2xl text-center border-white/[0.05] hover:border-accent-teal/30 transition-colors"
            >
              <h4 className="text-lg font-bold mb-2">{value.title}</h4>
              <p className="text-slate-500 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
