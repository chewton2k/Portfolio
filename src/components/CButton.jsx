import React from 'react'

const CButton = () => { 

    const handleRefresh = () => {
        window.location.reload();
      };

    return (
        <div className="fixed left-5 top-10 z-100"> 
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
              z="20"
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
            <span className="text text-2xl">Charlton Shih</span>
          </button>
        </a>
      </div>
    ); 
}; 

export default CButton; 