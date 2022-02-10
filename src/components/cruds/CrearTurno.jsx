import React from "react";
import { Container, Form } from "react-bootstrap";
import Footer from "../Footer";
import NavBar from "../NavBar";

const CrearTurno = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Container className="py-5">
        <h1>Agregar Turno</h1>
        <hr />
        <Form className="my-5">
          <Form.Group className="mb-3" controlId="formBasicMascota">
            <Form.Label>Mascota*</Form.Label>
            <Form.Control type="text" placeholder="Mascota"></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicVeterinario">
            <Form.Label>Veterinario*</Form.Label>
            <Form.Control type="text" placeholder="Veterinario"></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDetalle">
            <Form.Label>Detalle de Cita*</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Mascota"
              style={{ height: "100px" }}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFecha">
            <Form.Label>Fecha (Lun a Vie)*</Form.Label>
            <Form.Control type="date" placeholder="21/02/2022"></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicHora">
            <Form.Label>Hora (08 a 17)*</Form.Label>
            <Form.Control type="time" placeholder="08:00"></Form.Control>
          </Form.Group>

          <div className="text-end">
            <button className="btn btn-dark">Guardar</button>
          </div>
          
        </Form>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default CrearTurno;
