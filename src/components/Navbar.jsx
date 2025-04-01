import React, { useState, useEffect, useRef } from 'react';
import CButton from './NameButton';
import MobileNavButton from './MobileNavButtons';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  // Check mobile state on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setNavbarOpen(false);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && 
          !navRef.current.contains(event.target) && 
          !buttonRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleNavbar = () => {
    setNavbarOpen(prev => !prev);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <div>
      <div>
        <CButton />
      </div>

      {isMobile && (
        <div ref={buttonRef}>
          <MobileNavButton 
            toggleNavbar={toggleNavbar} 
            navbarOpen={navbarOpen} 
          />
        </div>
      )}

      {(navbarOpen || !isMobile) && (
        <nav
          ref={navRef}
          className={`fixed ${
            isMobile ? 'top-0 right-0 h-screen max-w-4xl' : 'left-0 top-0 h-screen w-1/8'
          } bg-black shadow-xl border-white flex flex-col justify-center items-start py-10 z-40`}
        >
          <div className="flex flex-col items-start space-y-6 pl-5">
            {['Intro', 'About', 'Experience', 'Projects', 'Pictures', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-xs font-light font-mono text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
                onClick={closeNavbar}
              >
                {section}
              </a>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;