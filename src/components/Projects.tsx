import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: any;
  index: number;
  key?: React.Key;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 glass-card group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-shadow duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 z-20">
          <div className="flex gap-4" style={{ transform: "translateZ(70px)" }}>
            <motion.a 
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg"
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center shadow-lg"
            >
              <Github size={20} />
            </motion.a>
          </div>
        </div>
      </div>
      <div style={{ transform: "translateZ(30px)" }}>
        <p className="text-sm font-medium text-purple-400 mb-2 uppercase tracking-widest glow">{project.category}</p>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors group-hover:glow">{project.title}</h3>
        <p className="text-white/50 leading-relaxed">{project.desc}</p>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: 'Ayesha Real Estate',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
      desc: 'A premium real estate platform featuring high-end properties with virtual tours and interactive maps.',
      links: { demo: 'https://ayesha-blush.vercel.app/', github: 'https://github.com' }
    },
    {
      title: 'Aurelius Food',
      category: 'Food & Beverage',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
      desc: 'A sophisticated food delivery application with real-time tracking and personalized recommendations.',
      links: { demo: 'https://aurelius-food.vercel.app/', github: 'https://github.com' }
    },
    {
      title: 'Exquisite Jewelry',
      category: 'Luxury Goods',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
      desc: 'A high-end jewelry showcase featuring handcrafted pieces with detailed craftsmanship and elegance.',
      links: { demo: 'https://aurelius-collection.vercel.app/', github: 'https://github.com' }
    },
    {
      title: 'Elegant Fashion',
      category: 'Apparel',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
      desc: 'A modern fashion boutique showcasing premium dresses and designer collections.',
      links: { demo: 'https://ayeshadeveloper14.github.io/ShubhVivah143/', github: 'https://github.com' }
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-white/50 max-w-xl">A selection of my recent works across different industries and technologies.</p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full glass text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            View All Work
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 perspective-[1000px]">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
