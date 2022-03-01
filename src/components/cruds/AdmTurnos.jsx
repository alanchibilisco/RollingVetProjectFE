import  compareAsc  from "date-fns/compareAsc";
import React from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Turno from "./Turno";

const AdmTurnos = ({ turnos, URLTurnos, getApiTurnos }) => {
  const navigate = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;
  useEffect(()=>{
    if (!session) {
      navigate("/");
    }
  },[]);
  
   const sortTurnos = turnos;   
    sortTurnos.sort((a, b) => {
      const as = a.startDate;
      const ad = new Date(as);
      const bs = b.startDate;
      const bd = new Date(bs);
      return ad - bd;
    });
    
  const arrayMolinari=sortTurnos.filter((turno)=>turno.veterinario==="Molinari Pablo");
  const arrayKuc=sortTurnos.filter((turno)=>turno.veterinario==="Kuc Damian");  
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="font-celeste-crud">Administrador de turnos</h1>
            </div>
            <div className="d-flex   justify-content-around">
            <Link
              to="/Adm/turnos/crear"
              className=" btn-celeste-crud text-decoration-none text-center mx-3"
            >
              Agregar Turno
            </Link>
            <Link to="/Adm" className="btn-celeste-crud text-decoration-none text-center mx-3">Volver</Link>
            </div>
          
          <hr />
          {/* Table of products */}
          <h3 className="text-center bg-celeste-crud text-white">Turnos Dr. Molinari</h3>
        <hr className="container" />
          { arrayMolinari.length!==0 ?
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr className="font-celeste-crud">
                <th>Mascota-Dueño</th>
                <th>Veterinario</th>
                <th>Detalle de cita</th>
                <th>Fecha / Hora</th>                
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              
              {arrayMolinari.map((turno) => (
                <Turno turno={turno} key={turno._id} URLTurnos={URLTurnos} getApiTurnos={getApiTurnos}></Turno>
              ))}
            </tbody>
          </Table>
          :
          <div className="no-products-found d-flex align-items-center justify-content-center">            
            <h1>🐶🐱 No hay turnos registrados 🐱🐶</h1>
          </div>
          }
          <hr className="container" />
           <h3 className="text-center bg-celeste-crud text-white">Turnos Dr. Kuc</h3>
        <hr className="container" />
        { arrayKuc.length!==0 ?
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr className="font-celeste-crud">
                <th>Mascota-Dueño</th>
                <th>Veterinario</th>
                <th>Detalle de cita</th>
                <th>Fecha / Hora</th>                
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              
              {arrayKuc.map((turno) => (
                <Turno turno={turno} key={turno._id} URLTurnos={URLTurnos} getApiTurnos={getApiTurnos}></Turno>
              ))}
            </tbody>
          </Table>
          :
          <div className="no-products-found d-flex align-items-center justify-content-center">            
            <h1>🐶🐱 No hay turnos registrados 🐱🐶</h1>
          </div>
          }
        </Container>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AdmTurnos;
