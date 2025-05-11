import React from 'react';
import { Globe, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface WebProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  mediaUrl: string;
  demoUrl?: string | null;
  behanceUrl?: string | null;
  githubUrl?: string | null;
  isVideo?: boolean;
}

export default function WebProjectCard({
  title,
  category,
  description,
  technologies,
  mediaUrl,
  demoUrl,
  behanceUrl,
  githubUrl,
  isVideo = false
}: WebProjectCardProps) {
  // Truncate description if too long
  const truncateDescription = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).trim() + '...';
  };

  return (
    <div className="group h-full flex">
      <div className="relative flex flex-col w-full h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-lg 
                    border border-slate-700/50 hover:border-emerald-500/30
                    hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]
                    cursor-pointer transform transition-all duration-500
                    hover:scale-[1.02] hover:bg-slate-900/80">
        {/* Glow Effects */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-blue-500/0 
                      group-hover:from-emerald-500/20 group-hover:via-blue-500/20 group-hover:to-emerald-500/20 
                      rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Media Container - Fixed Height */}
          <div className="relative h-48 overflow-hidden">
            {isVideo ? (
              <video 
                src={mediaUrl} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                autoPlay 
                muted 
                loop 
                playsInline
              />
            ) : (
              <img 
                src={mediaUrl} 
                alt={title} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
            )}
            
            {/* Category Badge - Positioned at top right */}
            <div className="absolute top-3 right-3 z-10">
              <span className="text-xs font-medium bg-gradient-to-r from-emerald-500/30 to-blue-500/30 text-white px-3 py-1 rounded-full backdrop-blur-md">
                {category}
              </span>
            </div>
            
            {/* Hover Overlay with Links */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="flex space-x-3">
                {demoUrl && (
                  <motion.a 
                    href={demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-full text-emerald-300 transition-colors duration-300"
                    title="Visit Live Website"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe size={18} />
                  </motion.a>
                )}
                
                {behanceUrl && (
                  <motion.a 
                    href={behanceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-full text-blue-300 transition-colors duration-300"
                    title="View on Behance"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                )}
                
                {githubUrl && (
                  <motion.a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-700/50 hover:bg-slate-700/80 rounded-full text-white transition-colors duration-300"
                    title="View on GitHub"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
          
          {/* Content - Fixed Height with Overflow */}
          <div className="p-5 flex-grow flex flex-col">
            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 transition-all duration-300 line-clamp-1">
              {title}
            </h3>
            
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 mb-auto line-clamp-2">
              {truncateDescription(description)}
            </p>
            
            {/* Technologies - Fixed Height with Horizontal Scroll */}
            <div className="mt-4 flex gap-2 flex-wrap">
              {technologies.slice(0, 3).map((tech, index) => (
                <motion.span 
                  key={index} 
                  className="px-2 py-1 text-xs font-medium rounded-full bg-slate-800/70 text-gray-300 group-hover:bg-slate-800/90 transition-colors duration-300 whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-800/40 text-gray-400">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
            
            {/* Link Buttons */}
            <div className="flex space-x-3 mt-4 pt-3 border-t border-slate-700/30">
              {demoUrl && (
                <motion.a 
                  href={demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Globe size={12} className="mr-1" /> Visit Website
                </motion.a>
              )}
              
              {behanceUrl && (
                <motion.a 
                  href={behanceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink size={12} className="mr-1" /> View on Behance
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 