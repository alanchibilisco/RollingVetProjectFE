import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carrousel from "./Carrousel";
import Cardsindex from "./Cardservicios";
import Cardservicios from "./Cardservicios";
import Cardsplanes from "./Cardplanes";
import Cardtienda from "./Cardtienda";


const Index = () => {
  return (
    <div>
      <NavBar />
      <Carrousel />
      {/* <Cardservicios /> */}
      {/* <Cardsplanes /> */}
      {/* <Cardtienda/> */}
      <Footer />
    </div>
  );
};

export default Index;
