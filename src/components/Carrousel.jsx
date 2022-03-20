import React from "react";
import { Carousel } from "react-bootstrap";
import carrusel1 from "./img/c6.png";
import carrusel2 from "./img/c4.png";
import carrusel3 from "./img/c5.png";

const Carrousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="w-100  img-banner2" src={carrusel1} alt="First slide" />        
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100 img-banner2" src={carrusel2} alt="Second slide" />          
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100 img-banner2" src={carrusel3} alt="Third slide" />        
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;
