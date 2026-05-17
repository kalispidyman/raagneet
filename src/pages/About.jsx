import React from 'react';
import { Rocket, Heart, Zap, Shield, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '50+', label: 'Projects Completed', icon: <Rocket className="w-5 h-5 text-teal-400" /> },
    { value: '99%', label: 'Happy Clients', icon: <Heart className="w-5 h-5 text-cyan-400" /> },
    { value: '5+', label: 'Years Experience', icon: <Zap className="w-5 h-5 text-purple-400" /> },
    { value: '24/7', label: 'Premium Support', icon: <Shield className="w-5 h-5 text-pink-400" /> }
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      title: 'Innovation First',
      desc: 'We explore new technologies and design paradigms to create future-proof solutions that stand the test of time.'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: 'Quality & Integrity',
      desc: 'Every line of code and pixel of design is crafted with precision, ensuring enterprise-grade reliability and aesthetics.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'True Collaboration',
      desc: 'We partner closely with you to transform your visions into concrete digital successes that drive real business growth.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & Principal Engineer',
      avatar: '👨‍💻',
      bio: 'Ex-FAANG architect passionate about high-performance web systems and AI integrations.'
    },
    {
      name: 'Sarah Miller',
      role: 'Lead UI/