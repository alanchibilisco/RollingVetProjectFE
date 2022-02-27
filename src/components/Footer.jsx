import React from 'react';
import logo from './img/LOGOPNG.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faInstagramSquare, faTwitterSquare, faWhatsapp,  } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className='container-fluid bg-celeste  mb-0 mt-5 py-3 text-white text-center'>
            <div className='container'>
                <img src={logo} alt="Logo Rolling Vet" width='150' height='50'/>
            </div>
            <div className='container d-lg-flex  justify-content-lg-center my-4'>
                <div>
                <a href="*" className='mx-3 text-white text-decoration-none fs-5'>
                    <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>{" "}3815578693</a></div>
                    <div className=''>
                <a href="*" className='mx-3 text-white text-decoration-none fs-6'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}rollingvetproject@gmail.com</a></div>
                <div>
                <a href="*" className='mx-3 text-white text-decoration-none fs-5'><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>{" "}San Miguel de Tucumán</a></div>
            </div>
            <hr className='' />
            <p className='fs-5'>Mantente actualizado, siguenos en nuestras redes sociales</p>
            <a href="*" className='text-white'>
            <FontAwesomeIcon icon={faFacebookSquare} className='fs-2 mx-3'></FontAwesomeIcon></a>
            <a href="*" className='text-white'>
            <FontAwesomeIcon icon={faInstagramSquare} className='fs-2 mx-3'></FontAwesomeIcon></a>
            <a href="*" className='text-white'>
            <FontAwesomeIcon icon={faTwitterSquare} className='fs-2 mx-3'></FontAwesomeIcon></a>
        </div>
    );
};

export default Footer;