import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


const Cardtienda = () => {
    return (
      <div class="container mt-5">
        <h1 class="text-center">NUESTRA TIENDA</h1>
      <div class="row">
    <div class="col">
    <div class="m-1 col-sm-10 col-md-8 col-lg-8">
    <div class="card text-center">
      <div class="card-body  rounded-3">
        <img src="https://images.vexels.com/media/users/3/144928/isolated/lists/ebbccaf76f41f7d83e45a42974cfcd87-ilustracion-de-perro.png" alt="" />
        <h5 class="card-title">Comedero</h5>
        <p class="card-text"></p>
        <button type="button" class="btn btn-outline-celeste rounded-pill ">CONSULTAR AHORA</button>
      </div>
    </div>
  </div>
    </div>
    <div class="col order-5">
    <div class=" m-1 col-sm-10 col-md-8 col-lg-8">
    <div class="card text-center">
      <div class="card-body rounded-3">
        <img src="https://images.vexels.com/media/users/3/144928/isolated/lists/ebbccaf76f41f7d83e45a42974cfcd87-ilustracion-de-perro.png" alt="perro" />
        <h5 class="card-title">Juguetes</h5>
        <p class="card-text"></p>
        <button type="button" class="btn btn-outline-celeste rounded-pill ">CONSULTAR AHORA</button>
      </div>
    </div>
  </div>
    </div>
    <div class="col order-1">
    <div class=" m-1 col-sm-10 col-md-8 col-lg-8">
    <div class="card text-center">
      <div class="card-body rounded-3">
        <img src="https://images.vexels.com/media/users/3/144928/isolated/lists/ebbccaf76f41f7d83e45a42974cfcd87-ilustracion-de-perro.png" alt="" />
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