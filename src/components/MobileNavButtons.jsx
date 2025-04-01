import React, { useState } from 'react';

const MobileNavButton = ({ toggleNavbar }) => {
  return (
    <button 
      onClick={toggleNavbar}
      className="fixed top-5 right-5 z-50 p-2 rounded-full bg-black border border-white"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M3 12H21M3 6H21M3 18H21" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default MobileNavButton;