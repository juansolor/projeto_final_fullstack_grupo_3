import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LojasProximity = () => {
  const [cep, setCep] = useState('');
  const [lojas, setLojas] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Aqui você integraria com uma API para buscar lojas por CEP
    // Por enquanto, vamos simular alguns resultados
    if (cep === '12345-678') {
      setLojas([
        { id: 1, nome: 'Loja A', endereco: 'Rua Principal, 123', distancia: '2 km' },
        { id: 2, nome: 'Loja B', endereco: 'Avenida Central, 456', distancia: '5 km' },
      ]);
    } else {
      setLojas([]);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Encontre Nossas Lojas Próximas</h2>
      <Form onSubmit={handleSearch} className="mb-4">
        <Form.Group controlId="formCep">
          <Form.Label>Digite seu CEP:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: 12345-678"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Buscar Lojas
        </Button>
      </Form>

      {lojas.length > 0 ? (
        <div>
          <h3>Lojas Encontradas:</h3>
          <ul className="list-group">
            {lojas.map((loja) => (
              <li key={loja.id} className="list-group-item">
                <h5>{loja.nome}</h5>
                <p>Endereço: {loja.endereco}</p>
                <p>Distância: {loja.distancia}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Nenhuma loja encontrada para o CEP informado.</p>
      )}
    </Container>
  );
};

export default LojasProximity;
