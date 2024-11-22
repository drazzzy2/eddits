import React from 'react';
import {
  Video, Camera, Palette, Monitor, PenTool, Film,
  Play, Image, Layout, Figma, Youtube, FileImage,
  Edit, Type
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const skills = [
  { name: "Video Editing", icon: <Video className="w-5 h-5" /> },
  { name: "Motion Graphics", icon: <Play className="w-5 h-5" /> },
  { name: "Graphic Design", icon: <Palette className="w-5 h-5" /> },
  { name: "Adobe Suite", icon: <Image className="w-5 h-5" /> },
  { name: "Film Production", icon: <Film className="w-5 h-5" /> },
  { name: "Photography", icon: <Camera className="w-5 h-5" /> },
  { name: "Content Creation", icon: <FileImage className="w-5 h-5" /> },
  { name: "UI/UX Design", icon: <Layout className="w-5 h-5" /> },
  { name: "Figma", icon: <Figma className="w-5 h-5" /> },
  { name: "YouTube", icon: <Youtube className="w-5 h-5" /> },
  { name: "Typography", icon: <Type className="w-5 h-5" /> },
  { name: "Post Production", icon: <Edit className="w-5 h-5" /> }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title text-center mb-16">Skills & Expertise</h2>
        </ScrollReveal>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, idx) => (
            <ScrollReveal 
              key={idx} 
              type="scale-up" 
              delay={idx * 100}
            >
              <div className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10">
                <div className="text-cyan-400 group-hover:text-violet-400 transition-colors duration-300 mb-2">
                  {skill.icon}
                </div>
                <span className="text-xs font-medium text-gray-300 group-hover:text-white text-center">
                  {skill.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}