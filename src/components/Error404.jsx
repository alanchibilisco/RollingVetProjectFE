import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Error from './img/Error404.png'
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div>
            <NavBar></NavBar>
        <img src={Error} alt="error" className='w-100 mx-auto d-block container-fluid'/>
        <div className="row align-items-end text-center container-fluid">
            <h2 className='colorfuente'>PUEDES SEGUIR NAVEGANDO</h2>
    <div className="col">
    <Link className='btn-celeste-crud m-3' to="/Planes">Planes</Link>
    <Link className='btn-celeste-crud m-3' to="/">Inicio</Link>
    <Link className='btn-celeste-crud m-3' to="/Cardtienda">Tienda</Link>
    </div>
  </div>
            <Footer></Footer>
        </div>
    );
};

export default Error404;