import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

function CareersPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="flex-grow-1 my-5">
        <h1>Trabalhe Conosco</h1>
        <p>Confira nossas oportunidades de emprego e faça parte do nosso time!</p>

        <h2 className="mt-4">Vagas Disponíveis</h2>
        <ListGroup className="mb-4">
          <ListGroup.Item>Desenvolvedor Frontend Pleno</ListGroup.Item>
          <ListGroup.Item>Analista de Marketing Digital</ListGroup.Item>
          <ListGroup.Item>Designer UX/UI Sênior</ListGroup.Item>
        </ListGroup>

        <h2 className="mt-4">Envie seu Currículo</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control type="text" placeholder="Seu nome" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Seu email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>Anexar Currículo (PDF)</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar Currículo
          </Button>
        </Form>
      </Container>
      
    </div>
  );
}

export default CareersPage;
