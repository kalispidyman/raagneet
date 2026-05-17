import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Watermark from './components/Watermark';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AuthModal from './components/AuthModal';

function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030712] text-white selection:bg-cyan-500/40 selection:text-white">
      {/* Enhanced Abstract Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-600/25 rounded-full blur-[150px] animate-float" />
        <div className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[160px] animate-float-delayed" />
        <div className="absolute bottom-[-10%] left-[20%] w-[800px] h-[800px] bg-cyan-600/15 rounded-full blur-[180px] animate-float" />
        <div className="absolute top-[50%] left-[50%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-float-delayed" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onGetStarted={() => setShowAuth(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* Authentication Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      
      {/* Global Designer Watermark */}
      <Watermark />
    </div>
  );
}

export default App;