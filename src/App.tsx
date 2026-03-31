/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useScroll, useSpring, AnimatePresence, motion } from 'motion/react';

// --- Components ---
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative md:cursor-none">
      <CustomCursor />
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      <BackgroundEffect />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Process />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
