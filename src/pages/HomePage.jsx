import React, { useState } from "react";
import HomePageMiddle from "../components/HomePageMiddle";

const HomePage = () => {
  return (
    <section className="mt-auto mx-auto md:px-24 md:ml-16">
      <div className="max-w-6xl" style={{ opacity: 1, transform: "none" }}>
        <HomePageMiddle />
      </div>
    </section>
  );
};

export default HomePage;