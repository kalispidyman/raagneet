import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen text-white pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Us</h1>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl">
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            We are a passionate team dedicated to delivering innovative solutions and exceptional digital experiences. Our mission is to empower businesses and individuals with cutting-edge technology and design.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            With years of expertise in web development, UI/UX design, and digital strategy, we craft tailored solutions that drive growth and engagement.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            Thank you for visiting. We look forward to collaborating with you on your next big project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;