import React from 'react';
import { motion } from 'motion/react';

export const Experience = () => {
  const experiences = [
    {
      company: 'Digital Solutions Inc.',
      role: 'Senior Full Stack Developer',
      period: '2022 - Present',
      desc: 'Leading the development of enterprise-level web applications and mentoring junior developers.'
    },
    {
      company: 'Creative Studio',
      role: 'UI/UX Designer & Frontend Dev',
      period: '2020 - 2022',
      desc: 'Focused on creating high-fidelity prototypes and implementing pixel-perfect user interfaces.'
    },
    {
      company: 'Tech Startups',
      role: 'Freelance Web Developer',
      period: '2018 - 2020',
      desc: 'Built various MVPs for startups using React, Node.js, and modern cloud technologies.'
    },
    {
      company: 'Global Tech Corp',
      role: 'Backend Engineer',
      period: '2017 - 2018',
      desc: 'Optimized server-side logic and database performance for high-traffic platforms.'
    },
    {
      company: 'Web Agency',
      role: 'Junior Developer',
      period: '2016 - 2017',
      desc: 'Started my career by building responsive websites and learning modern frameworks.'
    },
    {
      company: 'Innovation Lab',
      role: 'Intern Developer',
      period: '2015 - 2016',
      desc: 'Assisted in developing experimental web tools and internal dashboards.'
    }
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">My professional journey in the tech industry.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - 3 Cards */}
          <div className="space-y-12">
            {experiences.slice(0, 3).map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 hover:bg-white/10 transition-all duration-500 border-l-4 border-purple-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-purple-500/10 transition-colors" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                  <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">{exp.role}</h3>
                  <span className="text-sm font-bold text-purple-400 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-xl font-semibold text-white/90 mb-4 relative z-10">{exp.company}</p>
                <p className="text-white/50 leading-relaxed text-lg relative z-10">{exp.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Column - 3 Cards */}
          <div className="space-y-12">
            {experiences.slice(3, 6).map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 hover:bg-white/10 transition-all duration-500 border-l-4 border-blue-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <span className="text-sm font-bold text-blue-400 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-xl font-semibold text-white/90 mb-4 relative z-10">{exp.company}</p>
                <p className="text-white/50 leading-relaxed text-lg relative z-10">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
