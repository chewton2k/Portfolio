import React from 'react';
import HomePageTop from '../components/HomePageTop';
import HomePageBottom from '../components/HomePageBottom';
import HomePageMiddle from '../components/HomePageMiddle';
import LoadingBox from '../components/LoadingBox';

const HomePage = () => {
  return (
    <div>
        <HomePageTop/> 
        <HomePageMiddle/>
        <HomePageBottom/> 
        {/*<LoadingBox/>*/}
    </div> 
  );
};

export default HomePage;