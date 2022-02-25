import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import CardComentarios from "./CardComentarios";
import { validateTextoEsp, validateTexto } from "./Validaciones";

const Comentarios = () => {
  
  const URLComentarios = process.env.REACT_APP_API_COMENTARIOS;
  const [comentarios, setComentarios] = useState([]);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const getApiComentarios = async () => {
    try {
      const res = await fetch(URLComentarios);
      const comentariosAPI = await res.json();
      setComentarios(comentariosAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiComentarios();
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde submit comentarios");
    if (!validateTexto(user) || !validateTextoEsp(message)) {
      Swal.fire("Ops!", "Algunos de los campos es incorrectos", "Error");
      return;
    }

    const newCom = {
      user,
      message,
      "date": new Date().toString()
    };
    Swal.fire({
      title: "Estas Seguro?",
      text: "No puedes revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Guardar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URLComentarios, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCom),
          });
          if (res.status === 201) {
            Swal.fire("El comentario se agrego correctamente", "", "success");
            getApiComentarios();
            setUser('');
            setMessage('');
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      <Container className="my-3">
        <h2 className="text-center font-celeste-crud">COMENTARIOS</h2>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label className="font-celeste-crud">
              Ingrese su Nombre y Apellido
            </Form.Label>
            <Form.Control
            value={user}
              type="text"
              placeholder="Usuario Rolling"
              onChange={({ target }) => setUser(target.value.trimStart())}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDetalle">
            <Form.Label className="font-celeste-crud">
              Ingrese su comentario*
            </Form.Label>
            <Form.Control
            value={message}
              as="textarea"
              type="text"
              placeholder="Ej: Hola"
              style={{ height: "100px" }}
              onChange={({ target }) => {
                setMessage(target.value.trimStart());
              }}
            ></Form.Control>
          </Form.Group>
          <div className="text-end">
            <button className="btn-celeste-crud">GUARDAR</button>
          </div>
        </Form>
        <hr />
      </Container>

      <div className="">
        {comentarios.length > 0 ? (

          <Container className="border border-3 p-3">           
            {comentarios.map((com)=>(             
            <CardComentarios key={com.id} com={com} URLComentarios={URLComentarios} getApiComentarios={getApiComentarios}></CardComentarios>
            ))}
          </Container>
                    ) : (
          <>
            <div>
              <h2 className="font-celeste-crud text-center">¡NO HAY COMENTARIOS!</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Comentarios;
