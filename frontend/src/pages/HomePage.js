import React, { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import ProductCard from '../components/ProductCard';
import ProductGrid from '../components/ProductGrid';
import { Container, Row, Col, Pagination, Form, Button } from 'react-bootstrap';

function HomePage() {
  const promotionalProducts = [
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
      promotionalPrice: 3825.00,
    },
    {
      id: 3,
      name: 'Smart TV 4K',
      description: 'Experiência imersiva com cores vibrantes.',
      image: 'http://localhost:3001/uploads/produtos/Monitor Gamer Samsung.jpg',
      originalPrice: 2800.00,
      promotionalPrice: 2660.00,
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

  const allCatalogProducts = [
    {
      id: 5,
      name: 'Câmera Fotográfica',
      description: 'Capture momentos inesquecíveis com alta qualidade.',
      image: 'http://localhost:3001/uploads/produtos/Auragear-produto3.jpg',
      promotionalPrice: 1000.00,
    },
    {
      id: 6,
      name: 'Impressora Multifuncional Epson Ecotank L4260',
      description: 'Imprimir qualquer coisa.',
      image: 'http://localhost:3001/uploads/produtos/Impressora Multifuncional Epson Ecotank L4260.webp',
      promotionalPrice: 700.00,
    },
    {
      id: 7,
      name: 'Smartwatch',
      description: 'Mantenha-se conectado e monitore sua saúde.',
      image: 'http://localhost:3001/uploads/produtos/Byteware-produto2.jpg',
      promotionalPrice: 280.00,
    },
    {
      id: 8,
      name: 'Fone de Ouvido Bluetooth',
      description: 'Fone de ouvido para jogos e ouvir música.',
      image: 'http://localhost:3001/uploads/produtos/Headphone Fone de Ouvido.jpg',
      promotionalPrice: 120.00,
    },
    {
      id: 9,
      name: 'Monitor Ultrawide',
      description: 'Ampla visão para jogos e trabalho.',
      image: 'http://localhost:3001/uploads/produtos/Monitor.jpg',
      promotionalPrice: 1350.00,
    },
     {
      id: 17,
      name: 'ClÉ USB',
      description: 'Descrição para ClÉ USB.',
      image: 'http://localhost:3001/uploads/produtos/ClÉ USB.jpg',
      promotionalPrice: 50.00,
    },
    {
      id: 18,
      name: 'computador gamer',
      description: 'Descrição para computador gamer.',
      image: 'http://localhost:3001/uploads/produtos/computador gamer.webp',
      promotionalPrice: 3500.00,
    },
    {
      id: 10,
      name: 'Teclado Mecânico',
      description: 'Precisão e conforto para digitação e jogos.',
      image: 'http://localhost:3001/uploads/produtos/Teclado Mecânico RGB.jpg',
      promotionalPrice: 350.00,
    },
    {
      id: 11,
      name: 'Mouse Gamer',
      description: 'Controle total e agilidade em suas partidas.',
      image: 'http://localhost:3001/uploads/produtos/Mouse Gamer Sem Fio.jpg',
      promotionalPrice: 180.00,
    },
    {
      id: 12,
      name: 'Webcam Full HD',
      description: 'Videochamadas nítidas e gravações de alta qualidade.',
      image: 'http://localhost:3001/uploads/produtos/gamerlink-produto.jpg',
      promotionalPrice: 90.00,
    },
    {
      id: 13,
      name: 'Headphone de Estúdio',
      description: 'Qualidade de áudio profissional para mixagem e masterização.',
      image: 'http://localhost:3001/uploads/produtos/Headphone Fone de Ouvido.jpg',
      promotionalPrice: 600.00,
    },
    {
      id: 14,
      name: 'Microfone Condensador',
      description: 'Ideal para gravações de voz e instrumentos.',
      image: 'http://localhost:3001/uploads/produtos/NexaCore-produto3.jpg',
      promotionalPrice: 450.00,
    },
    {
      id: 15,
      name: 'Placa de Som Externa',
      description: 'Melhore a qualidade de áudio do seu PC.',
      image: 'http://localhost:3001/uploads/produtos/NexaCore-produto4.jpg',
      promotionalPrice: 250.00,
    },
    {
      id: 16,
      name: 'Cadeira Gamer Ergonômica',
      description: 'Conforto para longas sessões de jogo.',
      image: 'http://localhost:3001/uploads/produtos/Notebook ASUS TUF Gaming.jpg',
      promotionalPrice: 900.00,
    },
    {
      id: 19,
      name: 'Computador PC Gamer Completo TOB In',
      description: 'Descrição para Computador PC Gamer Completo TOB In.',
      image: 'http://localhost:3001/uploads/produtos/Computador PC Gamer Completo TOB In.webp',
      promotionalPrice: 4000.00,
    },
    {
      id: 20,
      name: 'Fone de ouvido',
      description: 'Descrição para Fone de ouvido.',
      image: 'http://localhost:3001/uploads/produtos/Fone de ouvido.jpg',
      promotionalPrice: 150.00,
    },
    {
      id: 21,
      name: 'Impressora Multifuncional Epson Ecotank L4260',
      description: 'Descrição para Impressora Multifuncional Epson Ecotank L4260.',
      image: 'http://localhost:3001/uploads/produtos/Impressora Multifuncional Epson Ecotank L4260.webp',
      promotionalPrice: 800.00,
    },
    {
      id: 22,
      name: 'Impressora Multifuncional HP DeskJet Ink 2874 Wi-Fi Jato de Tinta Térmico Colorida USB',
      description: 'Descrição para Impressora Multifuncional HP DeskJet Ink 2874 Wi-Fi Jato de Tinta Térmico Colorida USB.',
      image: 'http://localhost:3001/uploads/produtos/Impressora Multifuncional HP DeskJet Ink 2874 Wi-Fi Jato de Tinta Térmico Colorida USB.webp',
      promotionalPrice: 600.00,
    },
    {
      id: 23,
      name: 'Impressora Multifuncional HP Smart Tank 583 Wi-Fi - Tanque de tinta Colorida USB',
      description: 'Descrição para Impressora Multifuncional HP Smart Tank 583 Wi-Fi - Tanque de tinta Colorida USB.',
      image: 'http://localhost:3001/uploads/produtos/Impressora Multifuncional HP Smart Tank 583 Wi-Fi - Tanque de tinta Colorida USB.webp',
      promotionalPrice: 950.00,
    },
    {
      id: 24,
      name: 'Kit Teclado e Mouse sem Fio Dell KM3322W',
      description: 'Descrição para Kit Teclado e Mouse sem Fio Dell KM3322W.',
      image: 'http://localhost:3001/uploads/produtos/Kit Teclado e Mouse sem Fio Dell KM3322W.webp',
      promotionalPrice: 200.00,
    },
    {
      id: 25,
      name: 'Lenovo',
      description: 'Descrição para Lenovo.',
      image: 'http://localhost:3001/uploads/produtos/Lenovo.jpg',
      promotionalPrice: 1200.00,
    },
    {
      id: 26,
      name: 'memoria ram',
      description: 'Descrição para memoria ram.',
      image: 'http://localhost:3001/uploads/produtos/memoria ram.webp',
      promotionalPrice: 180.00,
    },
    {
      id: 27,
      name: 'Monitor 100Hz Full HD Widescreen 1ms AOC Série B35 22B35HM2 21,',
      description: 'Descrição para Monitor 100Hz Full HD Widescreen 1ms AOC Série B35 22B35HM2 21,.',
      image: 'http://localhost:3001/uploads/produtos/Monitor 100Hz Full HD Widescreen 1ms AOC Série B35 22B35HM2 21,.webp',
      promotionalPrice: 750.00,
    },
    {
      id: 28,
      name: 'Monitor 100Hz Full HD Widescreen 1ms AOC Série B35 22B35HM2 21',
      description: 'Descrição para Monitor 100Hz Full HD Widescreen 1ms AOC Série B35 22B35HM2 21.',
      image: 'http://localhost:3001/uploads/produtos/Monitor 100Hz Full HD Widescreen 1ms AOC Série B35 22B35HM2 21.webp',
      promotionalPrice: 750.00,
    },
    {
      id: 29,
      name: 'Monitor 20LED 75Hz 5ms BRX Office Widescreen HDMI e VGA',
      description: 'Descrição para Monitor 20LED 75Hz 5ms BRX Office Widescreen HDMI e VGA.',
      image: 'http://localhost:3001/uploads/produtos/Monitor 20LED 75Hz 5ms BRX Office Widescreen HDMI e VGA.webp',
      promotionalPrice: 400.00,
    },
    {
      id: 30,
      name: 'Nexa',
      description: 'Descrição para Nexa.',
      image: 'http://localhost:3001/uploads/produtos/Nexa.jpg',
      promotionalPrice: 100.00,
    },
    {
      id: 31,
      name: 'NexaCore',
      description: 'Descrição para NexaCore.',
      image: 'http://localhost:3001/uploads/produtos/NexaCore.jpg',
      promotionalPrice: 100.00,
    },
    {
      id: 32,
      name: 'Notebook Acer Aspire 5 Intel Core i5 12450H 8GB RAM 512GB SSD 15,6” Full HD Windows 11 A515-57-565J',
      description: 'Descrição para Notebook Acer Aspire 5 Intel Core i5 12450H 8GB RAM 512GB SSD 15,6” Full HD Windows 11 A515-57-565J.',
      image: 'http://localhost:3001/uploads/produtos/Notebook Acer Aspire 5 Intel Core i5 12450H 8GB RAM 512GB SSD 15,6” Full HD Windows 11 A515-57-565J.webp',
      promotionalPrice: 3000.00,
    },
    {
      id: 33,
      name: 'Notebook Acer Aspire A15-51M-54E6 Intel Core i513420H 13 Gen 8GB 512GB SSD Windows 11 Home 15.6',
      description: 'Descrição para Notebook Acer Aspire A15-51M-54E6 Intel Core i513420H 13 Gen 8GB 512GB SSD Windows 11 Home 15.6.',
      image: 'http://localhost:3001/uploads/produtos/Notebook Acer Aspire A15-51M-54E6 Intel Core i513420H 13 Gen 8GB 512GB SSD Windows 11 Home 15.6.webp',
      promotionalPrice: 3200.00,
    },
    {
      id: 34,
      name: 'Notebook Dell Inspiron 15 I15I120KA35P Intel Core',
      description: 'Descrição para Notebook Dell Inspiron 15 I15I120KA35P Intel Core.',
      image: 'http://localhost:3001/uploads/produtos/Notebook Dell Inspiron 15 I15I120KA35P Intel Core.webp',
      promotionalPrice: 2800.00,
    },
    {
      id: 35,
      name: 'Notebook Lenovo IdeaPad 1i Intel Core i5 - 8GB RAM SSD 512GB Windows 11 15,6” 15IAU7',
      description: 'Descrição para Notebook Lenovo IdeaPad 1i Intel Core i5 - 8GB RAM SSD 512GB Windows 11 15,6” 15IAU7.',
      image: 'http://localhost:3001/uploads/produtos/Notebook Lenovo IdeaPad 1i Intel Core i5 - 8GB RAM SSD 512GB Windows 11 15,6” 15IAU7.webp',
      promotionalPrice: 2900.00,
    },
    {
      id: 36,
      name: 'PC Gamer Completo Skill RGB AMD Ryzen 5',
      description: 'Descrição para PC Gamer Completo Skill RGB AMD Ryzen 5.',
      image: 'http://localhost:3001/uploads/produtos/PC Gamer Completo Skill RGB AMD Ryzen 5.webp',
      promotionalPrice: 4500.00,
    },
    {
      id: 37,
      name: 'PC Gamer Skill Aquarium, AMD Ryzen 5 5600GT, 16GB 3200MHz, Radeon Vega 7, SSD 512GB M.2, Fonte 500w, Preto SKA003',
      description: 'Descrição para PC Gamer Skill Aquarium, AMD Ryzen 5 5600GT, 16GB 3200MHz, Radeon Vega 7, SSD 512GB M.2, Fonte 500w, Preto SKA003.',
      promotionalPrice: 5000.00,
    },
    {
      id: 38,
      name: 'PC Gamer Skill Aquarium, AMD Ryzen 7 5700G, 16GB 3200MHz, Radeon Vega 8, SSD 512GB M.2, Fonte 500w, Preto SKA005',
      description: 'Descrição para PC Gamer Skill Aquarium, AMD Ryzen 7 5700G, 16GB 3200MHz, Radeon Vega 8, SSD 512GB M.2, Fonte 500w, Preto SKA005.',
      promotionalPrice: 5500.00,
    },
    {
      id: 39,
      name: 'Pen Drive Lexar Twistturn2 32gb Usb 2.0 - Ljdtt2-32gabnabk',
      description: 'Descrição para Pen Drive Lexar Twistturn2 32gb Usb 2.0 - Ljdtt2-32gabnabk.',
      image: 'http://localhost:3001/uploads/produtos/Pen Drive Lexar Twistturn2 32gb Usb 2.0 - Ljdtt2-32gabnabk.webp',
      promotionalPrice: 80.00,
    },
    {
      id: 40,
      name: 'PeriTech-logo',
      description: 'Descrição para PeriTech-logo.',
      image: 'http://localhost:3001/uploads/produtos/PeriTech-logo.jpg',
      promotionalPrice: 10.00,
    },
    {
      id: 41,
      name: 'PeriTech-produto1',
      description: 'Descrição para PeriTech-produto1.',
      image: 'http://localhost:3001/uploads/produtos/PeriTech-produto1.jpg',
      promotionalPrice: 150.00,
    },
    {
      id: 42,
      name: 'PeriTech-produto2',
      description: 'Descrição para PeriTech-produto2.',
      image: 'http://localhost:3001/uploads/produtos/PeriTech-produto2.jpg',
      promotionalPrice: 200.00,
    },
    {
      id: 43,
      name: 'quanttum-logo',
      description: 'Descrição para quanttum-logo.',
      image: 'http://localhost:3001/uploads/produtos/quanttum-logo.jpg',
      promotionalPrice: 10.00,
    },
    {
      id: 44,
      name: 'Quanttum-produto1',
      description: 'Descrição para Quanttum-produto1.',
      image: 'http://localhost:3001/uploads/produtos/Quanttum-produto1.jpg',
      promotionalPrice: 120.00,
    },
    {
      id: 45,
      name: 'Quanttum-produto2',
      description: 'Descrição para Quanttum-produto2.',
      image: 'http://localhost:3001/uploads/produtos/Quanttum-produto2.jpg',
      promotionalPrice: 180.00,
    },
    {
      id: 46,
      name: 'quanttum-produto3',
      description: 'Descrição para quanttum-produto3.',
      image: 'http://localhost:3001/uploads/produtos/quanttum-produto3.jpg',
      promotionalPrice: 250.00,
    },
    {
      id: 47,
      name: 'soundpulse-logo',
      description: 'Descrição para soundpulse-logo.',
      image: 'http://localhost:3001/uploads/produtos/soundpulse-logo.jpg',
      promotionalPrice: 10.00,
    },
    {
      id: 48,
      name: 'soundpulse-produto1',
      description: 'Descrição para soundpulse-produto1.',
      image: 'http://localhost:3001/uploads/produtos/soundpulse-produto1.jpg',
      promotionalPrice: 70.00,
    },
    {
      id: 49,
      name: 'Teclado',
      description: 'Descrição para Teclado.',
      image: 'http://localhost:3001/uploads/produtos/Teclado.jpg',
      promotionalPrice: 100.00,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allCatalogProducts.filter(product => {
    const price = product.promotionalPrice;
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearchTerm) {
      return false;
    }
    if (minPrice !== '' && price < min) {
      return false;
    }
    if (maxPrice !== '' && price > max) {
      return false;
    }
    return true;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <ImageCarousel />
        <Container className="my-5">
          <h2 className="text-danger text-center mb-4">Promoções Imperdíveis!!!</h2>
          <Row>
            {promotionalProducts.map(product => (
              <Col key={product.id} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>

        <Container className="my-5">
          <h2 className="text-primary text-center mb-4">Nosso Catálogo</h2>
          <Row>
            <Col md={3} className="bg-light p-3 rounded shadow-sm"> {/* Sidebar for all filters */}
              <h5>Filtros</h5>
              <Form.Group controlId="searchTerm" className="mb-3">
                <Form.Label>Palavra-chave</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form.Group>

              <h5 className="mt-4">Faixa de Preço</h5>
              <Form.Group controlId="minPrice" className="mb-3">
                <Form.Label>Preço Mínimo</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="maxPrice" className="mb-3">
                <Form.Label>Preço Máximo</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </Form.Group>

              <h5 className="mt-4">Categorias</h5>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Eletrônicos" />
                <Form.Check type="checkbox" label="Informática" />
                <Form.Check type="checkbox" label="Periféricos" />
                <Form.Check type="checkbox" label="Games" />
              </Form.Group>

              <h5 className="mt-4">Marcas</h5>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Acer" />
                <Form.Check type="checkbox" label="HP" />
                <Form.Check type="checkbox" label="Dell" />
              </Form.Group>
              <Button variant="primary" className="w-100">Aplicar Filtros</Button>
            </Col>
            <Col md={9}> {/* Main content for product grid and pagination */}
              <ProductGrid products={currentProducts} />
              <div className="d-flex justify-content-center mt-4">
                <Pagination>
                  {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;