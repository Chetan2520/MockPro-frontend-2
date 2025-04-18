import React from 'react';

// Metric Card Component
const MetricCard = ({ title, value, icon, position, glowColor }) => {
  const positionClasses = {
    top: "top-0 left-1/2 -translate-x-1/2 -translate-y-4",
    bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4",
    left: "left-0 top-1/2 -translate-y-1/2 -translate-x-4",
    right: "right-0 top-1/2 -translate-y-1/2 translate-x-4"
  };

  return (
    <div className={`absolute ${positionClasses[position]} bg-white/5 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/10 transform hover:scale-105 transition-all duration-300 group`}>
      <div className="flex items-center gap-3 relative">
        <div>
          <div className="text-gray-300 text-sm font-medium">{title}</div>
          <div className="text-white text-2xl font-bold">{value}</div>
        </div>
        <div className={`p-2 rounded-full ${glowColor} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
          {icon}
        </div>
        <div className={`absolute -inset-1 ${glowColor} opacity-0 group-hover:opacity-10 rounded-xl blur transition duration-300`} />
      </div>
    </div>
  );
};

// Floating Dots Component
const FloatingDots = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1.5 h-1.5 rounded-full
            ${i % 2 === 0 ? 'bg-blue-500/30' : 'bg-purple-500/30'}
            animate-float-${i + 1}`}
          style={{
            left: `${50 + 35 * Math.cos((i * Math.PI) / 4)}%`,
            top: `${50 + 35 * Math.sin((i * Math.PI) / 4)}%`,
            animation: `float ${3 + i * 0.5}s infinite ease-in-out ${i * 0.5}s`
          }}
        />
      ))}
    </div>
  );
};

const AIStatsSection = () => {
  return (
    <div className="relative w-full h-[600px] bg-transparent overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern animate-grid" />
      </div>

      {/* Floating Dots */}
      <FloatingDots />

      {/* Orbital Ring */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[450px] h-[450px]">
          {/* Rotating Orbital Line */}
          <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
          
          {/* Central AI Card */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition duration-300" />
              
              {/* AI Icon Container */}
              <div className="relative bg-white/5 backdrop-blur-lg p-8 rounded-full border border-white/10 shadow-xl">
                <div className="w-24 h-24 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>
              
              {/* Label */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center w-full">
                <div className="text-gray-300 text-sm">AI Interviewer</div>
                <div className="text-blue-400 font-bold text-lg">Ready</div>
              </div>
            </div>
          </div>

          {/* Metric Cards */}
          <MetricCard
            position="top"
            title="Success Rate"
            value="95%"
            glowColor="bg-blue-500"
            icon={
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            }
          />
          <MetricCard
            position="left"
            title="Avg. Rating"
            value="4.8/5"
            glowColor="bg-purple-500"
            icon={
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            }
          />
          <MetricCard
            position="right"
            title="Active Users"
            value="1.2K"
            glowColor="bg-blue-500"
            icon={
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            }
          />
          <MetricCard
            position="bottom"
            title="Interviews"
            value="10K+"
            glowColor="bg-purple-500"
            icon={
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Add keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float-1 { animation: float 3s infinite; }
        .animate-float-2 { animation: float 3.5s infinite; }
        .animate-float-3 { animation: float 4s infinite; }
        .animate-float-4 { animation: float 4.5s infinite; }
        .animate-float-5 { animation: float 5s infinite; }
        .animate-float-6 { animation: float 5.5s infinite; }
        .animate-float-7 { animation: float 6s infinite; }
        .animate-float-8 { animation: float 6.5s infinite; }
      `}</style>
    </div>
  );
};

export default AIStatsSection;