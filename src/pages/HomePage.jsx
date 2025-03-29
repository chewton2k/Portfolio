import React from 'react';
import HomePageTop from '../components/HomePageTop';
import HomePageBottom from '../components/HomePageBottom';
import HomePageMiddle from '../components/HomePageMiddle';

const HomePage = () => {
  return (
    <div>
      <HomePageTop />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <HomePageMiddle />
        </main>
      </div>
      <HomePageBottom />
    </div>
  );
};

export default HomePage;