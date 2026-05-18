import React from 'react';
import { Send, MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-dark-950 overflow-hidden">
      {/* BACKGROUND ORBS */}
      <div className="absolute inset-0 z-0">
        <div className="bg-orb w-[600px] h-[600px] bg-accent-teal top-[-10%] left-[-10%] animate-drift-slow opacity-20" />
        <div className="bg-orb w-[600px] h-[600px] bg-accent-purple bottom-[-10%] right-[-10%] animate-drift-slower opacity-20" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-sm text-accent-cyan font-semibold mx-auto w-fit">
            <MessageCircle className="w-4 h-4" />
            Connect With Us
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-premium">
            Get In <span className="text-accent-teal">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ready to start your next big project? Contact us today and let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* CONTACT FORM */}
          <div className="glass-card-modern !p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/10 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
            
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal">
                <Send size={18} />
              </div>
              Send a Message
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent-teal/50 focus:bg-white/[0.05] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent-teal/50 focus:bg-white/[0.05] transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Project Details</label>
                <textarea rows="4" placeholder="Tell us about your vision..." className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent-teal/50 focus:bg-white/[0.05] transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="btn-primary-glass w-full text-lg py-4 flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            {[
              { 
                icon: <MapPin size={28} />, 
                title: "Our Studio", 
                content: "123 Innovation Drive, Tech Valley, CA 94043",
                color: "text-accent-teal",
                bg: "bg-accent-teal/10"
              },
              { 
                icon: <Mail size={28} />, 
                title: "Email Us", 
                content: "hello@raagneet.com",
                subcontent: "support@raagneet.com",
                color: "text-accent-cyan",
                bg: "bg-accent-cyan/10"
              },
              { 
                icon: <Phone size={28} />, 
                title: "Call Us", 
                content: "+1 (555) 123-4567",
                subcontent: "Mon-Fri, 9am - 6pm PST",
                color: "text-accent-purple",
                bg: "bg-accent-purple/10"
              }
            ].map((item, i) => (
              <div key={i} className="glass-card-modern !p-8 flex items-center gap-8 group cursor-pointer hover:bg-white/[0.05]">
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{item.title}</h3>
                  <p className="text-xl font-bold text-white mb-0.5">{item.content}</p>
                  {item.subcontent && <p className="text-slate-400 text-sm">{item.subcontent}</p>}
                </div>
                <div className="text-slate-600 group-hover:text-white transition-colors">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            ))}
            
            {/* SOCIAL LINK MINI GLASS CONTAINER */}
            <div className="glass-container !rounded-3xl p-8 flex justify-between items-center">
              <span className="text-white font-bold">Follow our work</span>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-accent-cyan/20 transition-all cursor-pointer" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;