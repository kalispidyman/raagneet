import React from 'react';
import { Send, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16 animate-fade-in-up space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-teal-300 font-medium mx-auto w-fit">
          <MessageCircle className="w-4 h-4" />
          Let's Connect
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gradient max-w-3xl mx-auto">
          Get In Touch
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Ready to start your next big project? Contact us today and let's build something amazing together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="glass-panel p-8 animate-fade-in-up delay-100">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
              <Send className="w-4 h-4" />
            </span>
            Send us a Message
          </h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input type="text" placeholder="John Doe" className="glass-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
              <input type="email" placeholder="john@example.com" className="glass-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea rows="4" placeholder="Tell us about your project..." className="glass-input"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full py-3 flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="space-y-6 animate-fade-in-up delay-200">
          <div className="glass-panel p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Our Office</h3>
              <p className="text-slate-400">123 Innovation Drive, Tech Valley, CA 94043</p>
            </div>
          </div>
          <div className="glass-panel p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
              <p className="text-slate-400">hello@raagneet.com</p>
              <p className="text-slate-400">support@raagneet.com</p>
            </div>
          </div>
          <div className="glass-panel p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
              <p className="text-slate-400">+1 (555) 123-4567</p>
              <p className="text-slate-400">Mon-Fri, 9am - 6pm PST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;