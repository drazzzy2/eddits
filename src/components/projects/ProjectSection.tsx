import React, { RefObject } from 'react';
import ProjectCard from '../ProjectCard';
import ScrollReveal from '../ScrollReveal';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  mediaUrl: string;
  isVideo?: boolean;
  videoUrl?: string;
  aspectRatio?: '16/9' | '9/16' | 'square';
  size?: 'sm' | 'md' | 'lg';
}

interface ProjectSectionProps {
  title: string;
  projects: Project[];
  scrollRef?: RefObject<HTMLDivElement>;
  itemWidth?: number;
  onScroll?: (direction: 'left' | 'right') => void;
}

export default function ProjectSection({ 
  title, 
  projects,
  scrollRef,
  itemWidth,
  onScroll
}: ProjectSectionProps) {
  return (
    <section className="py-20 relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid with Enhanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Enhanced Grid Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 via-blue-500/5 to-emerald-500/0 
                        blur-3xl opacity-50 pointer-events-none"></div>

          {/* Project Cards with Staggered Animation */}
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <ProjectCard 
                  {...project}
                  size={project.size || 'sm'}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}