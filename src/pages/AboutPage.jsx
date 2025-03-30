import React from "react";

const AboutPage = () => {
  return (
    <section id="about" className="min-h-screen px-4 md:px-24 py-16 md:py-32 md:ml-16">
    <div className="max-w-5xl" style={{ opacity: 1, transform: "none" }}>
      <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl text-white">about.</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 md:col-start-2">
          <div className="space-y-8">
            <p className="text-sm text-[#fefeff]">
              I'm a software developer based in India with over 3 years of experience across brand and product, at companies large and small. I take pride in my craft, and love mentoring earlier career developers. I develop cross-functional partnerships and thrive in complex, ambiguous environments.
            </p>
          </div>
        </div>
        <div className="md:col-span-1 md:col-start-3 md:mt-32">
          <div className="space-y-8">
            <p className="text-sm text-[#fefeff]">
              My approach combines technical expertise with creative problem-solving, always striving to build solutions that are both elegant and practical. Zooming out on company strategy, zooming in on details.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="md:col-span-1 md:col-start-2">
          <div className="space-y-8">
            <p className="text-sm text-[#fefeff]">
              In my free time, I try to challenge myself with new projects, learn new things, compose music, and solve some Leetcode problems to keep my skills sharp and brain active.
            </p>
          </div>
        </div>
        <div className="md:col-span-1 md:col-start-3 md:mt-32">
          <div className="space-y-8">
            <p className="text-sm text-[#fefeff]">
              Creating something from the ground up and watching it grow is incredibly fulfilling. Engaging in this process with passion feels almost spiritual to me.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutPage;
