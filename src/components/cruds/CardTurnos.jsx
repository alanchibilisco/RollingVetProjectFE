import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardTurnos = ({turno}) => {
  return (
    <div>
      <Card className="my-4">
        <Card.Img className="img-fluid" variant="top" src="" />
        <Card.Body>
          <div className="d-flex align-items-center justify-content-center mb-2">
            <Card.Title className="m-0 text-truncate fw-bold">Mascota: {turno.mascota}</Card.Title>            
          </div>
          <Card.Text><span className="fw-bold">Veterinario:</span> {turno.veterinario}</Card.Text>
          <Card.Text><span className="fw-bold">Detalle Cita:</span> {turno.detalleCita}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <span className="badge bg-dark fs-6">{turno.fecha}</span>
            <span className="badge bg-dark fs-6">{turno.hora}</span>
            
          </div>
          {/* <Link
              to="*"
              className=" btn btn-dark text-white text-decoration-none my-2"
            >
              Borrar
            </Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardTurnos;
