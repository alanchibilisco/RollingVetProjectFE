import React from 'react';
import { Link } from 'react-router-dom';

const Turno = ({turno}) => {
    return (
        <tr>
                <td>{turno.mascota}</td>
                <td>{turno.veterinario}</td>
                <td>{turno.detalleCita}</td>
                <td>{turno.fecha}</td>
                <td>{turno.hora}</td>                
                <td className="w-25">
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/*"
                      className=" btn btn-dark mx-1 text-decoration-none text-center"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-dark mx-1"                      
                    >
                      Borrar
                    </button>
                  </div>
                </td>
              </tr>
              
    );
};

export default Turno;