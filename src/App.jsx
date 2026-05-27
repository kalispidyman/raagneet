import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Products from './pages/Products';
import Technology from './pages/Technology';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { 
    window.scrollTo({ top: 0, behavior: 'instant' }); 
  }, [pathname]);
  return null;
}

function AppInner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="nb-bg-root" style={{ minHeight: '100vh', position: 'relative' }}>
      <LoadingScreen isLoading={isLoading} />
      <AnimatedBackground />
      <ScrollToTop />
      <Navbar />
      <main className="main-content" style={{ position: 'relative', zIndex: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}