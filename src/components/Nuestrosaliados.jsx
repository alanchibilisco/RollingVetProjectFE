import React from "react";
import Franja from "./img/franjaMarcas.jpg";
import mar1 from "./img/marca1.png";
import mar2 from "./img/marca2.png";
import mar3 from "./img/marca3.png";

const Nuestrosaliados = () => {
  return (
    
      <div
        style={{ backgroundImage: `url(${Franja})` }}
      >
        <h1 className="text-light text-center">NUESTROS ALIADOS</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={mar1} alt="marcas" className="img-fluid" />
            </div>
            <div className="col">
              <img src={mar2} alt="marcas" className="img-fluid" />
            </div>
            <div className="col">
              <img src={mar3} alt="marcas" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Nuestrosaliados;
