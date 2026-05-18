import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    { title: 'Nexus Dashboard', category: 'Enterprise', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', span: 'md:col-span-2 md:row-span-2' },
    { title: 'Lumina App', category: 'Mobile UI', image: 'https://images.unsplash.com/photo-1512928330313-5bb9cb1f6ba8?auto=format&fit=crop&w=800&q=80', span: '' },
    { title: 'Sentient AI', category: 'AI Platform', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80', span: '' },
    { title: 'Vortex Cloud', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', span: 'md:col-span-1 md:row-span-2' },
    { title: 'HealthFlow', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', span: '' },
    { title: 'Atlas Logistics', category: 'Logistics', image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c50a30?auto=format&fit=crop&w=800&q=80', span: '' }
  ];

  return (
    <div className="relative min-h-screen bg-dark-950 overflow-hidden">
      {/* BACKGROUND ORBS */}
      <div className="absolute inset-0 z-0">
        <div className="bg-orb w-[600px] h-[600px] bg-accent-teal top-[-10%] left-[-10%] animate-drift-slow opacity-10" />
        <div className="bg-orb w-[800px] h-[800px] bg-accent-purple top-[40%] right-[-20%] animate-drift-slower opacity-10" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-premium">
            Our <span className="text-accent-cyan">Portfolio</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore a curated selection of our most ambitious projects, where engineering excellence meets artistic vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-[2.5rem] bg-dark-900 border border-white/[0.08] min-h-[300px] ${project.span} transition-all duration-700 hover:border-white/[0.2] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)]`}
            >
              {/* IMAGE WITH HOVER ZOOM */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1 opacity-70 grayscale-[50%] group-hover:grayscale-0"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* GLASS OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
              
              {/* CONTENT PANEL (GLASSMORPHIC) */}
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-container !bg-white/[0.05] !backdrop-blur-xl !rounded-3xl translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-between">
                <div>
                  <span className="text-xs font-black tracking-[0.2em] text-accent-cyan uppercase mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.1] border border-white/[0.1] flex items-center justify-center text-white group-hover:bg-accent-cyan group-hover:text-dark-950 transition-all duration-500">
                  <ExternalLink size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RECOGNITION SECTION */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
          {['Awwwards', 'FWA', 'CSS Design', 'Behance'].map((award) => (
            <div key={award} className="flex flex-col items-center justify-center py-10 glass-container !rounded-3xl border-dashed">
              <span className="text-xl font-black text-white">{award}</span>
              <span className="text-[10px] uppercase tracking-widest mt-2 text-slate-500 font-bold">Recognition</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;