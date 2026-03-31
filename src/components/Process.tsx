import React from 'react';
import { motion } from 'motion/react';
import { Search, Palette, Code2, Globe } from 'lucide-react';

export const Process = () => {
  const steps = [
    { title: 'Discovery', desc: 'Understanding your goals and target audience.', icon: <Search size={24} /> },
    { title: 'Design', desc: 'Creating high-fidelity prototypes and UI designs.', icon: <Palette size={24} /> },
    { title: 'Development', desc: 'Building the solution with clean, scalable code.', icon: <Code2 size={24} /> },
    { title: 'Launch', desc: 'Testing, deployment, and final optimization.', icon: <Globe size={24} /> },
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Process</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">How I bring your digital vision to life, step by step.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 glass-card text-center group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
              >
                {step.icon}
              </motion.div>
              <div className="absolute top-8 right-8 text-4xl font-bold text-white/5 select-none">0{i + 1}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
