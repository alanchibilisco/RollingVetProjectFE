import React from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CardTurnos from "./CardTurnos";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Adm = ({ turnos }) => {
  const navigate = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;
  if (!session) {
    navigate("/");
  }
  // } else {
  //   Swal.fire("Bienvenido!", "RollingVet V.1.0.0", "success");
  // }
  //Ordeno el array en funcion a la fechas
  const sortTurnos = turnos;
  sortTurnos.sort((a, b) => {
    const as = a.startDate;
    const ad = new Date(as);
    const bs = b.startDate;
    const bd = new Date(bs);
    return ad - bd;
  });
  //Fin orden array
  const arrayMolinari = sortTurnos.filter(
    (turno) => turno.veterinario === "Molinari Pablo"
  );
  const arrayKuc = sortTurnos.filter(
    (turno) => turno.veterinario === "Kuc Damian"
  );

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1 className="text-center my-3 font-celeste-crud">ADMINISTRACION</h1>
        <h3 className="text-center font-celeste-crud">¡Bienvenido!</h3>
        <h5 className="text-end fs-6">RollingVet V:1-0-0</h5>
        <hr />
        <div className="d-flex justify-content-around">
          <Link
            to="/Adm/pacientes"
            className="btn-celeste-crud text-decoration-none"
          >
            Administrar Pacientes
          </Link>
          <Link
            to="/Adm/turnos"
            className="btn-celeste-crud text-decoration-none"
          >
            Administrar Turnos
          </Link>
        </div>
        <hr />
        <h2 className="text-center bg-celeste-crud text-white">
          Turnos Asignados
        </h2>
        <hr className="container" />
        <h3 className="text-center bg-celeste-crud text-white">
          Turnos Dr. Molinari
        </h3>
        <hr className="container" />
        {arrayMolinari.length !== 0 ? (
          <Row>
            {arrayMolinari.map((turno) => (
              <Col xl={3} lg={4} md={6} xs={12} key={turno.id}>
                <CardTurnos turno={turno}></CardTurnos>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1>🐶🐱 No hay turnos asignados 🐱🐶</h1>
          </div>
        )}
        <hr className="container" />
        <h3 className="text-center bg-celeste-crud text-white">
          Turnos Dr. Kuc
        </h3>
        <hr className="container" />
        {arrayKuc.length !== 0 ? (
          <Row>
            {arrayKuc.map((turno) => (
              <Col xl={3} lg={4} md={6} xs={12} key={turno.id}>
                <CardTurnos turno={turno}></CardTurnos>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1>🐶🐱 No hay turnos asignados 🐱🐶</h1>
          </div>
        )}
        <hr className="container" />
      </div>
      <Footer />
    </div>
  );
};

export default Adm;
