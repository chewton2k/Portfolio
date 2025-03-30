import React from 'react';
import { Link } from 'react-router-dom';
import GithubButton from './GithubButton';
import LinkedInButton from './LinkedInButton';
import EmailButton from './EmailButton';

const HomePageBottom = () => {
  return (
    <footer className="w-full text-white py-6 mt-auto">

  <div className="container mx-auto px-6 flex flex-col items-center py-5">
    {/* Contact Section */}
    <div className="flex flex-wrap items-center space-x-4 md:space-x-10 py-2">
      <a href="mailto:charltonshih645@g.ucla.edu" className="text-white font-medium text-xl hover:underline">
        Say Hi!
      </a>
    </div>


    {/* Copyright Section */}
    <div className="text-center text-white text-sm">
      <p> Hosted by Github Pages</p>
      <p>&copy; {new Date().getFullYear()} Charlton Shih.</p>
    </div>
  </div>
</footer>
  );
};

export default HomePageBottom;
