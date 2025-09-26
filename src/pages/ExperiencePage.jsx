const ExperiencePage = () => {
  return (
    <section
      id="experience"
      className="w-7/8 min-h-screen px-4 md:px-24 py-16 md:py-32 md:ml-16"
    >
      <div className="w-6/8" style={{ opacity: 1, transform: "none" }}>
        <h2 className="text-4xl md:text-7xl font-medium max-w-2xl text-white">
          experience.
        </h2>

        {/* Block 1 */}
        <div className="flex justify-center">
          <div className="text-left max-w-xl w-full">
            <div className="relative w-48 h-40 flex-shrink-0 mb-4"></div>
            <div className="space-y-4">
              <p className="font-mono text-sm text-gray-500">Undergraduate Researcher</p>
              <h3 className="text-3xl font-medium text-white">
                Physical Sciences and Mathematics Lab
              </h3>
              <p className="text-sm text-white">
                Dec 2025 - Present &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los Angeles, California
              </p>
              <p className="text-sm text-gray-500">
                • Collaborated with a three-person team to design and develop multiplayer DCM cascading bandits under
                reinforcement learning frameworks, targeting sublinear regret under unique action and reward information asymmetry settings <br/>
                • Experimented with Thompson Sampling and UCB algorithms to analyze multi-agent, multi-click bandit performance <br/> 
                • Conducted large-scale simulations (100,000+ rounds) to validate theoretical bounds, measuring regret growth under varying exploration strategies (mMDSEE, UCB Intervals, Round-Robin Allocation)
              </p>
            </div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex justify-center">
          <div className="text-left max-w-2xl w-full">
            <div className="relative w-48 h-40 flex-shrink-0 mb-4"></div>
            <div className="space-y-4">
              <p className="font-mono text-sm text-gray-500">Undergraduate Researcher</p>
              <h3 className="text-3xl font-medium text-white">
                UCLA Computer Science Department
              </h3>
              <p className="text-sm text-white">
                Jul 2024 - Jul 2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los Angeles, California
              </p>
              <p className="text-sm text-gray-500">
                • Collaborated with a 10-person team to develop affordable autonomous surgery robots under Prof. Arisaka and Yunbo Wang <br/> 
                • Established servomotor communication using ROS2, ESP32, and Python<br/>
                • Boosted tracking efficiency through OpenCV for ultrasound reconstruction and biopsy operations <br/> 
                • Applied imitation learning with ACT, CNNs, and motor outputs to enhance robotic operations
              </p>
            </div>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex justify-center">
          <div className="text-left max-w-2xl w-full">
            <div className="relative w-48 h-40 flex-shrink-0 mb-4"></div>
            <div className="space-y-4">
              <p className="font-mono text-sm text-gray-500">Full Stack Developer</p>
              <h3 className="text-3xl font-medium text-white">AdOptimal</h3>
              <p className="text-sm text-white">
                Dec 2025 - Aug 2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los Angeles, California
              </p>
              <p className="text-sm text-gray-500">
            • Ad-Optimal connects businesses with student organizations, simplifying processes for advertisements and transactions <br/>
            • Built and maintained RESTful API endpoints to support real-time communication and payment processing, integrating
            with frontend components and ensuring reliable client-server interactions <br/>
            • Developed and optimized partial-search functionality, improving search efficiency and cutting load times by 50% <br/>
            • Utilized web scraping for data collection and implemented OAuth 2.0 with JWT for secure, stateless authorization <br/> 
              </p>
            </div>
          </div>
        </div>

        {/* Block 4 */}
        <div className="flex justify-center">
          <div className="text-left max-w-2xl w-full">
            <div className="relative w-48 h-40 flex-shrink-0 mb-4"></div>
            <div className="space-y-4">
              <p className="font-mono text-sm text-gray-500">Learning Assistant (CS 35L)</p>
              <h3 className="text-3xl font-medium text-white">
                UCLA Henry Samueli School of Engineering and Applied Science
              </h3>
              <p className="text-sm text-white">
                Mar 2025 - Jun 2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los Angeles, California
              </p>
              <p className="text-sm text-gray-500">
                • Led 20–30 student discussion sessions on software construction, covering Emacs, networks, network security, scripting,
                operating systems, and software testing techniques <br/> 
                • Collaborated with course professors and independently conducted office hours to assist students with coursework and
                projects <br/>
                </p>
            </div>
          </div>
        </div>

        {/* Block 5 */}
        <div className="flex justify-center">
          <div className="text-left max-w-2xl w-full">
            <div className="relative w-48 h-40 flex-shrink-0 mb-4"></div>
            <div className="space-y-4">
              <p className="font-mono text-sm text-gray-500">Learning Assistant (Math 32B)</p>
              <h3 className="text-3xl font-medium text-white">
                UCLA Henry Samueli School of Engineering and Applied Science
              </h3>
              <p className="text-sm text-white">
                Jan 2024 - Jul 2024 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los Angeles, California
              </p>
              <p className="text-sm text-gray-500">
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
