import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import MouseBackground from './components/MouseBackground';
import Home from './pages/Home';
import Products from './pages/Products';
import Technology from './pages/Technology';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function AppInner() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <MouseBackground />
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      {!loading && (
        <>
          <ScrollToTop />
          <Navbar />
          <main style={{ position: 'relative', zIndex: 1, paddingTop: '72px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portal" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}