import React from 'react';
import BlogCard from './BlogCard';
import HeroSection from './HeroSection';
import BuyGuide from '../BuyGuideCarousel'
import HomeContent from './HomeContent';
import HomeContent2 from './HomeContent2'
import { homeObjOne, homeObjTwo, BlogObjOne } from './Data';

function Home() {
  return (
    <>
      <HeroSection/>
      <HomeContent  {...homeObjOne}/>
      <BuyGuide/>
      <HomeContent2 {...homeObjTwo}/>
      <BlogCard {...BlogObjOne}/>
    </>
  );
}

export default Home;
