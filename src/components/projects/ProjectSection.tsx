import React from 'react';
import ProjectCard from '../ProjectCard';
import ScrollReveal from '../ScrollReveal';

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
}

export default function ProjectSection({ 
  title, 
  projects
}: ProjectSectionProps) {
  return (
    <section className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 
                         text-transparent bg-clip-text bg-[length:200%_100%] animate-gradient">{title}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our featured work and creative projects, showcasing innovation and artistic excellence
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Grid Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-violet-500/5 to-cyan-500/0 
                        blur-3xl opacity-50 pointer-events-none"></div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <ProjectCard 
                {...project}
                size={project.size || 'sm'}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}