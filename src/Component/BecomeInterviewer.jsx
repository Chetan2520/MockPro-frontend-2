import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const BecomeInterviewer = () => {
  // const handleGenerate = async () => {
  //   const res = await fetch('/api/vapi/generate-text', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       type: 'technical',
  //       role: 'Frontend Developer',
  //       level: 'Junior',
  //       techstack: 'React, Node.js',
  //       amount: 5,
  //       userid: '12345abc'
  //     })
  //   });
  
  //   const data = await res.json();
  //   console.log(data);
  //   console.log('Questions:', data.questions);
  // };
  
  const benefits = [
    {
      title: "Flexible Schedule",
      description: "Choose your own hours and interview slots that work best for you.",
      icon: "⏰"
    },
    {
      title: "Earn Rewards",
      description: "Get paid for your expertise and time spent helping others grow.",
      icon: "💰"
    },
    {
      title: "Make Impact",
      description: "Directly influence and shape the careers of aspiring professionals.",
      icon: "💡"
    }
  ];

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
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Share Your Experience
              </span>
              <br />
              Shape Someone's Career
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join MockPro as an interviewer and help candidates practice real HR or technical rounds.
            </p>
            
            <MagneticButton  className="text-white text-xl">
              Become an Interviewer
            </MagneticButton>
          </motion.div>
        </div>

        {/* Benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative p-8 h-full">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
                
                {/* Decorative line */}
                <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
        >
          <div className="relative w-full h-[300px]">
            {/* Interview scene */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Laptop */}
              <div className="relative w-64 h-40 bg-gray-900 rounded-lg transform -rotate-6">
                <div className="absolute inset-1 bg-black rounded"></div>
                {/* Screen content */}
                <div className="absolute inset-2 bg-gray-800 rounded flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full"></div>
                </div>
              </div>
              
              {/* Interviewer */}
              <div className="absolute -right-8 -top-8 w-24 h-24">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full"></div>
              </div>
              
              {/* AI Assistant */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 -bottom-8 w-20 h-20"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomeInterviewer; 