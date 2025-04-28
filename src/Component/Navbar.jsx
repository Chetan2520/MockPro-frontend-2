import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  return (
    <>
     

     <nav className=" bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="font-bold text-2xl text-cyan-500">MockPro</span>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden ml-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-white focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Buttons Section */}
            <div className="flex items-center space-x-4">
              <MagneticButton color="#22C55E" showArrow={false}>Login</MagneticButton>
              <MagneticButton color="#EF4444" showArrow={false}>Logout</MagneticButton>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                About
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                Services
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
