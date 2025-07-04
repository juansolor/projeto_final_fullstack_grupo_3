import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserPage = () => {
  // Dados de exemplo para o usuário
  const user = {
    name: 'Nome do Usuário',
    email: 'usuario@example.com',
    address: 'Rua Exemplo, 123, Cidade, Estado',
  };

  return (
    <Container className="my-5 pt-5">
      <h2 className="mb-4">Bem-vindo(a), {user.name}!</h2>

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>Menu do Usuário</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item as={Link} to="/historico-compras">Histórico de Compras</ListGroup.Item>
              <ListGroup.Item as={Link} to="#">Meus Dados</ListGroup.Item>
              <ListGroup.Item as={Link} to="/login" className="text-danger">Sair</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>Meus Dados Pessoais</Card.Header>
            <Card.Body>
              <p><strong>Nome:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Endereço:</strong> {user.address}</p>
              <Button variant="primary">Editar Dados</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>Últimas Compras</Card.Header>
            <Card.Body>
              <p>Nenhuma compra recente. <Link to="/">Comece a comprar agora!</Link></p>
              {/* Aqui você pode listar as últimas compras do usuário */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserPage;
