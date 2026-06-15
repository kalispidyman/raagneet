import React from 'react';

const projects = [
  {
    title: 'AI Chatbot Integration',
    description: 'Implementing advanced AI chatbot capabilities for seamless customer interactions.',
  },
  {
    title: 'Automated Testing Framework',
    description: 'Developing a robust testing framework for continuous integration and delivery.',
  },
  {
    title: 'Cloud Migration Strategy',
    description: 'Strategizing and executing cloud migration for enhanced scalability and performance.',
  },
];

export default function Project() {
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
}