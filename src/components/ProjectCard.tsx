import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
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

  const sizeClasses = {
    sm: '',
    md: 'md:col-span-2',
    lg: 'md:col-span-1'
  };

  const handleMediaClick = () => {
    setIsViewerOpen(true);
  };

  // Force video to show first frame
  const videoRef = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.currentTime = 0.1;
    }
  }, [isVideo]);

  return (
    <>
      <div className={`${sizeClasses[size]} group h-full`}>
        <div 
          className="relative h-full overflow-hidden rounded-2xl bg-[#12141C]/40 backdrop-blur-sm 
                    border border-[#2A2D3A]/50 hover:border-cyan-500/30
                    hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                    cursor-pointer transform transition-all duration-500
                    hover:scale-[1.02] hover:bg-[#12141C]/60"
          onClick={handleMediaClick}
        >
          {/* Glow Effects */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-violet-500/0 
                        group-hover:from-cyan-500/20 group-hover:via-violet-500/20 group-hover:to-cyan-500/20 
                        rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <GlowEffect />

          <div className="relative z-10 h-full">
            <div className={`relative ${aspectRatio === '16/9' ? 'aspect-video' : aspectRatio === '9/16' ? 'aspect-[9/16]' : 'aspect-square'}`}>
              {/* Video thumbnail with fallback */}
              {isVideo ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 mix-blend-overlay"></div>
                  <video
                    ref={videoRef}
                    src={mediaUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    preload="metadata"
                    playsInline
                    muted
                    onLoadedData={(e) => {
                      e.currentTarget.currentTime = 0.1;
                    }}
                  />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 mix-blend-overlay"></div>
                  <img 
                    src={mediaUrl}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </>
              )}

              {/* Show play button only for videos */}
              {isVideo && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="transform transition-all duration-500 scale-75 group-hover:scale-100">
                    <GlassyPlayButton 
                      size={size === 'sm' ? 'sm' : size === 'md' ? 'md' : 'lg'}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12141C]/80 to-[#12141C] 
                          opacity-0 group-hover:opacity-100 
                          transition-all duration-500">
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent 
                               group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                               group-hover:from-cyan-400 group-hover:to-violet-400">{title}</h3>
                  <p className="text-cyan-400 mb-4 opacity-75">{category}</p>
                  {videoUrl && (
                    <a 
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl 
                               bg-white/10 backdrop-blur-md border border-white/20 
                               hover:border-cyan-500/30 hover:bg-white/20 
                               transition-all duration-300 hover:scale-105 group/btn
                               text-white hover:text-transparent hover:bg-clip-text 
                               hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-400"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} className="group-hover/btn:stroke-cyan-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompactMediaViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        mediaUrl={mediaUrl}
        isVideo={isVideo}
      />
    </>
  );
}