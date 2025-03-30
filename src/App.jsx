import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LoadingBox from "./components/LoadingBox";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import PicturePage from "./pages/PicturePage.jsx";
import SlowScrollWrapper from "./components/SlowScroll.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => { 
            setIsLoading(false);
        };

        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingBox />
            ) : (
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
                    </main>
                </div>
            )}
        </>
    );
}

export default App;