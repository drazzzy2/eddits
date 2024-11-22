import React from 'react';
import { Shield, FileCheck, UserCheck } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function GradientSection() {
  const features = [
    {
      icon: UserCheck,
      title: 'Identity Verification',
      description: 'Advanced identity verification systems ensuring security and trust'
    },
    {
      icon: FileCheck,
      title: 'Document Verification',
      description: 'Comprehensive document validation with AI-powered accuracy'
    },
    {
      icon: Shield,
      title: 'Data Verification',
      description: 'Robust data verification protocols for maximum reliability'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Glowing Effects */}
      <div className="absolute inset-0">
        <div className="glow w-[500px] h-[500px] bg-[#2c61f1] left-1/4 top-1/4"></div>
        <div className="glow w-[500px] h-[500px] bg-purple-600 right-1/4 bottom-1/4"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Powerful Verification Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Advanced verification systems designed to protect and empower your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}