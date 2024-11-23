import React, { useState } from 'react';
import { X, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
        onClose();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#12141C]/95 backdrop-blur-xl 
                         border border-white/10 shadow-xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-xl hover:bg-white/10 
                         transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold gradient-text mb-2">Let's Talk</h2>
                <p className="text-gray-400 mb-6">
                  Share your project details and I'll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="modal-name" className="block text-sm font-medium text-gray-300">
                        Name <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="modal-email" className="block text-sm font-medium text-gray-300">
                        Email <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="modal-subject" className="block text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="modal-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="modal-message" className="block text-sm font-medium text-gray-300">
                      Message <span className="text-cyan-500">*</span>
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="contact-input resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

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
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}