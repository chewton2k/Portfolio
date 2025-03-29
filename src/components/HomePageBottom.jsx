import React from 'react';
import { Link } from 'react-router-dom';
import GithubButton from './GithubButton';
import LinkedInButton from './LinkedInButton';
import EmailButton from './EmailButton';

const HomePageBottom = () => {
  return (
    <footer className=" text-white py-6 mt-12">
      <div className="border-1 py-10 border-black container mx-auto px-6 flex flex-col items-center">
        {/* Contact Section */}
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <div className="flex flex-wrap items-center space-x-4 md:space-x-10">
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
        
        {/* Quick Links Section */}
        <div className="flex space-x-8 mb-6">
          <Link to="/" className="text-black hover:opacity-70">Home</Link>
          <Link to="/about" className="text-black hover:opacity-70">About</Link>
          <Link to="/projects" className="text-black hover:opacity-70">Projects</Link>
          <Link to="/experience" className="text-black hover:opacity-70">Experience</Link>
          <Link to="/blog" className="text-black hover:opacity-70">Blog</Link>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-black">
          <p>Hosted Through Github Pages</p>
          <p>&copy; {new Date().getFullYear()} Charlton Shih.</p>
        </div>
      </div>
    </footer>
  );
};

export default HomePageBottom;
