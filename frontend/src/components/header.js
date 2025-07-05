import React, { useState, useEffect } from 'react';
import { Container, Form, Button, InputGroup, Badge, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/carrinho');
        setCartCount(response.data.length);
      } catch (error) {
        console.error('Erro ao buscar dados do carrinho:', error);
      }
    };

    fetchCartCount();
    
    // Atualiza a cada 5 segundos
    const interval = setInterval(fetchCartCount, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      {/* Top Section: Home, Promoções, Lojas, Atendimento, Trabalhe Conosco */}
      <div className="bg-white py-2">
        <Container className="d-flex justify-content-end">
          <Nav>
            <Nav.Link href="/" className="text-dark">Home</Nav.Link>
            <Nav.Link href="/ofertas" className="text-dark">Promoções</Nav.Link>
            <Nav.Link href="/lojas" className="text-dark">Lojas</Nav.Link>
            <Nav.Link href="/pages/subpages/Atendimento" className="text-dark">Atendimento</Nav.Link>
            <Nav.Link href="/pages/subpages/TrabalheConosco" className="text-dark">Trabalhe Conosco</Nav.Link>
          </Nav>
        </Container>
      </div>

      {/* Middle Section: Logo, Search Bar, Login, Register, Cart */}
      <div className="py-3 border-bottom bg-success">
        <Container className="d-flex justify-content-between align-items-center">
          

          <div style={{ width: '50%' }}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Pesquisar produtos..."
                aria-label="Search"
              />
              <Button variant="outline-secondary">Buscar</Button>
            </InputGroup>
          </div>

          <div className="d-flex align-items-center">
            <Link to="/registro" className="btn btn-primary me-2" style={{ color: 'white !important' }}>
              <FaUserCircle className="me-1" /> Registrar
            </Link>
            <Link to="/user" className="btn btn-success me-2">
              <FaUserCircle className="me-1" /> Login
            </Link>
            <Link to="/carrinho" className="btn btn-success position-relative">
              <FaShoppingCart className="me-1" /> Carrinho
              {cartCount > 0 && (
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </div>
        </Container>
      </div>

      {/* Bottom Section: Frete Grátis, Hardwares, Periféricos, PC Gamer, Notebooks */}
      <div className="bg-dark py-2">
        <Container>
          <Nav className="d-flex justify-content-around">
            <Nav.Link href="/frete-gratis" className="text-white">Frete Grátis</Nav.Link>
            <Nav.Link href="/hardwares" className="text-white">Hardwares</Nav.Link>
            <Nav.Link href="/perifericos" className="text-white">Periféricos</Nav.Link>
            <Nav.Link href="/pc-gamer" className="text-white">PC Gamer</Nav.Link>
            <Nav.Link href="/notebooks" className="text-white">Notebooks</Nav.Link>
          </Nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;
