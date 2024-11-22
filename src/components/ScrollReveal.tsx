import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  type?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';
  threshold?: number;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  type = 'fade-up',
  threshold = 0.2,
  delay = 0,
  className = ''
}: ScrollRevealProps) {
  const { ref, animationClass, baseClass, style } = useScrollAnimation(type, threshold, delay);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${baseClass} ${animationClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}