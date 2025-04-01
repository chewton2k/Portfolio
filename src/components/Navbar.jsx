import React, { useState, useEffect, useRef } from 'react';
import CButton from './NameButton';
import MobileNavButton from './MobileNavButtons';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function checkIfMobile() {
      if (window.outerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setNavbarOpen(false);
      }
    }

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    }

    if (navbarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [navbarOpen]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div>
      <div>
        <CButton />
      </div>

      {isMobile && <MobileNavButton toggleNavbar={toggleNavbar} />}

      {(navbarOpen || !isMobile) && (
        <nav
          ref={navRef}
          className={`fixed ${
            isMobile ? 'top-0 right-0 h-screen' : 'left-0 top-0 h-screen w-1/8'
          } bg-black shadow-xl border-white flex flex-col justify-center items-start py-10 z-40`}
        >
          {/* Navigation Links */}
          <div className="flex flex-col items-start space-y-6 pl-5">
            {['Intro', 'About', 'Experience', 'Projects', 'Pictures', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-xs font-light font-mono text-white hover:scale-110 duration-200 hover:opacity-50 cursor-pointer"
                onClick={() => setNavbarOpen(false)} // Close on click
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
