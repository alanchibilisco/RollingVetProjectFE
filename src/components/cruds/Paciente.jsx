import React from 'react';
import { Link } from 'react-router-dom';

const Paciente = ({paciente}) => {
    return (                    
            <tr>
                <td>{paciente.id}</td>
                <td>{paciente.nombreDueño}</td>
                <td>{paciente.apellidoDueño}</td>
                <td>{paciente.telefono}</td>
                <td>{paciente.email}</td>
                <td>{paciente.nombreMascota}</td>
                <td>{paciente.especieMascota}</td>
                <td>{paciente.razaMascota}</td>
                <td className="w-25">
                  <div className="d-flex justify-content-center">
                    <Link
                      to={`/Adm/pacientes/editar/${paciente.id}`}
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