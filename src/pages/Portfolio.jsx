import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'FinTech Dashboard', category: 'Web App', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', span: 'md:col-span-2 md:row-span-2' },
    { title: 'E-Commerce App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1512928330313-5bb9cb1f6ba8?auto=format&fit=crop&w=800&q=80', span: '' },
    { title: 'AI Analytics', category: 'Platform', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80', span: '' },
    { title: 'SaaS Platform', category: 'Web Dev', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', span: 'md:col-span-1 md:row-span-2' },
    { title: 'Healthcare Portal', category: 'Enterprise', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', span: '' },
    { title: 'Logistics Tracker', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c50a30?auto=format&fit=crop&w=800&q=80', span: '' }
  ];

  return (
    <div className="pt-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold text-gradient max-w-3xl mx-auto mb-4">Our <span className="text-gradient">Portfolio</span></h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Explore some of our recent work and see how we've helped businesses achieve their digital goals.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`glass-panel overflow-hidden relative group animate-fade-in-up min-h-[250px] ${project.span}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{project.category}</span>
              <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;