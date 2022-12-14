import React from 'react';
import { Button } from '../utility/Button';
import { Fade } from "react-awesome-reveal";
import '../../style/HomeContent.css';

function HomeContent({
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
  url
}) {
  return (
    <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
      <Fade>
      <div className='container'>
        <div
          className='row home__hero-row'
          style={{
            display: 'flex',
            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
          }}>
          
          <div className='col'>
            <div className='home__hero-img-wrapper'>
              <img src={img} alt={alt} className='home__hero-img' />
            </div>
          </div>

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
                }>
                {description}
              </p>
              <br/>
              <p
                className={
                  lightTextDesc
                    ? 'home__hero-subtitle'
                    : 'home__hero-subtitle dark'
                }>
                {description2}
              </p>
              <a href={url}>
                <Button buttonSize='btn--wide' buttonColor='green'>
                  {buttonLabel}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default HomeContent;
