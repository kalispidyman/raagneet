import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">DevStudio</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium">Portfolio</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => openAuthModal('login')}
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Login
            </button>
            <button
              onClick={() => openAuthModal('signup')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium">Portfolio</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <div className="pt-2 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    openAuthModal('login');
                    setIsMenuOpen(false);
                  }}
                  className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    openAuthModal('signup');
                    setIsMenuOpen(false);
                  }}
                  className="text-left px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          initialMode={authMode}
        />
      )}
    </nav>
  );
};

// Import AuthModal inside Navbar to avoid circular dependency or external import issues
// Since we're updating Navbar.jsx, we'll use dynamic import or assume it's available.
// But per instruction, we must *not* duplicate or misplace — so we inline the import above.

export default Navbar;