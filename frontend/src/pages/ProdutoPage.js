import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Badge } from 'react-bootstrap';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProdutoPage = () => {
  const { id } = useParams();

  // Dados de exemplo para um produto (substituir por dados da API)
  const product = {
    id: id,
    name: `Produto ${id}`,
    description: 'Este é um produto incrível com muitas funcionalidades. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'http://localhost:3000/uploads/produtos/Aureagerar-produto1.jpg',
    originalPrice: 250.00,
    promotionalPrice: 199.99,
    rating: 4.5,
    reviews: 120,
    stock: 50,
  };

  if (!product) {
    return <Container className="my-5 pt-5">Produto não encontrado.</Container>;
  }

  return (
    <Container className="my-5 pt-5">
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid rounded />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <div className="mb-3">
            {[...Array(Math.floor(product.rating))].map((_, i) => (
              <FaStar key={i} color="gold" />
            ))}
            {product.rating % 1 !== 0 && <FaStar color="gold" style={{ opacity: 0.5 }} />}
            <span className="ms-2 text-muted">({product.reviews} avaliações)</span>
          </div>
          <h3 className="text-danger mb-3">
            <span className="text-decoration-line-through text-muted me-2">R${product.originalPrice.toFixed(2)}</span>
            R${product.promotionalPrice.toFixed(2)}
          </h3>
          <p>{product.description}</p>
          <p>{product.longDescription}</p>
          <div className="mb-3">
            <Badge bg={product.stock > 0 ? "success" : "danger"}>
              {product.stock > 0 ? `Disponível em estoque: ${product.stock}` : 'Fora de estoque'}
            </Badge>
          </div>
          <Button variant="primary" size="lg" disabled={product.stock === 0}>
            <FaShoppingCart className="me-2" /> Adicionar ao Carrinho
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProdutoPage;
