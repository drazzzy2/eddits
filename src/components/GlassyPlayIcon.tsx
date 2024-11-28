import React from 'react';
import { Play } from 'lucide-react';

interface GlassyPlayIconProps {
  size?: number;
  onClick?: () => void;
}

export default function GlassyPlayIcon({ size = 48, onClick }: GlassyPlayIconProps) {
  return (
    <button
      onClick={onClick}
      className="group relative p-4 rounded-full 
                 bg-white/10 backdrop-blur-md border border-white/20
                 hover:bg-white/20 transition-all duration-300
                 hover:scale-110 hover:border-cyan-500/30"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 
                    blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <Play 
        size={size} 
        className="relative z-10 text-white group-hover:text-cyan-400 transition-colors duration-300"
        fill="currentColor"
        fillOpacity={0.2}
      />
    </button>
  );
}