import React from 'react';
import GithubButton from './GithubButton';
import LinkedInButton from './LinkedInButton';
import EmailButton from './EmailButton';

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-40 bg-white shadow-xl border-r border-gray-300 flex flex-col justify-center items-start py-10 z-50">
      {/* Navigation Links */}
      <div className="flex flex-col items-start space-y-6 pl-5">
        <a 
          href="#home" 
          className="text-sm font-light hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
        >
          Home
        </a>
        <a 
          href="#about" 
          className="text-sm font-light hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
        >
          About
        </a>
        <a 
          href="#projects" 
          className="text-sm font-light hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
        >
          Projects
        </a>
        <a 
          href="#experience" 
          className="text-sm font-light hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
        >
          Experience
        </a>
        <a 
          href="#pictures" 
          className="text-sm font-light hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
        >
          Pictures
        </a>
        <a 
          href="#contact" 
          className="text-sm font-light hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
