import React from 'react'
import '../style/PageHeader.css'
import image from '../../images/solidcolorgreen.png';

function PageHeader ({title,bgColour})  {
  
  return(
    <div className="PageHeader-container">
      <img src={image}  className="PageHeader-img" />
        <h1 className='headertitle'> {title}</h1>
   </div>
  )
}

export default PageHeader;
