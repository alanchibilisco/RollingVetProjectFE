import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';

const AdmTurnos = () => {
    return (
        <div>
            <NavBar></NavBar>
            
            <div>
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-between">
            <h1>Administrador de turnos</h1>
            <Link
              to="/Adm/turnos/crear"
              className=" btn btn-dark text-decoration-none text-center"
            >
              Agregar Turno
            </Link>
          </div>
          <hr />
          {/* Table of products */}

          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>Mascota</th>
                <th>Veterinario</th>
                <th>Detalle de cita</th>
                <th>Fecha</th>
                <th>Hora</th>        
                <th>Acciones</th>        
              </tr>
            </thead>
            <tbody>
                {/* esto tiene que ir en turno */}
              <tr>
                <td>Mascota</td>
                <td>Veterinario</td>
                <td>Detalle Cita</td>
                <td>Fecha</td>
                <td>Hora</td>                
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
              </tr>
              
            </tbody>
          </Table>

          <div className="no-products-found d-flex align-items-center justify-content-center">
            {/* No products found message */}
            <h1>🐶🐱 No hay turnos registrados 🐶🐱</h1>
          </div>
        </Container>
      </div>




            <Footer></Footer>
        </div>
    );
};

export default AdmTurnos;