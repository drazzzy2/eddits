import React from 'react';

interface GlowEffectProps {
  color?: string;
  blur?: string;
  opacity?: string;
  scale?: string;
}

export default function GlowEffect({
  color = 'cyan',
  blur = '80px',
  opacity = '0.15',
  scale = '0.8'
}: GlowEffectProps) {
  const colors = {
    cyan: 'from-cyan-500/30 to-violet-500/30',
    purple: 'from-purple-500/30 to-pink-500/30',
    blue: 'from-blue-500/30 to-indigo-500/30'
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${colors[color as keyof typeof colors]}
                   transform group-hover:scale-150 transition-transform duration-700`}
        style={{
          filter: `blur(${blur})`,
          opacity: opacity,
          transform: `scale(${scale})`
        }}
      />
    </div>
  );
}