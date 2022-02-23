import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ListGroup from "react-bootstrap/ListGroup";

const Madurando = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row mt-3 row row-cols-1 row-cols-md-3 g-4">
          <div className="col-sm-12">
            <img
              src="https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              width={350}
            />
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <h1>Madurando</h1>
              <h3>Coberturas y Servicios</h3>
              <ListGroup>
                <ListGroup.Item className="rounded-pill">
                  Consultas de Urgencias las 24hs
                </ListGroup.Item>
                <ListGroup.Item className="rounded-pill">
                  Consultas Domiciliarias
                </ListGroup.Item>
                <ListGroup.Item className="rounded-pill">
                  Vacunas
                </ListGroup.Item>
                <ListGroup.Item className="rounded-pill">
                  Analisis Clinicos
                </ListGroup.Item>
                <ListGroup.Item className="rounded-pill">
                  Diagnostico por imagenes
                </ListGroup.Item>
                <ListGroup.Item className="rounded-pill">
                  Cirugias
                </ListGroup.Item>
                <ListGroup.Item className="rounded-pill">
                  Castracion
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
        <hr />
           <h4 className="text-center">Solicitar informacion completa del Plan</h4>
        <div className="d-flex justify-content-center">
  
        <div class="col-3 text-center ">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
            Ingresa tu Nombre
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
              Ingresa tu Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div>
            <button type="submit" class="btn-celeste-serv text-end">
              CONSULTAR
            </button>
            </div>
          </form>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Madurando;
