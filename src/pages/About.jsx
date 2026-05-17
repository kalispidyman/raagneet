import React from 'react';
import { Target, Shield, Users, Zap, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '99%', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Premium Support' }
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6 text-teal-400" />,
      title: 'Innovation First',
      desc: 'We explore new technologies and design paradigms to create future-proof solutions.'
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Quality & Integrity',
      desc: 'Every line of code and pixel of design is crafted with precision and absolute attention to detail.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Collaboration',
      desc: 'We partner closely with you to transform your visions into concrete digital successes.'
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
      role: 'Lead UI/UX Designer',
      avatar: '👩‍🎨',
      bio: 'Award-winning creative specializing in premium dark modes, glassmorphism, and branding.'
    },
    {
      name: 'Neet Sharma',
      role: 'Director of Technology',
      avatar: '🚀',
      bio: 'Cloud systems and DevOps specialist focused on seamless automated deployments.'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 relative