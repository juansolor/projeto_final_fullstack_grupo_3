import React from 'react';
import { Navbar, Nav, Container, Form, Button, InputGroup } from 'react-bootstrap';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'; // Using FaUserCircle for Login/Register for now
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Top Section: Very light gray background, right-aligned links */}
      <Navbar expand="lg" className="py-1 custom-bg-gray-100">
        <Container>
          <Navbar.Toggle aria-controls="top-navbar-nav" />
          <Navbar.Collapse id="top-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/offers">Promoções</Nav.Link>
              <Nav.Link href="/lojas">Lojas</Nav.Link>
              <Nav.Link href="/atendimento">Atendimento</Nav.Link>
              <Nav.Link href="/trabalhe-conosco">Trabalhe Conosco</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Middle Section: Logo, Search, Login/Register/Cart */}
      <Navbar expand="lg" className="py-3 border-bottom custom-bg-gradient-green-blue">
        <Container>
          {/* Logo and Site Name */}
          <Navbar.Brand href="/" className="d-flex align-items-center me-auto">
            <img
              src="http://localhost:3001/uploads/logo/logo.png"
              height="40"
              className="d-inline-block align-top me-2"
              alt=""
            />
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>E-commerce Grupo3</span>
          </Navbar.Brand>

          {/* Search Bar */}
          <Form className="d-flex mx-auto" style={{ width: '30%' }}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Pesquisar produtos..."
                aria-label="Search"
              />
              <Button variant="outline-secondary" className="text-dark">Buscar</Button>
            </InputGroup>
          </Form>

          {/* Login, Register, Cart Buttons */}
          <Nav className="ms-auto d-flex align-items-center">
            <Link to="/login" className="btn btn-success me-2 d-flex align-items-center">
              <FaUserCircle className="me-1" /> Login
            </Link>
            <Link to="/register" className="btn btn-success me-3 d-flex align-items-center">
              <FaUserCircle className="me-1" /> Registrar
            </Link>
            <Button variant="success" className="d-flex align-items-center">
              <FaShoppingCart className="me-1" /> Carrinho
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Bottom Section: Very dark gray background, horizontal menu */}
      <Navbar style={{ backgroundColor: '#343a40' }} expand="lg" className="py-2 shadow-sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 justify-content-around">
              <Nav.Link href="/frete-gratis" className="text-white">Frete Grátis</Nav.Link>
              <Nav.Link href="/hardwares" className="text-white">Hardwares</Nav.Link>
              <Nav.Link href="/notebooks" className="text-white">Notebooks</Nav.Link>
              <Nav.Link href="/perifericos" className="text-white">Periféricos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;