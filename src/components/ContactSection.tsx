import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, PenTool, ArrowRight, Loader2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const socialLinks = [
  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://www.instagram.com/drazzzy__/' },
  { icon: <PenTool className="w-5 h-5" />, label: 'Behance', href: 'https://www.behance.net/mostafadrazy' },
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/eddarrazy/' },
  { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:mostafadrazy@gmail.com' }
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_ydcpnc9',
        'template_51ppdda',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'mostafadrazy@gmail.com'
        },
        'ZRYlOF3dpkaEiHGbm'
      );

      if (result.status === 200) {
        toast.success('Message sent successfully!');
        setFormData(initialFormData);
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <Toaster position="top-right" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">Get in Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Ready to start your next project? Let's create something extraordinary together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal type="slide-right">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 
                            rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 gradient-text">Let's Connect</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Have a project in mind? Let's discuss how we can bring your vision to life.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <ScrollReveal key={index} type="fade-up" delay={index * 100}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
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
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <ScrollReveal type="fade-up" delay={400}>
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold mb-4 text-white">Working Hours</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Weekend: By Appointment</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal type="slide-left">
            <div className="relative">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <ScrollReveal type="fade-up" delay={100}>
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                          Name <span className="text-cyan-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="contact-input"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </ScrollReveal>
                    <ScrollReveal type="fade-up" delay={200}>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                          Email <span className="text-cyan-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="contact-input"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </ScrollReveal>
                  </div>

                  <ScrollReveal type="fade-up" delay={300}>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </ScrollReveal>

                  <ScrollReveal type="fade-up" delay={400}>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                        Message <span className="text-cyan-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="contact-input resize-none"
                        placeholder="Tell me about your project..."
                        required
                      ></textarea>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal type="fade-up" delay={500}>
                    <button 
                      type="submit" 
                      className="contact-submit-btn group"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>
                  </ScrollReveal>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}