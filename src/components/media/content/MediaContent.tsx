import React, { useRef } from 'react';
import GlassyPlayButton from '../../video/GlassyPlayButton';

interface MediaContentProps {
  mediaUrl: string;
  isVideo: boolean;
  isPlaying: boolean;
  isMuted: boolean;
  showControls: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
  onTogglePlay: () => void;
}

export default function MediaContent({
  mediaUrl,
  isVideo,
  isPlaying,
  isMuted,
  showControls,
  videoRef,
  onTogglePlay
}: MediaContentProps) {
  return (
    <>
      {isVideo ? (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            loop
            muted={isMuted}
            playsInline
            onClick={onTogglePlay}
          >
            <source src={mediaUrl} type="video/mp4" />
          </video>
          {(!isPlaying || showControls) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div onClick={onTogglePlay}>
                <GlassyPlayButton 
                  size="lg" 
                  isPlaying={isPlaying}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <img
          src={mediaUrl}
          alt="Fullscreen view"
          className="w-full h-full object-contain"
        />
      )}
    </>
  );
}