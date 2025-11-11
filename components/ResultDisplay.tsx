
import React from 'react';
import { Button } from './Button';

interface ResultDisplayProps {
  generatedImage: string;
}

const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
);


export const ResultDisplay: React.FC<ResultDisplayProps> = ({ generatedImage }) => {
  return (
    <div className="text-center flex flex-col items-center animate-fade-in w-full">
      <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Your Passport Photo</h3>
      <img
        src={generatedImage}
        alt="Generated passport"
        className="rounded-lg shadow-lg max-h-96 w-auto mx-auto border-4 border-white dark:border-gray-700"
      />
      <a
        href={generatedImage}
        download="passport-photo.jpg"
        className="mt-6 w-full sm:w-auto"
      >
        <Button as="span" className="w-full">
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download Photo
        </Button>
      </a>
    </div>
  );
};
