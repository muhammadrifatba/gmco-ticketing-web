import React from 'react';
import { Button } from '../utility/Button';
import { Link } from 'react-router-dom';
import image from '../../../images/herov1.webp';
import '../../style/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     <img class='hero-images' alt='hero-img' src ={image}></img>
     
      <p>WHAT ARE YOU WAITING FOR?</p>
      <h2>GMCO Live from the Living Room:<br/>Indonesian Pop Now and Then</h2>
      
        <div class="multi-item">
          <p class="multi-button_button">Saturday</p>
          <p class="multi-button_button">12/11/2022</p>
          <p class="multi-button_button"> Auditorium MM FEB UGM</p>
          <div className="hero-btn">
            <Link to='/*'>
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
    </div>
  );
}



export default HeroSection;
