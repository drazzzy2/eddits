import { useState, useCallback } from 'react';

interface TiltValues {
  transform: string;
  transition: string;
}

export default function useTilt() {
  const [tiltStyle, setTiltStyle] = useState<TiltValues>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'all 0.1s ease-out'
  });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;
    
    // Calculate rotation values (max 10 degrees)
    const rotateX = (mouseY / (cardRect.height / 2)) * -10;
    const rotateY = (mouseX / (cardRect.width / 2)) * 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'all 0.1s ease-out'
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'all 0.6s ease-out'
    });
  }, []);

  return { tiltStyle, onMouseMove, onMouseLeave };
}