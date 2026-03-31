import React from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Facebook, Mail, Phone, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 relative bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <p className="text-3xl font-bold text-gradient mb-6 tracking-tighter">AYESHA</p>
            <p className="text-white/50 max-w-sm mb-8">
              Crafting high-performance digital solutions with a focus on user experience and modern design principles. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {[
                               { Icon: Github, href: "https://github.com" },
                               { Icon: Facebook, href: "https://facebook.com" },
                               { Icon: Linkedin, href: "https://linkedin.com" }
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-purple-400/70 hover:text-purple-400 transition-all"
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-4">
              {['About', 'Skills', 'Experience', 'Projects', 'Services', 'Process', 'FAQ', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-purple-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/50">
                <Mail size={16} className="text-purple-400" />
                ayeshaweb16@gmail.com
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Phone size={16} className="text-purple-400" />
                +923298102474
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Globe size={16} className="text-purple-400" />
                Remote / Worldwide
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} Ayesha. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
