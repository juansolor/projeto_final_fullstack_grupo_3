import React from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';

const AdminPage = () => {
  // Dados de exemplo para usuários e produtos
  const users = [
    { id: 1, name: 'João Silva', email: 'joao@example.com', role: 'Cliente' },
    { id: 2, name: 'Maria Souza', email: 'maria@example.com', role: 'Admin' },
  ];

  const products = [
    { id: 1, name: 'Smartphone X', price: 1999.99, stock: 150 },
    { id: 2, name: 'Notebook Gamer', price: 4500.00, stock: 75 },
  ];

  return (
    <Container className="my-5 pt-5">
      <h2 className="mb-4">Dashboard do Administrador</h2>

      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Header>Gerenciamento de Usuários</Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Função</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <Button variant="info" size="sm" className="me-2">Editar</Button>
                        <Button variant="danger" size="sm">Excluir</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="success">Adicionar Novo Usuário</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>Gerenciamento de Produtos</Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>R${product.price.toFixed(2)}</td>
                      <td>{product.stock}</td>
                      <td>
                        <Button variant="info" size="sm" className="me-2">Editar</Button>
                        <Button variant="danger" size="sm">Excluir</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="success">Adicionar Novo Produto</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
