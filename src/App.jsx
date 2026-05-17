import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'services': return <Services />;
      case 'portfolio': return <Portfolio />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Abstract Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/15 blur-[120px] animate-blob" 
          style={{ animationDelay: '0s' }} 
        />
        <div 
          className="absolute top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[120px] animate-blob" 
          style={{ animationDelay: '2s' }} 
        />
        <div 
          className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px] animate-blob" 
          style={{ animationDelay: '4s' }} 
        />
      </div>

      <Navbar setCurrentPage={setCurrentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;