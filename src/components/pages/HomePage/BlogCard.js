import React from 'react'
import { Button } from '../utility/Button';
import '../../style/BlogCard.css';

function BlogCard({
  BlogTitle,
  BlogText,
  Blogimg,
  Blogalt,
  BlogButtonLabel,
  url
  }){

    return (
    <div className="Blogcard_Section">
      <div className="BlogCard_Container">
        <div className='BlogCard'>
          <div className='BlogCard_wrapper'>
            <div className="BlogCard_item swiper-slide">
              <div className="BlogCard_img">
                <img src={Blogimg} alt={Blogalt}/>
              </div>
              <div className="BlogCard_content">
                <div className="BlogCard_title">{BlogTitle}</div>
                <div className="BlogCard_text">{BlogText}</div>
                  <a href={url}>
                    <Button buttonSize='btn--wide' buttonColor='green'>
                      {BlogButtonLabel}
                    </Button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;