
import React, { useCallback, useState } from 'react';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

const UploadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
);


export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageSelect(e.dataTransfer.files[0]);
    }
  }, [onImageSelect]);

  const borderStyle = isDragging
    ? 'border-indigo-600 dark:border-indigo-400'
    : 'border-gray-300 dark:border-gray-600';

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
        <label
            htmlFor="file-upload"
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`w-full max-w-lg cursor-pointer flex flex-col items-center justify-center p-10 border-2 ${borderStyle} border-dashed rounded-xl bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300 ease-in-out hover:border-indigo-500 dark:hover:border-indigo-500`}
        >
            <UploadIcon className="w-16 h-16 text-gray-400 dark:text-gray-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Drag & Drop or Click to Upload</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Upload a clear, front-facing photo</p>
            <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleFileChange}
            />
            <span className="mt-6 inline-block bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow-sm hover:bg-indigo-700 transition-colors">
                Select a File
            </span>
        </label>
    </div>
  );
};
