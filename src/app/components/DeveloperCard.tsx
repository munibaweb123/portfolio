import React from "react";
import Image from "next/image";

const DeveloperCard: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl text-white font-sans">
      {/* Laptop Section */}
      <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
        <Image
          src="/box.png"
          alt="Laptop"
          width={500}
          height={500}
          className="w-full rounded-2xl"
        />
      </div>

      {/* Time Zone and Tech Stack Section */}
      <div className="flex flex-col items-center md:items-start justify-center gap-6 w-full md:w-1/2">
        {/* Time Zone Section */}
        <div className="bg-gray-800 p-4 rounded-xl w-full">
          <p className="text-lg font-semibold mb-2 text-center md:text-left">
            I&apos;m very flexible with time
          </p>
          <p className="text-lg font-semibold text-center md:text-left">
            zone communications
          </p>
          <div className="mt-4 flex justify-center md:justify-start gap-4">
            <p className="text-sm bg-gray-700 px-3 py-1 rounded-md">USA</p>
            <p className="text-sm bg-gray-700 px-3 py-1 rounded-md">Pakistan</p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-gray-800 p-4 rounded-xl w-full">
          <p className="text-lg font-semibold mb-2 text-center md:text-left">
            My tech stack
          </p>
          <p className="text-sm text-gray-400 mb-4 text-center md:text-left">
            I constantly try to improve
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div className="bg-gray-700 p-2 rounded-md text-center">NextJS</div>
            <div className="bg-gray-700 p-2 rounded-md text-center">
              Tailwindcss
            </div>
            <div className="bg-gray-700 p-2 rounded-md text-center">
              Typescript
            </div>
            <div className="bg-gray-700 p-2 rounded-md text-center">Python</div>
            <div className="bg-gray-700 p-2 rounded-md text-center">
              Streamlit
            </div>
            <div className="bg-gray-700 p-2 rounded-md text-center">
              Adobe Illustrator
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;