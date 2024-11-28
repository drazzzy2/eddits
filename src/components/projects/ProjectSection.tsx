import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../ProjectCard';
import ScrollReveal from '../ScrollReveal';

interface Project {
  title: string;
  category: string;
  mediaUrl: string;
  isVideo?: boolean;
  aspectRatio?: '16/9' | '9/16' | 'square';
  size?: 'sm' | 'md' | 'lg';
}

interface ProjectSectionProps {
  title: string;
  projects: Project[];
  scrollRef: React.RefObject<HTMLDivElement>;
  itemWidth: number;
  onScroll: (direction: 'left' | 'right') => void;
}

export default function ProjectSection({ 
  title, 
  projects, 
  scrollRef, 
  itemWidth,
  onScroll 
}: ProjectSectionProps) {
  return (
    <div className="relative mb-16">
      {/* Left Arrow */}
      <button 
        onClick={() => onScroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm
                 flex items-center justify-center
                 border border-white/10 hover:border-cyan-500/30
                 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={() => onScroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm
                 flex items-center justify-center
                 border border-white/10 hover:border-cyan-500/30
                 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className="flex-none snap-start"
            style={{ width: `${itemWidth}px` }}
          >
            <ProjectCard 
              {...project} 
              delay={index * 200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}