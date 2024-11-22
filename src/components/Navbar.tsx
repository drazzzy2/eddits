import React, { useState, useEffect } from 'react';
import { Menu, X, Code, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Projects', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' }
  ];

  return (
    <div className={`fixed w-full z-50 px-4 lg:px-8 transition-all duration-300 ${
      scrolled ? 'pt-4' : 'pt-6'
    }`}>
      <nav className={`relative rounded-2xl shadow-lg transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 border-white/5' 
          : 'bg-white/5 border-white/10'
      } backdrop-blur-xl border`}>
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between h-16 px-4 lg:px-8">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 p-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-violet-500 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                  <Code className="w-5 h-5 text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-violet-400 text-transparent bg-clip-text">
                Eddarrazy
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-200 rounded-lg
                           hover:text-white transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 
                                 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
                  </span>
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-6 py-2 text-sm font-medium text-white
                         bg-gradient-to-r from-cyan-500 to-violet-500
                         rounded-xl transition-all duration-300
                         hover:shadow-lg hover:shadow-cyan-500/25
                         hover:scale-105 flex items-center gap-2"
              >
                Let's Talk
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center
                       rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10
                       border border-white/10 hover:border-white/20 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-[400px] opacity-100 border-t border-white/10' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-200
                         rounded-xl hover:text-white hover:bg-white/5
                         transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-3 mt-2 text-base font-medium text-white
                       bg-gradient-to-r from-cyan-500 to-violet-500
                       rounded-xl transition-all duration-300
                       hover:shadow-lg hover:shadow-cyan-500/25"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}