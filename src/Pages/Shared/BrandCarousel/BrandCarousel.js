/* eslint-disable no-undef */
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BrandCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/ProgrammingHero1/dragon-news-client-module-60/blob/main/src/assets/brands/Brand1.png?raw=true"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/ProgrammingHero1/dragon-news-client-module-60/blob/main/src/assets/brands/Brand2.png?raw=true"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
