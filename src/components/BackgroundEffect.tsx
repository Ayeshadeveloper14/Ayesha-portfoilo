import React from 'react';
import { motion } from 'motion/react';

export const BackgroundEffect = () => {
  const particles = Array.from({ length: 40 });
  const lines = Array.from({ length: 10 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Main Animated Mesh Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          x: [-100, 150, -50, 100, -100],
          y: [-50, 100, -100, 50, -50]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] rounded-full bg-purple-600/15 blur-[180px]"
      />
      <motion.div 
        animate={{ 
          scale: [1.4, 1, 1.3, 1.4],
          rotate: [360, 270, 180, 90, 0],
          x: [150, -150, 100, -50, 150],
          y: [100, -100, 50, -50, 100]
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] -right-[20%] w-[70%] h-[70%] rounded-full bg-blue-600/15 blur-[180px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1.1, 1],
          x: [-100, 100, -50, 50, -100],
          y: [150, -150, 100, -100, 150]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-pink-600/10 blur-[180px]"
      />

      {/* Floating Glowing Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.4 + 0.1,
            scale: Math.random() * 0.8 + 0.2
          }}
          animate={{ 
            y: [null, `${(Math.random() - 0.5) * 100}px`, "0px"],
            x: [null, `${(Math.random() - 0.5) * 100}px`, "0px"],
            opacity: [0.1, 0.4, 0.1],
            scale: [null, Math.random() * 1.2 + 0.5, null]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className={`absolute rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]`}
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
          }}
        />
      ))}

      {/* Moving Lines */}
      {lines.map((_, i) => (
        <motion.div
          key={`line-${i}`}
          initial={{ 
            x: "-100%", 
            y: Math.random() * 100 + "%",
            opacity: 0.05
          }}
          animate={{ 
            x: "200%",
          }}
          transition={{ 
            duration: Math.random() * 15 + 15, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute h-[1px] w-64 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        />
      ))}
      
      {/* Noise and Grid Overlays */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};
