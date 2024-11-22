import { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';

export default function useScrollAnimation(
  type: AnimationType = 'fade-up',
  threshold = 0.2,
  delay = 0
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClass = isVisible ? 'animate-in' : '';
  const baseClass = `opacity-0 ${getAnimationClass(type)}`;
  const delayStyle = { transitionDelay: `${delay}ms` };

  return { ref, animationClass, baseClass, style: delayStyle };
}

function getAnimationClass(type: AnimationType): string {
  switch (type) {
    case 'fade-up':
      return 'translate-y-8';
    case 'fade-in':
      return '';
    case 'scale-up':
      return 'scale-95';
    case 'slide-left':
      return '-translate-x-8';
    case 'slide-right':
      return 'translate-x-8';
    default:
      return '';
  }
}