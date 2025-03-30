// Updated Navbar.jsx with more direct scrolling implementation
import React from 'react';
import GithubButton from './GithubButton';
import LinkedInButton from './LinkedInButton';
import EmailButton from './EmailButton';

const Navbar = () => {
  const scrollToSection = (id) => {
    return (e) => {
      e.preventDefault();
      
      // Find the element by ID
      const element = document.getElementById(id);
      
      if (element) {
        console.log(`Scrolling to element with id: ${id}`);
        
        // Get the element's position
        const yOffset = -20; // Small offset to account for any headers
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        // Scroll directly to that position
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else {
        console.error(`Element with id ${id} not found`);
      }
    };
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-40 bg-white shadow-xl border-r border-gray-300 flex flex-col items-center py-5 space-y-6 z-50">
      {/* Navigation Links */}
      <div className="flex flex-col justify-items-center space-y-6">
        <a 
          href="#home" 
          onClick={scrollToSection('home')} 
          className="text-sm font-light hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={scrollToSection('about')} 
          className="text-sm font-light hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
        >
          About
        </a>
        <a 
          href="#projects" 
          onClick={scrollToSection('projects')} 
          className="text-sm font-light hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
        >
          Projects
        </a>
        <a 
          href="#experience" 
          onClick={scrollToSection('experience')} 
          className="text-sm font-light hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
        >
          Experience
        </a>
        <a 
          href="#pictures" 
          onClick={scrollToSection('pictures')} 
          className="text-sm font-light hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
        >
          Pictures
        </a>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-col space-y-6 mt-auto pb-6">
        <a href="https://github.com/chewton2k" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="hover:opacity-50">
          <GithubButton />
        </a>
        <a href="https://www.linkedin.com/in/charlton-shih" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="hover:opacity-50">
          <LinkedInButton />
        </a>
        <a href="mailto:charltonshih645@g.ucla.edu" className="hover:scale-125 duration-200 hover:opacity-50">
          <EmailButton />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;