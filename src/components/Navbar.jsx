import React from 'react';
import CButton from './NameButton';

const Navbar = () => {
  return (
    <div>
      <div>
        <CButton/> 
      </div>
    <nav className="fixed left-0 top-0 h-screen w-40 bg-black shadow-xl border-white flex flex-col justify-center items-start py-10 z-50">
      {/* Navigation Links */}
      <div className="flex flex-col items-start space-y-6 pl-5">
      <a href="#home" className="text-xs font-light font-mono text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer">
          Intro
        </a>
        <a href="#about" className="text-xs font-light font-mono text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer">
          About
        </a>
        <a href="#experience" className="text-xs font-light font-mono text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer">
          Experience
        </a>
        <a href="#projects" className="text-xs font-light font-mono text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer">
          Projects
        </a>
        <a href="#pictures" className="text-xs font-light font-mono text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer">
          Pictures
        </a>
        <a href="#contact" className="text-xs font-light font-mono text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer">
          Contact
        </a>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
