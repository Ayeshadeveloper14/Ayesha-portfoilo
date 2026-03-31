import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const whatsappNumber = "+923298102474";
  const handleSend = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message || "Hi Ayesha, I'd like to talk about a project.")}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-80 glass-card p-0 mb-2 overflow-hidden border-purple-500/30"
          >
            <div className="bg-purple-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Ayesha</h4>
                  <p className="text-xs text-purple-100 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-purple-300 animate-pulse" />
                    Typically replies instantly
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#0a0a0c]/80 backdrop-blur-xl">
              <p className="text-sm text-white/70 mb-4 bg-white/5 p-3 rounded-lg rounded-tl-none">
                Hi there! 👋 How can I help you with your project today?
              </p>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-purple-500 mb-4 resize-none text-white"
                rows={3}
              />
              <button 
                onClick={handleSend}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20"
              >
                Start Chat <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? 'bg-white text-black' : 'bg-purple-600 text-white'}`}
      >
        {isOpen ? <X size={24} /> : (
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.448-1.271.607-1.436.158-.165.346-.206.461-.206.115 0 .23 0 .331.005.106.005.249-.039.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.088.275.073.376-.044.101-.117.433-.506.548-.68.115-.174.231-.145.39-.087.158.058 1.01.477 1.184.564.174.087.289.129.331.202.043.073.043.419-.101.824z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
};
