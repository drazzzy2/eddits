import React from 'react';
import { LucideIcon } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';
import ScrollReveal from './ScrollReveal';

interface StatCardProps {
  icon: LucideIcon;
  endValue: number;
  label: string;
  delay?: number;
  iconColor?: string;
}

export default function StatCard({ 
  icon: Icon, 
  endValue, 
  label, 
  delay = 0,
  iconColor = 'text-cyan-400'
}: StatCardProps) {
  const count = useCountUp({ 
    end: endValue,
    duration: 2000,
    delay: delay 
  });

  return (
    <ScrollReveal type="fade-up" delay={delay}>
      <div className="text-center transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-2">
          <Icon className={`w-6 h-6 ${iconColor} animate-bounce`} style={{ animationDelay: `${delay}ms` }} />
        </div>
        <div className="text-2xl font-bold text-white mb-1">
          {count}+
        </div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </ScrollReveal>
  );
}