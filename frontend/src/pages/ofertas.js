import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

// Productos locales como fallback
const ofertasFallback = [
  "Auragear-produto2.jpg", "Auragear-produto3.jpg", "Aureagerar-produto1.jpg", "Auragear-logo.jpg",
  "Byteware-produto1.jpg", "Byteware-produto2.jpg", "Byteware-produto3.jpg", "Bytewave - logo.jpg",
  "gamerlink-produto.jpg", "gamerlink-logo.jpg",
  "NexaCore - produto1.jpg", "NexaCore - produto2.jpg", "NexaCore-produto3.jpg", "NexaCore-produto4.jpg", "NexaCore - logo.jpg",
  "optiview-produto1.jpg", "optiview-produto2.jpg", "optiview-produto3.jpg", "optiview-logo.jpg",
  "PeriTech-produto1.jpg", "PeriTech-produto2.jpg", "PeriTech-logo.jpg",
  "Quanttum-produto1.jpg", "Quanttum-produto2.jpg", "quanttum-produto3.jpg", "quanttum-logo.jpg",
  "soundpulse-produto1.jpg", "soundpulse-logo.jpg",
  "e-commerce.jpg", "logo.png"
];

const titulos = [
  "Headset Gamer", "Mouse Óptico", "Teclado Mecânico", "Webcam HD", "Monitor LED", "Impressora Wi-Fi", "Caixa de Som Bluetooth", "Notebook Pro", "SSD Externo", "Placa de Vídeo", "Memória RAM", "Hub USB", "Microfone Condensador", "Cadeira Gamer", "Roteador Wi-Fi", "Smartwatch", "Tablet 10''", "Fone Bluetooth", "Carregador Turbo", "HD Externo", "Teclado Numérico", "Mousepad RGB", "Adaptador HDMI", "Controle Wireless", "Pen Drive 64GB", "Câmera de Segurança", "Projetor Portátil", "Estabilizador", "Fonte ATX"
];

const descricoes = [
  "Produto de alta qualidade para gamers exigentes.",
  "Ideal para trabalho e lazer, com design moderno.",
  "Tecnologia de ponta e máxima performance.",
  "Compatível com diversos dispositivos.",
  "Garantia de 1 ano e suporte nacional."
];

const descontos = ["10% Desconto", "15% Desconto", "20% Desconto", "25% Desconto", "30% Desconto", "35% Desconto", "40% Desconto", "45% Desconto", "50% Desconto"];

function randomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const ofertasLocal = ofertasFallback.map((img, idx) => ({
  title: titulos[idx % titulos.length],
  description: randomFrom(descricoes),
  img: img, // Usar solo el nombre del archivo, no require
  price: `R$ ${(Math.random() * 2000 + 100).toFixed(2)}`.replace('.', ','),
  desconto: randomFrom(descontos),
  stars: 5,
  details: "Detalhes do produto aqui.",
  info: "Informações adicionais aqui."
}));

// Eliminar los dos últimos productos (Fonte ATX e Headset Gamer) del array de ofertas
const ofertasFallbackFiltradas = ofertasLocal.slice(0, ofertasLocal.length - 2);

const Ofertas = () => {
  const navigate = useNavigate();
  const [ofertas, setOfertas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/produtos`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setOfertas(data);
        } else {
          setOfertas(ofertasFallbackFiltradas);
        }
      })
      .catch(() => setOfertas(ofertasFallbackFiltradas));
  }, []);

  const handleComprar = async (oferta) => {
    setIsLoading(true);
    let produtoCompleto = oferta;
    if (oferta.id) {
      try {
        const res = await fetch(`${API_URL}/api/produtos/${oferta.id}`);
        if (res.ok) {
          produtoCompleto = await res.json();
        } else {
          alert('No se pudo obtener el producto actualizado.');
          setIsLoading(false);
          return;
        }
      } catch (e) {
        alert('Error al obtener el producto actualizado.');
        setIsLoading(false);
        return;
      }
    }
    // Adaptar los campos para el backend
    let img = produtoCompleto.img || produtoCompleto.image || '';
    if (img && !img.startsWith('/assets/')) {
      // Si es solo el nombre del archivo, prepende la ruta
      if (!img.startsWith('http') && !img.startsWith('/')) {
        img = `/assets/${img}`;
      } else if (img.startsWith('/')) {
        img = `/assets/${img.replace(/^\/+/, '')}`;
      }
    }
    const item = {
      title: produtoCompleto.title || produtoCompleto.name || 'Produto',
      img,
      preco: produtoCompleto.preco || produtoCompleto.price || 0,
      quantidade: 1
    };
    try {
      await fetch(`${API_URL}/api/carrinho`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
      });
    } catch (e) {
      alert('Error de red al agregar el producto al carrito.');
    } finally {
      setIsLoading(false);
      navigate("/carrinho");
    }
  };

  // Función para obtener la URL de la imagen del produto
  const getImageUrl = (produto) => {
    if (!produto) return '/assets/default.jpg';
    // Si el producto viene de la API y tiene atributo image, usar /assets/image
    if (produto.image) return `/assets/${produto.image}`;
    if (typeof produto.img === 'string') {
      if (produto.img.startsWith('http')) return produto.img;
      if (produto.img.startsWith('/')) return produto.img;
      return `/assets/${produto.img}`;
    }
    return '/assets/default.jpg';
  };

  return (
    <div className="container mt-5">
      <h1>Catálogo de Produtos</h1>
      <p>Aproveite as seguintes Promoções:</p>
      <div className="row justify-content-center g-4">
        {ofertas.map((oferta, idx) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch" key={idx}>
            <div className="card h-100 shadow-sm border-0" style={{ minWidth: 250 }}>
              <img src={getImageUrl(oferta)} className="card-img-top p-3" alt={oferta.title || oferta.name} style={{ height: 180, objectFit: 'contain', background: '#f8f9fa' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-2" style={{ fontWeight: 700 }}>{oferta.title || oferta.name}</h5>
                <p className="card-text mb-1" style={{ minHeight: 40 }}>{oferta.description}</p>
                <span className="badge mb-2 align-self-start" style={{ backgroundColor: '#d90000', color: '#fff', fontSize: '1em' }}>{oferta.desconto || oferta.promotionalPrice ? "Oferta" : ""}</span>
                <p className="card-text mb-2" style={{ fontSize: '1.2em', fontWeight: 600 }}>
                  <strong>{oferta.price || (oferta.promotionalPrice ? `R$ ${oferta.promotionalPrice}` : `R$ ${oferta.price}`)}</strong>
                </p>
                <div className="mt-auto">
                  <button className="btn btn-compra w-100" style={{background: 'linear-gradient(90deg, #3FD37D 0%, #8439CC 100%)', color: '#fff', fontWeight: 600, borderRadius: 8}} onClick={() => handleComprar(oferta)} disabled={isLoading}>
                    {isLoading ? 'Procesando...' : 'Comprar'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Seção de app */}
      <div className="text-center my-5">
        <h3 className="mb-3" style={{ color: "#d90000", fontWeight: 700 }}>
          Baixe nosso Aplicativo
        </h3>
        <div className="d-flex justify-content-center gap-3">
          <a href="#">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              style={{ height: 50 }}
            />
          </a>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              style={{ height: 50 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ofertas;
