import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6">
          Our Services
        </h1>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
          We offer a comprehensive range of digital solutions tailored to elevate your brand and streamline your operations.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Web Development</h3>
            <p className="text-slate-600">Custom, responsive websites built with modern frameworks to ensure speed, security, and scalability.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-3">UI/UX Design</h3>
            <p className="text-slate-600">Intuitive and visually stunning interfaces designed to maximize user engagement and satisfaction.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Marketing</h3>
            <p className="text-slate-600">Data-driven strategies including SEO, social media, and content marketing to grow your audience.</p>
          </div>
        </div>

        <div className="mt-20 bg-white p-10 rounded-3xl shadow-lg border border-slate-100 text-center animate-slide-up">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to transform your digital presence?</h3>
          <p className="text-slate-600 mb-8">Let's collaborate and bring your vision to life. Reach out for a free consultation.</p>
          <a href="/contact" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;