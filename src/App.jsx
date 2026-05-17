import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0d9488] opacity-20 blur-[150px] animate-float-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#7c3aed] opacity-20 blur-[150px] animate-float-medium" />
          <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#0d9488] opacity-15 blur-[120px] animate-float-fast" />
          <div className="absolute top-[20%] right-[20%] w-[350px] h-[350px] rounded-full bg-[#7c3aed] opacity-10 blur-[100px] animate-float-slow" />
        </div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-24">
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
      </div>
    </Router>
  );
}

export default App;