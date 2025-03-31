import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LoadingBox from "./components/LoadingBox";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import PicturePage from "./pages/PicturePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const minLoadTime = 1200;
    const fadeDuration = 500;
    const loadStartTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - loadStartTime;
      const remainingTime = Math.max(0, minLoadTime - elapsed);
      setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsTransitioning(false);
        }, fadeDuration);
      }, remainingTime);
    };

    const isTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };

    // Add touch device class to body
    if (isTouchDevice()) {
      document.body.classList.add("touch-device");
      
      // Add touch events handling
      const preventDefaultForScrollKeys = (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
          return; // Don't prevent default for input fields
        }
        
        // Allow default touch behavior for scrollable elements
        let isScrollable = false;
        let element = e.target;
        
        while (element) {
          const style = window.getComputedStyle(element);
          const overflow = style.getPropertyValue('overflow');
          const overflowY = style.getPropertyValue('overflow-y');
          
          if (
            overflow === 'auto' || 
            overflow === 'scroll' || 
            overflowY === 'auto' || 
            overflowY === 'scroll'
          ) {
            isScrollable = true;
            break;
          }
          
          element = element.parentElement;
        }
        
        if (!isScrollable) {
          e.preventDefault();
        }
      };
      

      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });
      
      const style = document.createElement('style');
      style.textContent = `
        .touch-device * {
          -webkit-overflow-scrolling: touch;
        }
        .touch-device .scrollable {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      `;
      document.head.appendChild(style);
    }

    if (document.readyState === "complete") {
      setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsTransitioning(false);
        }, fadeDuration);
      }, minLoadTime);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className={`loading-screen ${isTransitioning ? "fade-out" : ""}`}>
  <div className="flex justify-center py-70 h-screen">
          <div className="text-8xl font-medium text-center font-serif text-white z-2">
            Charlton Shih
          </div>
          <LoadingBox />
        </div>
        </div>
      )}

      {/* Main Content */}
      {!isLoading && (
        <div className="flex">
        <Navbar />
        <main className="ml-40 w-full">
          <section id="home" className="pages-container min-h-screen pt-5">
            <HomePage />
          </section>

          <section id="about" className="pages-container min-h-screen pt-5">
            <AboutPage />
          </section>

          <section id="experience" className="pages-container min-h-screen pt-5">
            <ExperiencePage />
          </section>

          <section id="projects" className="pages-container min-h-screen pt-5">
            <ProjectsPage />
          </section>

          <section id="pictures" className="pages-container min-h-screen pt-5">
            <PicturePage />
          </section>

          <section id="contact" className="pages-container min-h-screen pt-5">
            <ContactPage />
          </section>
        </main>
      </div>
      )}
    </>
  );
}

export default App;