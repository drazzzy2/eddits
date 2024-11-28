import React from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

interface GlassyPlayButtonProps {
  size?: 'sm' | 'md' | 'lg';
  isPlaying?: boolean;
  onClick?: () => void;
}

const sizeMap = {
  sm: {
    button: 'w-12 h-12',
    icon: 'w-5 h-5',
    glow: 'w-16 h-16',
  },
  md: {
    button: 'w-16 h-16',
    icon: 'w-6 h-6',
    glow: 'w-20 h-20',
  },
  lg: {
    button: 'w-20 h-20',
    icon: 'w-8 h-8',
    glow: 'w-24 h-24',
  },
};

export default function GlassyPlayButton({ size = 'md', isPlaying = false, onClick }: GlassyPlayButtonProps) {
  const Icon = isPlaying ? Pause : Play;
  
  return (
    <motion.div className="relative group">
      {/* Outer Glow */}
      <div className={`absolute ${sizeMap[size].glow} -inset-4
                    bg-gradient-to-r from-cyan-500/20 to-violet-500/20 
                    rounded-full blur-xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500`} />

      {/* Button */}
      <motion.button
        onClick={onClick}
        className={`${sizeMap[size].button} relative rounded-full 
                   bg-[#12141C]/60 backdrop-blur-md
                   flex items-center justify-center
                   border border-white/10
                   group-hover:border-cyan-500/30
                   transition-all duration-300
                   overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glass Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play/Pause Icon */}
        <Icon 
          className={`${sizeMap[size].icon} text-white/75 group-hover:text-white
                     relative z-10 transition-all duration-300
                     group-hover:scale-110`}
          fill="currentColor"
          fillOpacity={0.1}
        />
      </motion.button>
    </motion.div>
  );
}