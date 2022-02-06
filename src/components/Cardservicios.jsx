import React from "react";
import perrocard from "./img/perrocard.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Cardservicios = () => {
  return (
    <div class="container-fluid text-end">
      <h1 class="text-center">SERVICIOS</h1>
      <CardGroup>
        <Card border="light">
          <h3>Peluqueria</h3>
          <p>
            Tu mascota esta en las mejores manos, con nosotros, deja que tu
            mejor amigo reciba la mejor atencion{" "}
          </p>
          <h3>Guardia Veterinaria</h3>
          <p>Urgencias las 24 horas</p>
        </Card>

        <Card border="light">
          <Card.Img className="" variant="top" src={perrocard} />
        </Card>

        <Card border="light">
          <h3>Odontologia Veterinaria</h3>
          <p>
            Cuidar los dientes de tu mascota es muy importante para ayudar a
            mantener su salud general
          </p>
          <h3>Rayos X</h3>
          <p>Los mejores equipos de RX para el uso veterinario</p>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Cardservicios;
