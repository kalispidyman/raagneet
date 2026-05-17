import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        {/* Fallback for undefined routes */}
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gray-50">
          <h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App