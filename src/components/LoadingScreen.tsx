import React, { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0A0B0F] flex items-center justify-center
                    transition-opacity duration-500 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative">
        {/* Logo Animation */}
        <div className="relative w-20 h-20 mb-8 mx-auto">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 animate-pulse"></div>
          <div className="absolute inset-[2px] rounded-2xl bg-[#0A0B0F] flex items-center justify-center">
            <Code className="w-8 h-8 text-white animate-bounce" />
          </div>
          
          {/* Circular Progress */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              className="text-gray-800"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
            />
            <circle
              className="text-cyan-500"
              strokeWidth="4"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
              strokeDasharray={`${2 * Math.PI * 36}`}
              strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
              style={{
                transition: 'stroke-dashoffset 0.3s ease'
              }}
            />
          </svg>
        </div>

        {/* Progress Text */}
        <div className="text-center">
          <div className="w-[200px] h-[2px] bg-gray-800 rounded-full mb-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
              style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-400">
            Loading Experience {Math.min(100, Math.round(progress))}%
          </span>
        </div>
      </div>
    </div>
  );
}