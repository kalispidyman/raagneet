import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const contactInfo = [
    { label: 'Email', value: 'hello@yourdomain.com', icon: '📧' },
    { label: 'Phone', value: '+1 (555) 123-4567', icon: '📞' },
    { label: 'Location', value: 'San Francisco, CA', icon: '📍' },
  ];

  return (
    <footer className={`bg-gradient-to-r from-gray-900 to-black text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
              Nexus<span className="text-gray-400">Dev</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting elegant digital experiences with modern web technologies. 
              We build fast, accessible, and scalable solutions — one pixel at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transform transition-all duration-500 ease-out hover:scale-110 ${
                    idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : idx === 2 ? 'delay-300' : 'delay-400'
                  }`}
                  aria-label={link.name}
                >
                  <span className="text-sm font-bold">{link.icon.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300 flex items-center">
              <span className="mr-2">🔗</span> Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-gray-800 hover:pl-6 hover:text-blue-400 ${
                      idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : idx === 2 ? 'delay-300' : idx === 3 ? 'delay-400' : 'delay-500'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300 flex items-center">
              <span className="mr-2">💬</span> Get in Touch
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, idx) => (
                <li key={item.label} className="flex items-start">
                  <span className="text-xl mr-3 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300 flex items-center">
              <span className="mr-2">✉️</span> Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe for the latest updates, tips, and exclusive content.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <button
                type="submit"
                className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NexusDev. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;