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
  const [validated, setValidated] = useState(false);

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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() !== false && gralValidate()) {
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
              setValidated(false);
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    } else {
      e.stopPropagation();
      Swal.fire("Ops!", "Algunos de los campos es incorrectos", "error");
    }
    setValidated(true);
  };
  return (
    <div>
      <Container className="my-3">
        <h2 className="text-center font-celeste-crud">COMENTARIOS</h2>
        <hr />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="validationUser">
            <Form.Label className="font-celeste-crud">
              Ingrese su Nombre y Apellido
            </Form.Label>
            <Form.Control
              required
              value={user}
              type="text"
              placeholder="Usuario Rolling"
              minLength={4}
              maxLength={60}
              onChange={({ target }) => setUser(target.value.trimStart())}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Ingrese su Nombre y Apellido (min. 4 caracteres, max. 60
              caracteres, SOLO LETRAS)
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationMessage">
            <Form.Label className="font-celeste-crud">
              Ingrese su comentario*
            </Form.Label>
            <Form.Control
              required
              value={message}
              as="textarea"
              type="text"
              placeholder="Ej: Hola"
              minLength={4}
              maxLength={500}
              style={{ height: "100px" }}
              onChange={({ target }) => {
                setMessage(target.value.trimStart());
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
