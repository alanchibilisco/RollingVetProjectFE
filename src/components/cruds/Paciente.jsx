import React from 'react';
import { Link } from 'react-router-dom';

const Paciente = () => {
    return (                    
            <tr>
                <td>idEj</td>
                <td>ExampleName</td>
                <td>ExampleLastName</td>
                <td>Telefono</td>
                <td>Mascota</td>
                <td>Perro</td>
                <td>Mestizo</td>
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

export default Paciente;