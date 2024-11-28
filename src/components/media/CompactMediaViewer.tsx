import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import CompactMediaControls from './controls/CompactMediaControls';
import CompactMediaContent from './content/CompactMediaContent';
import CompactMediaOverlay from './overlay/CompactMediaOverlay';

interface CompactMediaViewerProps {
  isOpen: boolean;
  onClose: () => void;
  mediaUrl: string;
  isVideo: boolean;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const contentVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function CompactMediaViewer({ 
  isOpen, 
  onClose, 
  mediaUrl, 
  isVideo
}: CompactMediaViewerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen();
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.addEventListener('fullscreenchange', handleFullscreenChange);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = async () => {
    if (!videoRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await videoRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Error attempting to toggle full-screen:', err);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  };

  const mediaViewer = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CompactMediaOverlay onClose={onClose} />

          <motion.div
            className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 flex items-center justify-center"
            variants={contentVariants}
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setShowControls(true)}
          >
            <div 
              ref={mediaContainerRef}
              className="relative w-auto h-auto max-w-full max-h-full rounded-2xl overflow-hidden 
                        bg-white/5 backdrop-blur-sm border border-white/10
                        shadow-[0_0_50px_rgba(0,0,0,0.3)]"
            >
              <CompactMediaContent
                mediaUrl={mediaUrl}
                isVideo={isVideo}
                isPlaying={isPlaying}
                isMuted={isMuted}
                showControls={showControls}
                videoRef={videoRef}
                onTogglePlay={togglePlay}
              />

              <CompactMediaControls
                isVideo={isVideo}
                isMuted={isMuted}
                isFullscreen={isFullscreen}
                showControls={showControls}
                onMute={toggleMute}
                onFullscreen={toggleFullscreen}
                onClose={onClose}
              />
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(mediaViewer, document.body);
}