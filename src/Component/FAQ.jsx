import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I become an interviewer on MockPro?",
      answer: "To become an interviewer, simply sign up with your professional credentials, complete our verification process, and set up your availability. We'll review your application within 24-48 hours.",
      icon: "🎯"
    },
    {
      question: "What are the requirements to be an interviewer?",
      answer: "We require at least 3 years of professional experience in your field, strong communication skills, and a passion for mentoring others. Technical interviewers should have relevant industry experience.",
      icon: "📋"
    },
    {
      question: "How flexible is the scheduling?",
      answer: "You have complete control over your schedule. Set your available time slots, and candidates can book interviews based on your availability. You can modify your schedule anytime.",
      icon: "⏰"
    },
    {
      question: "What kind of support do interviewers receive?",
      answer: "We provide comprehensive training materials, interview guidelines, and a dedicated support team. You'll also have access to our community of experienced interviewers for guidance.",
      icon: "🤝"
    },
    {
      question: "How are interviewers compensated?",
      answer: "Interviewers are paid per interview conducted, with rates varying based on experience and interview type. Payments are processed weekly through secure payment methods.",
      icon: "💰"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black py-32 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Animated lines */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
              style={{
                top: `${(i + 1) * 10}%`,
                left: '0',
                right: '0',
                transform: `translateX(${i * 20}px)`,
              }}
              animate={{
                x: ['0%', '100%'],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
        {/* Floating orbs */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-blue-500/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about becoming an interviewer on MockPro
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-300 pl-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 