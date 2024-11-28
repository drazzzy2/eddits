import React from 'react';
import { Volume2, VolumeX, Maximize2, Minimize2, X } from 'lucide-react';

interface CompactMediaControlsProps {
  isVideo: boolean;
  isMuted: boolean;
  isFullscreen: boolean;
  showControls: boolean;
  onMute: () => void;
  onFullscreen: () => void;
  onClose: () => void;
}

export default function CompactMediaControls({
  isVideo,
  isMuted,
  isFullscreen,
  showControls,
  onMute,
  onFullscreen,
  onClose
}: CompactMediaControlsProps) {
  return (
    <div className={`absolute top-4 right-4 flex items-center gap-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
      {isVideo && (
        <button
          onClick={onMute}
          className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 
                   hover:bg-white/10 transition-colors duration-200"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      )}
      <button
        onClick={onFullscreen}
        className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 
                 hover:bg-white/10 transition-colors duration-200"
      >
        {isFullscreen ? (
          <Minimize2 className="w-5 h-5 text-white" />
        ) : (
          <Maximize2 className="w-5 h-5 text-white" />
        )}
      </button>
      <button
        onClick={onClose}
        className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 
                 hover:bg-white/10 transition-colors duration-200"
      >
        <X className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}