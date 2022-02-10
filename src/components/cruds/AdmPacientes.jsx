import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from '../Footer';
import NavBar from '../NavBar';
import Paciente from "./Paciente";

const AdmPacientes = () => {
  return (
      
    <div>
        <NavBar></NavBar>
      <div>
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-between">
            <h1>Administrador de Pacientes</h1>
            <Link
              to="/Adm/pacientes/crear"
              className=" btn btn-dark text-decoration-none text-center"
            >
              Agregar Paciente
            </Link>
          </div>
          <hr />
          {/* Table of products */}

          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Nombre Mascota</th>
                <th>Especie</th>
                <th>Raza</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
                {/* esto tiene que ir en paciente */}
              {/* <tr>
                <td>idEj</td>
                <td>ExampleName</td>
                <td>ExampleLastName</td>
                <td>Telefono</td>
                <td>Mascota</td>
                <td>Perro</td>
                <td>Mestizo</td>
                <td className="w-25">
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/*"
                      className=" btn btn-dark mx-1 text-decoration-none text-center"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-dark mx-1"                      
                    >
                      Borrar
                    </button>
                  </div>
                </td>
              </tr> */}
              <Paciente></Paciente>
            </tbody>
          </Table>

          <div className="no-products-found d-flex align-items-center justify-content-center">
            {/* No products found message */}
            <h1>🐶🐱 No hay pacientes registrados 🐶🐱</h1>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AdmPacientes;
