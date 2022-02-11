import React from "react";
import LineaSeparado from "./img/LineaSeparado.png";
import Plan1 from "./img/plan1.png"
import Plan2 from "./img/plan2.png"
import Plan3 from "./img/plan3.png"

const Cardsplanes = () => {
    return(
      <div class="container bg-primary">
        <h1 class="text-center">CONOCE NUESTROS PLANES MENSUALES</h1>
        <img class="container " src={LineaSeparado} alt="lineaseparadora" />

  <div class="row">
    <div class="col">
    <div class="w-100 m-1 col-sm-10 col-md-8 col-lg-8">
    <div class="card text-center">
      <div class="card-body bg-cardpp text-light rounded-3">
        <img src={Plan1} class="img-fluid" alt="plan1" />
        <h5 class="card-title">Primeros Pasos</h5>
        <p class="card-text">Servicio para mascotas de 0 a 5 años</p>
        <button type="button" class="btn btn-outline-light rounded-pill ">CONSULTAR AHORA</button>
      </div>
    </div>
  </div>
    </div>
    <div class="col order-5">
    <div class="w-100 m-1 col-sm-10 col-md-8 col-lg-8">
    <div class="card text-center">
      <div class="card-body bg-celeste text-light rounded-3">
        <img src={Plan3} class="img-fluid" alt="plan3" />
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">Servicio para mascotas de mas de 10 años</p>
        <button type="button" class="btn btn-outline-light rounded-pill ">CONSULTAR AHORA</button>
      </div>
    </div>
  </div>
    </div>
    <div class="col order-1">
    <div class="w-100 m-1 col-sm-12 col-md-6 col-lg-3">
    <div class="card text-center">
      <div class="card-body bg-cardm text-light rounded-3">
        <img src={Plan2} class="img-fluid" alt="plan2" />
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">Servicio para mascotas de 5 a 10 años</p>
        <button type="button" class="btn btn-outline-light rounded-pill ">CONSULTAR AHORA</button>
      </div>
    </div>
  </div>
    </div>
  </div>
</div>
    );
};

export default Cardsplanes;