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
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const minLoadTime = 3500;
    const fadeDuration = 1000;
    const loadStartTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - loadStartTime;
      const remainingTime = Math.max(0, minLoadTime - elapsed);
      
      setTimeout(() => {
        setIsTransitioning(true);
        
        setTimeout(() => {
          setIsLoading(false);
          
          setTimeout(() => {
            setContentVisible(true);
          }, 100);
          
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

    if (isTouchDevice()) {
      document.body.classList.add("touch-device");
      
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
      handleLoad();
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
          <div className="flex flex-col items-center min-h-screen">
            {/* Name above the loading box */}
            <div className="text-7xl font-medium text-center font-serif text-white z-10 mt-60">
              Charlton Shih
            </div>
            <LoadingBox />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`main-content ${contentVisible ? "fade-in" : ""}`}>
        {!isLoading && (
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="ml-[12.5%] w-[87.5%]">
              <section id="intro" className="pages-container min-h-screen pt-5">
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
      </div>
    </>
  );
}

export default App;