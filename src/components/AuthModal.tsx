import React from 'react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Login or Signup</h2>
                {/* Form for login/signup can go here */}
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AuthModal;