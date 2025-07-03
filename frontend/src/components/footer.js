import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <Container>
                <Row>
                    <Col md={3} className="mb-4">
                        <Link to="/" className="d-flex align-items-center text-white text-decoration-none mb-3">
                            <img src="http://localhost:3001/uploads/logo/logo.png" alt="Logo" style={{ width: "30px", height: "auto" }} className="me-2" />
                            E-Commerce Toti
                        </Link>
                        <p>&copy; {new Date().getFullYear()} E-Commerce Toti | Grupo 3</p>
                    </Col>
                    <Col md={3} className="mb-4">
                        <h5>Atendimento</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/historico-compras" className="text-white text-decoration-none">Meus pedidos</Link></li>
                            <li><Link to="/atendimento" className="text-white text-decoration-none">Central de atendimento</Link></li>
                            <li><Link to="/atendimento" className="text-white text-decoration-none">Fale conosco</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-4">
                        <h5>Institucional</h5>
                        <ul className="list-unstyled">
                            <li><Link to="#" className="text-white text-decoration-none">Quem somos</Link></li>
                            <li><Link to="/lojas" className="text-white text-decoration-none">Nossas lojas</Link></li>
                            <li><Link to="/trabalhe-conosco" className="text-white text-decoration-none">Trabalhe conosco</Link></li>
                            <li><Link to="#" className="text-white text-decoration-none">Imprensa Blog</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-4">
                        <h5>Políticas</h5>
                        <ul className="list-unstyled">
                            <li><Link to="#" className="text-white text-decoration-none">Políticas de Trocas</Link></li>
                            <li><Link to="#" className="text-white text-decoration-none">Política de Devoluções</Link></li>
                            <li><Link to="#" className="text-white text-decoration-none">Políticas de Privacidade</Link></li>
                            <li><Link to="#" className="text-white text-decoration-none">Termos de Uso</Link></li>
                            <li><Link to="#" className="text-white text-decoration-none">Políticas de Diversidade</Link></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <h4 className="text-danger mb-3">Baixe nosso Aplicativo</h4>
                        <Button variant="light" className="me-2 mb-2">
                            <FaApple className="me-1" /> App Store
                        </Button>
                        <Button variant="light" className="mb-2">
                            <FaGooglePlay className="me-1" /> Google Play
                        </Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;