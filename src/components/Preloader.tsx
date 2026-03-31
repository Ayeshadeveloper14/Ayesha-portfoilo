import React from 'react';
import { motion } from 'motion/react';

export const Preloader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#0a0a0c] flex items-center justify-center"
    >
      <div className="relative">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-t-2 border-b-2 border-purple-500"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gradient tracking-widest"
        >
          AYESHA
        </motion.div>
      </div>
    </motion.div>
  );
};
