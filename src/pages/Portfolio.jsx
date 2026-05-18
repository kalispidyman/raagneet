import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Search, Plus } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web', 'App', 'Branding', 'UI/UX'];

  const projects = [
    {
      title: "Nebula Dashboard",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      desc: "A futuristic data visualization platform for space telemetry."
    },
    {
      title: "Zenith Mobile",
      category: "App",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      desc: "Mental health and mindfulness tracking application with glassmorphic UI."
    },
    {
      title: "Ethereal E-commerce",
      category: "Web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      desc: "High-end luxury fashion store with seamless transitions."
    },
    {
      title: "Nova Branding",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
      desc: "Complete visual identity for a renewable energy startup."
    },
    {
      title: "Quantum Pay",
      category: "App",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      desc: "Next-gen cryptocurrency wallet with military-grade security."
    },
    {
      title: "Aura Creative",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
      desc: "Portfolio website for a digital creative agency."
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-premium"
            >
              Selected Works
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400"
            >
              A showcase of our most ambitious projects where design meets functionality in perfect harmony.
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-accent-teal text-white shadow-[0_0_15px_rgba(13,148,136,0.4)]' 
                    : 'glass-container text-slate-400 hover:text-white border-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden glass-container border-white/[0.05]"
              >
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-lg bg-accent-teal/20 backdrop-blur-md border border-accent-teal/30 text-accent-cyan text-[10px] font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.desc}
                    </p>
                    <div className="flex gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <button className="w-12 h-12 rounded-xl glass-container flex items-center justify-center text-white hover:bg-accent-teal transition-colors">
                        <ExternalLink size={18} />
                      </button>
                      <button className="w-12 h-12 rounded-xl glass-container flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                        <Github size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Corner Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass-container flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                  <Plus size={24} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
