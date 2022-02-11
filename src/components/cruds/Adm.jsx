import React from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardTurnos from "./CardTurnos";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { useState } from "react";
import { useEffect } from "react";

const Adm = ({ turnos }) => {
  return (
    <div className="border border-2 border-warning">
      <NavBar />
      <div className="container">
        <h1 className="text-center my-3">ADMINISTRACION</h1>
        <h3 className="text-center">¡Bienvenido!</h3>
        <h5 className="text-end">RollingVet V:1_0_0</h5>
        <hr />
        <div className="d-flex justify-content-around">
          <Link
            to="/Adm/pacientes"
            className="btn btn-dark text-decoration-none"
          >
            Administrar Pacientes
          </Link>
          <Link to="/Adm/turnos" className="btn btn-dark text-decoration-none">
            Administrar Turnos
          </Link>
        </div>
        <hr />
        <h2 className="text-center bg-dark text-white">Turnos Asignados</h2>
        <hr className="container" />
        {turnos.length !== 0 ? (
          <Row>
            
            {turnos.map((turno) => (
              <Col xl={3} lg={4} md={6} xs={12}>
                <CardTurnos key={turno.id} turno={turno}></CardTurnos>
              </Col>
            ))}
            
            
          </Row>
        ) : (
          <div className="no-products-found d-flex align-items-center justify-content-center">            
            <h1>🐶🐱 No hay turnos asignados 🐱🐶</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Adm;
