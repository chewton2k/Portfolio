import React, { useEffect, useState } from 'react'

const CButton = () => { 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkIfMobile() {
      if (window.outerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="absolute left-5 top-5 z-100"> 
        <a href="#home" className="text-sm font-light cursor-pointer">
          <button className="mobile-btn">
            <svg
              viewBox="0 0 24 24"
              height="23"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
              className="svgIcon"
            >
              <text x="4" y="19" fontSize="20" fontWeight="bold" fill="white">C</text>
            </svg>
          </button>
        </a>
      </div>
    );
  }

  return (
    <div className="fixed left-5 top-10 z-100"> 
      <a href="#home" className="text-sm font-light hover:scale-110 duration-500 cursor-pointer">
        <button className="Btn">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="svgIcon"
          >
            <text x="4" y="19" fontSize="20" fontWeight="bold" fill="white">C</text>
          </svg>
          <span className="text text-xl">Charlton Shih</span>
        </button>
      </a>
    </div>
  ); 
}; 

export default CButton;