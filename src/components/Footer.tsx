import React from 'react';
import { Instagram, PenTool, Linkedin } from 'lucide-react';

interface FooterProps {
  variant?: 'simple' | 'full';
}

export default function Footer({ variant = 'simple' }: FooterProps) {
  if (variant === 'simple') {
    return (
      <footer className="py-8 border-t border-gray-800/50">
        <div className="text-center space-y-2">
          <p className="text-gray-400">© {new Date().getFullYear()} Eddits. All rights reserved.</p>
          <p className="text-sm">
            <span className="text-gray-500">Designed and developed by </span>
            <span className="relative inline-block group">
              <span className="relative z-10 font-medium bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent
                           transition-all duration-300 group-hover:opacity-0">
                Mustapha Eddarrazy
              </span>
              <span className="absolute inset-0 flex items-center justify-center font-medium
                           bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent
                           transition-all duration-300 opacity-0 group-hover:opacity-100
                           transform group-hover:translate-y-0 translate-y-2">
                Mustapha Eddarrazy
              </span>
            </span>
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative py-8 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Eddits. All rights reserved.
            </p>
            <p className="text-sm">
              <span className="text-gray-500">Designed and developed by </span>
              <span className="relative inline-block group">
                <span className="relative z-10 font-medium bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent
                             transition-all duration-300 group-hover:opacity-0">
                  Mustapha Eddarrazy
                </span>
                <span className="absolute inset-0 flex items-center justify-center font-medium
                             bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent
                             transition-all duration-300 opacity-0 group-hover:opacity-100
                             transform group-hover:translate-y-0 translate-y-2">
                  Mustapha Eddarrazy
                </span>
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/drazzzy__/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 
                       flex items-center justify-center transition-all duration-300
                       hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-violet-500/20
                       hover:border-cyan-500/30 hover:scale-110"
            >
              <Instagram className="w-4 h-4 text-gray-300 hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.behance.net/mostafadrazy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 
                       flex items-center justify-center transition-all duration-300
                       hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-violet-500/20
                       hover:border-cyan-500/30 hover:scale-110"
            >
              <PenTool className="w-4 h-4 text-gray-300 hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/eddarrazy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 
                       flex items-center justify-center transition-all duration-300
                       hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-violet-500/20
                       hover:border-cyan-500/30 hover:scale-110"
            >
              <Linkedin className="w-4 h-4 text-gray-300 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}