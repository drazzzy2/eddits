import React, { useCallback, useState, useEffect } from 'react';
import Testimonial from './Testimonial';
import StatCard from './StatCard';
import { Users, Clock, Star, Coffee, Instagram, Linkedin, PenTool } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  { icon: Users, value: 150, label: "Happy Clients", color: "text-cyan-400" },
  { icon: Clock, value: 7, label: "Years Experience", color: "text-violet-400" },
  { icon: Star, value: 200, label: "Projects Done", color: "text-yellow-400" },
  { icon: Coffee, value: 1000, label: "Coffee Cups", color: "text-orange-400" }
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/drazzzy__/' },
  { icon: PenTool, href: 'https://www.behance.net/mostafadrazy' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/eddarrazy/' }
];

const testimonials = [
  {
    content: "Creative vision that transformed our brand's visual identity.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    delay: "0.5s",
    position: "left" as const
  },
  {
    content: "Outstanding attention to detail in every project!",
    author: "David Park",
    role: "Production Manager",
    delay: "1s",
    position: "left" as const
  },
  {
    content: "Exceptional motion graphics and editing skills!",
    author: "Michael Chen",
    role: "Creative Director",
    delay: "1.5s",
    position: "right" as const
  }
];

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center">
      {/* Hero Background Image with Enhanced Fade Effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src="https://creatorspace.imgix.net/users/cm36fnldg0bvzqq01ucd25h3d/ss7vzE6uBy0sHxb9-bg.png?w=1920&h=1080&fit=crop&crop=focalpoint&auto=compress" 
            alt="Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0A0B0F]"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0A0B0F] opacity-80"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0B0F] to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
        </div>
      </div>

      {/* Social Links */}
      <div className="fixed bottom-8 right-8 z-30">
        <div className="flex gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 
                         flex items-center justify-center transition-all duration-300
                         hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-violet-500/20
                         hover:border-cyan-500/30 hover:scale-110"
              >
                <Icon className="w-4 h-4 text-gray-300 hover:text-white transition-colors" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Floating Testimonials */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <div className="hidden md:block">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute ${getTestimonialPosition(index)}`}
            >
              <Testimonial 
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                delay={testimonial.delay}
                position={testimonial.position}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 mt-32 sm:mt-40 md:mt-48">
        <ScrollReveal>
          <div className="text-center relative z-30 max-w-3xl mx-auto">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold gradient-text">
                Hi, I'm Eddarrazy
              </h1>
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-medium">
                  Video Editor & Motion Designer
                </h2>
                <p className="text-lg sm:text-xl text-gray-300">
                  Crafting compelling visual stories that captivate and inspire.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-8">
                <a 
                  href="#work" 
                  onClick={(e) => handleSmoothScroll(e, '#work')}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-violet-500 
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
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500/50 rounded-xl
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
        </ScrollReveal>

        {/* Stats Bar */}
        <div className="mt-32 sm:mt-40 mb-16">
          <div className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-sm rounded-2xl 
                         p-4 sm:p-6 border border-white/5 hover:bg-white/[0.03] 
                         transition-all duration-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  endValue={stat.value}
                  label={stat.label}
                  delay={index * 200}
                  iconColor={stat.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getTestimonialPosition(index: number): string {
  const positions = [
    'top-[20%] left-[5%] transform -rotate-3',
    'bottom-[30%] left-[5%] transform rotate-2',
    'top-[40%] right-[5%] transform rotate-2'
  ];
  return positions[index] || '';
}