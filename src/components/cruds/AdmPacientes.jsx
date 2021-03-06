import React from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from '../Footer';
import NavBar from '../NavBar';
import Paciente from "./Paciente";

const AdmPacientes = ({pacientes, URLPacientes, getApiPacientes}) => {
  const navigate = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;
  useEffect(()=>{
    if (!session) {
      navigate("/");
    }
  },[]);
  
  return (
      
    <div>
        <NavBar></NavBar>
      <div>
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-between font-celeste-crud">
            <h1>Administrador de Pacientes</h1>
            </div>
            <div className="d-flex justify-content-around">
            <Link
              to="/Adm/pacientes/crear"
              className=" btn-celeste-crud text-decoration-none text-center mx-3"
            >
              Agregar Paciente
            </Link>
            <Link to="/Adm" className="btn-celeste-crud text-decoration-none text-center mx-3">Volver</Link>
          </div>
          <hr />
          {/* Table of products */}
          { pacientes.length!==0 ?
          <Table bordered hover responsive className="align-middle mt-3">
            <thead className="font-celeste-crud">
              <tr>                
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Nombre Mascota</th>
                <th>Especie</th>
                <th>Raza</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
                {/* esto tiene que ir en paciente */}
             
              {pacientes.map((paciente)=>(<Paciente paciente={paciente} key={paciente._id} URLPacientes={URLPacientes} getApiPacientes={getApiPacientes}></Paciente>))}
              
            </tbody>
          </Table>
          :
          <div className="no-products-found d-flex align-items-center justify-content-center">            
            <h1>???????? No hay pacientes registrados ????????</h1>
          </div>
}

        </Container>
      </div>
          
      <Footer></Footer>
    </div>
  );
};

export default AdmPacientes;
