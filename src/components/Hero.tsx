import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Facebook, Linkedin, ChevronRight } from 'lucide-react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          style={{ y: yText, opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium mb-6"
          >
            Available for new projects
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-6">
            I'm <span className="text-gradient glow">Ayesha</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light mb-8 max-w-lg">
            Creative Developer & Designer crafting immersive digital experiences with modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2"
            >
              View Projects <ChevronRight size={20} />
            </motion.a>
            <div className="flex items-center gap-4">
              {[
                { Icon: Github, href: "https://github.com" },
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Linkedin, href: "https://linkedin.com" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#a855f7' }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-purple-400/70 transition-colors"
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: yImage, opacity }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative block mt-12 md:mt-0"
        >
          <div className="relative z-10 w-full max-w-[400px] mx-auto aspect-square rounded-3xl overflow-hidden border border-white/10 glass animate-float">
            <img 
              src="pablic/ayesha.jfif" 
              alt="Ayesha" 
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
