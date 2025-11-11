
import React from 'react';

const CameraIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <CameraIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-3" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-tight">
          AI Passport Photo Generator
        </h1>
      </div>
    </header>
  );
};
