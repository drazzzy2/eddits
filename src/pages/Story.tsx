import React, { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import PageTransition from '../components/PageTransition';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import { Building2, Video, Database, Laptop, GraduationCap, Languages, Book, Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

const progressVariants = {
  hidden: { width: 0 },
  visible: (progress: number) => ({
    width: `${progress}%`,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const languages = [
  { name: "Moroccan Arabic", level: "Native", progress: 100 },
  { name: "Arabic", level: "Professional", progress: 90 },
  { name: "English", level: "Professional", progress: 90 },
  { name: "French", level: "Basic", progress: 40 }
];

const experiences = [
  {
    role: "Video Editor | Graphic Designer",
    company: "Phennx",
    period: "Jun 2024 - Oct 2024",
    type: "Part-time, Remote, Australia",
    description: "Created and edited videos for various social media platforms using Adobe Creative Suite. Designed graphics that supported marketing campaigns, leading to a 20% increase in online visibility over five months.",
    icon: <Video className="w-6 h-6" />
  },
  {
    role: "Data Scraping Specialist",
    company: "S2M Distribution",
    period: "May 2024 - Jul 2024",
    type: "Part-time, On-site, Morocco",
    description: "Collected and organized data by scraping information from various online sources to support business decisions and market analysis. Presented findings that improved the company's market strategy.",
    icon: <Database className="w-6 h-6" />
  },
  {
    role: "Video Editor | Graphic Designer",
    company: "DigiReach Media",
    period: "Jan 2022 - Oct 2023",
    type: "Full-time, Remote, United Kingdom",
    description: "Produced and edited video content for social media platforms, including video podcasts and promotional content. Designed creative assets that boosted client engagement across multiple platforms.",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    role: "Video Editor | Graphic Designer",
    company: "Viral Ideas",
    period: "Jan 2023 - Apr 2023",
    type: "Full-time, Remote, United States",
    description: "Created and edited video content for social media, enhancing brand visibility by designing innovative graphics. Led the creation of campaigns that increased follower count by 15%.",
    icon: <Laptop className="w-6 h-6" />
  },
  {
    role: "Graphic Design Instructor",
    company: "Dar Chabab Batana",
    period: "Jan 2020 - Apr 2020",
    type: "Internship, On-site, Morocco",
    description: "Taught graphic design with a focus on Adobe Photoshop and Illustrator to students. Helped 95% of students improve their design skills and creative approaches.",
    icon: <GraduationCap className="w-6 h-6" />
  }
];

export default function Story() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="relative">
        <Toaster position="top-right" />
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Hero Section with Parallax Effect */}
        <div className="h-[70vh] relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://creatorspace.imgix.net/users/cm36fnldg0bvzqq01ucd25h3d/ss7vzE6uBy0sHxb9-bg.png?w=1920&h=1080&fit=crop&crop=focalpoint&auto=compress"
              alt="Creative Background"
              className="w-full h-full object-cover object-center transform scale-110 origin-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <ScrollReveal>
              <div className="text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">My Journey</h1>
                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-6"></div>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                  From passion to profession: A story of creative evolution
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative z-10 -mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Story Content */}
            <ScrollReveal>
              <div className="bg-[#12141C]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold gradient-text mb-6">The Beginning</h2>
                    <p className="text-gray-300 leading-relaxed">
                      My creative journey began when I was just 11 years old, diving into the world of YouTube. 
                      I started by creating videos, which meant I had to learn video editing and graphic design 
                      to bring my ideas to life. What began as a hobby soon turned into a passion that grew 
                      stronger with every project.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Over the years, I honed my skills, exploring the art of storytelling through visuals 
                      and design. What once started as a necessity for my YouTube channel has now blossomed 
                      into a fulfilling career.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Today, I'm proud to say that my passion has become my profession. As a video editor 
                      and graphic designer, I'm dedicated to creating visuals that inspire and connect with 
                      audiences.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 mix-blend-overlay"></div>
                      <video 
                        src="https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2Fhv1qaGPxLSiUaA4R-lv_0_20240403210232.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full blur-2xl opacity-60"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Education Section */}
            <ScrollReveal>
              <div className="bg-[#12141C]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 mb-16">
                <h2 className="text-3xl font-bold gradient-text mb-8">Education</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Degree Information */}
                  <motion.div 
                    className="space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <div className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 p-[2px] transform group-hover:scale-110 transition-all duration-300">
                        <div className="w-full h-full rounded-xl bg-[#12141C] flex items-center justify-center">
                          <Book className="w-6 h-6 text-cyan-400 group-hover:text-violet-400 transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 transition-all duration-300">
                          Bachelor's Degree in English Studies
                        </h3>
                        <p className="text-cyan-400 font-medium mb-1">Mohammed V University, Rabat</p>
                        <p className="text-gray-400">2021 - 2024</p>
                        <p className="text-gray-300 mt-4 group-hover:text-gray-200 transition-colors duration-300">
                          Specialized in Linguistics, with coursework in Media Studies and Communications, building strong
                          analytical and critical thinking skills.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Languages */}
                  <motion.div 
                    className="space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <div className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 p-[2px] transform group-hover:scale-110 transition-all duration-300">
                        <div className="w-full h-full rounded-xl bg-[#12141C] flex items-center justify-center">
                          <Globe className="w-6 h-6 text-cyan-400 group-hover:text-violet-400 transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 transition-all duration-300">
                          Languages
                        </h3>
                        <div className="space-y-4">
                          {languages.map((language, index) => (
                            <motion.div 
                              key={index} 
                              className="space-y-2"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              custom={language.progress}
                            >
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                  {language.name}
                                </span>
                                <span className="text-cyan-400 group-hover:text-violet-400 transition-colors duration-300">
                                  {language.level}
                                </span>
                              </div>
                              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
                                  variants={progressVariants}
                                  custom={language.progress}
                                ></motion.div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            {/* Work Experience */}
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-center gradient-text mb-16">Work Experience</h2>
              </ScrollReveal>
              
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <ScrollReveal key={index} delay={index * 200}>
                    <div className="relative flex items-start gap-8 group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 p-[2px] transform group-hover:scale-110 transition-transform duration-300 mt-2">
                        <div className="w-full h-full rounded-full bg-[#12141C] flex items-center justify-center text-cyan-400 group-hover:text-violet-400 transition-colors duration-300">
                          {experience.icon}
                        </div>
                      </div>
                      <div className="flex-1 bg-[#12141C]/60 backdrop-blur-lg rounded-2xl p-6 border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 transition-all duration-300">
                            {experience.role}
                          </h3>
                          <span className="text-sm text-cyan-400 font-medium">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-lg font-semibold text-gray-300">{experience.company}</span>
                          <span className="text-sm text-gray-400">• {experience.type}</span>
                        </div>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <ScrollReveal>
          <div className="relative py-24 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Let's create something extraordinary together. Get in touch and let's discuss your ideas.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 
                           rounded-xl text-white font-medium transition-all duration-300 
                           hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]
                           relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Let's Talk
                    <Mail className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <Footer variant="full" />
      </div>
    </PageTransition>
  );
}