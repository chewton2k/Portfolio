import React from "react";

const ProjectsPage = () => {
  return (
    <section id="projects" className="w-7/8 min-h-screen px-4 md:px-24 py-16 md:py-32 md:ml-16">
      <div className="max-w-5xl" style={{ opacity: 1, transform: "none" }}>
        <h2 className="text-4xl md:text-7xl font-medium max-w-2xl text-white">projects.</h2>

        <div className="grid md:grid-cols-4 gap-2">
          <div className="md:col-span-2 md:col-start-1">
            <h2 className="text-4xl md:text-7xl font-medium max-w-2xl"></h2>

            <div className="relative w-48 h-40 flex-shrink-0 mb-4"></div>
            <a href="https://github.com/chewton2k/UCLADesign" target="_blank" rel="noopener noreferrer"> 
              <div className="space-y-4 max-w-2xl border-1 py-4 px-4 border-white rounded-2xl transition-transform duration-300 hover:scale-105">
                <h3 className="text-3xl font-light text-white">
                  UCLA Design
                </h3>
                <p className="text-sm text-white">
                  • Developed a real-time, state-managed drag-and-drop UI for furniture placement using React's component-based
                  architecture and optimized event-driven rendering for seamless interactivity <br/>
                  • Designed and optimized a NoSQL document database in MongoDB, indexing user-generated layouts and
                  integrating queryable search functionality<br/>
                </p>
                <p className="text-sm text-gray-500"> 
                  React.js • MongoDB • Node.js • Express • JS • TailwindCSS
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-2">
          <div className="md:col-span-3 md:col-start-3">
            <h2 className="text-4xl md:text-7xl font-medium max-w-2xl"></h2>

            <div className="relative w-48 h-40 flex-shrink-0 mb-4"></div>
            <a href="https://github.com/chewton2k/ClubScraper" target="_blank" rel="noopener noreferrer"> 
              <div className="space-y-4 max-w-2xl border-1 py-4 px-4 border-white rounded-2xl transition-transform duration-300 hover:scale-105">
                <h3 className="text-3xl font-light text-white">
                  Club Scraper
                </h3>
                <p className="text-sm text-white">
                • Python web scraper for gathering information on tech clubs at UCLA from their official student association page
                • Uses Selenium to automate browser actions and extract relevant data such as club names, emails, Instagram handles, and signatories
                </p>
                <p className="text-sm text-gray-500"> 
                  python • jupyterlab • selenium 
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-2">
          <div className="md:col-span-2 md:col-start-1">
            <h2 className="text-4xl md:text-7xl font-medium max-w-2xl"></h2>

            <div className="relative w-48 h-40 flex-shrink-0 mb-4"></div>
            <a href="https://github.com/chewton2k/PredictingStocks" target="_blank" rel="noopener noreferrer"> 
              <div className="space-y-4 max-w-2xl border-1 py-4 px-4 border-white rounded-2xl transition-transform duration-300 hover:scale-105">
                <h3 className="text-3xl font-light text-white">
                Stock Market Prediction Using Machine Learning and Data Analysis
                </h3>
                <p className="text-sm text-white">
                • Built data frames and visualizations with Pandas, NumPy, and Jupyter to compare predictions with targets across
                10000 data points <br/>
                • Trained an ML model (scikit-learn) with 50% precision; optimized with backtesting (10 years of data) and new
                predictors, boosting accuracy to 58.8% <br/>
                </p>
                <p className="text-sm text-gray-500"> 
                  python • jupyterlab 
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-2">
          <div className="md:col-span-3 md:col-start-3">
            <h2 className="text-4xl md:text-7xl font-medium max-w-2xl"></h2>

            <div className="relative w-48 h-40 flex-shrink-0 mb-4"></div>
            <a href="https://github.com/chewton2k/Office-Group" target="_blank" rel="noopener noreferrer"> 
              <div className="space-y-4 max-w-2xl border-1 py-4 px-4 border-white rounded-2xl transition-transform duration-300 hover:scale-105">
                <h3 className="text-3xl font-light text-white">
                  Lotto Group
                </h3>
                <p className="text-sm text-white">
                • Enabled users to create groups and pool money for lottery ticket purchases, streamlining the process for workplaces and other communities <br/> 
                • Developed using SwiftUI, implementing API calls to display California lottery drawings and jackpots <br/>
                • Leveraged Vision library to accurately scan and parse drawing numbers from tickets <br/>
                </p>
                <p className="text-sm text-gray-500"> 
                  swift • Foundation • Swiftdata • Firebase • vision 
                </p>
              </div>
            </a>
          </div>
        </div>




      </div>
    </section>
  );
};

export default ProjectsPage;