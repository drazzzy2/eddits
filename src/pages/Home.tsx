import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import SkillsSection from '../components/SkillsSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import ScrollReveal from '../components/ScrollReveal';
import PageTransition from '../components/PageTransition';

export default function Home() {
  const projects = [
    {
      title: "Animation Reel",
      category: "Motion Graphics",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2FMmMmcGKLzaa3teMy-Comp%25201_2_1.mp4",
      isVideo: true,
      aspectRatio: '16/9' as const,
      size: 'md' as const
    },
    {
      title: "Media Production",
      category: "Video & Graphics",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2Fm3jLjJ1kSVxbK2Z2-1_Media%2520File.mp4",
      isVideo: true,
      aspectRatio: '16/9' as const,
      size: 'md' as const
    }
  ];

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
              
              {/* Horizontal Videos */}
              <div className="mb-16 flex justify-center gap-4 md:gap-8 flex-wrap px-4">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={index} 
                    {...project} 
                    delay={index * 200}
                  />
                ))}
              </div>

              {/* Vertical Videos */}
              <div className="video-grid-center">
                {verticalProjects.map((project, index) => (
                  <ProjectCard 
                    key={index} 
                    {...project} 
                    delay={index * 200}
                  />
                ))}
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