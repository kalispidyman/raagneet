import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import '../components/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Company Column */}
        <div className="footer-col">
          <Link to="/" className="footer-logo glow-text">
            Raagneet<span className="logo-dot">.</span>
          </Link>
          <p className="footer-description">
            Crafting state-of-the-art digital assets with passion, precision, and performance. We empower high-growth startups and enterprises alike.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-col">
          <h3 className="footer-title">Our Services</h3>
          <ul className="footer-links">
            <li><Link to="/services">Web Engineering</Link></li>
            <li><Link to="/services">Mobile Interfaces</Link></li>
            <li><Link to="/services">Cloud Solutions</Link></li>
            <li><Link to="/services">UI/UX Design</Link></li>
            <li><Link to="/services">Data Infrastructures</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col">
          <h3 className="footer-title">Get in Touch</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>123 Innovation Drive, Tech City, TC 10101</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <a href="mailto:hello@neetsstudios.com">hello@neetsstudios.com</a>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p className="copyright">&copy; {currentYear} Raagneet. All rights reserved.</p>
          <div className="watermarks">
            <span className="watermark animated-text">designer @Raag</span>
            <span className="watermark-sep">|</span>
            <span className="watermark animated-text">Designer @NEET</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;