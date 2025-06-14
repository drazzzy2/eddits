import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: {
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const isHome = location.pathname === '/';
    
    if (!isHome) {
      window.location.href = `/${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'My Story', href: '/story' },
    { label: 'All Work', href: '#work' },
    { label: 'Web Projects', href: '#web-projects', scroll: () => {
      // Set web projects as active and scroll to section
      const event = new CustomEvent('setActiveSection', { detail: 'web' });
      document.dispatchEvent(event);
    }},
    { label: 'Process', href: '#process' }
  ];

  // Listen for custom events to update active section
  useEffect(() => {
    const handleSetActiveSection = (e: any) => {
      const section = e.detail;
      const element = document.getElementById('work');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('setActiveSection', handleSetActiveSection);
    return () => {
      document.removeEventListener('setActiveSection', handleSetActiveSection);
    };
  }, []);

  return (
    <motion.header 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out
                ${scrolled ? 'py-4' : 'py-6'}`}
    >
      {/* Outer container with dynamic width */}
      <div className={`mx-auto px-4 transition-all duration-500 ease-in-out
                    ${scrolled ? 'max-w-6xl' : 'container'}`}>
        {/* Navigation bar with dynamic shape */}
        <nav 
          className={`relative transition-all duration-500 ease-in-out
                     ${scrolled 
                       ? 'rounded-2xl bg-black/80 shadow-lg shadow-black/5 border border-white/5 translate-y-0 px-6 py-4' 
                       : 'rounded-none bg-transparent px-8 py-6'
                     } backdrop-blur-sm`}
        >
          <div className="flex items-center justify-between lg:justify-around gap-4">
            {/* Logo */}
            <Link to="/" className="block">
              <img 
                src="/logo.png" 
                alt="Eddarrazy Logo" 
                className="w-16 h-16 object-contain" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center justify-center flex-1">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  item.href.startsWith('#') ? (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        if (item.scroll) item.scroll();
                      }}
                      className={`relative px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 
                                transition-all duration-300 ease-in-out
                                ${scrolled ? 'rounded-lg hover:bg-white/10' : 'hover:text-white'}
                                focus:outline-none focus:ring-2 focus:ring-cyan-500/20`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`relative px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 
                                transition-all duration-300 ease-in-out
                                ${scrolled ? 'rounded-lg hover:bg-white/10' : 'hover:text-white'}
                                focus:outline-none focus:ring-2 focus:ring-cyan-500/20`}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center justify-center px-4 lg:px-5 py-2.5 text-sm font-medium
                         relative overflow-hidden group transition-all duration-300
                         ${scrolled ? 'rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500' : 'rounded-full bg-white/10 hover:bg-white/20'}
                         focus:outline-none focus:ring-2 focus:ring-cyan-500/20`}
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
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className={`md:hidden relative w-10 h-10 flex items-center justify-center
                       transition-all duration-300
                       ${scrolled ? 'rounded-xl bg-white/10' : 'rounded-full bg-white/5'}
                       hover:bg-white/20
                       focus:outline-none focus:ring-2 focus:ring-cyan-500/20`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div 
            initial={false}
            animate={{ 
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="space-y-1 pt-2 border-t border-white/10">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      if (item.scroll) item.scroll();
                    }}
                    className={`block px-4 py-3 text-base font-medium text-gray-300
                             transition-all duration-300
                             ${scrolled ? 'rounded-xl' : 'rounded-full'}
                             hover:text-white hover:bg-white/5
                             focus:outline-none focus:ring-2 focus:ring-cyan-500/20`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium text-gray-300
                             transition-all duration-300
                             ${scrolled ? 'rounded-xl' : 'rounded-full'}
                             hover:text-white hover:bg-white/5
                             focus:outline-none focus:ring-2 focus:ring-cyan-500/20`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              
              {/* Mobile Contact Button */}
              <div className="pt-4 pb-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className={`block w-full text-center px-4 py-3 text-base font-medium text-white
                          bg-gradient-to-r from-cyan-500 to-violet-500
                          transition-all duration-300
                          ${scrolled ? 'rounded-xl' : 'rounded-full'}
                          focus:outline-none focus:ring-2 focus:ring-cyan-500/20`}
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}