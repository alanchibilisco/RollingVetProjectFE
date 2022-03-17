import React from "react";
import perrocard from "./img/perrocard.png";
import LineaSeparado from "./img/LineaSeparado.png";
import { Link } from "react-router-dom";

const Cardservicios = () => {
  return (
    <div className="container">
      <h1 className="colorfuente text-center">CONOCE NUESTROS SERVICIOS</h1>
      <img src={LineaSeparado} alt="linea" width="100%"/>
  <div className="row align-items-center">
    <div className="col order-last text-center">
    <h3 className="colorfuente">Odontologia Veterinaria</h3>
          <p className="colorfuente">
            Cuidar los dientes de tu mascota es muy importante para ayudar a
            mantener su salud general
          </p>
          <div >
            <Link to="/*" className="btn-celeste-serv text-decoration-none text-end">Ver Mas</Link>
          </div>
          <h3 className="colorfuente">Rayos X</h3>
          <p className="colorfuente">
            Los mejores equipos de RX para el uso veterinario
          </p>
          <div >
            <Link to="/*" className="btn-celeste-serv text-decoration-none text-end">Ver Mas</Link>
          </div>
    </div>
    <div className="col-lg text-center">
      <img src={perrocard} alt="perro" className="img-serv"/>
    </div>
    <div className="col text-center">
    <h3 className="colorfuente">Peluqueria</h3>
          <p className="colorfuente">
            Tu mascota esta en las mejores manos, con nosotros, deja que tu
            mejor amigo reciba la mejor atencion{" "}
          </p>
          <div >
            <Link to="/*" className="btn-celeste-serv text-decoration-none text-end">Ver Mas</Link>
          </div>
          <h3 className="colorfuente">Guardia Veterinaria</h3>
          <p className="colorfuente">Urgencias las 24 horas</p>
          <div >
            <Link to="/*" className="btn-celeste-serv text-decoration-none text-end">Ver Mas</Link>
          </div>
    </div>
  </div>
</div>
  );
};

export default Cardservicios;
