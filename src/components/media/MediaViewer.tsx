import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MediaViewerProps {
  isOpen: boolean;
  onClose: () => void;
  mediaUrl: string;
  isVideo: boolean;
}

export default function MediaViewer({ isOpen, onClose, mediaUrl, isVideo }: MediaViewerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 
                     transition-colors duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Media Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-7xl mx-4 aspect-video relative rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo ? (
              <video
                className="w-full h-full object-contain"
                controls
                autoPlay
                src={mediaUrl}
              />
            ) : (
              <img
                src={mediaUrl}
                alt="Fullscreen view"
                className="w-full h-full object-contain"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}