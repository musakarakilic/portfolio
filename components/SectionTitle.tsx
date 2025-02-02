import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <div className="relative inline-block group">
        <h2 className="text-6xl bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 text-transparent bg-clip-text font-bold tracking-tight hover:scale-105 transition-transform duration-300">
          {title}
        </h2>
        <div className="absolute -bottom-6 left-0 w-full overflow-hidden">
          <svg className="w-full h-6 transform group-hover:scale-105 transition-transform duration-300" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M20 15 C60 0, 140 0, 180 15" 
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              className="opacity-90"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle; 