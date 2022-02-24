import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ListGroup from "react-bootstrap/ListGroup";
import { validateTexto, validateEmail } from "./Validaciones";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
const Madurando = () => {

  const form=useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();   
    if(!validateTexto(form.current.user_name.value.trimStart())||!validateEmail(form.current.user_email.value.trimStart())){
      Swal.fire("Ops!", "Algun dato es incorrecto", "error");
      return;
    } 
    emailjs.sendForm('service_zu85aso', 'template_wenn5tm', form.current, 'user_QppiDb4vLZrsgJIksRfUR')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
       Swal.fire("Consulta enviada!", "Le responderemos a la brevedad", "success");
         
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
  
        <div class="col-md-5 col-sm-12 text-center ">

          <form ref={form} onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
            Ingresa tu Nombre
              </label>
              <input type="text" class="form-control" name="user_name"/>
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
                name="user_email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputMessage" class="form-label">
            Consulta
              </label>
              <input type="text" class="form-control" name="message" defaultValue='Plan mensual "MADURANDO" de 5 a 10 años' />
            </div>
            <div>
            <button class="btn-celeste-serv text-end">
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
