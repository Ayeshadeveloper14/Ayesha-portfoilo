import React from "react";
import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Facebook, Download } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card p-2">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                alt="Coding"
                className="w-full h-full object-cover rounded-xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 glass p-6 md:p-8 rounded-2xl max-w-[180px] md:max-w-[240px] z-10 shadow-2xl">
              <p className="text-2xl md:text-3xl font-bold text-gradient">5+</p>
              <p className="text-xs md:text-sm text-white/60">
                Years of experience in digital design and development.
              </p>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              I am a passionate developer who loves to bridge the gap between
              design and technology. With a keen eye for aesthetics and a strong
              foundation in modern web standards, I create interfaces that are
              not only beautiful but also highly functional.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              My journey started with a curiosity for how things work on the
              web, which evolved into a professional career building complex
              applications for clients worldwide.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { label: "Name", value: "Ayesha" },
                { label: "Email", value: "ayeshaweb16@gmail.com" },
                { label: "Role", value: "Full Stack Developer" },
                { label: "Location", value: "Remote" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
                    {item.label}
                  </p>
                  <p
                    className={`text-lg font-medium ${
                      item.label === "Email" ? "break-all sm:break-normal" : ""
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CV Button & Social Icons */}
            <div className="flex flex-wrap items-center gap-6">

              {/* CV Button with Motion One */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://ayeshadeveloper14.github.io/ayesha-cv/"
                  download
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold flex items-center gap-2 shadow-lg shadow-purple-500/20"
                >
                  <Download size={20} /> Download My CV
                </a>
              </motion.div>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com", label: "GitHub" },
                  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/ayesha-aslam-9971a9397", label: "LinkedIn" },
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579189760363", label: "Facebook" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-purple-400/70 hover:text-purple-400 hover:border-purple-500/50 transition-all border border-white/5"
                    aria-label={social.label}
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
