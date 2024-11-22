import React from 'react';
import Testimonial from './Testimonial';
import { Users, Clock, Star, Coffee } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.google.com/u/1/d/1KvD0fRa6_PRXzS-wVY1k71b-t11y_Klx=w1912-h954-iv1" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 w-full px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-base text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-violet-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">7+</div>
              <div className="text-base text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-base text-gray-300">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Coffee className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-base text-gray-300">Coffee Cups</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Testimonials */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-[15%] left-[10%] transform -rotate-3">
          <Testimonial 
            content="Creative vision that transformed our brand's visual identity."
            author="Sarah Johnson"
            role="Marketing Director"
            delay="0s"
          />
        </div>
        <div className="absolute bottom-[15%] left-[10%] transform rotate-2">
          <Testimonial 
            content="Outstanding attention to detail in every project!"
            author="David Park"
            role="Production Manager"
            delay="1.5s"
          />
        </div>
        <div className="absolute top-[40%] right-[10%] transform rotate-2">
          <Testimonial 
            content="Exceptional motion graphics and editing skills!"
            author="Michael Chen"
            role="Creative Director"
            delay="1s"
          />
        </div>
      </div>

      <div className="w-full px-4">
        <div className="text-center relative z-30 max-w-5xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text">
              Hi, I'm Eddarrazy
            </h1>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-white font-medium">
                Video Editor & Motion Designer
              </h2>
              <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
                Crafting compelling visual stories that captivate and inspire.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-10">
              <a 
                href="#work" 
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-violet-500 
                         rounded-xl text-white font-medium text-lg transition-all duration-300 
                         hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105
                         relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  View Projects
                  <svg 
                    className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
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
                className="px-10 py-5 border-2 border-white/30 rounded-xl
                         hover:border-violet-500/50 transition-all duration-500
                         hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-violet-500/10
                         text-white text-lg relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get in Touch
                  <svg 
                    className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
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
