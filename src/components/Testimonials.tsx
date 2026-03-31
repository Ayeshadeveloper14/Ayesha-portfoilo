import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechFlow',
      content: 'Ayesha is an exceptional developer. Her attention to detail and creative problem-solving skills are unmatched.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      content: 'Working with Ayesha was a breeze. She delivered the project ahead of schedule and exceeded our expectations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Creative Director',
      content: 'The UI/UX design Ayesha created for our app is stunning. Our users love the new look and feel.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop'
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client <span className="text-gradient">Feedback</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">What people say about working with me.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-1 text-purple-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-white/70 italic mb-8 relative">
                <Quote className="absolute -top-4 -left-4 text-white/10" size={40} />
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-xs text-white/40">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
