// components/ProjectGrid.tsx

import Image from 'next/image';
import React from 'react';

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  techStack: string[];
  liveLink: string;
}

const ProjectGrid: React.FC = () => {
  const projects: Project[] = [
    {
      title: '3D Solar System Planets to Explore',
      description: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
      imageSrc: '/earth-project.png', // Replace with your image path
      techStack: ['3D', 'JS', 'React'],
      liveLink: 'https://example.com/solar-system', // Replace with your live link
    },
    {
      title: 'Yoom - Video Conferencing App',
      description: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
      imageSrc: '/yoom-app.png', // Replace with your image path
      techStack: ['React', 'Node.js', 'WebRTC'],
      liveLink: 'https://example.com/yoom', // Replace with your live link
    },
    {
      title: 'AI Image SaaS - Canva Application',
      description: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
      imageSrc: '/canva-ai.png', // Replace with your image path
      techStack: ['AI', 'React', 'Node.js', 'Stripe'],
      liveLink: 'https://example.com/canva-ai', // Replace with your live link
    },
    {
      title: 'Animated Apple Iphone 3D Website',
      description: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.',
      imageSrc: '/iphone-3d.png', // Replace with your image path
      techStack: ['GSAP', 'Three.js', 'React'],
      liveLink: 'https://example.com/iphone-3d', // Replace with your live link
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-3xl max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">A small selection of recent projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <Image src={project.imageSrc} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex items-center space-x-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-700 text-xs px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <a href={project.liveLink} className="text-blue-400 hover:text-blue-300 flex items-center">
                Check Live Site <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;