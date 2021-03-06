import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carrousel from "./Carrousel";
import Cardsindex from "./Cardservicios";
import Cardservicios from "./Cardservicios";
import Cardsplanes from "./Cardplanes";
import Cardtienda from "./Cardtienda";
import Nuestrosaliados from "./Nuestrosaliados";
import Nuestoequipo from "./Nuestoequipo";
import Weather from "./weather/Weather";
import Comentarios from "./Comentarios";

const Index = ({ weather}) => {
  const [session, setSession]=useState(false);

  useEffect(()=>{
    setSession(JSON.parse(sessionStorage.getItem("stateSession")) || false);    
  },[]);

  return (
    <div>
      <NavBar />
      {weather.city!==undefined ?
      <Weather weather={weather}></Weather>      
      :
      <></>
    }         
       <Carrousel />           
      <Cardservicios />
      <Nuestrosaliados/>
      <Cardsplanes />
      <Cardtienda />
      <Nuestoequipo/>
      <Comentarios session={session}></Comentarios>
      <Footer />
    </div>
  );
};

export default Index;
