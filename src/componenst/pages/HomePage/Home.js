import React from 'react';
import HeroSection from '../../HeroSection';
import HeroContent from '../../HomeContent';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


function Home() {
  return (
    <>
      <HeroSection />
      <HeroContent {...homeObjOne}/>
      
      
      
    </>
  );
}

export default Home;
