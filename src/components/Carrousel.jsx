import React from "react";
import { Carousel } from "react-bootstrap";
import carrusel1 from "./img/carrusel1.jpg";
import carrusel2 from "./img/carrusel2.jpg";
import carrusel3 from "./img/carrusel3.jpg";

const Carrousel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100  img-banner" src={carrusel1} alt="First slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img-banner" src={carrusel2} alt="Second slide" />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img-banner" src={carrusel3} alt="Third slide" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;
