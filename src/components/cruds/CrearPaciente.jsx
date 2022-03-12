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
  const [validated, setValidated] = useState(false);

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
    const form = e.currentTarget;
    if (form.checkValidity() !== false && gralValidate()) {
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
      e.stopPropagation();
      Swal.fire("Ops!", "Algunos de los campos es incorrectos", "error");
    }
    setValidated(true);
  };
  return (
    <div>
      <NavBar></NavBar>
      <Container className="py-5">
        <h1 className="font-celeste-crud">Crear Paciente</h1>
        <hr />
        {/* Form Product */}
        <Form
          className="my-5"
          onSubmit={handleSubmit}
          noValidate
          validated={validated}
        >
          <h2 className="text-center font-celeste-crud">Informacion</h2>
          <hr />
          <Row>
            <Col xs={12} md={6}>
              <h3 className="text-center font-celeste-crud">Dueño</h3>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="font-celeste-crud">Nombre*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Rolling"
                  minLength={4}
                  maxLength={100}
                  onChange={({ target }) =>
                    setNombreDueño(target.value.trimStart())
                  }
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese su Nombre (min. 4 caracteres, max. 100 caracteres,
                  SOLO LETRAS)
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label className="font-celeste-crud">Apellido*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Veterinaria"
                  minLength={4}
                  maxLength={100}
                  onChange={({ target }) =>
                    setApellidoDueño(target.value.trimStart())
                  }
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese su Apellido (min. 4 caracteres, max. 100 caracteres,
                  SOLO LETRAS)
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="font-celeste-crud">Email*</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="rollingvet@rollingvet.com.ar"
                  minLength={12}
                  maxLength={100}
                  onChange={({ target }) => setEmail(target.value.trimStart())}
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese un email valido
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label className="font-celeste-crud">Telefono*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="3816000000"
                  minLength={7}
                  maxLength={20}
                  onChange={({ target }) =>
                    setTelefono(target.value.trimStart())
                  }
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese un numero de telefono valido
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="text-center font-celeste-crud">Mascota</h3>

              <Form.Group className="mb-3" controlId="formBasicNameMasc">
                <Form.Label className="font-celeste-crud">
                  Nombre Mascota*
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Mascota"
                  minLength={3}
                  maxLength={50}
                  onChange={({ target }) =>
                    setNombreMascota(target.value.trimStart())
                  }
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese un Nombre (min. 3 caracteres, max. 50 caracteres, SOLO
                  LETRAS)
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEspecie">
                <Form.Label className="font-celeste-crud">Especie*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Especie"
                  minLength={3}
                  maxLength={50}
                  onChange={({ target }) =>
                    setEspecieMascota(target.value.trimStart())
                  }
                />
                <Form.Control.Feedback type="invalid" className="fw-bold">
                  Ingrese una Especie (min. 3 caracteres, max. 50 caracteres,
                  SOLO LETRAS)
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaza">
                <Form.Label className="font-celeste-crud">Raza*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Raza"
                  minLength={3}
                  maxLength={50}
                  onChange={({ target }) =>
                    setRazaMascota(target.value.trimStart())
                  }
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
