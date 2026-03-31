import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern JavaScript frameworks like React and Next.js, along with Node.js for backend development. I also have extensive experience with Tailwind CSS, TypeScript, and various database systems."
    },
    {
      question: "Are you available for freelance projects?",
      answer: "Yes, I am currently open to new freelance opportunities and collaborations. Feel free to reach out via the contact form or WhatsApp."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. A simple landing page might take 1-2 weeks, while a complex full-stack application could take 4-8 weeks."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Absolutely! I provide ongoing maintenance and support to ensure your application remains up-to-date and performs optimally."
    }
  ];

  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Common <span className="text-gradient">Questions</span></h2>
          <p className="text-white/50">Everything you need to know about working with me.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className="text-purple-400"
                >
                  <ChevronRight size={20} className="rotate-90" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-white/60 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
