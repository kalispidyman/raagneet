import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative z-10 animate-fade-in">About Us</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto relative z-10 animate-slide-up">Crafting digital experiences that inspire, engage, and drive measurable results since 2020.</p>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="md:w-1/2 animate-slide-up delay-100">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500 rounded-2xl"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team collaboration" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-96" />
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-up delay-200">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission & Story</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Founded with a passion for innovation, we started as a small team of developers and designers. Today, we have grown into a global agency delivering top-tier digital solutions to forward-thinking businesses.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              We believe in collaboration, transparency, and pushing the boundaries of what is possible on the web. Every project is a unique journey we embark on together with our clients, ensuring their vision is brought to life flawlessly.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">Meet The Team</button>
              <button className="px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors">Our Culture</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '150+', label: 'Projects Delivered' },
            { num: '98%', label: 'Client Satisfaction' },
            { num: '5+', label: 'Years Experience' },
            { num: '24/7', label: 'Premium Support' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300 animate-slide-up" style={{ animationDelay: `${(idx + 3) * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">{stat.num}</div>
              <div className="text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;