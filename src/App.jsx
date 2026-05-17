import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import AuthModal from './components/AuthModal.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <AuthModal />
    </>
  );
}

export default App;