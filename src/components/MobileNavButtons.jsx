import React from 'react';

const MobileNavButton = ({ toggleNavbar, navbarOpen }) => {
  const handleClick = () => {
    toggleNavbar();
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed top-7 right-6 z-50 md:hidden"
    >
      <div className="space-y-1">
        <span className={`block w-5 h-0.5 bg-[#fefeff] transition-all duration-300 ${navbarOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-5 h-0.5 bg-[#fefeff] transition-all duration-300 ${navbarOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-5 h-0.5 bg-[#fefeff] transition-all duration-300 ${navbarOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </div>
    </button>
  );
};

export default MobileNavButton;