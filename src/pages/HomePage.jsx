import React from 'react';
import HomePageMiddle from '../components/HomePageMiddle';

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <HomePageMiddle />
        </main>
      </div>
    </div>
  );
};

export default HomePage;