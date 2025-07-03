import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Table, Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarrinho = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/carrinho`);
        setCarrinho(res.data);
      } catch (err) {
        setError("Erro ao carregar o carrinho");
      } finally {
        setLoading(false);
      }
    };
    fetchCarrinho();
  }, []);

  const handleUpdate = async (id, quantidade) => {
    if (quantidade < 1) return;
    try {
      await axios.patch(`${API_URL}/api/carrinho/${id}`, { quantidade });
      setCarrinho((prev) => prev.map(item => item.id === id ? { ...item, quantidade } : item));
    } catch (err) {
      alert("Erro ao atualizar quantidade");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja remover este produto do carrinho?")) return;
    try {
      await axios.delete(`${API_URL}/api/carrinho/${id}`);
      setCarrinho((prev) => prev.filter(item => item.id !== id));
      window.alert("Produto removido do carrinho!");
    } catch (err) {
      alert("Erro ao deletar produto");
    }
  };

  const handleCheckout = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      const usuarioId = storedUser ? JSON.parse(storedUser).id : null;
      if (!usuarioId) {
        alert("Você precisa estar logado para finalizar a compra.");
        return;
      }
      await axios.post(`${API_URL}/api/carrinho/checkout`, { usuarioId });
      setCarrinho([]);
      window.alert("Compra realizada com sucesso!");
    } catch (err) {
      alert("Erro ao finalizar a compra");
    }
  };

  const subtotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  const taxa = carrinho.length > 0 ? 24.36 : 0;
  const total = subtotal + taxa;
  
  return (
    <Container className="my-5 pt-5">
      <h2 className="mb-4 text-danger">Meu Carrinho</h2>
      {loading ? (
        <div>Carregando...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Row>
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Produto</th>
                      <th>Preço</th>
                      <th>Quantidade</th>
                      <th>Total</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrinho.length > 0 ? (
                      carrinho.map((item) => (
                        <tr key={item.id}>
                          <td><img src={item.img} alt={item.title} style={{ width: 60, height: 40, objectFit: 'contain' }} /></td>
                          <td>{item.title}</td>
                          <td>R${item.preco.toFixed(2)}</td>
                          <td>
                            <Form.Control
                              type="number"
                              min="1"
                              value={item.quantidade}
                              onChange={e => handleUpdate(item.id, Number(e.target.value))}
                              style={{ width: '70px' }}
                            />
                          </td>
                          <td>R${(item.preco * item.quantidade).toFixed(2)}</td>
                          <td>
                            <Button variant="outline-danger" size="sm" onClick={() => handleDelete(item.id)}>
                              Deletar
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">Seu carrinho está vazio.</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <h5 className="mb-3 text-danger">Resumo de Compra</h5>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <span>Subtotal:</span>
                  <span>R${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <span>Taxa de serviços:</span>
                  <span>R${taxa.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <span>Entrega:</span>
                  <span>-</span>
                </div>
                <div className="d-flex justify-content-between py-2 fw-bold">
                  <span>Total:</span>
                  <span>R${total.toFixed(2)} + Entrega</span>
                </div>
                <Button variant="success" className="w-100 mt-3" onClick={handleCheckout}>
                  Pagar Produto
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Carrinho;
