import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Swal from "sweetalert2";
import {
  validateTexto,
  validateEmail,
  validateTelefono,
} from "../Validaciones";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CrearPaciente = ({ URLPacientes, getApiPacientes }) => {
  const redirect = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;
  useEffect(() => {
    if (!session) {
      redirect("/");
    }
  }, []);

  const [nombreDueño, setNombreDueño] = useState("");
  const [apellidoDueño, setApellidoDueño] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombreMascota, setNombreMascota] = useState("");
  const [especieMascota, setEspecieMascota] = useState("");
  const [razaMascota, setRazaMascota] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputSName, setInputSName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTel, setInputTel] = useState("");
  const [inputMasc, setInputMasc] = useState("");
  const [inputEsp, setInputEsp] = useState("");
  const [inputRaza, setInputRaza] = useState("");

  useEffect(() => {
    setInputName(document.getElementById("inputName"));
    setInputSName(document.getElementById("inputSName"));
    setInputEmail(document.getElementById("inputEmail"));
    setInputTel(document.getElementById("inputTel"));
    setInputMasc(document.getElementById("inputMasc"));
    setInputEsp(document.getElementById("inputEsp"));
    setInputRaza(document.getElementById("inputRaza"));
  }, []);
  const testName = () => {
    if (validateTexto(inputName.value) && inputName.value.length >= 4) {
      inputName.className = "form-control is-valid";
      return true;
    } else {
      inputName.className = "form-control is-invalid";
      return false;
    }
  };
  const testSName = () => {
    if (validateTexto(inputSName.value) && inputSName.value.length >= 2) {
      inputSName.className = "form-control is-valid";
      return true;
    } else {
      inputSName.className = "form-control is-invalid";
      return false;
    }
  };
  const testEmail = () => {
    if (validateEmail(inputEmail.value)) {
      inputEmail.className = "form-control is-valid";
      return true;
    } else {
      inputEmail.className = "form-control is-invalid";
      return false;
    }
  };
  const testTel = () => {
    if (validateTelefono(inputTel.value) && inputTel.value.length >= 7) {
      inputTel.className = "form-control is-valid";
      return true;
    } else {
      inputTel.className = "form-control is-invalid";
      return false;
    }
  };
  const testMasc = () => {
    if (validateTexto(inputMasc.value) && inputMasc.value.length >= 4) {
      inputMasc.className = "form-control is-valid";
      return true;
    } else {
      inputMasc.className = "form-control is-invalid";
      return false;
    }
  };
  const testEsp = () => {
    if (validateTexto(inputEsp.value) && inputEsp.value.length >= 4) {
      inputEsp.className = "form-control is-valid";
      return true;
    } else {
      inputEsp.className = "form-control is-invalid";
      return false;
    }
  };
  const testRaza = () => {
    if (validateTexto(inputRaza.value) && inputRaza.value.length >= 4) {
      inputRaza.className = "form-control is-valid";
      return true;
    } else {
      inputRaza.className = "form-control is-invalid";
      return false;
    }
  };

  const navigate = useNavigate();
  const gralValidate = () => {
    if (
      validateTexto(nombreDueño) &&
      validateTexto(apellidoDueño) &&
      validateEmail(email) &&
      validateTelefono(telefono) &&
      validateTexto(nombreMascota) &&
      validateTexto(especieMascota) &&
      validateTexto(razaMascota)
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (gralValidate()) {
      const newPaciente = {
        nombreDueño,
        apellidoDueño,
        email,
        telefono,
        nombreMascota,
        especieMascota,
        razaMascota,
      };

      Swal.fire({
        title: "Estas Seguro?",
        text: "No puedes revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Guardar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await fetch(URLPacientes, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newPaciente),
            });
            if (res.status === 201) {
              Swal.fire("Creado!", "El paciente fue creado.", "success");
              getApiPacientes();
              navigate("/Adm/pacientes");
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    } else {
      Swal.fire(
        "Ops!",
        "Debe completar todos los campos correctamente",
        "error"
      );
      testName();
      testSName();
      testEmail();
      testTel();
      testMasc();
      testEsp();
      testRaza();
    }
  };
  return (
    <div>
      <NavBar></NavBar>
      <Container className="py-5">
        <h1 className="font-celeste-crud">Crear Paciente</h1>
        <hr />
        {/* Form Product */}
        <Form className="my-5" onSubmit={handleSubmit} noValidate>
          <h2 className="text-center font-celeste-crud">Informacion</h2>
          <hr />
          <Row>
            <Col xs={12} md={6}>
              <h3 className="text-center font-celeste-crud">Dueño</h3>

              <Form.Group className="mb-3">
                <Form.Label className="font-celeste-crud" htmlFor="inputName">
                  Nombre*
                </Form.Label>
                <Form.Control
                  required
                  id="inputName"
                  type="text"
                  placeholder="Rolling"
                  minLength={4}
                  maxLength={60}
                  onChange={({ target }) => {
                    setNombreDueño(target.value.trimStart());
                    testName();
                  }}
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese su Nombre (min. 4 caracteres, max. 60 caracteres, SOLO
                  LETRAS)
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="font-celeste-crud" htmlFor="inputSName">
                  Apellido*
                </Form.Label>
                <Form.Control
                  required
                  id="inputSName"
                  type="text"
                  placeholder="Veterinaria"
                  minLength={2}
                  maxLength={60}
                  onChange={({ target }) => {
                    setApellidoDueño(target.value.trimStart());
                    testSName();
                  }}
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese su Apellido (min. 2 caracteres, max. 60 caracteres,
                  SOLO LETRAS)
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="font-celeste-crud" htmlFor="inputEmail">
                  Email*
                </Form.Label>
                <Form.Control
                  required
                  id="inputEmail"
                  type="email"
                  placeholder="rollingvet@rollingvet.com.ar"
                  onChange={({ target }) => {
                    setEmail(target.value.trimStart());
                    testEmail();
                  }}
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese un email valido
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="font-celeste-crud" htmlFor="inputTel">
                  Telefono*
                </Form.Label>
                <Form.Control
                  required
                  id="inputTel"
                  type="tel"
                  placeholder="3816000000"
                  minLength={7}
                  maxLength={20}
                  onChange={({ target }) => {
                    setTelefono(target.value.trimStart());
                    testTel();
                  }}
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese un numero de telefono valido
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="text-center font-celeste-crud">Mascota</h3>

              <Form.Group className="mb-3">
                <Form.Label className="font-celeste-crud" htmlFor="inputMasc">
                  Nombre Mascota*
                </Form.Label>
                <Form.Control
                  required
                  id="inputMasc"
                  type="text"
                  placeholder="Mascota"
                  minLength={3}
                  maxLength={50}
                  onChange={({ target }) => {
                    setNombreMascota(target.value.trimStart());
                    testMasc();
                  }}
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese un Nombre (min. 3 caracteres, max. 50 caracteres, SOLO
                  LETRAS)
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="font-celeste-crud" htmlFor="inputEsp">
                  Especie*
                </Form.Label>
                <Form.Control
                  required
                  id="inputEsp"
                  type="text"
                  placeholder="Especie"
                  minLength={3}
                  maxLength={50}
                  onChange={({ target }) => {
                    setEspecieMascota(target.value.trimStart());
                    testEsp();
                  }}
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese una Especie (min. 3 caracteres, max. 50 caracteres,
                  SOLO LETRAS)
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="font-celeste-crud" htmlFor="inputRaza">
                  Raza*
                </Form.Label>
                <Form.Control
                  required
                  id="inputRaza"
                  type="text"
                  placeholder="Raza"
                  minLength={3}
                  maxLength={50}
                  onChange={({ target }) => {
                    setRazaMascota(target.value.trimStart());
                    testRaza();
                  }}
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese una Raza (min. 3 caracteres, max. 50 caracteres, SOLO
                  LETRAS)
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-end">
            <button className="btn-celeste-crud text-center mx-1">
              Guardar
            </button>
            <Link
              to="/Adm/pacientes"
              className="btn-red-crud text-decoration-none text-center mx-1"
            >
              Cancelar
            </Link>
          </div>
        </Form>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default CrearPaciente;
