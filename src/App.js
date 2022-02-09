import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Contacto from "./components/Contacto";
import Error404 from "./components/Error404";
import Login from "./components/Login";
import QuienesSomos from "./components/QuienesSomos";
import Servicios from "./components/Servicios";


function App() {
  const URLPacientes=process.env.REACT_APP_API_PACIENTES;
  const URLTurnos=process.env.REACT_APP_API_TURNOS;

  
  console.log(URLPacientes);
  console.log(URLTurnos);
  
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
