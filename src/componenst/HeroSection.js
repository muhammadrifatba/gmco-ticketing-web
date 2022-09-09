import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import image from '../images/herotemp.jpg';
import sp from '../images/salpriadi.jpg';
function HeroSection() {
  return (
    <div className='hero-container'>
     <img class='hero-images' src ={image}></img>
     
      
      <h2>GMCO LIVE</h2>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}



export default HeroSection;
