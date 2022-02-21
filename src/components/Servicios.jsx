import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Email from './email/Email';
const Servicios = () => {
    return (
        <div>
            <NavBar></NavBar>
           <h1>Nuestros servicios</h1> 
           <hr />
           <Email></Email>
           <Footer></Footer>
        </div>
    );
};

export default Servicios;