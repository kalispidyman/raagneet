import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import '../components/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <NavLink to="/" className="nav-logo glow-text">
          Raagneet<span className="logo-dot">.</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="nav-menu">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Contact
          </NavLink>
        </div>

        <div className="nav-actions">
          <NavLink to="/contact" className="btn btn-primary nav-btn">
            Get Started <ArrowRight size={16} />
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="mobile-menu-btn" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-links">
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-link-active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/services" onClick={toggleMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/portfolio" onClick={toggleMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Contact
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className="btn btn-primary mobile-nav-btn">
            Get Started <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;