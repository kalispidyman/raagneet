import React from 'react';

const Footer = () => {
  return (
    <footer className="footer py-12">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>DevSphere</h3>
            <p className="text-gray-600 mt-2">
              Crafting modern, performant, and accessible web experiences with cutting-edge technologies.
            </p>
            <div className="social-icons mt-4">
              <a href="#" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.22.793-.261.793-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.104-.756.083-.74.083-.74 1.22.084 1.859 1.237 1.859 1.237 1.07 1.836 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.3-5.467-1.333-5.467-5.93 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.107-3.176 0 0 1.008-3.222 3.301 1.23.964-.267 1.98-.399 3.002.03 1.02-.03 2.036.133 3.001-.03 2.29-2.752 3.297-1.23 3.297-1.23.638 1.653.23 2.874.107 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-5.302-3.433-9.8-8.2-11.386z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3c.623 1.641 4.886 1.775 4.64 4.772l.36-4.772h3v11z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061c0 2.385 1.708 4.374 3.943 4.827a4.996 4.996 0 01-2.212.085c.643 1.582 2.445 2.59 4.755 2.6-1.78 1.377-3.948 2.205-6.253 2.205-1.622 0-3.131-.139-4.495-.393a13.985 13.985 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.2 0-.403-.012-.602.94-.677 1.797-1.467 2.505-2.359z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">DevOps & Cloud</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li>hello@devsphere.dev</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} DevSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;