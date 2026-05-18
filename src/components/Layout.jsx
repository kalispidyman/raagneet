import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundOrbs from './BackgroundOrbs';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <BackgroundOrbs />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
