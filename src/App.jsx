import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const BackgroundOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px] animate-float mix-blend-screen" />
    <div className="absolute top-[40%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[150px] animate-float-delayed mix-blend-screen" />
    <div className="absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] rounded-full bg-teal-500/15 blur-[130px] animate-pulse-slow mix-blend-screen" />
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-slate-200 bg-[#0B0F19] selection:bg-cyan-500/30 selection:text-cyan-50">
        <BackgroundOrbs />
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