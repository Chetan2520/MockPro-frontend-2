import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "The AI coding interviews helped me land my dream job at a FAANG company. The feedback was incredibly detailed and actionable."
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "StartUpX",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "The HR simulation was so realistic, it prepared me perfectly for my actual interviews. I felt confident and well-prepared."
  },
  {
    name: "Emily Rodriguez",
    role: "Frontend Developer",
    company: "DesignHub",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote: "The real interviewer mode gave me the exact experience I needed. The AI's responses were natural and challenging."
  }
];

const stats = [
  { number: 10000, label: "Active Users", suffix: "+" },
  { number: 95, label: "Success Rate", suffix: "%" },
  { number: 50, label: "Companies", suffix: "+" },
  { number: 24, label: "Support", suffix: "/7" }
];

const AnimatedNumber = ({ value, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });
      
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    };

    startAnimation();
  }, [value, controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="text-3xl font-bold text-white mb-2"
    >
      {displayValue}{suffix}
    </motion.div>
  );
};

const SocialProof = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-float-fast"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s infinite ease-in-out ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Professionals
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Join thousands of successful candidates who have improved their interview skills with our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-slate-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-slate-300 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              <div className="text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof; 