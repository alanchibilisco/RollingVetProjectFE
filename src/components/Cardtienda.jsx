import React from 'react';
import LineaSeparado from "./img/LineaSeparado.png";
import Comedero from "./img/comedero.png"
import Hueso from "./img/hueso.png"
import Juguetes from "./img/juguetes.png"

const Cardtienda = () => {
    return (
      <div class="container mt-5 bg-danger">
        <h1 class="text-center">NUESTRA TIENDA</h1>
        <img class="container " src={LineaSeparado} alt="lineaseparadora" />

      <div class="row mx-auto">
    <div class="col">
    <div class="m-1 col-sm-12 col-md-10 col-lg-8">
    <div class="card text-center border-celeste">
      <div class="card-body rounded-3">
        <img src={Comedero} class="img-fluid" alt="" />
        <h5 class="card-title">Comedero</h5>
        <p class="card-text"></p>
        <button type="button" class="btn btn-outline-celeste rounded-pill ">CONSULTAR AHORA</button>
      </div>
    </div>
  </div>
    </div>
    <div class="col order-5">
    <div class=" m-1 col-sm-12 col-md-10 col-lg-8">
    <div class="card text-center border-celeste">
      <div class="card-body rounded-3">
        <img src={Juguetes} class="img-fluid" alt="perro" />
        <h5 class="card-title">Juguetes</h5>
        <p class="card-text"></p>
        <button type="button" class="btn btn-outline-celeste rounded-pill ">CONSULTAR AHORA</button>
      </div>
    </div>
  </div>
    </div>
    <div class="col order-1">
    <div class=" m-1 col-sm-12 col-md-10 col-lg-8">
    <div class="card text-center border-celeste">
      <div class="card-body rounded-3">
        <img src={Hueso} class="img-fluid" alt="" />
        <h5 class="card-title">Alimento</h5>
        <p class="card-text"></p>
        <button type="button" class="btn btn-outline-celeste rounded-pill ">CONSULTAR AHORA</button>
      </div>
    </div>
  </div>
    </div>
  </div>
  </div>
    );
};

export default Cardtienda;