import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Form, Button } from 'react-bootstrap';

function ContactPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="flex-grow-1 my-5">
        <h1>Atendimento</h1>
        <p>Entre em contato conosco para dúvidas ou suporte.</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Seu nome" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Seu email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Sua mensagem" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
      
    </div>
  );
}

export default ContactPage;
