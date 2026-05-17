import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'} ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl">DevFolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>

          {/* Auth Buttons — VISIBLE on all screen sizes */}
          <div className="flex items-center space-x-4">
            <button 
              className="px-4 py-2 rounded-md font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => document.getElementById('auth-modal')?.showModal()}
            >
              Login
            </button>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              onClick={() => document.getElementById('auth-modal')?.showModal()}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-inherit focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <a href="#home" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <div className="pt-2 flex flex-col space-y-2">
              <button 
                className="text-left px-4 py-2 rounded-md font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => {
                  document.getElementById('auth-modal')?.showModal();
                  setIsMenuOpen(false);
                }}
              >
                Login
              </button>
              <button 
                className="text-left px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                onClick={() => {
                  document.getElementById('auth-modal')?.showModal();
                  setIsMenuOpen(false);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;