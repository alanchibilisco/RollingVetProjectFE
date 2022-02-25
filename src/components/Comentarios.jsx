import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { validateTextoEsp, validateTexto} from "./Validaciones";

const Comentarios = () => {
  const URLComentarios = process.env.REACT_APP_API_COMENTARIOS;
  const [comentarios, setComentarios] = useState([]);
  const [user, setUser]=useState('');
  const [message, setMessage]=useState('');

  
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
  console.log(comentarios);
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('desde submit comentarios');
    if(!validateTexto(user)||!validateTextoEsp(message)){
        Swal.fire("Ops!", "Algunos de los campos es incorrectos", "Error");
        return;
    }

    const newCom={
        user, 
        message
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
              Swal.fire("El comentario se agrego correctamente", "", "OK");
              getApiComentarios();              
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
          <hr/>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label className="font-celeste-crud">Ingrese su Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder="Usuario Rolling" onChange={({target})=>setUser(target.value.trimStart())}></Form.Control>
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDetalle">
            <Form.Label className="font-celeste-crud">
              Ingrese su comentario*
            </Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Ej: Hola"
              style={{ height: "100px" }}   
              onChange={({target})=>{setMessage(target.value.trimStart())}}                 
            ></Form.Control>
          </Form.Group>
          <div className="text-end">
            <button className="btn-celeste-crud">guardar</button>
          </div>
        </Form>
      </Container>    
      <div className="">
        <Container className="">            
            <Row className="mb-2">                
                <Col sm={12} className="border border-2 border-danger">
                    <Card.Body>
                    <Card.Title>titulo</Card.Title>
                    <Card.Text>
                        mensaje
                    </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            <Row className="mb-2">               
                <Col sm={12} className="border border-2 border-danger">
                    <Card.Body>
                    <Card.Title>titulo</Card.Title>
                    <Card.Text>
                        mensaje
                    </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    </div>      
    </div>
  );
};

export default Comentarios;
