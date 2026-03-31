import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Send, Facebook } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Construct WhatsApp message
      const whatsappNumber = "+923298102474";
      const text = `Hi Ayesha, my name is ${formState.name}. \nEmail: ${formState.email} \nMessage: ${formState.message}`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Open WhatsApp
      window.open(url, '_blank');
      
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email Me",
      value: "ayeshaweb16@gmail.com",
      href: "mailto:ayeshaweb16@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Call Me",
      value: "+923298102474",
      href: "tel:+923298102474"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "ayesha-dev",
      href: "https://linkedin.com"
    },
    {
      icon: <Facebook size={24} />,
      label: "Facebook",
      value: "Ayesha Dev",
      href: "https://facebook.com"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-xl text-white/60 mb-12 max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities.
            </p>
            
            <div className="space-y-8">
              {contactInfo.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest">{item.label}</p>
                    <p className="text-xl font-medium group-hover:text-purple-400 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${isSent ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-white/90'}`}
              >
                {isSubmitting ? 'Sending...' : isSent ? 'Message Sent!' : (
                  <>Send Message <Send size={18} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
