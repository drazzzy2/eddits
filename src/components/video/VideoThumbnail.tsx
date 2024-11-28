import React from 'react';
import GlassyPlayButton from './GlassyPlayButton';

interface VideoThumbnailProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '9/16' | 'square';
  onPlay?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const aspectRatioClasses = {
  '16/9': 'aspect-video',
  '9/16': 'aspect-[9/16]',
  'square': 'aspect-square'
};

export default function VideoThumbnail({ 
  src, 
  alt, 
  aspectRatio = '16/9',
  onPlay,
  size = 'md'
}: VideoThumbnailProps) {
  return (
    <div className={`relative ${aspectRatioClasses[aspectRatio]} rounded-2xl overflow-hidden group`}>
      {/* Thumbnail Image */}
      <img 
        src={src} 
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      
      {/* Centered Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <GlassyPlayButton size={size} onClick={onPlay} />
      </div>
    </div>
  );
}