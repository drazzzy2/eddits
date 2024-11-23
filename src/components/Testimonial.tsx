import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  delay?: string;
  position: 'left' | 'right';
}

export default function Testimonial({ 
  content, 
  author, 
  role, 
  delay = '0s',
  position 
}: TestimonialProps) {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    const currentRef = testimonialRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClasses = [
    'floating-card',
    'backdrop-blur-md',
    'bg-[#12141C]/40',
    'p-4',
    'max-w-[280px]',
    'relative',
    'transform',
    'transition-all',
    'duration-1000',
    'ease-out',
    'hover:scale-105',
    position === 'left' ? 'animate-float-left' : 'animate-float-right',
    isVisible ? 'opacity-100' : 'opacity-0',
    isVisible
      ? position === 'left'
        ? 'translate-x-0 animate-sway-left'
        : 'translate-x-0 animate-sway-right'
      : position === 'left'
      ? '-translate-x-full'
      : 'translate-x-full'
  ].join(' ');

  return (
    <div 
      ref={testimonialRef}
      className={animationClasses}
      style={{ 
        animationDelay: delay 
      }}
    >
      <Quote className="text-cyan-400 mb-2 w-6 h-6" />
      <p className="text-gray-200 mb-3 leading-relaxed text-sm">{content}</p>
      <div className="flex items-center">
        <div>
          <p className="font-semibold text-white text-sm">{author}</p>
          <p className="text-xs text-cyan-400">{role}</p>
        </div>
      </div>
    </div>
  );
}