import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const Navbar = () => {
 
  return (
    <nav className="flex flex-wrap justify-between items-center text-black py-3 px-45 shadow-md">
      {/* Home Button */}
      <div className="flex items-center space-x-10">
        <Link to="/" className="text-l font-light hover:opacity-50">
            Home 
        </Link>
        <Link to="/" className="text-l font-light hover:opacity-50">
            About
        </Link>
        <Link to="/" className="text-l font-light hover:opacity-50">
            Projects 
        </Link>
        <Link to="/" className="text-l font-light hover:opacity-50">
            Experience 
        </Link>
        <Link to="/" className="text-l font-light hover:opacity-50">
            Blog
        </Link>
      </div> 
    </nav>
  );
};

export default Navbar;