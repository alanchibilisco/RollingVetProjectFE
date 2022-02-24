import React from "react";
import nuestroequipo from "../components/img/NuestroEquipo.jpg";
import Carousel from "react-bootstrap/Carousel";
import doc1 from "../components/img/medico1.png";
import doc2 from "../components/img/medico2.png";
import doc3 from "../components/img/medico3.png";
import "../App.css";

const Nuestoequipo = () => {
  return (  
    <div style={{ backgroundImage: `url(${nuestroequipo})`}}>
      <h1 className="text-center text-light">NUESTRO EQUIPO</h1>
      <div className="container">
      <Carousel fade>
        <Carousel.Item>
          <img className="img-fluid rounded mx-auto d-block w-25" src={doc1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid rounded mx-auto d-block w-25" src={doc2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid rounded mx-auto d-block w-25" src={doc3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
      </div>
  );
};

export default Nuestoequipo;