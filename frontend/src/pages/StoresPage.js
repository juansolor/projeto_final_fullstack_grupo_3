import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Card, Row, Col } from 'react-bootstrap';

function StoresPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="flex-grow-1 my-5">
        <h1>Nossas Lojas Físicas</h1>
        <p>Encontre a unidade mais próxima de você.</p>

        <Row>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Loja Centro</Card.Title>
                <Card.Text>
                  Rua Principal, 123 - Centro - Cidade/Estado
                  <br />
                  Horário de Funcionamento: Seg-Sex: 9h-18h, Sáb: 9h-13h
                </Card.Text>
                {/* Placeholder para mapa */}
                <div style={{ height: '200px', backgroundColor: '#e9ecef', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  Mapa da Loja Centro
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Loja Shopping</Card.Title>
                <Card.Text>
                  Av. Comercial, 456 - Shopping XYZ - Cidade/Estado
                  <br />
                  Horário de Funcionamento: Seg-Sáb: 10h-22h, Dom: 14h-20h
                </Card.Text>
                {/* Placeholder para mapa */}
                <div style={{ height: '200px', backgroundColor: '#e9ecef', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  Mapa da Loja Shopping
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default StoresPage;
