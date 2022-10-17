import React from 'react'
import { Carousel } from 'antd';
import tatacara1 from '../../images/imgTataCara/tatacara1.webp'
import tatacara2 from '../../images/imgTataCara/tatacara2.webp'
import tatacara3 from '../../images/imgTataCara/tatacara3.webp'
import tatacara4 from '../../images/imgTataCara/tatacara4.webp'
import tatacara5 from '../../images/imgTataCara/tatacara5.webp'
import tatacara6 from '../../images/imgTataCara/tatacara6.webp'
import tatacara7 from '../../images/imgTataCara/tatacara7.webp'
import '../style/BuyGuideCarousel.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BuyGuideCarousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    

    return(
        
            // <Carousel className='test' autoplay accessibility="true">
            //     <div className="container-BuyGuide">
            //         <img className="BuyGuide"  src={tatacara1} alt=''/>
            //     </div>
            //     <div className="container-panitia">
            //         <img className="BuyGuide"  src={tatacara2} alt=''/>
            //     </div>
            //     <div className="container-BuyGuide">
            //         <img className="BuyGuide"  src={tatacara3} alt=''/>
            //     </div>
            //     <div className="container-BuyGuide">
            //         <img className="BuyGuide"  src={tatacara4} alt=''/>
            //     </div>
            //     <div className="container-BuyGuide">
            //         <img className="BuyGuide"  src={tatacara5} alt=''/>
            //     </div>                    
            //     <div className="container-BuyGuide">
            //         <img className="BuyGuide"  src={tatacara6} alt=''/>
            //     </div>
            // </Carousel>

            <div className="guide-container">
                <h1 className='BuyGuide-label'>Buying Guide</h1>

                <Slider {...settings}>
                    <div>
                        <img className="BuyGuide"  src={tatacara1} alt=''/>
                    </div>
                    <div>
                        <img className="BuyGuide"  src={tatacara2} alt=''/>
                    </div>
                    <div>
                        <img className="BuyGuide"  src={tatacara3} alt=''/>
                    </div>
                    <div>
                        <img className="BuyGuide"  src={tatacara4} alt=''/>
                    </div>
                    <div>
                        <img className="BuyGuide"  src={tatacara5} alt=''/>
                    </div>
                    <div>
                        <img className="BuyGuide"  src={tatacara6} alt=''/>
                    </div>
                    <div>
                        <img className="BuyGuide"  src={tatacara7} alt=''/>
                    </div>
                   
                </Slider>
            </div>
    )
}

export default BuyGuideCarousel

