import React from 'react'

const EmailButton = () => { 
return (
<div
  class="flex h-[34px] text-[14px] text-white/60 w-[240px] items-center bg-[#09090b] border border-white/10 rounded-lg focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
>
  <input
    placeholder="Email"
    type="text"
    name="text"
    class="bg-transparent text-[#f4f4f5] px-3 py-1 rounded-l-lg focus:outline-none w-full"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-mail mr-3"
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