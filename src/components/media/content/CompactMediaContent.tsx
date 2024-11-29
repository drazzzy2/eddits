import React from 'react';
import GlassyPlayButton from '../../video/GlassyPlayButton';

interface CompactMediaContentProps {
  mediaUrl: string;
  isVideo: boolean;
  isPlaying: boolean;
  isMuted: boolean;
  showControls: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
  onTogglePlay: () => void;
}

export default function CompactMediaContent({
  mediaUrl,
  isVideo,
  isPlaying,
  isMuted,
  showControls,
  videoRef,
  onTogglePlay
}: CompactMediaContentProps) {
  return (
    <>
      {isVideo ? (
        <>
          <video
            ref={videoRef}
            className="max-h-[90vh] w-auto"
            loop
            muted={isMuted}
            playsInline
            onClick={onTogglePlay}
          >
            <source src={`${mediaUrl}?w=1280&q=100`} type="video/mp4" />
          </video>
          {(!isPlaying || showControls) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div onClick={onTogglePlay}>
                <GlassyPlayButton 
                  size="md" 
                  isPlaying={isPlaying}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <img
          src={mediaUrl}
          alt="Media view"
          className="max-h-[90vh] w-auto"
        />
      )}
    </>
  );
}