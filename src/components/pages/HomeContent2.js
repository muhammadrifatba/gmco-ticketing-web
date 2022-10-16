import React from 'react';
import '../style/HomeContent2.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';



function HomeContent2({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  description2,
  buttonLabel,
  img,
  alt,
  imgStart,
  link
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >

            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <br/>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description2}
                </p>
                <div className="HomeContent2-ButtonPos">
                  <a href={link} >
                    <Button buttonSize='btn--wide' buttonColor='red'>
                      {buttonLabel}
                    </Button>
                  </a>
                </div>
                  
                
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContent2;
