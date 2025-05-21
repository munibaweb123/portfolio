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
      title:'Python quiz app',
      description:'A python quiz app build with python and streamlit',
      imageSrc:'/python-quiz-app.png',
      techStack: ['python','streamlit'],
      liveLink: 'https://pythonquizapp.streamlit.app/'

    },
    {
      title:'Python rock paper scissors',
      description:'A python game build with python and streamlit',
      imageSrc:'/rps.png',
      techStack: ['python','streamlit'],
      liveLink: 'https://rpsgame.streamlit.app/'

    },
    {
      title: 'Demo Portfolio - Figma to Next.js',
      description: 'A demo portfolio website created from a Figma design, showcasing my skills and projects.',
      imageSrc: '/demo-portfolio.png', // Replace with your image path
      techStack: ['figma','Next.js', 'Tailwind CSS'],
      liveLink: 'https://portfolio-from-figma-six.vercel.app/', // Replace with your live link
    },
    {
      title: 'Portfolio - Next.js',
      description: 'A portfolio website built with Next.js, showcasing my projects and skills.',
      imageSrc: '/portfolio.png', // Replace with your image path
      techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      liveLink: 'https://portfolio-nextjs-poni.vercel.app/', // Replace with your live link
    },
    {
      title: 'Nextjs Ecommerce Hackathon',
      description: 'A Next.js eCommerce website built during a hackathon, featuring product listings and a shopping cart.',
      imageSrc: '/ecommerce-hackathon.png', // Replace with your image path
      techStack: ['Typescript', 'Sanity', 'Next.js', 'Stripe'],
      liveLink: 'https://nextjs-hackathon-olive.vercel.app/', // Replace with your live link
    },
    {
      title: 'Nextjs Ecommerce Hackathon Practice',
      description: 'A Next.js eCommerce website built for practice for a hackathon, featuring product listings and a shopping cart.',
      imageSrc: '/practice-hackathon.png', // Replace with your image path
      techStack: ['Typescript', 'Sanity', 'Next.js', 'Stripe'],
      liveLink: 'https://nextjs-hackathon-practice.vercel.app/', // Replace with your live link
    },
    {
      title: 'Ramazan App with nextjs',
      description: 'A Ramadan app built with Next.js, providing users with information and resources related to Ramadan.',
      imageSrc: '/ramzan-app.png', // Replace with your image path
      techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      liveLink: 'https://ramzan-app.vercel.app/', // Replace with your live link
    },
    {
      title: 'Agentia world App with nextjs',
      description: 'An agentia world app built with Next.js, providing users a chatbot like meta in whatsapp using google gemini api',
      imageSrc: '/agentia.png', // Replace with your image path
      techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Google gemini api'],
      liveLink: 'https://agentia-world-cz5q.vercel.app/', // Replace with your live link
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-3xl max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">A small selection of recent projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <Image src={project.imageSrc} alt={project.title} width={500} height={500} />
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