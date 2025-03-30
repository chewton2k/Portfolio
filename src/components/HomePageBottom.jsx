import React from 'react';
import { Link } from 'react-router-dom';
import GithubButton from './GithubButton';
import LinkedInButton from './LinkedInButton';
import EmailButton from './EmailButton';

const HomePageBottom = () => {
  return (
    <footer className="w-full text-black py-6 mt-auto">
  <div className="w-full h-px bg-black"></div>

  <div className="container mx-auto px-6 flex flex-col items-center py-5">
    {/* Contact Section */}
    <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
    <div className="flex flex-wrap items-center space-x-4 md:space-x-10 py-2">
      <a href="mailto:charltonshih645@g.ucla.edu" className="text-black hover:opacity-70">
        <EmailButton />
      </a>
      <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70">
        <GithubButton />
      </a>
      <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70">
        <LinkedInButton />
      </a>
    </div>
    
    {/* Quick Links Section
    <div className="flex space-x-8 mb-6">
      <Link to="/" className="text-black hover:opacity-50">Home</Link>
      <Link to="/about" className="text-black hover:opacity-50">About</Link>
      <Link to="/projects" className="text-black hover:opacity-50">Projects</Link>
      <Link to="/experience" className="text-black hover:opacity-50">Experience</Link>
      <Link to="/blog" className="text-black hover:opacity-50">Blog</Link>
    </div> */}

    {/* Copyright Section */}
    <div className="text-center text-sm">
      <p> Hosted by Github Pages</p>
      <p>&copy; {new Date().getFullYear()} Charlton Shih.</p>
    </div>
  </div>
</footer>
  );
};

export default HomePageBottom;
