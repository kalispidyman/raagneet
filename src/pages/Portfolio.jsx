import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: "E-Commerce Platform", category: "Web Development", image: "https://placehold.co/600x400/0f172a/ffffff?text=E-Commerce" },
    { title: "AI Dashboard", category: "UI/UX Design", image: "https://placehold.co/600x400/0f172a/ffffff?text=AI+Dashboard" },
    { title: "FinTech App", category: "Mobile Development", image: "https://placehold.co/600x400/0f172a/ffffff?text=FinTech+App" },
    { title: "Cloud Infrastructure", category: "DevOps", image: "https://placehold.co/600x400/0f172a/ffffff?text=Cloud" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold