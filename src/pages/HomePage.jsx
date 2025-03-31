import React, { useState } from "react";
import HomePageMiddle from "../components/HomePageMiddle";

const HomePage = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <section className="mt-auto md:px-24 md:ml-16">
      <div className="max-w-7xl" style={{ opacity: 1, transform: "none" }}>
        <HomePageMiddle />
      </div>
    </section>
  );
};

export default HomePage;