import React from 'react';
import Testimonial from './Testimonial';
import { Users, Clock, Star, Coffee } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[85vh] w-full flex items-center justify-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.google.com/u/1/d/1KvD0fRa6_PRXzS-wVY1k71b-t11y_Klx=w1912-h954-iv1" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Stats Bar */}
      <div className="absolute -bottom-24 w-full px-4">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">150+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-violet-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">7+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">200+</div>
              <div className="text-sm text-gray-400">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Coffee className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">1000+</div>
              <div className="text-sm text-gray-400">Coffee Cups</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Testimonials */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-[20%] left-[5%] transform -rotate-3">
          <Testimonial 
            content="Creative vision that transformed our brand's visual identity."
            author="Sarah Johnson"
            role="Marketing Director"
            delay="0s"
          />
        </div>
        <div className="absolute bottom-[20%] left-[5%] transform rotate-2">
          <Testimonial 
            content="Outstanding attention to detail in every project!"
            author="David Park"
            role="Production Manager"
            delay="1.5s"
          />
        </div>
        <div className="absolute top-[40%] right-[5%] transform rotate-2">
          <Testimonial 
            content="Exceptional motion graphics and editing skills!"
            author="Michael Chen"
            role="Creative Director"
            delay="1s"
          />
        </div>
      </div>

      <div className="w-full px-4 mt-32">
        <div className="text-center relative z-30 max-w-3xl mx-auto">
          <div className="space-y-6">
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
        </div>
      </div>
    </section>
  );
}
