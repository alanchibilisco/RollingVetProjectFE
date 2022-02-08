import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {
  return (<div>
      <NavBar />
	  <div class="container">
		  <div class="row justify-content-evenly">
<div class="col-4">
	<h1>Ingresa a tu Cuenta</h1>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Ingrese su usuario</Form.Label>
    <Form.Control type="email" placeholder="RollingVetUser" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Ingrese su contraseña" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
<div class="col-4 container my-5">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--PcIPuAiSJnzvYl0nvbuptU8lGQBa4Z79Q&usqp=CAU" alt="" />
</div>
		  </div>

	  </div>
      <Footer /></div>
  );
};

export default Login;
