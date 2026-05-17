import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Keep existing CSS if there are general footer styles

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-gray-900 text-gray-300 py-10 px-4 md:px-0 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold text-white mb-4">Raagneet</h3>
          <p className="text-sm">
            Crafting digital experiences with passion and precision. We are dedicated to delivering innovative solutions that drive success.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition duration-300">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition duration-300">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition duration-300">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-white transition duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><Link to="/services/#web-dev" className="hover:text-white transition duration-300">Web Development</Link></li>
            <li><Link to="/services/#ui-ux" className="hover:text-white transition duration-300">UI/UX Design</Link></li>
            <li><Link to="/services/#mobile-dev" className="hover:text-white transition duration-300">Mobile App Development</Link></li>
            <li><Link to="/services/#seo" className="hover:text-white transition duration-300">SEO & Marketing</Link></li>
            <li><Link to="/services/#cloud" className="hover:text-white transition duration-300">Cloud Solutions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="flex items-center mb-2">
            <i className="fas fa-map-marker-alt text-gray-400 mr-2"></i>
            123 Raagneet St, Tech City, Global 10001
          </p>
          <p className="flex items-center mb-2">
            <i className="fas fa-envelope text-gray-400 mr-2"></i>
            info@raagneet.com
          </p>
          <p className="flex items-center">
            <i className="fas fa-phone-alt text-gray-400 mr-2"></i>
            +1 (123) 456-7890
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
        <p>&copy; {currentYear} Raagneet. All rights reserved.</p>
        <p className="mt-2">
          <Link to="/privacy-policy" className="hover:text-white transition duration-300 mx-2">Privacy Policy</Link> |
          <Link to="/terms-of-service" className="hover:text-white transition duration-300 mx-2">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;