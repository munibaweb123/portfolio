// components/DeveloperCard2.tsx

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DeveloperCard2: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl text-white font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-lg font-semibold">Tech enthusiast with a passion for development.</p>
            <div className="mt-4 bg-gray-700 p-2 rounded-md">
              {/* Placeholder for small image (replace with actual image) */}
              <div className="w-16 h-10 bg-gray-600"></div> 
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-lg font-semibold">Do you want to start a project together?</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm">
              Copy my email address
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="md:col-span-1 flex items-center justify-center">
          <div>
            <p className="text-2xl font-bold mb-2">THE INSIDE SCOOP</p>
            <p className="text-lg font-semibold">Currently building a</p>
            <p className="text-lg font-semibold">AI Agents using openai SDK</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-800 p-4 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10">
          <div className="text-sm text-gray-300">
         {/* <p>import &#123; Prism as SyntaxHighlighter &#125; from 'react-syntax-highlighter';</p>
         <p>import &#123; vscDarkPlus &#125; from 'react-syntax-highlighter/dist/esm/styles/prism';</p> */}
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
{`// Importing a single module
import moduleName from 'modulePath';
            
// Importing multiple modules
import { module1, module2 } from 'modulePath';
            
// Importing the entire module
import * as Module from 'modulePath';`}
</SyntaxHighlighter>
        </div>         
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard2;