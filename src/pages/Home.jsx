import React from 'react';
import HeroSection from '../components/HeroSection';
import { ArrowRight, Code, Shield, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Premium Hero Section */}
      <HeroSection />
      
      {/* Why Choose Us Section */}
      <section className="section" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <h2 className="section-title">Why Choose <span className="text-gradient">Neet's Studios</span>?</h2>
          <p className="section-subtitle">We don't just build software, we build digital assets that drive growth and innovation for your business.</p>
          
          <div className="grid grid-3" style={{ marginTop: '40px' }}>
            <div className="glass-panel p-8 text-center animate-fade-in-up" style={{ padding: '30px', transition: 'transform 0.3s ease' }}>
              <div style={{ background: 'rgba(0, 210, 255, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: 'var(--color-primary)' }}>
                <Zap size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient" style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Innovation First</h3>
              <p className="text-muted" style={{ color: 'var(--color-text-muted)' }}>Leveraging the latest technologies to build scalable, high-performance, and future-proof solutions.</p>
            </div>
            <div className="glass-panel p-8 text-center animate-fade-in-up delay-100" style={{ padding: '30px', transition: 'transform 0.3s ease' }}>
              <div style={{ background: 'rgba(58, 123, 213, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: 'var(--color-secondary)' }}>
                <Code size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient" style={{ fontSize: '1.4rem', marginBottom: '15px' }}>User-Centric Design</h3>
              <p className="text-muted" style={{ color: 'var(--color-text-muted)' }}>Creating intuitive, user-friendly, and engaging experiences that your users will absolutely love.</p>
            </div>
            <div className="glass-panel p-8 text-center animate-fade-in-up delay-200" style={{ padding: '30px', transition: 'transform 0.3s ease' }}>
              <div style={{ background: 'rgba(138, 43, 226, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: 'var(--color-accent)' }}>
                <Shield size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient" style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Premium Delivery</h3>
              <p className="text-muted" style={{ color: 'var(--color-text-muted)' }}>Uncompromising standards in clean code, secure structure, and responsive design systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="section" style={{ position: 'relative', zIndex: 10, background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '50px', alignItems: 'center' }}>
            <div className="animate-fade-in-up">
              <h2 className="section-title text-left" style={{ textAlign: 'left', marginBottom: '20px' }}>What We Can Do <span className="text-gradient">For You</span></h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.7' }}>
                We design and engineer bespoke software solutions. From pixel-perfect frontends to robust databases, our team is equipped to launch your product successfully.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ color: 'var(--color-primary)' }}><Smartphone size={24} /></div>
                  <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>Responsive Mobile-First Interfaces</span>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ color: 'var(--color-secondary)' }}><Code size={24} /></div>
                  <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>Custom API & Full-Stack Architectures</span>
                </div>
              </div>

              <Link to="/services" className="btn btn-primary">
                Explore All Services <ArrowRight size={20} />
              </Link>
            </div>

            <div className="glass-panel animate-fade-in-up delay-200" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 className="text-2xl font-bold" style={{ fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>Our Tech Stack</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <span className="font-bold text-gradient">React.js</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <span className="font-bold text-gradient">Node.js</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <span className="font-bold text-gradient">Tailwind CSS</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <span className="font-bold text-gradient">Vite / Rollup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="glass-panel p-12 text-center glow-box animate-fade-in-up" style={{ padding: '60px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px', background: 'radial-gradient(circle at top right, rgba(0,210,255,0.08), rgba(138,43,226,0.08)), var(--color-surface)' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.2' }}>Let's Build Something <br /><span className="text-gradient glow-text">Extraordinary</span></h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', maxWidth: '600px' }}>
              Contact our product strategists today and start turning your dream concepts into high-converting digital realities.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
              Get Started Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;