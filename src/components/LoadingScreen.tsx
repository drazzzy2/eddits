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
        return Math.min(prev + 15, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0A0B0F] flex items-center justify-center
                    transition-opacity duration-500 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="w-[200px] h-[2px] bg-gray-800 rounded-full mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
            style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-400">
          Loading {Math.min(100, Math.round(progress))}%
        </span>
      </div>
    </div>
  );
}