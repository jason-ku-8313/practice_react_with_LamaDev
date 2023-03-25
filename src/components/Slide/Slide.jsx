import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";

export default function Slide({ children, slidesToShow, arrowsScroll }) {
  return (
    <div className="slide">
      <div className="container">
        <h2>Popular professional services</h2>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
}
