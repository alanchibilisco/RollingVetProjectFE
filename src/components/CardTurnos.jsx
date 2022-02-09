import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardTurnos = () => {
  return (
    <div>
      <Card className="my-4 bg-warning">
        <Card.Img className="img-fluid" variant="top" src="" />
        <Card.Body>
          <div className="d-flex align-items-center justify-content-center mb-2">
            <Card.Title className="m-0 text-truncate fw-bold">MASCOTA</Card.Title>            
          </div>
          <Card.Text>VETERINARIO</Card.Text>
          <Card.Text>DETALLE DE CITA</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <span className="badge bg-dark fs-6">09/02/2022</span>
            <span className="badge bg-dark fs-6">18:00</span>
            
          </div>
          <Link
              to="*"
              className=" btn btn-dark text-white text-decoration-none my-2"
            >
              Borrar
            </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardTurnos;
