import React, { useState } from 'react';
import WebProjectCard from '../WebProjectCard';
import ScrollReveal from '../ScrollReveal';
import { motion } from 'framer-motion';

interface WebProject {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  mediaUrl: string;
  demoUrl?: string | null;
  behanceUrl?: string | null;
  githubUrl?: string | null;
  isVideo?: boolean;
  aspectRatio?: '16/9' | '9/16' | 'square';
  size?: 'sm' | 'md' | 'lg';
}

interface WebProjectsSectionProps {
  projects: WebProject[];
}

export default function WebProjectsSection({ projects }: WebProjectsSectionProps) {
  const [filter, setFilter] = useState<string>('all');
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => {
        const techStack = project.technologies.map(tech => tech.toLowerCase());
        return techStack.includes(filter.toLowerCase());
      });
  
  // Available filters based on unique technologies
  const filters = ['all', 'react', 'full stack'];

  return (
    <section className="py-20 relative" id="web-projects">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Filter Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filters.map((filterOption, index) => (
            <motion.button 
              key={filterOption}
              className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium
                        ${filter === filterOption 
                          ? 'bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300' 
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'}`}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterOption)}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with Enhanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Enhanced Grid Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 via-blue-500/5 to-emerald-500/0 
                        blur-3xl opacity-50 pointer-events-none"></div>

          {/* Project Cards with Staggered Animation */}
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <WebProjectCard {...project} />
                </motion.div>
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-3 py-20 text-center">
              <p className="text-gray-400 text-lg">No projects found matching the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 