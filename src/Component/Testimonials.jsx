import React from 'react';
import GridMotion from './GridMotion';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  const items = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The AI-powered mock interviews were incredibly realistic. The feedback was detailed and helped me improve my technical communication.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Amazon",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The behavioral interview practice was game-changing. I learned to tell compelling stories about my experience.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Microsoft",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The technical challenges were exactly what I needed. The platform's feedback helped me improve my problem-solving approach.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "David Kim",
      role: "Frontend Developer at Netflix",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The system design practice was invaluable. I learned to think about scalability and performance in a whole new way.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "Lisa Wang",
      role: "UX Designer at Apple",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The design critique sessions were incredibly helpful. I learned to present my work more effectively.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "James Wilson",
      role: "Backend Engineer at Spotify",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The coding challenges were challenging but fair. The platform helped me improve my problem-solving speed.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "Maria Garcia",
      role: "Product Designer at Adobe",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The portfolio review sessions were exactly what I needed. I learned to showcase my work effectively.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "Alex Thompson",
      role: "Full Stack Developer at Uber",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The full-stack challenges were comprehensive. I improved both my frontend and backend skills significantly.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "Sophia Lee",
      role: "Data Engineer at Airbnb",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The data modeling exercises were perfect. I learned to design efficient database schemas and optimize queries.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "Ryan Park",
      role: "Mobile Developer at TikTok",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The mobile development challenges were up-to-date with current best practices. I learned a lot about performance optimization.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "Emma Davis",
      role: "DevOps Engineer at AWS",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The infrastructure challenges were exactly what I needed. I learned to design scalable and secure systems.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "Kevin Brown",
      role: "Security Engineer at Meta",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The security challenges were comprehensive. I learned to think about security from multiple perspectives.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    },
    {
      name: "Olivia White",
      role: "QA Engineer at Microsoft",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "The testing challenges were practical and relevant. I learned to write better test cases and automate testing effectively.",
      bgColor: "from-[#1a1a1a] to-[#2a2a2a]",
      stars: 5,
      accentColor: "from-[#3a3a3a] to-[#4a4a4a]",
      borderColor: "border-[#333333]"
    }
  ];

  const gridItems = items.map((item, index) => (
    <div key={index} className="p-1">
      <div className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-[20px] p-4 border ${item.borderColor} shadow-lg h-full transition-all duration-500 hover:scale-105 group relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="flex flex-col items-center text-center relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-md group-hover:border-white/20 transition-all duration-500">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="mt-12 mb-3 flex gap-0.5">
            {[...Array(item.stars)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500/70 text-xs group-hover:text-yellow-500/90 transition-colors duration-500" />
            ))}
          </div>
          <div className="relative bg-white/5 rounded-[15px] p-3 mb-3 w-full group-hover:bg-white/10 transition-all duration-500">
            <FaQuoteLeft className="absolute -top-1 -left-1 text-white/10 text-lg" />
            <FaQuoteRight className="absolute -bottom-1 -right-1 text-white/10 text-lg" />
            <p className="text-white/80 text-xs font-medium italic">
              "{item.content}"
            </p>
          </div>
          <div className="mt-1">
            <h4 className="text-white font-medium text-xs group-hover:text-white/90 transition-colors duration-500">
              {item.name}
            </h4>
            <p className="text-white/60 text-[10px] group-hover:text-white/70 transition-colors duration-500">
              {item.role}
            </p>
          </div>
          <div className={`absolute inset-0 bg-gradient-to-br ${item.accentColor} rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="relative bg-black min-h-screen py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTExMTEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTIwIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0zNiA2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMjQgMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bS0yNCAyNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTI0IDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/5 via-[#2a2a2a]/5 to-[#1a1a1a]/5"></div>
      <div className="max-w-[95%] mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#aaaaaa]">Users Say</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Join thousands of professionals who have transformed their interview skills with our platform
          </p>
        </div>
        <div className="w-full h-[500px]">
          <GridMotion items={gridItems} />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-[1]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)] z-[1]"></div>
    </section>
  );
};

export default Testimonials;
