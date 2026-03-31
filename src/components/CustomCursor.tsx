import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main Morphing Frame */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        animate={{
          x: position.x - 15,
          y: position.y - 15,
          rotate: isHovering ? 180 : 45,
          scale: isClicking ? 0.8 : (isHovering ? 1.4 : 1),
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
      >
        <motion.div 
          className="w-8 h-8 border border-purple-500/60"
          animate={{
            borderRadius: isHovering ? "50%" : "4px",
            borderWidth: isHovering ? "2px" : "1px",
          }}
        />
      </motion.div>

      {/* Fluid Trail - Dot 1 */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-purple-400/40 rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{ x: position.x - 3, y: position.y - 3 }}
        transition={{ type: 'spring', damping: 15, stiffness: 100, mass: 0.1 }}
      />
      
      {/* Fluid Trail - Dot 2 */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-purple-500/30 rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{ x: position.x - 2, y: position.y - 2 }}
        transition={{ type: 'spring', damping: 12, stiffness: 80, mass: 0.1 }}
      />

      {/* Central Core */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isClicking ? 2 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 1000, mass: 0.1 }}
      />

      {/* Ambient Glow */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-purple-600/10 rounded-full blur-[60px] pointer-events-none z-[9997] hidden md:block"
        animate={{
          x: position.x - 64,
          y: position.y - 64,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 100 }}
      />
    </>
  );
};
