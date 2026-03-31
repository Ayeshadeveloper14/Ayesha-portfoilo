import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlignRight, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass border-b border-white/10' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-bold tracking-tighter text-gradient glow"
          whileHover={{ scale: 1.05 }}
        >
          AYESHA
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a 
            href="#contact"
            className="px-6 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-[60] w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMobileMenuOpen ? 'close' : 'menu'}
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-6 gap-8"
          >
            {/* Background Glow for Menu */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.2 }}
                className="text-xl font-semibold text-white/70 hover:text-white transition-all hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navLinks.length * 0.05 + 0.3 }}
              className="mt-8 px-12 py-4 rounded-full bg-white text-black text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
