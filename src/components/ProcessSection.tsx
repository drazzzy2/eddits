import React from 'react';
import { MessageSquare, Palette, Play, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const processes = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "1. Consultation",
    description: "Initial discussion to understand your vision and requirements"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "2. Creative Direction",
    description: "Developing the creative concept and visual strategy"
  },
  {
    icon: <Play className="w-6 h-6" />,
    title: "3. Production",
    description: "Bringing your vision to life with premium quality execution"
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: "4. Delivery",
    description: "Final refinements and delivery of your project"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">How We Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A streamlined process designed to deliver exceptional results
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <ScrollReveal 
              key={index} 
              type="fade-up"
              delay={index * 200}
            >
              <div className="process-card group h-full">
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4 text-cyan-400 group-hover:text-violet-400 transition-colors duration-300">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 transition-all duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {process.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}