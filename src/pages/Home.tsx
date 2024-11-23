import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import SkillsSection from '../components/SkillsSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import ScrollReveal from '../components/ScrollReveal';
import PageTransition from '../components/PageTransition';

export default function Home() {
  const verticalScrollRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const verticalProjects = [
    {
      title: "Cinematic Sequence",
      category: "Video Production",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2FzkXr4qomep6XAYxg-Sequence%252002_6.mp4",
      isVideo: true,
      aspectRatio: '9/16' as const,
      size: 'sm' as const
    },
    {
      title: "Brand Video",
      category: "Commercial",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2FjP1WNArsfiVwFktk-users_cm1uo4uof00llr801vewmaatr_use1Yr0KA4owTnTQ-Talking201.mp4",
      isVideo: true,
      aspectRatio: '9/16' as const,
      size: 'sm' as const
    },
    {
      title: "Fitness Campaign",
      category: "Motion Graphics",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2F8dIqUuICpyVplbPu-Focus%2520on%2520Building%2520muscle_2.mp4",
      isVideo: true,
      aspectRatio: '9/16' as const,
      size: 'sm' as const
    },
    {
      title: "Brand Story",
      category: "Video & Graphics",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2Fn3an2PhKlgBmy8Rb-Aya.mp4",
      isVideo: true,
      aspectRatio: '9/16' as const,
      size: 'sm' as const
    },
    {
      title: "Product Launch",
      category: "Commercial",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2FxdZSUve1GZrg2Ayx-Nested%2520Sequence%252001_3.mp4",
      isVideo: true,
      aspectRatio: '9/16' as const,
      size: 'sm' as const
    }
  ];

  const horizontalProjects = [
    {
      title: "Animation Reel",
      category: "Motion Graphics",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2FMmMmcGKLzaa3teMy-Comp%25201_2_1.mp4",
      isVideo: true,
      aspectRatio: '16/9' as const,
      size: 'lg' as const
    },
    {
      title: "Media Production",
      category: "Video & Graphics",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2Fm3jLjJ1kSVxbK2Z2-1_Media%2520File.mp4",
      isVideo: true,
      aspectRatio: '16/9' as const,
      size: 'lg' as const
    },
    {
      title: "Creative Showcase",
      category: "Motion Design",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2FF06cl4jdzys5bZmc-Sequence%252001.mp4",
      isVideo: true,
      aspectRatio: '16/9' as const,
      size: 'lg' as const
    },
    {
      title: "Brand Identity",
      category: "Design",
      mediaUrl: "https://creatorspace.imgix.net/users/cm36fnldg0bvzqq01ucd25h3d/2YfMlO5QHAAek1vJ-39c49c183612443.6542ba9b00464.png?w=1920&h=1080&fit=crop&crop=focalpoint&auto=compress",
      isVideo: false,
      aspectRatio: '16/9' as const,
      size: 'lg' as const
    },
    {
      title: "Visual Design",
      category: "Branding",
      mediaUrl: "https://creatorspace.imgix.net/users/cm36fnldg0bvzqq01ucd25h3d/ABSS2dtjqUgHz1L7-1729488624966.png?w=1920&h=1080&fit=crop&crop=focalpoint&auto=compress",
      isVideo: false,
      aspectRatio: '16/9' as const,
      size: 'lg' as const
    },
    {
      title: "Logo Design",
      category: "Branding",
      mediaUrl: "https://creatorspace.imgix.net/users/cm36fnldg0bvzqq01ucd25h3d/hyZYp6YXplTfbNjG-logo-porfilio.png?w=1920&h=1080&fit=crop&crop=focalpoint&auto=compress",
      isVideo: false,
      aspectRatio: '16/9' as const,
      size: 'lg' as const
    }
  ];

  return (
    <PageTransition>
      <div>
        {/* Hero Section - Full Width */}
        <div className="max-w-[2500px] mx-auto">
          <HeroSection />
        </div>

        {/* Rest of the sections with 1400px max width */}
        <div className="max-w-[1400px] mx-auto">
          {/* Work Section */}
          <section id="work" className="section-padding">
            <div className="section-wrapper container-padding">
              <ScrollReveal>
                <h2 className="section-title text-center">Featured Work</h2>
              </ScrollReveal>
              
              {/* Vertical Projects - Horizontal Scroll */}
              <div className="relative mb-16">
                {/* Left Arrow */}
                <button 
                  onClick={() => scroll('left', verticalScrollRef)}
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
                  onClick={() => scroll('right', verticalScrollRef)}
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
                  ref={verticalScrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide px-4 pb-4 snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {verticalProjects.map((project, index) => (
                    <div 
                      key={index}
                      className="flex-none snap-start"
                      style={{ width: '300px' }}
                    >
                      <ProjectCard 
                        {...project} 
                        delay={index * 200}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Horizontal Projects */}
              <div className="relative">
                {/* Left Arrow */}
                <button 
                  onClick={() => scroll('left', horizontalScrollRef)}
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
                  onClick={() => scroll('right', horizontalScrollRef)}
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
                  ref={horizontalScrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide px-4 pb-4 snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {horizontalProjects.map((project, index) => (
                    <div 
                      key={index}
                      className="flex-none snap-start"
                      style={{ width: '600px' }}
                    >
                      <ProjectCard 
                        {...project} 
                        delay={index * 200}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <SkillsSection />
          <ProcessSection />
          <ContactSection />

          {/* Footer */}
          <footer className="py-8 border-t border-gray-800/50">
            <div className="text-center text-gray-400">
              <p>© {new Date().getFullYear()} Eddits. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
}