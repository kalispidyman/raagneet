import React, { useState } from 'react';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({
    login: { username: '', password: '' },
    signup: { name: '', phone: '', email: '', password: '', confirmPassword: '' }
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (mode === 'login') {
      if (!formData.login.username.trim()) newErrors.username = 'Username is required';
      if (!formData.login.password) newErrors.password = 'Password is required';
    } else {
      const { name, phone, email, password, confirmPassword } = formData.signup;
      if (!name.trim()) newErrors.name = 'Name is required';
      if (!phone.trim()) newErrors.phone = 'Phone number is required';
      else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(phone)) newErrors.phone = 'Invalid phone number';
      if (!email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
      if (!password) newErrors.password = 'Password is required';
      else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
      if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate submission
      console.log(mode === 'login' ? 'Login submitted:' : 'Signup submitted:', formData[mode]);
      alert(`${mode === 'login' ? 'Login' : 'Signup'} successful!`);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
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
                    onChange={(e) => handleInputChange('login', 'username', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.username ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your username"
                  />
                  {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    value={formData.login.password}
                    onChange={(e) => handleInputChange('login', 'password', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your password"
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
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
                    onChange={(e) => handleInputChange('signup', 'name', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="signup-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="signup-phone"
                    type="tel"
                    value={formData.signup.phone}
                    onChange={(e) => handleInputChange('signup', 'phone', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    value={formData.signup.email}
                    onChange={(e) => handleInputChange('signup', 'email', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="signup-password"
                    type="password"
                    value={formData.signup.password}
                    onChange={(e) => handleInputChange('signup', 'password', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Create a password"
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    id="signup-confirm-password"
                    type="password"
                    value={formData.signup.confirmPassword}
                    onChange={(e) => handleInputChange('signup', 'confirmPassword', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02]"
            >
              {mode === 'login' ? 'Log In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="font-medium text-blue-600 hover:text-blue-800 underline"
              >
                {mode === 'login' ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;