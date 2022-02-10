import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Turno from './Turno';

const AdmTurnos = ({turnos}) => {
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
              {turnos.map((turno)=>(
                  <Turno turno={turno} key={turno.id}></Turno>
              ))}
              
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