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
import bcrypt from "bcryptjs/dist/bcrypt";

function App() {
  //useState
  const [pacientes, setPacientes] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [weather, setWeather]=useState({});
  const [user, setUser]=useState([]);

  //useEffect
  useEffect(() => {
    getApiPacientes();
  }, []);

  useEffect(() => {
    getApiTurnos();
  }, []);

  useEffect(()=>{
    getWeather();
  },[]);

  useEffect(()=>{
    getApiUser();
  }, []);

  //utilizacion de las variables de entorno
  const URLPacientes = process.env.REACT_APP_API_PACIENTES;
  const URLTurnos = process.env.REACT_APP_API_TURNOS;
  const URLUser= process.env.REACT_APP_API_TURNOS;
  const key=process.env.REACT_APP_KEY

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
      autoDelete(turnosApi);
      setTurnos(turnosApi);      
    } catch (error) {
      console.log(error);
    }
  };

  const getApiUser=async()=>{
    try {
      const res=await fetch(URLUser);
      const userApi=await res.json();
      setUser(userApi);
    } catch (error) {
      console.log(error);
    }
  };
  //weather
  const getWeather = async () => {
    try {
      const ipify = require("ipify2");
      const resIp = await ipify.ipv4();      
      const location = await fetch(`http://ip-api.com/json/${resIp}`);
      const locJson = await location.json();
      const openWeather = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${locJson.lat}&lon=${locJson.lon}&lang=es&units=metric&appid=${key}`
      );
      const openWthJson = await openWeather.json();           
      const weather={
        city: `${openWthJson.name}`,
        temp: `${openWthJson.main.temp}`,
        sky: `${openWthJson.weather[0].description}`,
        wind: `${openWthJson.wind.speed}`
      };
      setWeather(weather);      
    } catch (error) {
      console.log(error);
    }
  };
  window.setInterval(getWeather, 600000);
  //Fin weather

   //Auto borrado de turnos en funcion a la fecha
   const autoDelete=(turnos)=>{
     const borrar = async(turno)=>{
       if(new Date(turno.startDate)<new Date()){
        const res = await fetch(`${URLTurnos}/${turno.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
       }
     }
   turnos.map((turno)=>(borrar(turno)));   
   };
   //fin borrado

   //user
   const pass=async()=>{
    const bcrypt=require('bcryptjs');
   const passCrypt= await bcrypt.hash('admin',8);
   console.log(passCrypt);
   }
   
   const compare=()=>{ 
      const hash="$2a$08$0oM716UFy9lb2LLDVgr0U..B1fCssk4jcLABz8J8LpMVYW30pzawW";
      const res=bcrypt.compareSync("admin",hash);
      console.log(res);
   }

   
   
   

   //fin user
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index weather={weather}></Index>}></Route>
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
                turnos={turnos}
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
