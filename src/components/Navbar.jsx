import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import GithubButton from './GithubButton';
import LinkedInButton from './LinkedInButton';
import EmailButton from './EmailButton';

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center text-black py-3 px-5 shadow-md w-full">
      {/* Left links */}
      <div className="flex flex-wrap items-center space-x-4 md:space-x-10">
        <Link to="/" className="text-l font-light hover:scale-125 duration-200 hover:opacity-50">
          Home
        </Link>
        <Link to="/about" className="text-l font-light hover:scale-125 duration-200 hover:opacity-50">
          About
        </Link>
        <Link to="/projects" className="text-l font-light hover:scale-125 duration-200 hover:opacity-50">
          Projects
        </Link>
        <Link to="/experience" className="text-l font-light hover:scale-125 duration-200 hover:opacity-50">
          Experience
        </Link>
        <Link to="/pictures" className="text-l font-light hover:scale-125 duration-200 hover:opacity-50">
          Pictures
        </Link>
      </div>
      
      {/* Right buttons */}
      <div className="flex flex-wrap items-center space-x-4 md:space-x-10">
        <a href="https://github.com/chewton2k" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-l font-light hover:opacity-50">
          <GithubButton />
        </a>
        <a href="https://www.linkedin.com/in/charlton-shih" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-l font-light hover:opacity-50">
          <LinkedInButton />
        </a>
        <Link to="mailto:charltonshih645@g.ucla.edu" className="text-l font-light hover:scale-125 duration-200 hover:opacity-50">
          <EmailButton />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
