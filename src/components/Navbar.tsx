import React, { useState } from 'react';
import './Navbar.css';
import AuthModal from './AuthModal';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'login' | 'signup'>('login');

  const openModal = (tab: 'login' | 'signup') => {
    setModalTab(tab);
    setIsModalOpen(true);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">MyApp</div>
        <div className="navbar-links">
          <button className="nav-button login" onClick={() => openModal('login')}>Login</button>
          <button className="nav-button signup" onClick={() => openModal('signup')}>Sign Up</button>
        </div>
      </nav>
      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialTab={modalTab} 
      />
    </>
  );
};

export default Navbar;