import React from 'react';

const HomePageBottom = () => {
  return (
    <footer className="w-full text-white py-6 mt-auto pl-8">
      <div className="container mx-auto w-full flex flex-col items-center text-center py-5">
        {/* Contact Section */} 
        <div className="flex flex-wrap items-center space-x-4 md:space-x-10 py-2">
          <a href="mailto:charltonshih645@g.ucla.edu" className="text-white font-medium text-xl hover:underline">
            Say Hi!
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-white text-sm">
          <p>Hosted by Github Pages</p>
          <p>&copy; {new Date().getFullYear()} Charlton Shih.</p>
        </div>
      </div>
    </footer>
  );
};

export default HomePageBottom;