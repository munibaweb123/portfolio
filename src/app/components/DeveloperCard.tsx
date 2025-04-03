// components/DeveloperCard.tsx

import React from 'react';
import Image from 'next/image';

const DeveloperCard: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center gap-4 w-full max-w-6xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl text-white font-sans">
      {/* Laptop Section */}
      <div className="relative mb-8">
        <Image src="/box.png" alt="Laptop" width={500} height={500} className="w-full rounded-2xl" />
        
        
      </div>

      {/* Time Zone Section */}
      <div className="flex-col items-center justify-center gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-xl">
          <p className="text-lg font-semibold mb-2">I&apos;m very flexible with time</p>
          <p className="text-lg font-semibold">zone communications</p>
          <div className="mt-4">
            <p className="text-sm">USA</p>
            <p className="text-sm">Germany</p>
            <p className="text-sm">Ukraine</p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-gray-800 p-4 rounded-xl">
          <p className="text-lg font-semibold mb-2">My tech stack</p>
          <p className="text-sm text-gray-400 mb-4">I constantly try to improve</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-700 p-2 rounded-md">ReactJS</div>
            <div className="bg-gray-700 p-2 rounded-md">VueJS</div>
            <div className="bg-gray-700 p-2 rounded-md">Express</div>
            <div className="bg-gray-700 p-2 rounded-md">NuxtJS</div>
            <div className="bg-gray-700 p-2 rounded-md">Typescript</div>
            <div className="bg-gray-700 p-2 rounded-md">GraphQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;