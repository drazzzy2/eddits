import React from 'react';
import Testimonial from './Testimonial';
import { Users, Clock, Star, Coffee } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[85vh] w-screen flex items-center justify-center">
  {/* Hero Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://creatorspace.imgix.net/users/cm36fnldg0bvzqq01ucd25h3d/ss7vzE6uBy0sHxb9-bg.png?w=750&h=750" 
      alt="Background" 
          className="w-full h-full object-cover"
     />
    <div className="absolute inset-0 bg-black/30"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center space-y-6">
    <h1 className="text-5xl md:text-7xl font-bold gradient-text">
      Hi, I'm Eddarrazy
    </h1>
    <div className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-medium">
        Video Editor & Motion Designer
      </h2>
      <p className="text-xl text-gray-300">
        Crafting compelling visual stories that captivate and inspire.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 pt-8">
      <a 
        href="#work" 
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 
                   rounded-xl text-white font-medium transition-all duration-300 
                   hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]
                   relative overflow-hidden group"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          View Projects
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </span>
      </a>
      <a 
        href="#contact" 
        className="px-8 py-4 border-2 border-cyan-500/50 rounded-xl
                   hover:border-violet-500/50 transition-all duration-500
                   hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-violet-500/10
                   text-white relative group overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Get in Touch
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M20 12H4m0 0l6-6m-6 6l6 6" 
            />
          </svg>
        </span>
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 
                        bg-gradient-to-r from-cyan-500/10 to-violet-500/10 
                        transition-transform duration-500"></div>
      </a>
    </div>
  </div>
</section>

