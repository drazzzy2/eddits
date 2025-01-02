import React, { useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  aspectRatio?: '16/9' | '9/16' | 'square';
}

const aspectRatioClasses = {
  '16/9': 'aspect-video',
  '9/16': 'aspect-[9/16]',
  'square': 'aspect-square'
};

export default function VideoPlayer({ src, aspectRatio = '16/9' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`relative ${aspectRatioClasses[aspectRatio]} rounded-2xl overflow-hidden`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="none"
        poster={`${src}?w=480&frame=1`}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}