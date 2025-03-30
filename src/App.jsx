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
        <div
          className={`
                fixed inset-0 z-50 transition-opacity duration-400
                ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}
                ${isTransitioning ? "opacity-0" : ""}
            `}
        >
          <div className="flex justify-center py-70 h-screen">
            <div className="text-8xl font-medium text-center font-serif text-white z-2">Charlton Shih</div>
            <LoadingBox />
          </div>
        </div>

        <div
          className={`
                transition-opacity duration-300
                ${isLoading ? "opacity-0" : "opacity-100"}
            `}
        >
          <div className="flex">
            <Navbar />
            <main className="ml-40 w-full">
              <section id="home" className="min-h-screen pt-5">
                <HomePage />
              </section>

              <section id="about" className="min-h-screen pt-5">
                <AboutPage />
              </section>

              <section id="projects" className="min-h-screen pt-5">
                <ProjectsPage />
              </section>

              <section id="experience" className="min-h-screen pt-5">
                <ExperiencePage />
              </section>

              <section id="pictures" className="min-h-screen pt-5">
                <PicturePage />
              </section>

              <section id="contact" className="min-h-screen pt-5">
                <ContactPage/> 
              </section>

            </main>
          </div>
        </div>
      </>
    );
}

export default App;