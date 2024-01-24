import React from 'react';
import Banner1 from '../assets/images/BANNER-WEB-LUSI-LIVY_1703823601672.jpg';
import Banner2 from '../assets/images/BANNER-WEB-JOLIE_1692934894972.jpg';
import Banner3 from '../assets/images/anu.jpg';

const Slider = () => {
  return (
    <div className="carousel w-full h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={Banner1} className="w-full object-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={Banner2} className="w-full object-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={Banner3} className="w-full object-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
