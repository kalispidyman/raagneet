import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container section">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="section-title">Get In <span className="text-gradient">Touch</span></h1>
          <p className="section-subtitle">Ready to start your next big project? Contact us today and let's build something amazing together.</p>
        </div>

        <div className="grid grid-2" style={{ gap: '50px' }}>
          <div className="glass-panel p-8 animate-fade-in-up delay-100" style={{ padding: '40px' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Send us a Message</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '1rem' }} 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '1rem' }} 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows="5"
                  style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '1rem', resize: 'vertical' }} 
                ></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

          <div className="animate-fade-in-up delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="glass-panel" style={{ padding: '30px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '15px', borderRadius: '50%', color: 'var(--color-primary)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>Our Location</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>123 Innovation Drive,<br/>Tech City, TC 10101</p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '30px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ background: 'rgba(58, 123, 213, 0.1)', padding: '15px', borderRadius: '50%', color: 'var(--color-secondary)' }}>
                <Phone size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>Call Us</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>+1 (555) 123-4567<br/>Mon-Fri, 9am - 6pm</p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '30px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ background: 'rgba(138, 43, 226, 0.1)', padding: '15px', borderRadius: '50%', color: 'var(--color-accent)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>Email Us</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>hello@neetsstudios.com<br/>support@neetsstudios.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
