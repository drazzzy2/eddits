import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  mediaUrl: string;
  isVideo?: boolean;
  videoUrl?: string;
  aspectRatio?: '16/9' | '9/16' | 'square';
  size?: 'sm' | 'md' | 'lg';
}

export default function ProjectCard({ 
  title, 
  category, 
  mediaUrl, 
  isVideo = false, 
  videoUrl,
  aspectRatio = '9/16',
  size = 'sm'
}: ProjectCardProps) {
  const sizeClasses = {
    sm: 'col-span-1',
    md: 'col-span-2',
    lg: 'col-span-2 md:col-span-4'
  };

  const aspectClasses = {
    '16/9': 'w-[380px] h-[213.75px]',
    '9/16': 'w-[213.75px] h-[380px]',
    'square': 'aspect-square'
  };

  return (
    <div className={`${sizeClasses[size]} flex justify-center group`}>
      <div className="relative overflow-hidden rounded-2xl bg-[#12141C]/40 backdrop-blur-sm 
                    transition-all duration-500 hover:scale-[1.02]
                    border border-[#2A2D3A]/50 hover:border-cyan-500/30
                    hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
        <div className={`relative ${aspectClasses[aspectRatio]}`}>
          {isVideo ? (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={mediaUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img 
              src={mediaUrl} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12141C]/80 to-[#12141C] 
                      opacity-0 group-hover:opacity-100 
                      transition-all duration-300 rounded-2xl 
                      flex items-center justify-center">
          <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-cyan-400 mb-4">{category}</p>
            <div className="flex justify-center gap-4">
              {videoUrl && (
                <a 
                  href={videoUrl} 
                  className="p-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 
                           transition-all duration-300 hover:scale-110 transform
                           shadow-lg shadow-cyan-500/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play size={20} />
                </a>
              )}
              <button className="p-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 
                               transition-all duration-300 hover:scale-110 transform
                               shadow-lg shadow-cyan-500/20">
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}