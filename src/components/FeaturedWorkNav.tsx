import React from 'react';
import { motion } from 'framer-motion';
import { Video, Code, Camera, ArrowRight, CheckCircle } from 'lucide-react';

interface FeaturedWorkNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function FeaturedWorkNav({ activeSection, setActiveSection }: FeaturedWorkNavProps) {
  const navItems = [
    {
      id: 'vertical',
      name: 'Vertical Videos',
      icon: <Video className="w-5 h-5" />,
      description: 'Mobile-optimized vertical format videos',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-600/10 to-pink-600/10'
    },
    {
      id: 'horizontal',
      name: 'Horizontal Videos',
      icon: <Camera className="w-5 h-5" />,
      description: 'Widescreen format videos for various platforms',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-600/10 to-cyan-600/10'
    },
    {
      id: 'web',
      name: 'Web Projects',
      icon: <Code className="w-5 h-5" />,
      description: 'Websites and web applications',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-600/10 to-teal-600/10'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto mb-20">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          
          return (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden rounded-xl backdrop-blur-md border transition-all duration-500 cursor-pointer
                      ${isActive 
                        ? `border-${item.gradient.split(' ')[0].replace('from-', '')}/30 shadow-lg` 
                        : 'border-slate-700/30 hover:border-slate-600/50'}`}
              onClick={() => setActiveSection(item.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-slate-900/80" />
              
              {/* Gradient Background Effect */}
              {isActive && (
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-60`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              
              {/* Top Border Gradient */}
              <div 
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient} transition-opacity duration-300
                         ${isActive ? 'opacity-100' : 'opacity-0'}`} 
              />

              {/* Card Content */}
              <div className="relative z-10 p-5">
                <div className="flex items-start justify-between mb-3">
                  {/* Icon with Gradient Background */}
                  <div className={`rounded-lg p-2.5 transition-all duration-500
                                ${isActive 
                                  ? `bg-gradient-to-br ${item.gradient} text-white shadow-md` 
                                  : 'bg-slate-800 text-slate-400'}`}>
                    {item.icon}
                  </div>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    >
                      <CheckCircle className={`w-5 h-5 text-${item.gradient.split(' ')[0].replace('from-', '')}`} />
                    </motion.div>
                  )}
                </div>
                
                {/* Title */}
                <h3 className={`text-lg font-semibold mb-1.5 transition-all duration-300
                              ${isActive 
                                ? `text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}` 
                                : 'text-white'}`}>
                  {item.name}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-sm font-light">
                  {item.description}
                </p>
              </div>
              
              {/* Bottom Highlight Bar */}
              <motion.div 
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${item.gradient}`}
                initial={{ width: "0%" }}
                animate={{ width: isActive ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
} 