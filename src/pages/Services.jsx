import React from 'react';
import { Monitor, Smartphone, Cloud, Database, Shield, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Monitor size={40} />, title: 'Web Development', desc: 'Custom, high-performance web applications built with modern frameworks.' },
    { icon: <Smartphone size={40} />, title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences for iOS and Android.' },
    { icon: <Cloud size={40} />, title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and serverless architecture.' },
    { icon: <Database size={40} />, title: 'Data Engineering', desc: 'Robust data pipelines and analytics platforms.' },
    { icon: <Shield size={40} />, title: 'Cybersecurity', desc: 'Comprehensive security audits and secure-by-design implementations.' },
    { icon: <PenTool size={40} />, title: 'UI/UX Design', desc: 'User-centered design systems and premium digital interfaces.' }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container section">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="section-title">Our <span className="text-gradient">Services</span></h1>
          <p className="section-subtitle">We offer a comprehensive suite of IT solutions to help your business thrive in the digital age.</p>
        </div>

        <div className="grid grid-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`glass-panel p-8 transition-transform hover:-translate-y-2 animate-fade-in-up delay-${(index % 3 + 1) * 100}`}
              style={{ padding: '30px', borderRadius: '20px' }}
            >
              <div className="text-primary mb-6" style={{ color: 'var(--color-primary)' }}>{service.icon}</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{service.title}</h3>
              <p className="text-muted" style={{ color: 'var(--color-text-muted)' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
