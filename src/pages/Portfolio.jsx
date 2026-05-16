import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'FinTech Dashboard', category: 'Web App', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', span: 'col-span-2 row-span-2' },
    { title: 'E-Commerce App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1512928330313-5bb9cb1f6ba8?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
    { title: 'AI Analytics', category: 'Platform', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
    { title: 'SaaS Platform', category: 'Web Dev', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-2' },
    { title: 'Healthcare Portal', category: 'Enterprise', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
    { title: 'Logistics Tracker', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c50a30?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container section">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="section-title">Our <span className="text-gradient">Portfolio</span></h1>
          <p className="section-subtitle">Explore some of our recent work and see how we've helped businesses achieve their digital goals.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`glass-panel overflow-hidden relative group animate-fade-in-up delay-${(index % 3 + 1) * 100}`}
              style={{ borderRadius: '20px', minHeight: '250px' }}
            >
              <div 
                style={{ 
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
                  opacity: 0.6, transition: 'transform 0.5s ease', zIndex: 0
                }}
                className="group-hover:scale-110"
              />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(15,10,31,0.9) 0%, transparent 100%)', zIndex: 1 }} />
              
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 2 }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-primary)' }}>{project.category}</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '5px 0' }}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
