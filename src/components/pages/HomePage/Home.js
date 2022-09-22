import React from 'react';
import HeroSection from '../../HeroSection';
import HomeContent from '../../HomeContent';
import HomeContent2 from '../../HomeContent2'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


function Home() {
  return (
    <>
      <HeroSection />
      <HomeContent {...homeObjOne}/>
      <HomeContent2 {...homeObjTwo}/>
      
      
      
    </>
  );
}

export default Home;
