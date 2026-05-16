import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Optional: Brief sections for Home page to make it feel complete */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Neet's Studios?</h2>
          <p className="section-subtitle">We don't just build software, we build digital assets that drive growth and innovation for your business.</p>
          
          <div className="grid grid-3 mt-10">
            <div className="glass-panel p-8 text-center animate-fade-in-up">
              <h3 className="text-xl font-bold mb-4 text-gradient">Innovation First</h3>
              <p className="text-muted">Leveraging the latest technologies to build scalable and future-proof solutions.</p>
            </div>
            <div className="glass-panel p-8 text-center animate-fade-in-up delay-100">
              <h3 className="text-xl font-bold mb-4 text-gradient">User-Centric Design</h3>
              <p className="text-muted">Creating intuitive and engaging experiences that your users will love.</p>
            </div>
            <div className="glass-panel p-8 text-center animate-fade-in-up delay-200">
              <h3 className="text-xl font-bold mb-4 text-gradient">Agile Delivery</h3>
              <p className="text-muted">Rapid prototyping and iterative development to get your product to market faster.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
