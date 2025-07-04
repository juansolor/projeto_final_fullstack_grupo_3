import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card className="h-100 shadow-sm position-relative">
      {product.originalPrice && product.promotionalPrice && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: 'red',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            fontWeight: 'bold',
            zIndex: 1,
          }}
        >
          {`-${(( (product.originalPrice - product.promotionalPrice) / product.originalPrice) * 100).toFixed(0)}%`}
        </div>
      )}
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">
          {product.description}
        </Card.Text>
        <div className="mb-2">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} color="gold" />
          ))}
        </div>
        <Card.Text>
          {product.originalPrice && product.promotionalPrice ? (
            <>
              <span className="text-decoration-line-through text-muted me-2">R${product.originalPrice.toFixed(2)}</span>
              <span className="fw-bold text-danger">R${product.promotionalPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="fw-bold text-success">R${product.promotionalPrice.toFixed(2)}</span>
          )}
        </Card.Text>
        <Button as={Link} to={`/product/${product.id}`} variant="success" className="mt-auto">
          Ver produto
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;