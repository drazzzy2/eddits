import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import useTilt from '../hooks/useTilt';
import GlowEffect from './GlowEffect';
import GlassyPlayButton from './video/GlassyPlayButton';
import CompactMediaViewer from './media/CompactMediaViewer';
import { getResponsiveImageUrl, getVideoThumbnail } from '../utils/imageLoader';

// ... rest of the imports

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { tiltStyle, onMouseMove, onMouseLeave } = useTilt();

  const sizeClasses = {
    sm: '',
    md: 'md:col-span-2',
    lg: 'md:col-span-1'
  };

  // Get responsive media URL based on size
  const responsiveMediaUrl = isVideo 
    ? mediaUrl 
    : getResponsiveImageUrl(mediaUrl, size === 'sm' ? 480 : 960);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.preload = 'metadata';
      videoRef.current.currentTime = 0.1;
      videoRef.current.addEventListener('loadeddata', () => {
        setIsLoaded(true);
      });
    }
  }, []);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMediaClick = () => {
    setIsViewerOpen(true);
  };

  return (
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
                <>
                  <video 
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={getVideoThumbnail(mediaUrl)}
                  >
                    <source src={responsiveMediaUrl} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div onClick={handlePlayClick}>
                      <GlassyPlayButton 
                        size={size === 'sm' ? 'sm' : size === 'md' ? 'md' : 'lg'}
                        isPlaying={isPlaying}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <img 
                  src={responsiveMediaUrl}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          {/* ... rest of the component ... */}
        </div>
      </div>
    </ScrollReveal>
  );
}