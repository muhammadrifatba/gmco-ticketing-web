import React from 'react';
import BlogCard from './BlogCard';
import HeroSection from './HeroSection';
import HomeContent from './HomeContent';
import HomeContent2 from './HomeContent2'
import { homeObjOne, homeObjTwo, BlogObjOne } from './Data';

function Home() {
  return (
    <>
      <HeroSection/>
      <HomeContent  {...homeObjOne}/>
      <HomeContent2 {...homeObjTwo}/>
      <BlogCard {...BlogObjOne}/>
    </>
  );
}

export default Home;
