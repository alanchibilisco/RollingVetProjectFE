import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import background from "./img/contactoIMG.jpg";
import { useNavigate } from "react-router-dom";
import { validateTextoEsp, validateEmail, validateTexto } from "./Validaciones";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Form } from "react-bootstrap";

const Contacto = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [validated, setValidated]=useState(false);

  const gralValidate = () => {
    if (
      validateTexto(form.current.user_name.value.trimStart()) &&
      validateEmail(form.current.user_email.value.trimStart()) && validateTextoEsp(form.current.message.value.trimStart())
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
    <div>      
      <div style={{ backgroundImage: `url(${background})` }}>
        <NavBar />
        <div className="container ">
          <h1 className="text-center mt-3 text-light ">Contacto</h1>
          <hr className="text-light" />
          <article className="row">
            <div className="col-sm-12 col-md-6 mt-4">
              <Form ref={form} onSubmit={handleSubmit} noValidate validated={validated}>
                <div className="mb-3">
                  <label htmlFor="inputUser" className="form-label text-white">
                    Ingresa tu Nombre
                  </label>
                  <input
                  required
                    type="text"
                    className="form-control"
                    name="user_name"
                    placeholder="RollingVet"
                    id="inputUser"
                    minLength={4}
                    maxLength={60}                    
                  />
                  <Form.Control.Feedback type="invalid" className=" bg-white fw-bold">
                Ingrese su Nombre y Apellido (min. 4 caracteres, max. 60
                caracteres, SOLO LETRAS)
              </Form.Control.Feedback>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="inputEmail"
                    className="form-label text-white"
                  >
                    Ingresa tu Email
                  </label>
                  <input
                  required
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    name="user_email"
                    placeholder="rollingvetproject@gmail.com"
                  />
                  <Form.Control.Feedback type="invalid" className="bg-white fw-bold">
                Ingrese un email valido
              </Form.Control.Feedback>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="inputMessage"
                    className="form-label text-white"
                  >
                    Consulta
                  </label>
                  <textarea
                  required
                    type="text"
                    minLength={4}
                    maxLength={500}
                    rows="5"
                    className="form-control"
                    name="message"
                    placeholder="ingrese su consulta aqui"
                    id="inputMessage"
                  />
                  <Form.Control.Feedback type="invalid" className=" bg-white fw-bold">
                Ingrese su consulta (min. 4 caracteres, max. 500)
              </Form.Control.Feedback>
                </div>
                <div className="text-center">
                  <button className="btn-celeste-serv text-end">CONSULTAR</button>
                </div>
              </Form>
            </div>
            <div className="col-sm-12 col-md-6 mb-6 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370777457!2d-65.2093904844119!3d-26.836696096502912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1631390004391!5m2!1ses-419!2sar"
                height="450"
                className="w-100 mapa p-3"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </article>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contacto;
