import React from "react";
import { Link } from "react-router-dom";
import LineaSeparado from "./img/LineaSeparado.png";
import Plan1 from "./img/plan1.png"
import Plan2 from "./img/plan2.png"
import Plan3 from "./img/plan3.png"
import { useNavigate } from "react-router-dom";

const Cardsplanes = () => {
    return(
      <div className="container mt-5 border border-danger">
        <h1 className="text-center colorfuente">CONOCE NUESTROS PLANES MENSUALES</h1>
        <img className="container " src={LineaSeparado} alt="lineaseparadora" />

  <div className="row mt-3 row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
    <div className="">
    <div className="card text-center">
      <div className="card-body bg-cardpp text-light rounded-3">
        <img src={Plan1} className="img-fluid" alt="plan1" width={150}/>
        <h5 className="card-title">Cachorros</h5>
        <p className="card-text">Servicio para mascotas de 0 a 5 años</p>
        <Link className="btn btn-outline-light rounded-pill " to="/Cachorro">CONSULTAR AHORA</Link>      </div>
    </div>
  </div>
    </div>
    <div className="col order-5">
    <div className="">
    <div className="card text-center">
      <div className="card-body bg-celeste text-light rounded-3">
        <img src={Plan3} className="img-fluid" alt="plan3" width={150}/>
        <h5 className="card-title">Adultos</h5>
        <p className="card-text">Servicio para mascotas de mas de 10 años</p>
        <Link className="btn btn-outline-light rounded-pill " to="/Adultos">CONSULTAR AHORA</Link>
        
      </div>
    </div>
  </div>
    </div>
    <div className="col order-1">
    <div className="">
    <div className="card text-center">
      <div className="card-body bg-cardm text-light rounded-3">
        <img src={Plan2} className="img-fluid" alt="plan2" width={150}/>
        <h5 className="card-title">Madurando</h5>
        <p className="card-text">Servicio para mascotas de 5 a 10 años</p>
       <Link className="btn btn-outline-light rounded-pill " to="/Madurando">CONSULTAR AHORA</Link>
      </div>
    </div>
  </div>
    </div>
  </div>
</div>
    );
};

export default Cardsplanes;