import React from 'react';

const Services = () => {
  const services = [
    { title: 'Web Development', icon: '💻', desc: 'Custom, scalable websites built with React, Next.js, and modern frameworks tailored to your business needs.', color: 'bg-blue-100 text-blue-600' },
    { title: 'UI/UX Design', icon: '🎨', desc: 'User-centered design that ensures seamless navigation, accessibility, and stunning visual appeal.', color: 'bg-purple-100 text-purple-600' },
    { title: 'Mobile Apps', icon: '📱', desc: 'Native and cross-platform mobile applications using React Native and Flutter for iOS and Android.', color: 'bg-green-100 text-green-600' },
    { title: 'SEO Optimization', icon: '🔍', desc: 'Data-driven strategies to improve your visibility, drive organic traffic, and rank higher on search engines.', color: 'bg-orange-100 text-orange-600' },
    { title: 'Cloud Solutions', icon: '☁️', desc: 'Scalable cloud infrastructure deployment, management, and migration on AWS, Azure, and Google Cloud.', color: 'bg-sky-100 text-sky-600' },
    { title: 'Maintenance', icon: '🛠️', desc: 'Proactive ongoing support, security patches, performance monitoring, and feature updates.', color: 'bg-rose-100 text-rose-600' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative z-10 animate-fade-in">Our Services</h1>
        <p className="text-lg text-indigo-200 max-w-2xl mx-auto relative z-10 animate-slide-up">Comprehensive digital solutions engineered to accelerate your business growth and streamline operations.</p>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group border border-slate-100 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-6 text-3xl ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
              <a href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all duration-300 group-hover:text-blue-700">
                Learn more <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white p-10 rounded-3xl shadow-lg border border-slate-100 text-center animate-slide-up">
          <h3 className="text-2xl font-bold text-slate-900