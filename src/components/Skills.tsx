import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Database, Palette, Smartphone, Cloud, Zap, ChevronsRight } from 'lucide-react';

export const Skills = () => {
  const skills = [
    { 
      id: '01', 
      name: 'Frontend Dev', 
      icon: <Monitor size={40} />, 
      desc: 'Building responsive, high-performance web interfaces with React and Next.js.' 
    },
    { 
      id: '02', 
      name: 'Backend Systems', 
      icon: <Database size={40} />, 
      desc: 'Designing scalable server-side logic and robust database architectures.' 
    },
    { 
      id: '03', 
      name: 'UI/UX Design', 
      icon: <Palette size={40} />, 
      desc: 'Creating intuitive user journeys and visually stunning digital interfaces.' 
    },
    { 
      id: '04', 
      name: 'Mobile Apps', 
      icon: <Smartphone size={40} />, 
      desc: 'Developing cross-platform mobile experiences for iOS and Android.' 
    },
    { 
      id: '05', 
      name: 'React & Next.js', 
      icon: <Cloud size={40} />, 
      desc: 'Building modern, high-performance web applications with React and Next.js.' 
    },
    { 
      id: '06', 
      name: 'Performance', 
      icon: <Zap size={40} />, 
      desc: 'Optimizing web speed, SEO, and ensuring lightning-fast interactions.' 
    },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Lines */}
        <div className="flex items-center justify-center gap-8 mb-24">
          <div className="h-px flex-1 bg-purple-500/10 hidden md:block" />
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-[0.5em] text-purple-400/60 uppercase mb-2">My Expertise</h2>
            <p className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest opacity-80">Capabilities</p>
          </div>
          <div className="h-px flex-1 bg-purple-500/10 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 perspective-1000">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                rotateY: 15, 
                rotateX: -10,
                scale: 1.02,
                z: 50
              }}
              className="relative group cursor-pointer transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Decorative Background Circles */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-all duration-500 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-900/40 rounded-full -z-10 border border-white/5" />

              {/* Glass Card - Matching the rest of the portfolio */}
              <div className="glass-card p-8 pt-10 min-h-[300px] flex flex-col border-white/10 backdrop-blur-2xl rounded-[40px] relative overflow-hidden shadow-2xl shadow-black/50">
                {/* Top Icons */}
                <div className="flex justify-between items-start mb-12">
                  <div className="text-white/80 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-500">
                    {skill.icon}
                  </div>
                  <div className="text-white/20 group-hover:text-purple-400 transition-colors">
                    <ChevronsRight size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-xs font-black tracking-widest text-white/20 uppercase mb-2">Options {skill.id}</h3>
                  <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-purple-300 transition-colors">{skill.name}</h4>
                  <p className="text-[11px] font-bold leading-relaxed text-white/40 uppercase tracking-tighter group-hover:text-white/60 transition-colors">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

