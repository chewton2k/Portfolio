const PaperPage = () => {
  return (
    <section
      id="research"
      className="w-7/8 min-h-screen px-4 md:px-24 py-16 md:py-32 md:ml-16"
    >
      <div className="w-6/8" style={{ opacity: 1, transform: "none" }}>
        <h2 className="text-4xl md:text-7xl font-medium max-w-2xl text-white">
          Research.
        </h2>

        {/* Block 1 */}
        <div className="flex justify-center">
          <div className="text-left max-w-xl w-full">
            <div className="relative w-48 h-40 flex-shrink-0 mb-4"></div>
            <div className="space-y-4">

              <h4 className="text-2xl font-medium text-white">
                DCM Bandits: Multiplayer Information Asymmetric Cascading Bandits For Multiple Clicks
              </h4>
              <p className="text-sm text-white">
               Andy Wang, Charlton Shih, William Chang
              </p>
              <p className="text-sm text-gray-500">
                Under Review at Association for the Advancement of Artificial Intelligence, 2025
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PaperPage;
