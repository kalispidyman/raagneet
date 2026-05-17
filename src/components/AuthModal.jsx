import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-md glass-panel rounded-2xl p-8 shadow-[0_0_50px_rgba(6,182,212,0.25)] border border-white/[0.15] animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors hover:bg-white/10 p-1 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p className="text-slate-400 text-sm">
            {isLogin ? 'Join Raagneet Studios to access premium features.' : 'Start your journey with us today.'}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="relative group">
              <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
              <input type="text" placeholder="Full Name" className="glass-input pl-10" />
            </div>
          )}
          <div className="relative group">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
            <input type="email" placeholder="Email Address" className="glass-input pl-10" />
          </div>
          <div className="relative group">
            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
            <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="glass-input pl-10 pr-10" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-slate-400 hover:text-white">
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          
          {isLogin && (
            <div className="flex justify-end">
              <a href="#" className="text-xs text-teal-400 hover:text-teal-300 transition-colors">Forgot password?</a>
            </div>
          )}

          <button type="submit" className="btn-primary w-full py-3 flex items-center justify-center gap-2">
            {isLogin ? 'Sign In' : 'Get Started'} <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button onClick={() => setIsLogin(!isLogin)} className="text-teal-400 hover:text-teal-300 font-medium transition-colors">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;