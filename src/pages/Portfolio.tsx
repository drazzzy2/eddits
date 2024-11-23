import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import PageTransition from '../components/PageTransition';

export default function Portfolio() {
  const portfolioProjects = [
    // Commercial Projects
    {
      title: "Brand Campaign",
      category: "Commercial",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2FMmMmcGKLzaa3teMy-Comp%25201_2_1.mp4",
      isVideo: true,
      aspectRatio: '16/9' as const,
      size: 'lg' as const
    },
    // Motion Graphics
    {
      title: "Product Animation",
      category: "Motion Graphics",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2Fm3jLjJ1kSVxbK2Z2-1_Media%2520File.mp4",
      isVideo: true,
      aspectRatio: '16/9' as const,
      size: 'md' as const
    },
    // Social Media Content
    {
      title: "Social Campaign",
      category: "Social Media",
      mediaUrl: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2FzkXr4qomep6XAYxg-Sequence%252002_6.mp4",
      isVideo: true,
      aspectRatio: '9/16' as const,
      size: 'sm' as const
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Portfolio</h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                A curated collection of my best work in motion graphics, video editing, and creative direction.
              </p>
            </div>
          </ScrollReveal>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}