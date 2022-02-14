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
import EditPacientes from "./components/cruds/EditPacientes";
import EditTurnos from "./components/cruds/EditTurnos";

function App() {
  //useState
  const [pacientes, setPacientes] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [city, setCity]=useState('');
  const [temp, setTemp]=useState('');

  //useEffect
  useEffect(() => {
    getApiPacientes();
  }, []);

  useEffect(() => {
    getApiTurnos();
  }, []);

  //utilizacion de las variables de entorno
  const URLPacientes = process.env.REACT_APP_API_PACIENTES;
  const URLTurnos = process.env.REACT_APP_API_TURNOS;

  const getApiPacientes = async () => {
    try {
      const res = await fetch(URLPacientes);
      const pacientesApi = await res.json();
      setPacientes(pacientesApi);
    } catch (error) {
      console.log(error);
    }
  };

  const getApiTurnos = async () => {
    try {
      const res = await fetch(URLTurnos);
      const turnosApi = await res.json();
      setTurnos(turnosApi);
    } catch (error) {
      console.log(error);
    }
  };
  //weather
  const getWeather = async () => {
    try {
      const ipify = require("ipify2");
      const resIp = await ipify.ipv4();
      console.log(resIp); //borrar
      const location = await fetch(`http://ip-api.com/json/${resIp}`);
      const locJson = await location.json();
      const openWeather = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${locJson.lat}&lon=${locJson.lon}&lang=es&units=metric&appid=89101df660e78594ffe9ac009875f78e`
      );
      const openWthJson = await openWeather.json();
      console.log(openWthJson.name);
      console.log(Math.round(openWthJson.main.temp));
      console.log(openWthJson);
      setCity(openWthJson.name);
      setTemp(Math.round(openWthJson.main.temp)); 
    } catch (error) {
      console.log(error);
    }
  };
  window.setInterval(getWeather, 300000);
  //getWeather();

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index city={city} temp={temp}></Index>}></Route>
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
            element={
              <AdmPacientes
                pacientes={pacientes}
                URLPacientes={URLPacientes}
                getApiPacientes={getApiPacientes}
              ></AdmPacientes>
            }
          ></Route>
          <Route
            exact
            path="/Adm/pacientes/crear"
            element={
              <CrearPaciente
                URLPacientes={URLPacientes}
                getApiPacientes={getApiPacientes}
              ></CrearPaciente>
            }
          ></Route>
          <Route
            exact
            path="/Adm/pacientes/editar/:id"
            element={
              <EditPacientes
                URLPacientes={URLPacientes}
                getApiPacientes={getApiPacientes}
              ></EditPacientes>
            }
          ></Route>
          <Route
            exact
            path="/Adm/turnos"
            element={
              <AdmTurnos
                turnos={turnos}
                URLTurnos={URLTurnos}
                getApiTurnos={getApiTurnos}
              ></AdmTurnos>
            }
          ></Route>
          <Route
            exact
            path="/Adm/turnos/crear"
            element={
              <CrearTurno
                pacientes={pacientes}
                URLTurnos={URLTurnos}
                getApiTurnos={getApiTurnos}
              ></CrearTurno>
            }
          ></Route>
          <Route
            exact
            path="/Adm/turnos/editar/:id"
            element={
              <EditTurnos
                URLTurnos={URLTurnos}
                getApiTurnos={getApiTurnos}
                pacientes={pacientes}
              ></EditTurnos>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
