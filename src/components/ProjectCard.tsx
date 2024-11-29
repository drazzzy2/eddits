import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import useTilt from '../hooks/useTilt';
import GlowEffect from './GlowEffect';
import GlassyPlayButton from './video/GlassyPlayButton';
import CompactMediaViewer from './media/CompactMediaViewer';

interface ProjectCardProps {
  title: string;
  category: string;
  mediaUrl: string;
  isVideo?: boolean;
  videoUrl?: string;
  aspectRatio?: '16/9' | '9/16' | 'square';
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
}

export default function ProjectCard({ 
  title, 
  category, 
  mediaUrl, 
  isVideo = false, 
  videoUrl,
  aspectRatio = '16/9',
  size = 'sm',
  delay = 0
}: ProjectCardProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const { tiltStyle, onMouseMove, onMouseLeave } = useTilt();

  const sizeClasses = {
    sm: '',
    md: 'md:col-span-2',
    lg: 'md:col-span-1'
  };

  const handleMediaClick = () => {
    setIsViewerOpen(true);
  };

  return (
    <>
      <ScrollReveal delay={delay} type="fade-up">
        <div className={`${sizeClasses[size]} group`}>
          <div 
            className="relative overflow-hidden rounded-2xl bg-[#12141C]/40 backdrop-blur-sm 
                      border border-[#2A2D3A]/50 hover:border-cyan-500/30
                      hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                      cursor-pointer"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={handleMediaClick}
            style={tiltStyle}
          >
            <GlowEffect />

            <div className="relative z-10 backdrop-blur-sm bg-black/10">
              <div className={`relative ${aspectRatio === '16/9' ? 'aspect-video' : aspectRatio === '9/16' ? 'aspect-[9/16]' : 'aspect-square'}`}>
                {isVideo ? (
                  <video 
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    autoPlay
                  >
                    <source src={`${mediaUrl}?w=480&q=70`} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={mediaUrl} 
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <GlassyPlayButton 
                    size={size === 'sm' ? 'sm' : size === 'md' ? 'md' : 'lg'}
                  />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12141C]/80 to-[#12141C] 
                          opacity-0 group-hover:opacity-100 
                          transition-all duration-300 rounded-2xl 
                          flex items-center justify-center">
              <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-cyan-400 mb-4">{category}</p>
                {videoUrl && (
                  <a 
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-xl bg-white/10 backdrop-blur-md 
                             border border-white/20 hover:border-cyan-500/30
                             transition-all duration-300 hover:scale-110
                             hover:bg-white/20 inline-block group"
                  >
                    <ExternalLink size={20} className="text-white group-hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <CompactMediaViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        mediaUrl={mediaUrl}
        isVideo={isVideo}
      />
    </>
  );
}