import { useState, useEffect, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
}

export default function useCountUp({ 
  end, 
  start = 0, 
  duration = 2000,
  delay = 0 
}: UseCountUpProps) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const frameRef = useRef(0);
  const startTimeRef = useRef<number>();

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        
        const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
        const currentCount = Math.floor(progress * (end - start) + start);
        
        if (countRef.current !== currentCount) {
          countRef.current = currentCount;
          setCount(currentCount);
        }

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      cancelAnimationFrame(frameRef.current);
      startTimeRef.current = undefined;
    };
  }, [end, start, duration, delay]);

  return count;
}