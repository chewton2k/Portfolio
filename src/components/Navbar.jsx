import React from 'react';

const Navbar = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-40 bg-gray-950 shadow-xl border-white flex flex-col justify-center items-start py-10 z-50">
      <div className="fixed left-5 top-10"> 
        <a 
          href="#home" 
          className="text-sm font-light hover:scale-110 duration-500 cursor-pointer"
        >
          <button className="Btn" onClick={handleRefresh}>
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="svgIcon"
            >
              <text
                x="4"
                y="19"
                fontSize="20"
                fontWeight="bold"
                fill="white"
              >
                C
              </text>
            </svg>
            <span className="text">Charlton Shih</span>
          </button>
        </a>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col items-start space-y-6 pl-5">
        <a href="#about" className="text-sm font-light text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer">
          About
        </a>
        <a href="#projects" className="text-sm font-light text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer">
          Projects
        </a>
        <a href="#experience" className="text-sm font-light text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer">
          Experience
        </a>
        <a href="#pictures" className="text-sm font-light text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer">
          Pictures
        </a>
        <a href="#contact" className="text-sm font-light text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
