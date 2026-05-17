import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onSignIn, onSignUp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Dev<span>Flow</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-menu desktop-menu">
          {navLinks.map((link) => (
            <li key={link.name} className="navbar-item">
              <a href={link.path} className="navbar-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="navbar-actions desktop-actions">
          <button className="btn-signin" onClick={onSignIn}>
            Sign In
          </button>
          <button className="btn-signup" onClick={onSignUp}>
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul className="mobile-menu-list">
          {navLinks.map((link) => (
            <li key={link.name} className="mobile-menu-item">
              <a 
                href={link.path} 
                className="mobile-menu-link"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mobile-menu-actions">
            <button className="btn-signin-mobile" onClick={() => { onSignIn(); closeMenu(); }}>
              Sign In
            </button>
            <button className="btn-signup-mobile" onClick={() => { onSignUp(); closeMenu(); }}>
              Sign Up
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;