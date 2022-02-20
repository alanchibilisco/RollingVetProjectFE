import React, { useState } from "react";
import {Col, Container, Form, Row } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";
import contacto from './img/contactoIMG.jpg';
import bcrypt from "bcryptjs/dist/bcrypt";

const Login = ({ user }) => {
  console.log(user); 
  const[logUser, setLogUser]=useState('');
  const[logPass, setLogPass]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(bcrypt.compareSync(logUser,user.userName)&&bcrypt.compareSync(logPass, user.pass)){
      console.log('esta logueado ok');      
    }else{
      console.log('esta logueado mal');
    }
  }

  return (
    <div>
      <NavBar />
      <Container className="py-5">
      <h1 className="font-celeste-crud">INICIE SESION</h1>
      <hr />
      <div className="my-5">        
            <Form className="my-5" onSubmit={handleSubmit}>    
            <Row>
              <Col xs={12} md={6} className='my-2'>
              <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label className="font-celeste-crud">Nombre de usuario / email</Form.Label>
                <Form.Control type="text" placeholder="RollingUser" onChange={({target})=>setLogUser(target.value.trimStart())}></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPass">
                <Form.Label className="font-celeste-crud">Contraseña</Form.Label>
                <Form.Control type="password" placeholder="rollingPass" onChange={({target})=>setLogPass(target.value.trimStart())}></Form.Control>
              </Form.Group> 
              <div className="text-end">
              <button className="btn-celeste-crud">Ingresar</button>
              </div>
              </Col>
              <Col xs={12} md={6} className='my-2'><img src={contacto} width='100%' alt="Imagen de contacto"></img></Col>
              </Row>                      
              
            </Form>

            </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
