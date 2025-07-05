
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import drita from '../../images/slider/drita.png';
import warehouse from '../../images/slider/warehouse.png';
import mobilje from '../../images/slider/mobilje.png';



const images = [drita,warehouse,mobilje];

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "20px 0" ,borderRadius:"20px"}}>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "600px" ,borderRadius:"20px"}} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
