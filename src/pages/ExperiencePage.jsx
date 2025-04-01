import React from "react";

const ExperiencePage = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-4 md:px-24 md:ml-16"
    >

      <div className="w-6/8" style={{ opacity: 1, transform: "none" }}>
        <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl text-white">
          experience.
        </h2>


        <div class="grid md:grid-cols-4 gap-2">
          <div class="md:col-span-2 md:col-start-2">
            <h2 class="text-4xl md:text-5xl font-medium mb-8 max-w-2xl"></h2>

            <div class="relative w-48 h-40 flex-shrink-0 mb-4"></div>

            <div class="space-y-4 max-w-2xl"> 
              <p class="font-mono text-sm text-gray-500">
                Undergraduate Researcher{" "}
              </p>
              <h3 class="text-3xl font-medium text-white">
                Physical Sciences and Mathematics Lab
              </h3>
              <p class="text-sm text-white">
                Dec 2025 - Present &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los Angeles, California
              </p>
              <p class="text-sm text-gray-500">
                • Collaborated with a three-person team to develop DCM cascading bandits for a multiplayer setting, aiming to establish an upper
                sublinear regret-bound <br />
                • Analyzed and experimented with Thompson Sampling and linear UCB indexes in multi-agent and
                multi-click bandit framework
              </p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-4 gap-2">
          <div class="md:col-span-2 md:col-start-2">
            <h2 class="text-4xl md:text-7xl font-medium mb-8 max-w-2xl"></h2>

            <div class="relative w-48 h-40 flex-shrink-0 mb-4"></div>

            <div class="space-y-4 max-w-2xl">
              <p class="font-mono text-sm text-gray-500">
                Undergraduate Researcher{" "}
              </p>
              <h3 class="text-3xl font-medium text-white">
                UCLA Computer Science Department
              </h3>
              <p class="text-sm text-white">
                Jul 2024 - Present &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los Angeles, California
              </p>
              <p class="text-sm text-gray-500">
                • Collaborated with a 10-person team to develop affordable autonomous surgery robots under Prof. Arisaka and Yunbo Wang <br/> 
                • Established servomotor communication using ROS2, ESP32, and Python<br/>
                • Boosted tracking efficiency through OpenCV for ultrasound reconstruction and biopsy operations <br/> 
                • Applied imitation learning with ACT, CNNs, and motor outputs to enhance robotic operations
              </p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-4 gap-2">
          <div class="md:col-span-2 md:col-start-2">
            <h2 class="text-4xl md:text-7xl font-medium mb-8 max-w-2xl"></h2>

            <div class="relative w-48 h-40 flex-shrink-0 mb-4"></div>

            <div class="space-y-4 max-w-2xl">
              <p class="font-mono text-sm text-gray-500">
                Full Stack Developer{" "}
              </p>
              <h3 class="text-3xl font-medium text-white">
                AdOptimal
              </h3>
              <p class="text-sm text-white">
                Dec 2025 - Present &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los Angeles, California
              </p>
              <p class="text-sm text-gray-500">
              • Ad-Optimal streamlines advertising opportunities between student organizations and businesses, making it 
                easier for companies to promote their services while generating revenue for student groups<br/>
              • Built and maintained RESTful API endpoints, integrating frontend components and handling requests for
                  advertising transactions and payments<br/>
              • Integrated OAuth 2.0 authentication to enhance security and enable seamless third-party access<br/>
              • Organized and efficiently collected data using web scrapers utilizing selenium and webdriver <br/>
              </p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-4 gap-2">
          <div class="md:col-span-2 md:col-start-2">
            <h2 class="text-4xl md:text-7xl font-medium mb-8 max-w-2xl"></h2>

            <div class="relative w-48 h-40 flex-shrink-0 mb-4"></div>

            <div class="space-y-4 max-w-2xl">
              <p class="font-mono text-sm text-gray-500">
                Learning Assistant (CS 35L) {" "}
              </p>
              <h3 class="text-3xl font-medium text-white">
              UCLA Henry Samueli School of Engineering and Applied Science
              </h3>
              <p class="text-sm text-white">
                Mar 2025 - Present &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los Angeles, California
              </p>
              <p class="text-sm text-gray-500">
                • ... 
              </p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-4 gap-2">
          <div class="md:col-span-2 md:col-start-2">
            <h2 class="text-4xl md:text-7xl font-medium mb-8 max-w-2xl"></h2>

            <div class="relative w-48 h-40 flex-shrink-0 mb-4"></div>

            <div class="space-y-4 max-w-2xl">
              <p class="font-mono text-sm text-gray-500">
                Learning Assistant (Math 32B) {" "}
              </p>
              <h3 class="text-3xl font-medium text-white">
              UCLA Henry Samueli School of Engineering and Applied Science
              </h3>
              <p class="text-sm text-white">
                Jan 2024 - Jul 2024 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los Angeles, California
              </p>
              <p class="text-sm text-gray-500">
              • Led discussion sessions of 20-30 students on course topics for multivariable calculus <br/> 
              • Collaborated with course professors and peers to align discussion sessions with course learning objectives
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ExperiencePage;
