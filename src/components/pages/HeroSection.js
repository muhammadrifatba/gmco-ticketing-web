import React from 'react';
import '../style/HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import image from '../../images/herov1.png';
import sp from '../../images/salpriadi.jpg';

function HeroSection() {
  return (
    <div className='hero-container'>
     <img class='hero-images' src ={image}></img>
     
      <p>What are you waiting for?</p>
      <h2>GMCO Live from the Living Room:<br/>Indonesia Pop Now and Then</h2>
      
      <div class="multi-item">
        <button class="multi-button_button">Saturday</button>
        <button class="multi-button_button">12/10/2022</button>
        <button class="multi-button_button"> Auditorium MM FEB UGM</button>
        <Link to='/Seat'>
          <Button 
            className='btn btn-a'
            buttonStyle='primary'
            buttonSize='btn--medium'
            buttonColor='green'
          >Buy Ticket Now!
          </Button>
        </Link>
      </div>
    </div>
  );
}



export default HeroSection;
