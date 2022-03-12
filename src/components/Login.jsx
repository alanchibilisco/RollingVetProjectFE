import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";
import contacto from "./img/contactoIMG.jpg";
import bcrypt from "bcryptjs/dist/bcrypt";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = ({ user }) => {
  const [logUser, setLogUser] = useState("");
  const [logPass, setLogPass] = useState("");
  const [validated, setValidated] = useState(false);
  let session = false;
  const navigate = useNavigate();
  const gralValidate = () => {
    if (
      bcrypt.compareSync(logUser, user[0].userName) &&
      bcrypt.compareSync(logPass, user[0].pass)
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
      session = true;
      sessionStorage.setItem("stateSession", JSON.stringify(session));
      Swal.fire('Bienvenido "ADMINISTRADOR"!', "RollingVet v.1.0.0", "success");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      e.stopPropagation();
      Swal.fire(
        "Usuario o Contraseña Incorrectos",
        "Vuelva a intentar",
        "error"
      );
    }
    setValidated(true);
  };

  return (
    <div>
      <NavBar />
      <Container className="py-5">
        <h1 className="font-celeste-crud">INICIE SESION</h1>
        <hr />
        <div className="my-5">
          <Form
            className="my-5"
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
          >
            <Row>
              <Col xs={12} md={6} className="my-2">
                <Form.Group className="mb-3" controlId="formBasicUser">
                  <Form.Label className="font-celeste-crud">
                    Nombre de usuario / email
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="RollingUser"
                    onChange={({ target }) => {
                      setLogUser(target.value.trimStart());
                    }}
                    minLength={5}
                    maxLength={5}
                    required
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Ingrese un usuario valido
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPass">
                  <Form.Label className="font-celeste-crud">
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="rollingPass"
                    onChange={({ target }) =>
                      setLogPass(target.value.trimStart())
                    }
                    minLength={7}
                    maxLength={7}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Ingrese una contraseña valida
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="text-end">
                  <button className="btn-celeste-crud">Ingresar</button>
                </div>
              </Col>
              <Col xs={12} md={6} className="my-2">
                <img src={contacto} width="100%" alt="Imagen de contacto"></img>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
