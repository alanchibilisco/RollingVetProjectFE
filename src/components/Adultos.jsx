import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { validateTexto, validateEmail } from "./Validaciones";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const Adultos = () => {
  const [validated, setValidated]=useState(false);
  const navigate = useNavigate();
  const form = useRef();

  const gralValidate = () => {
    if (
      validateTexto(form.current.user_name.value.trimStart()) &&
      validateEmail(form.current.user_email.value.trimStart())
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Form=e.currentTarget;
    if (Form.checkValidity()!==false&&gralValidate()) {
      emailjs
      .sendForm(
        "service_zu85aso",
        "template_wenn5tm",
        form.current,
        "user_QppiDb4vLZrsgJIksRfUR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire("Consulta enviada!", "Le responderemos a la brevedad", "success");
    navigate("/");
    }else{
      e.stopPropagation();
      Swal.fire("Ops!", "Algun dato es incorrecto", "error");      
    }
    setValidated(true);
  };

  return (
    <>    
      <NavBar />
      <div className="imgA container-fluid">
        <div className="p-5 container">
          <div className="d-flex justify-content-evenly flex-container">
            <ul className="list-group text-center">
              <h2 className="colorfuente display-6">Adultos</h2>
              <h5 className="colorfuente ">Cobertura y Servicios</h5>
              <li className="list-group-item rounded-pill">
                Consultas de Urgencias las 24hs
              </li>
              <li className="rounded-pill text-center m-2 colorfuente estlist">
                Consultas Domiciliarias
              </li>
              <li className="list-group-item rounded-pill">Vacunas</li>
              <li className="rounded-pill text-center m-2 colorfuente estlist">
                Analisis Clinicos
              </li>
              <li className="list-group-item rounded-pill">
                Diagnostico por Imagenes
              </li>
              <li className="rounded-pill text-center m-2 colorfuente estlist">
                Cirugias
              </li>
              <li className="list-group-item rounded-pill">Castracion</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h4 className="text-center colorfuente">
        Solicitar informacion completa del Plan
      </h4>
      <div className="d-flex justify-content-center">
        <div class="col-md-5 col-sm-12 text-center ">
          <Form ref={form} onSubmit={handleSubmit} noValidate validated={validated}>
            <div class="mb-3">
              <label for="exampleInputName" class="form-label">
                Ingresa tu Nombre
              </label>
              <input
              required
                type="text"
                class="form-control"
                name="user_name"
                placeholder="RollingVet"
                id="exampleInputName"
                minLength={4}
                maxLength={60}
              />
              <Form.Control.Feedback type="invalid">Ingrese su Nombre y Apellido (min. 4 caracteres, max. 60
                caracteres, SOLO LETRAS)</Form.Control.Feedback>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail" class="form-label">
                Ingresa tu Email
              </label>
              <input
              required
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="user_email"
                placeholder="rollingvetproject@gmail.com"                
              />
              <Form.Control.Feedback type="invalid">Ingrese un email valido</Form.Control.Feedback>
            </div>
            <div class="mb-3">
              <label for="exampleInputMessage" class="form-label">
                Consulta
              </label>
              <input
                type="text"
                class="form-control"
                name="message"
                defaultValue='Plan Mensual "ADULTOS" de mas de 10 años'
                readOnly
              />
            </div>
            <div>
              <button class="btn-celeste-serv text-end">CONSULTAR</button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Adultos;
