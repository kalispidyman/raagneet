import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="about-section">
        <h1>About Us</h1>
        <p>We are a dedicated team passionate about creating seamless digital experiences. Learn more about our journey, our values, and the vision that drives us forward.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;