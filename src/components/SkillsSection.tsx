import React from 'react';
import {
  Video, Camera, Palette, Monitor, PenTool, Film,
  Play, Image, Layout, Figma, Youtube, FileImage,
  Edit, Database, Code, Brain, Box, FileSpreadsheet,
  Presentation, Layers, Brush, Pen, Lightbulb,
  Shapes, Sparkles
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const skills = [
  { name: "Adobe Premiere Pro", icon: <Video className="w-5 h-5" /> },
  { name: "After Effects", icon: <Play className="w-5 h-5" /> },
  { name: "Photoshop", icon: <Image className="w-5 h-5" /> },
  { name: "Illustrator", icon: <Pen className="w-5 h-5" /> },
  { name: "Video Editing", icon: <Film className="w-5 h-5" /> },
  { name: "Motion Graphics", icon: <Layers className="w-5 h-5" /> },
  { name: "Photography", icon: <Camera className="w-5 h-5" /> },
  { name: "Content Creation", icon: <FileImage className="w-5 h-5" /> },
  { name: "Graphic Design", icon: <Palette className="w-5 h-5" /> },
  { name: "UI/UX Design", icon: <Layout className="w-5 h-5" /> },
  { name: "Figma", icon: <Figma className="w-5 h-5" /> },
  { name: "Data Scraping", icon: <Database className="w-5 h-5" /> },
  { name: "HTML/CSS", icon: <Code className="w-5 h-5" /> },
  { name: "JavaScript", icon: <Shapes className="w-5 h-5" /> },
  { name: "3D Design", icon: <Box className="w-5 h-5" /> },
  { name: "Generative AI", icon: <Brain className="w-5 h-5" /> },
  { name: "Microsoft Excel", icon: <FileSpreadsheet className="w-5 h-5" /> },
  { name: "PowerPoint", icon: <Presentation className="w-5 h-5" /> },
  { name: "Creative Direction", icon: <Lightbulb className="w-5 h-5" /> },
  { name: "Project Management", icon: <Sparkles className="w-5 h-5" /> }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title text-center mb-12">Skills & Expertise</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <ScrollReveal 
              key={index} 
              type="scale-up" 
              delay={index * 50}
            >
              <div className="group relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-violet-500/10 group-hover:to-cyan-500/10 rounded-xl transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative flex flex-col items-center justify-center p-6 rounded-xl 
                              bg-white/5 backdrop-blur-sm border border-white/10 
                              hover:border-cyan-500/30 transition-all duration-300 
                              hover:bg-white/10 group">
                  <div className="text-cyan-400 group-hover:text-violet-400 transition-colors duration-300 mb-3 transform group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white text-center transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}