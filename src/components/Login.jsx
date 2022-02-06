import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
/*import Adm from "./components/Adm";*/

const Login = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-Mail / Usuario</Form.Label>
          <Form.Control type="email" placeholder="RollingVet@Email.com" />
          <Form.Text className="text-muted">
     No compartiremos tu E-Mail con nadie 
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña..." />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Footer></Footer>
    </div>
  );
};

export default Login;
