import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/projects/ProjectSection';
import SkillsSection from '../components/SkillsSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import ScrollReveal from '../components/ScrollReveal';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import { verticalProjects, horizontalProjects } from '../data/projects';

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
              
              {/* Vertical Projects */}
              <ProjectSection
                title="Vertical Projects"
                projects={verticalProjects}
                scrollRef={verticalScrollRef}
                itemWidth={300}
                onScroll={(direction) => scroll(direction, verticalScrollRef)}
              />

              {/* Horizontal Projects */}
              <ProjectSection
                title="Horizontal Projects"
                projects={horizontalProjects}
                scrollRef={horizontalScrollRef}
                itemWidth={600}
                onScroll={(direction) => scroll(direction, horizontalScrollRef)}
              />
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