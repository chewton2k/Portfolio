import React from 'react';

const EmailButton = () => { 
  return (
    <div className="group flex justify-center p-2 rounded-md drop-shadow-xl text-white font-semibold transition-all hover:scale-125 duration-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeLinejoin="round"  
        className="w-10 h-10 hover:stroke-blue-500"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
        ></path>
        <path d="M3 7l9 6l9 -6"></path>
      </svg>
    </div>
  );
};

export default EmailButton;
