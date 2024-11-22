import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  delay?: string;
}

export default function Testimonial({ content, author, role, delay = '0s' }: TestimonialProps) {
  return (
    <div 
      className="floating-card backdrop-blur-md bg-[#12141C]/40 p-4 max-w-[280px] relative overflow-hidden"
      style={{ 
        animation: 'float 6s ease-in-out infinite',
        animationDelay: delay 
      }}
    >
      <div className="scanning-frame"></div>
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