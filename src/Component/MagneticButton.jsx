import React, { useRef, useEffect, useState } from 'react';

const MagneticButton = ({ children, className = '', color = '#0EA5E9', showArrow = true }) => {
  const buttonRef = useRef(null);
  const magneticAreaRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    const magneticArea = magneticAreaRef.current;

    if (!button || !magneticArea) return;

    const handleMouseMove = (e) => {
      const rect = magneticArea.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update light position
      const lightX = (x / rect.width) * 100;
      const lightY = (y / rect.height) * 100;
      button.style.setProperty('--light-x', `${lightX}%`);
      button.style.setProperty('--light-y', `${lightY}%`);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    magneticArea.addEventListener('mousemove', handleMouseMove);
    magneticArea.addEventListener('mouseleave', handleMouseLeave);
    magneticArea.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      magneticArea.removeEventListener('mousemove', handleMouseMove);
      magneticArea.removeEventListener('mouseleave', handleMouseLeave);
      magneticArea.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={magneticAreaRef}
      className="relative inline-block p-2 cursor-pointer"
      style={{
        '--light-x': '50%',
        '--light-y': '50%'
      }}
    >
      <button
        ref={buttonRef}
        className={`
          relative z-10
          px-8 py-3
          bg-transparent
          rounded-xl
          font-semibold
          transition-all duration-300
          overflow-hidden
          group
          ${isHovered ? 'scale-105' : 'scale-100'}
          ${className}
        `}
        style={{ 
          color: color,
          border: `1px solid ${color}4D`
        }}
      >
        {/* Reduced glow that follows cursor */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at var(--light-x) var(--light-y), 
              ${color}20 0%,
              ${color}10 40%,
              transparent 70%)`
          }}
        />

        <span className="relative z-10 flex items-center gap-2">
          {children}
          {showArrow && (
            <span className="text-xl transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
              →
            </span>
          )}
        </span>
      </button>
    </div>
  );
};

export default MagneticButton;