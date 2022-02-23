import React from "react";
import Franja from "./img/franjaMarcas.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import mar1 from "./img/marca1.png";
import mar2 from "./img/marca2.png";
import mar3 from "./img/marca3.png";

const Nuestrosaliados = () => {
  return (
    <div className="border border-danger container-fluid">
      <div
        style={{ backgroundImage: `url(${Franja})` }}
        className="border border-danger"
      >
        <h1 className="text-light text-center">NUESTROS ALIADOS</h1>
        <div class="container">
          <div class="row">
            <div class="col">
              <img src={mar1} alt="marcas" className="img-fluid" />
            </div>
            <div class="col">
              <img src={mar2} alt="marcas" className="img-fluid" />
            </div>
            <div class="col">
              <img src={mar3} alt="marcas" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nuestrosaliados;
