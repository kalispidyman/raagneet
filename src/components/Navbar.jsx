import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <Cpu className="logo-icon" />
          <span className="logo-text text-gradient">Neet's Studios</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.name}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="nav-item nav-btn">
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`nav-menu-mobile ${mobileMenuOpen ? 'active glass-panel' : ''}`}>
        <ul className="nav-menu-mobile-list">
          {navLinks.map((link) => (
            <li className="nav-item-mobile" key={link.name}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => `nav-links-mobile ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="nav-item-mobile">
            <Link to="/contact" className="btn btn-primary mobile-btn" onClick={closeMobileMenu}>
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
