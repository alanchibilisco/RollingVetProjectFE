import React, { useRef } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ListGroup from "react-bootstrap/ListGroup";
import { validateTexto, validateEmail } from "./Validaciones";
import Swal from "sweetalert2";

const Cachorro = ({sendEmail}) => {

  const userRef=useRef('');
  const emailRef=useRef('');  

  

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!validateTexto(userRef.current.value.trimStart())||!validateEmail(emailRef.current.value.trimStart())){
      Swal.fire("Ops!", "Algun dato es incorrecto", "error");
      return;
    }else{
      const form={
        user_name: userRef.current.value.trimStart(),
        user_email: emailRef.current.value.trimStart(),
        message: 'Plan mensual Cahorros de 0 a 5 años'
      };
      sendEmail(form);
      Swal.fire("Consulta enviada!", "Le responderemos a la brevedad", "success");
    }    
  }

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
              <input type="text" class="form-control" ref={userRef}/>
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
                ref={emailRef}
              />
            </div>
            <div>
            <button type="submit" class="btn-celeste-serv text-end" onClick={handleSubmit}>
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

export default Cachorro;