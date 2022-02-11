import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import NavBar from "../NavBar";
import Footer from "../Footer";

const CrearPaciente = () => {

  const [nombreDueño, setNombreDueño]=useState('');
  const [apellidoDueño, setApellidoDueño]=useState('');
  const [email, setEmail]=useState('');
  const [telefono, setTelefono]=useState('');
  const [nombreMascota, setNombreMascota]=useState('');
  const [especieMascota, setEspecieMascota]=useState('');
  const [razaMascota, setRazaMascota]=useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  
  return (
    <div>
      <NavBar></NavBar>
      <Container className="py-5">
        <h1>Crear Paciente</h1>
        <hr />
        {/* Form Product */}
        <Form className="my-5" onSubmit={handleSubmit}>
        <h2 className="text-center">Informacion</h2>
        <hr />
          <Row>
            <Col xs={12} md={6}>
              <h3 className="text-center">Dueño</h3>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Rolling"
                    onChange={({ target }) => setNombreDueño(target.value.trimStart())}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Apellido*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Veterinaria"
                  onChange={({ target }) => setApellidoDueño(target.value.trimStart())}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="rollingvet@rollingvet.com.ar"
                  onChange={({ target }) => setEmail(target.value.trimStart())}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Telefono*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+549382869865"
                  onChange={({ target }) => setTelefono(target.value.trimStart())}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="text-center">Mascota</h3>

              <Form.Group className="mb-3" controlId="formBasicNameMasc">
                <Form.Label>Nombre Mascota*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mascota"
                  onChange={({ target }) => setNombreMascota(target.value.trimStart())}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEspecie">
                <Form.Label>Especie*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Especie"
                  onChange={({ target }) => setEspecieMascota(target.value.trimStart())}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaza">
                <Form.Label>Raza*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Raza"
                  onChange={({ target }) => setRazaMascota(target.value.trimStart())}
                />
              </Form.Group>
              
            </Col>
          </Row>

          <div className="text-end">
            <button className="btn btn-dark">Guardar</button>
          </div>
        </Form>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default CrearPaciente;
