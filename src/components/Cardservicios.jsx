import React from "react";
import perrocard from "./img/perrocard.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import LineaSeparado from "./img/LineaSeparado.png";

const Cardservicios = () => {
  return (
    <div class="container text-end bg-warning">
      <h1 class="text-center mt-4">SERVICIOS</h1>
<img class="container-fluid m-4" src={LineaSeparado} alt="lineaseparadora" />
      <CardGroup>
        <Card border="light">
          <h3>Peluqueria</h3>
          <p>
            Tu mascota esta en las mejores manos, con nosotros, deja que tu
            mejor amigo reciba la mejor atencion{" "}
          </p>
          <button type="button" class="text-end btn btn-outline-primary rounded-pill">Primary</button>
          <h3>Guardia Veterinaria</h3>
          <p>Urgencias las 24 horas</p>
          <button type="button" class="text-end btn btn-outline-primary rounded-pill">Primary</button>
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
          <button type="button" class="text-end btn btn-outline-primary rounded-pill">Primary</button>
          <h3>Rayos X</h3>
          <p>Los mejores equipos de RX para el uso veterinario</p>
          <button type="button" class="text-end btn btn-outline-primary rounded-pill">Primary</button>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Cardservicios;
