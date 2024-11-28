import React, { useRef, useEffect } from 'react';

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed - this is expected on some browsers/devices
        console.log('Autoplay prevented');
      });
    }
  }, []);

  return (
    <div className={`relative ${aspectRatioClasses[aspectRatio]} rounded-2xl overflow-hidden`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}