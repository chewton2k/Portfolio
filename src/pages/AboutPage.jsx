import React from "react";

const AboutPage = () => {
  return (
    <section id="about" className="w-7/8 min-h-screen px-4 md:px-24 py-16 md:py-32 md:ml-16">
      <div className="max-w-4xl" style={{ opacity: 1, transform: "none" }}>
        <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl text-white">about.</h2>

        <div className="grid md:grid-cols-5">
          <div className="md:col-span-2 md:col-start-2">
            <div className="space-y-5">
              <p className="text-sm text-white font-mono">
                Hello, I'm Charlton Shih and I am currently pursuing a bachelor's degree in Computer Science at UCLA. I have a strong interest in applying algorithms and data structures to solve real-world problems, particularly in the fields of machine learning and software development.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-3 md:mt-15">
            <div className="space-y-8">
              <p className="text-sm text-white font-mono">
                My approach combines exploring the applications of mathematics and computer science to develop algorithms and solve real-world problems! I'm passionate about mathematics, and I'm currently working on optimization problems, machine learning models, and device development.
              </p>
            </div>
          </div>
        </div>
    
        <div className="grid md:grid-cols-5 gap-8 mt-16">
          <div className="md:col-span-2 md:col-start-2">
            <div className="space-y-8">
              <p className="text-sm text-white font-mono">
                In my spare time, I challenge myself to be active and dedicate time to learning—whether it's building new projects, exploring new concepts within math and cs, or dabbling with low-level programming and reinforcement learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
