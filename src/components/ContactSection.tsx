import React from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, label: 'Github', href: '#' },
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
  { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:contact@example.com' }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to start your next project? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 
                          rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-gray-300 mb-8 text-lg">
                Have a project in mind? Let's discuss how we can bring your vision to life.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="contact-social-link group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="contact-social-icon group-hover:text-violet-400">
                        {social.icon}
                      </span>
                      <span className="font-medium">{social.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-4 text-white">Working Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Weekend: By Appointment</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="contact-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="contact-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="contact-input"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="contact-input resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn group">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}