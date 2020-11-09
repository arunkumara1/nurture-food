import React from 'react';
import './SlideComponent.css';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';

const SlideComponent = () => {

  const images = [
    'https://cdn.grabon.in/gograbon/images/web-images/uploads/1591771548178/food-coupons.jpg',
    'https://mk0barn2t6l75xhh9gm.kinstacdn.com/wp-content/uploads/2018/01/Restaurant-ordering-system-e1569334281278-820x332.png',
    'https://images.freekaamaal.com/store_desc_images/1525866061.png',
    'https://www.dineout.co.in/blog/wp-content/uploads/2018/10/WhatsApp-Image-2018-10-18-at-8.06.23-PM.jpeg',
    'https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg',
    'https://cdn.techinasia.com/wp-content/uploads/2017/03/food-takeaway-delivery.jpg'
  ];
  
  const zoomOutProperties = {
    duration: 3000,
    indicators: false,
    scale: 0.4
  }


  return (
    <div className="home__slider-container">
        <Zoom {...zoomOutProperties} >
          {
            images.map((img,index) => (
              <div className="imgs__container" key={index} style={{width: "100%"}} >
                <img className ="img__container" src={img} lat={img} />
              </div>
            ))

          }

        </Zoom>
    </div>

  );
}

export default SlideComponent;
