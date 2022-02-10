import React from 'react';
import { Link } from 'react-router-dom';

const Turno = () => {
    return (
        <tr>
                <td>Mascota</td>
                <td>Veterinario</td>
                <td>Detalle Cita</td>
                <td>Fecha</td>
                <td>Hora</td>                
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