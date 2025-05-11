import React, { useRef, useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/projects/ProjectSection';
import WebProjectsSection from '../components/projects/WebProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import ScrollReveal from '../components/ScrollReveal';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import FeaturedWorkNav from '../components/FeaturedWorkNav';
import { verticalProjects, horizontalProjects, webProjects } from '../data/projects';
import { motion } from 'framer-motion';

export default function Home() {
  const verticalScrollRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>('vertical');

  // Listen for custom events to update active section
  useEffect(() => {
    const handleSetActiveSection = (e: CustomEvent<string>) => {
      const section = e.detail;
      setActiveSection(section);
    };

    document.addEventListener('setActiveSection', handleSetActiveSection as EventListener);
    return () => {
      document.removeEventListener('setActiveSection', handleSetActiveSection as EventListener);
    };
  }, []);

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'vertical':
        return (
          <ProjectSection
            title="Vertical Projects"
            projects={verticalProjects}
            scrollRef={verticalScrollRef}
            itemWidth={300}
            onScroll={(direction) => scroll(direction, verticalScrollRef)}
          />
        );
      case 'horizontal':
        return (
          <ProjectSection
            title="Horizontal Projects"
            projects={horizontalProjects}
            scrollRef={horizontalScrollRef}
            itemWidth={600}
            onScroll={(direction) => scroll(direction, horizontalScrollRef)}
          />
        );
      case 'web':
        return <WebProjectsSection projects={webProjects} />;
      default:
        return null;
    }
  };

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
            <div className="section-wrapper container-padding relative">
              {/* Background gradient effects */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute top-60 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
              </div>
              
              <div className="text-center mb-20 relative">
                <motion.div 
                  className="inline-block mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 p-3 rounded-xl inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                      <path d="M5 3v4"></path>
                      <path d="M19 17v4"></path>
                      <path d="M3 5h4"></path>
                      <path d="M17 19h4"></path>
                    </svg>
                  </div>
                </motion.div>
                
                <motion.h2 
                  className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 
                         text-transparent bg-clip-text inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Featured Work
                </motion.h2>
                
                <motion.p 
                  className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Browse through my portfolio showcasing a diverse collection of projects including video productions, motion graphics, and web development work.
                </motion.p>
                
                <motion.div 
                  className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-10 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 80, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </div>
              
              {/* Featured Work Navigation */}
              <FeaturedWorkNav 
                activeSection={activeSection} 
                setActiveSection={setActiveSection} 
              />
              
              {/* Render the active section */}
              {renderActiveSection()}
            </div>
          </section>

          <SkillsSection />
          <ProcessSection />
          <ContactSection />
          <Footer variant="simple" />
        </div>
      </div>
    </PageTransition>
  );
}