import React from "react";
import { Card } from "react-bootstrap";

const CardTurnos = ({turno}) => {  
  const newStr=(turno.startDate).slice(0,turno.startDate.length-1);  
  const date=new Date(newStr);
  const textDate=date.toLocaleString();  
  return (
    <div>
      <Card className="my-4">
        
        <Card.Body>
          <div className="d-flex align-items-center justify-content-center mb-2">
            <Card.Title className="m-0 fw-bold">{turno.mascota}</Card.Title>            
          </div>
          <Card.Text><span className="fw-bold">Veterinario:</span> {turno.veterinario}</Card.Text>
          <Card.Text><span className="fw-bold">Detalle Cita:</span> {turno.detalleCita}</Card.Text>
          <div className="d-flex align-items-center justify-content-center">
            <span className="badge bg-celeste-crud fs-6">{textDate}</span>                      
          </div>         
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardTurnos;
