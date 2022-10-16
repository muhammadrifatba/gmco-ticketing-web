import React from 'react'
import image from '../../../images/solidcolorgreen.png';
import '../../style/PageHeader.css'

function PageHeader ({title,bgColour})  {
  
  return(
    <div className="PageHeader-container">
      <img src={image} alt='PageHeader-img' className="PageHeader-img" />
      <h1 className = 'headertitle'> {title}</h1>
    </div>
  )
}

export default PageHeader;
