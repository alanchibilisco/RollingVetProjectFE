import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Contacto from "./components/Contacto";
import Error404 from "./components/Error404";
import Login from "./components/Login";
import QuienesSomos from "./components/QuienesSomos";
import Servicios from "./components/Servicios";
import { useState } from "react";
import { useEffect } from "react";
import Adm from "./components/cruds/Adm";
import AdmPacientes from "./components/cruds/AdmPacientes";
import AdmTurnos from "./components/cruds/AdmTurnos";
import CrearPaciente from "./components/cruds/CrearPaciente";
import CrearTurno from "./components/cruds/CrearTurno";

function App() {
  //useState
  const [pacientes, setPacientes]=useState([]);
  const [turnos, setTurnos]=useState([]);

  //useEffect
  useEffect(()=>{
    getApiPacientes();
  }, []);

  useEffect(()=>{
    getApiTurnos();
  }, []);

  //utilizacion de las variables de entorno
  const URLPacientes=process.env.REACT_APP_API_PACIENTES;
  const URLTurnos=process.env.REACT_APP_API_TURNOS;  
  

  const getApiPacientes=async()=>{
    try {
      const res=await fetch(URLPacientes);
      const pacientesApi=await res.json();      
      setPacientes(pacientesApi);
    } catch (error) {
      console.log(error);
    }
  }

  const getApiTurnos=async()=>{
    try {
      const res=await fetch(URLTurnos);
      const turnosApi=await res.json();      
      setTurnos(turnosApi);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index></Index>}></Route>
          <Route
            exact
            path="/QuienesSomos"
            element={<QuienesSomos></QuienesSomos>}
          ></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
          <Route
            exact
            path="/NuestrosServicios"
            element={<Servicios></Servicios>}
          ></Route>
          <Route exact path="/Login" element={<Login></Login>}></Route>
          <Route
            exact
            path="/Contactanos"
            element={<Contacto></Contacto>}
          ></Route>
          <Route
            exact
            path="/Adm"
            element={<Adm turnos={turnos}></Adm>}
          ></Route>
          <Route
            exact
            path="/Adm/pacientes"
            element={<AdmPacientes pacientes={pacientes}></AdmPacientes>}
          ></Route>
          <Route
            exact
            path="/Adm/pacientes/crear"
            element={<CrearPaciente URLPacientes={URLPacientes} getApiPacientes={getApiPacientes}></CrearPaciente>}
          ></Route>
          <Route
            exact
            path="/Adm/turnos"
            element={<AdmTurnos turnos={turnos}></AdmTurnos>}
          ></Route>
          <Route
            exact
            path="/Adm/turnos/crear"
            element={<CrearTurno pacientes={pacientes} URLTurnos={URLTurnos} getApiTurnos={getApiTurnos}></CrearTurno>}
          ></Route>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
