import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import CardComentarios from "./CardComentarios";
import { validateTextoEsp, validateTexto } from "./Validaciones";

const Comentarios = ({ session }) => {
  const URLComentarios = process.env.REACT_APP_API_COMENTARIOS;
  const [comentarios, setComentarios] = useState([]);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");  
  const [inputUser, setInputUser] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const getApiComentarios = async () => {
    try {
      const res = await fetch(URLComentarios);
      const comentariosAPI = await res.json();
      setComentarios(comentariosAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const gralValidate = () => {
    if (validateTexto(user) && validateTextoEsp(message)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    getApiComentarios();
    setInputUser(document.getElementById("inputUser"));
    setInputMessage(document.getElementById("inputMessage"));
  }, []);

  const testMessage = () => {
    if (validateTextoEsp(inputMessage.value)&&inputMessage.value.length>=4) {
      inputMessage.className = "form-control is-valid";
      return true;
    } else {
      inputMessage.className = "form-control is-invalid";
      return false;
    }
  };

  const testUser = () => {
    if (validateTexto(inputUser.value) && inputUser.value.length >= 4) {
      inputUser.className = "form-control is-valid";
      return true;
    } else {
      inputUser.className = "form-control is-invalid";
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
    if (gralValidate()) {
      const newCom = {
        user,
        message,
        date: new Date().toString(),
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
              setUser("");
              setMessage("");
              inputMessage.className="form-control";
              inputUser.className="form-control";         
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    } else if (testUser()) {
      Swal.fire("Ops!", "Por favor ingrese su mensaje", "error");
      inputMessage.className = "form-control is-invalid";
    } else if (testMessage()) {
      Swal.fire("Ops!", "Por favor ingrese su nombre", "error");
      inputUser.className = "form-control is-invalid";
    }else {      
      Swal.fire("Ops!", "Debe completar todos los campos", "error");
      inputMessage.className = "form-control is-invalid";
      inputUser.className = "form-control is-invalid";
    }    
  };  
  return (
    <div>
      <Container className="my-3">
        <h2 className="text-center font-celeste-crud">COMENTARIOS</h2>
        <hr />
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="font-celeste-crud" htmlFor="inputUser">
              Ingrese su Nombre y Apellido
            </Form.Label>
            <Form.Control
              required
              value={user}
              type="text"
              placeholder="Usuario Rolling"
              minLength={4}
              maxLength={60}
              id="inputUser"
              onChange={({ target }) => {
                setUser(target.value.trimStart());
                testUser();
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Ingrese su Nombre y Apellido (min. 4 caracteres, max. 60
              caracteres, SOLO LETRAS)
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="font-celeste-crud" htmlFor="inputMessage">
              Ingrese su comentario
            </Form.Label>
            <Form.Control
              required
              value={message}
              as="textarea"
              type="text"
              placeholder="Ej: Hola"
              minLength={4}
              maxLength={500}
              id="inputMessage"
              style={{ height: "100px" }}
              onChange={({ target }) => {
                setMessage(target.value.trimStart());
                testMessage();
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Por favor ingrese un comentario (min. 4 caracteres, max. 500
              caracteres)
            </Form.Control.Feedback>
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
            {comentarios.map((com) => (
              <CardComentarios
                key={com._id}
                com={com}
                URLComentarios={URLComentarios}
                getApiComentarios={getApiComentarios}
                session={session}
              ></CardComentarios>
            ))}
          </Container>
        ) : (
          <>
            <div>
              <h2 className="font-celeste-crud text-center">
                ¡NO HAY COMENTARIOS!
              </h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Comentarios;
