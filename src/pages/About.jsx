import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container section">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="section-title">About <span className="text-gradient">Neet's Studios</span></h1>
          <p className="section-subtitle">We are a team of passionate technologists dedicated to crafting premium digital experiences.</p>
        </div>

        <div className="grid grid-2" style={{ gap: '40px', alignItems: 'center', marginBottom: '80px' }}>
          <div className="animate-fade-in-up delay-100">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Mission</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '15px', fontSize: '1.1rem' }}>
              At Neet's Studios, our mission is to empower businesses through innovative technology. We bridge the gap between complex technical challenges and elegant, user-centric solutions.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
              We believe in quality over quantity, focusing on performance, scalability, and premium design aesthetics in every project we undertake.
            </p>
          </div>
          <div className="glass-panel animate-fade-in-up delay-200" style={{ height: '350px', backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--color-surface)', borderRadius: '24px' }}></div>
          </div>
        </div>

        <div className="grid grid-3 text-center">
          <div className="glass-panel p-8 animate-fade-in-up delay-100">
            <Target size={48} className="mx-auto mb-4" style={{ color: 'var(--color-primary)' }} />
            <h3 className="text-xl font-bold mb-2">Vision</h3>
            <p className="text-muted">To be the global leader in premium digital transformations.</p>
          </div>
          <div className="glass-panel p-8 animate-fade-in-up delay-200">
            <Users size={48} className="mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
            <h3 className="text-xl font-bold mb-2">Team</h3>
            <p className="text-muted">A diverse group of expert developers, designers, and strategists.</p>
          </div>
          <div className="glass-panel p-8 animate-fade-in-up delay-300">
            <Award size={48} className="mx-auto mb-4" style={{ color: 'var(--color-accent)' }} />
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-muted">Uncompromising standards in code, design, and delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
