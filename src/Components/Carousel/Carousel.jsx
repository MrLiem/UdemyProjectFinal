import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CarouselItem from '../CarouselItems/CarouselItem'
// 
const MyCarousel = props => {
  return (
    <OwlCarousel className="owl-theme owl-loading owl-drag owl-dot owl-loaded" loop margin={10} nav items={5}>
      <div className="item">
        <CarouselItem/>
      </div>
      <div className="item">
      <CarouselItem/>
      </div>
      <div className="item">
      <CarouselItem/>
      </div>
      <div className="item">
      <CarouselItem/>
      </div>
      <div className="item">
      <CarouselItem/>
      </div>
    </OwlCarousel>
  );
};


export default MyCarousel