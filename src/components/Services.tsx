import React from 'react';
import { motion } from 'motion/react';
import { Code2, Layers, Globe, Palette, Database, Smartphone } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: 'React Development',
      desc: 'Expertise in building dynamic and highly interactive user interfaces using React.js and its ecosystem.',
      icon: <Code2 size={24} />
    },
    {
      title: 'Next.js Solutions',
      desc: 'Developing SEO-friendly, server-side rendered, and statically generated applications with Next.js.',
      icon: <Layers size={24} />
    },
    {
      title: 'Web Development',
      desc: 'Building scalable, high-performance web applications using modern full-stack technologies.',
      icon: <Globe size={24} />
    },
    {
      title: 'UI/UX Design',
      desc: 'Creating intuitive and visually stunning user interfaces with a focus on user experience and accessibility.',
      icon: <Palette size={24} />
    },
    {
      title: 'Backend Systems',
      desc: 'Designing robust API architectures and database schemas for seamless data management.',
      icon: <Database size={24} />
    },
    {
      title: 'Mobile Apps',
      desc: 'Developing cross-platform mobile applications with React Native for iOS and Android.',
      icon: <Smartphone size={24} />
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Services</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Tailored solutions for your digital needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 hover:border-purple-500/50 group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-8 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
