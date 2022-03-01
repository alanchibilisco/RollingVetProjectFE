import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { validateTexto, validateEmail } from "./Validaciones";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import madurando from "./img/PlanMadurando.jpg"

const Madurando = () => {
  const navigate = useNavigate();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateTexto(form.current.user_name.value.trimStart()) ||
      !validateEmail(form.current.user_email.value.trimStart())
    ) {
      Swal.fire("Ops!", "Algun dato es incorrecto", "error");
      return;
    }
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
  };

  return (
    <>
      <NavBar />
      <div className="imgM container-fluid">
        <div className="p-5 container">
          <div className="d-flex justify-content-evenly flex-container">
            <ul className="list-group text-center">
              <h2 className="text-light display-6">Madurando</h2>
              <h5 className="text-light ">Cobertura y Servicios</h5>
              <li className="list-group-item rounded-pill">Consultas de Urgencias las 24hs</li>
              <li className="rounded-pill text-center m-2 text-light estlist">Consultas Domiciliarias</li>
              <li className="list-group-item rounded-pill">Vacunas</li>
              <li className="rounded-pill text-center m-2 text-light estlist">Analisis Clinicos</li>
              <li className="list-group-item rounded-pill">Diagnostico por Imagenes</li>
              <li className="rounded-pill text-center m-2 text-light estlist">Cirugias</li>
              <li className="list-group-item rounded-pill">Castracion</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h4 className="text-center colorfuente">Solicitar informacion completa del Plan</h4>
      <div className="d-flex justify-content-center">
        <div class="col-md-5 col-sm-12 text-center ">

          <form ref={form} onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputName" class="form-label" >
                Ingresa tu Nombre
              </label>
              <input type="text" class="form-control" name="user_name" placeholder="RollingVet" id="exampleInputName" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail" class="form-label">
                Ingresa tu Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="user_email"
                placeholder="rollingvetproject@gmail.com"
                id="exampleInputEmail"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputMessage" class="form-label">
                Consulta
              </label>
              <input
                type="text"                
                class="form-control"
                name="message"
                defaultValue='Plan mensual "MADURANDO" de 5 a 10 años'
                
              />
            </div>
            <div>
              <button class="btn-celeste-serv text-end">CONSULTAR</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Madurando;
