import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import LoadingBox from "./components/LoadingBox";
import ProjectsPage from "./pages/Projects.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import PicturePage from "./pages/PicturePage.jsx";
import EmailPage from "./pages/EmailPage.jsx"; 

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
        <Router>
            {isLoading ? (
                <LoadingBox />
            ) : (
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/experience" element={<ExperiencePage/>}/>
                    <Route path="/pictures" element={<PicturePage/>}/>
                    {/* <Route path="/email" element={<EmailPage/>}/> */}
                </Routes>
            )}
        </Router>
    );
}

export default App;
