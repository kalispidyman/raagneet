import { useState } from 'react';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-md glass-panel rounded-2xl p-8 shadow-[0_0_50px_rgba(6,182,212,0.25)] border border-white/[0.15] animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors hover:bg-white/10 p-1 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 className="text-2xl font-bold text-gradient mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="text-slate-400 mb-6 text-sm">Join Raagne