import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleLoginClick = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <>
            <div className="header">
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={handleLoginClick}>Signup</button>
            </div>
            <AuthModal isOpen={isModalOpen} onClose={handleCloseModal} />
            {/* Other content here */}
        </>
    );
};

export default Home;