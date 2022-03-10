import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Error from "./img/Error404-1.jpg";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="text-center bg-celeste py-1">
      <h1 className="text-white fs-1 fw-bold">
          OPS! PARECE QUE TENEMOS UN PROBLEMA
        </h1>
      </div>
      <img
        src={Error}
        alt="error"
        className="w-100 img-error mb-1"
      />
      <div className="text-center my-1">        
        <h2 className="colorfuente fw-bold">PUEDES SEGUIR NAVEGANDO</h2>
        <div>
          <Link className="btn-celeste-crud m-3 text-decoration-none" to="/">
            Inicio
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error404;
