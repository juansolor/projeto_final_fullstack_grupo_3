import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const OfertasPage = () => {
  const offerProducts = [
   {
      id: 1,
      name: 'PC Gamer',
      description: 'Um smartphone incrível com câmera de alta resolução.',
      image: 'http://localhost:3001/uploads/produtos/computador gamer.webp',
      originalPrice: 1999.99,
      promotionalPrice: 1000.99,
    },
    {
      id: 2,
      name: 'Notebook Gamer',
      description: 'Potência e desempenho para seus jogos favoritos.',
      image: 'http://localhost:3001/uploads/produtos/Notebook Acer Nitro V15.jpg',
      originalPrice: 4500.00,
      promotionalPrice: 4175.00,
    },
    {
      id: 3,
      name: 'Smart TV 4K',
      description: 'Experiência imersiva com cores vibrantes.',
      image: 'http://localhost:3001/uploads/produtos/Monitor Gamer Samsung.jpg',
      originalPrice: 2800.00,
      promotionalPrice: 2040.00,
    },
    {
      id: 4,
      name: 'Fone de Ouvido Bluetooth',
      description: 'Áudio de alta qualidade e conforto para o dia a dia.',
      image: 'http://localhost:3001/uploads/produtos/Havit Fone de Ouvido Headse.jpg',
      originalPrice: 250.00,
      promotionalPrice: 200.00,
    },
  ];

  return (
    <Container className="my-5 pt-5">
      <h2 className="text-danger text-center mb-4">Ofertas Especiais!</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {offerProducts.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OfertasPage;
