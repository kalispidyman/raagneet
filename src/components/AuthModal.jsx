import React, { useState } from 'react';

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: handle auth logic here
    console.log(isLogin ? 'Logging in...' : 'Signing up...', formData);
    // Close modal after submission (optional UX)
    const modal = document.getElementById('auth-modal');
    if (modal) modal.close();
  };

  return (
    <dialog id="auth-modal" className="modal">
      <div className="modal-box w-11/12 max-w-md">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="text-lg font-bold mb-4">{isLogin ? 'Welcome Back' : 'Create Account'}</h3>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
                className="input input-bordered w-full mb-3"
                placeholder="John Doe"
              />
            </div>
          )}
          
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full mb-3"
              placeholder="you@example.com"
            />
          </div>
          
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input input-bordered w-full mb-3"
              placeholder="••••••••"
            />
          </div>
          
          {!isLogin && (
            <div className="mb-6">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required={!isLogin}
                className="input input-bordered w-full mb-3"
                placeholder="••••••••"
              />
            </div>
          )}
          
          <button type="submit" className="btn btn-primary w-full mb-4">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="flex justify-center text-sm">
          <button 
            className="link link-hover"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin 
              ? "Don't have an account? Sign up" 
              : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AuthModal;