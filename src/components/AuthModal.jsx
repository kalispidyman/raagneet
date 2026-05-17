import React, { useState } from 'react';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({
    login: { username: '', password: '' },
    signup: { name: '', phone: '', email: '', password: '', confirmPassword: '' }
  });
  const [errors, setErrors] = useState({});

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
    // Clear error when user starts typing
    if (errors[`${section}.${field}`]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[`${section}.${field}`];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (mode === 'login') {
      if (!formData.login.username.trim()) newErrors['login.username'] = 'Username is required';
      if (!formData.login.password) newErrors['login.password'] = 'Password is required';
    } else {
      const { name, phone, email, password, confirmPassword } = formData.signup;
      if (!name.trim()) newErrors['signup.name'] = 'Name is required';
      if (!phone.trim()) newErrors['signup.phone'] = 'Phone number is required';
      if (!email.trim()) {
        newErrors['signup.email'] = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors['signup.email'] = 'Invalid email format';
      }
      if (!password) newErrors['signup.password'] = 'Password is required';
      else if (password.length < 6) newErrors['signup.password'] = 'Password must be at least 6 characters';
      if (password !== confirmPassword) newErrors['signup.confirmPassword'] = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In real app: submit to backend
      console.log(`${mode} submitted:`, formData[mode]);
      alert(`${mode === 'login' ? 'Login' : 'Signup'} successful!`);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {mode === 'login' ? (
              <>
                <div className="mb-4">
                  <label htmlFor="login-username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    id="login-username"
                    type="text"
                    value={formData.login.username}
                    onChange={(e) => handleChange('login', 'username', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors['login.username'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter username"
                  />
                  {errors['login.username'] && (
                    <p className="mt-1 text-sm text-red-600">{errors['login.username']}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    value={formData.login.password}
                    onChange={(e) => handleChange('login', 'password', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors['login.password'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter password"
                  />
                  {errors['login.password'] && (
                    <p className="mt-1 text-sm text-red-600">{errors['login.password']}</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="signup-name"
                    type="text"
                    value={formData.signup.name}
                    onChange={(e) => handleChange('signup', 'name', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors['signup.name'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors['signup.name'] && (
                    <p className="mt-1 text-sm text-red-600">{errors['signup.name']}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="signup-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="signup-phone"
                    type="tel"
                    value={formData.signup.phone}
                    onChange={(e) => handleChange('signup', 'phone', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors['signup.phone'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g. +1234567890"
                  />
                  {errors['signup.phone'] && (
                    <p className="mt-1 text-sm text-red-600">{errors['signup.phone']}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    value={formData.signup.email}
                    onChange={(e) => handleChange('signup', 'email', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors['signup.email'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors['signup.email'] && (
                    <p className="mt-1 text-sm text-red-600">{errors['signup.email']}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="signup-password"
                    type="password"
                    value={formData.signup.password}
                    onChange={(e) => handleChange('signup', 'password', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors['signup.password'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Create a password"
                  />
                  {errors['signup.password'] && (
                    <p className="mt-1 text-sm text-red-600">{errors['signup.password']}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    id="signup-confirm-password"
                    type="password"
                    value={formData.signup.confirmPassword}
                    onChange={(e) => handleChange('signup', 'confirmPassword', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors['signup.confirmPassword'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Confirm your password"
                  />
                  {errors['signup.confirmPassword'] && (
                    <p className="mt-1 text-sm text-red-600">{errors['signup.confirmPassword']}</p>
                  )}
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="ml-1 text-blue-600 hover:text-blue-800 font-medium"
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;