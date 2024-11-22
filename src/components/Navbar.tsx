import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <nav className={`relative rounded-2xl max-w-5xl mx-auto ${
          scrolled 
            ? 'bg-black/80 shadow-lg shadow-black/5 border-white/5' 
            : 'bg-white/5 border-white/10'
        } backdrop-blur-xl border px-4 py-3`}>
          <div className="flex items-center justify-between lg:justify-around gap-4">
            {/* Logo */}
            <a href="#home" 
               className="relative group flex items-center gap-2">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 animate-pulse blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative h-full rounded-lg bg-black/90 flex items-center justify-center border border-white/10">
                  <Sparkles className="w-4 h-4 text-cyan-400 group-hover:text-violet-400 transition-colors" />
                </div>
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Eddarrazy
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center justify-center flex-1">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 rounded-lg
                             hover:text-white transition-colors duration-300
                             before:absolute before:inset-0 before:rounded-lg
                             before:bg-white/0 hover:before:bg-white/5
                             before:transition-colors before:duration-300
                             focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 lg:px-5 py-2.5 text-sm font-medium
                         relative rounded-xl overflow-hidden group
                         focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              >
                <span className="relative z-10 text-white flex items-center gap-2">
                  Let's Talk
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center
                       rounded-xl bg-white/5 hover:bg-white/10
                       border border-white/10 hover:border-white/20 
                       transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-[400px] opacity-100 mt-4' 
              : 'max-h-0 opacity-0 overflow-hidden mt-0'
          }`}>
            <div className="space-y-1 pt-2 border-t border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-300
                           rounded-xl hover:text-white hover:bg-white/5
                           transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-white
                         rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500
                         hover:from-cyan-600 hover:to-violet-600
                         transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
