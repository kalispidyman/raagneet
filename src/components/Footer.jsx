import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Globe, MessageCircle, Briefcase } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Cpu className="logo-icon" size={32} />
              <span className="logo-text text-gradient">Neet's Studios</span>
            </Link>
            <p className="footer-desc">
              Premium IT solutions and cutting-edge software development for modern businesses.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><Briefcase size={20} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">Cloud Solutions</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">IT Consulting</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 Innovation Drive, Tech City</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>hello@neetsstudios.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Neet's Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
