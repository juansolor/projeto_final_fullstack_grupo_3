import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

// Productos locales como fallback
const produtosFallback = [
  {
    title: "Auragear Headset",
    description: "Headset gamer RGB com som surround.",
    nome: "Auragear",
    img: "/assets/Auragear-produto2.jpg",
    price: "R$ 1.049,99",
    desconto: "20% Desconto",
    stars: 5,
    details: "Headset gamer RGB, som surround, microfone removível, conexão USB.",
    info: "Compatível com PC, PS4, Xbox. Garantia 1 ano."
  },
  {
    title: "Byteware Mouse",
    description: "Mouse óptico de alta precisão.",
    nome: "Byteware",
    img: "/assets/Byteware-produto1.jpg",
    price: "R$ 659,00",
    desconto: "47% Desconto",
    stars: 4,
    details: "Mouse óptico, 16000 DPI, RGB, 7 botões programáveis.",
    info: "Compatível com Windows, Mac. Garantia 1 ano."
  },
  {
    title: "NexaCore Teclado",
    description: "Teclado mecânico retroiluminado.",
    nome: "NexaCore",
    img: "/assets/NexaCore - produto1.jpg",
    price: "R$ 859,00",
    desconto: "50% Desconto",
    stars: 5,
    details: "Teclado mecânico, switches blue, RGB, anti-ghosting.",
    info: "Compatível com Windows, Mac. Garantia 1 ano."
  },
  {
    title: "Soundpulse Speaker",
    description: "Caixa de som bluetooth potente.",
    nome: "Soundpulse",
    img: "/assets/soundpulse-produto1.jpg",
    price: "R$ 1.049,99",
    desconto: "27% Desconto",
    stars: 4,
    details: "Bluetooth 5.0, bateria 12h, à prova d'água.",
    info: "Compatível com todos dispositivos bluetooth. Garantia 1 ano."
  }
];

const carouselImages = [
  "/assets/Auragear-produto2.jpg",
  "/assets/Byteware-produto1.jpg",
  "/assets/NexaCore - produto1.jpg",
  "/assets/soundpulse-produto1.jpg",
  "/assets/Auragear-produto3.jpg",
  "/assets/Byteware-produto2.jpg",
  "/assets/NexaCore-produto3.jpg",
  "/assets/soundpulse-logo.jpg",
  "/assets/PeriTech-produto1.jpg",
  "/assets/Quanttum-produto1.jpg",
  "/assets/PeriTech-produto2.jpg",
  "/assets/Quanttum-produto2.jpg",
  "/assets/NexaCore-produto4.jpg",
  "/assets/Aureagerar-produto1.jpg"
];

const Home = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // Inicializa el carrusel manualmente para asegurar el autoplay
    let carouselInstance = null;
    (async () => {
      const carouselEl = document.getElementById('mainCarousel');
      if (!carouselEl) return;
      let BootstrapCarousel = null;
      if (window.bootstrap && window.bootstrap.Carousel) {
        BootstrapCarousel = window.bootstrap.Carousel;
      } else {
        try {
          const bootstrapLib = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
          BootstrapCarousel = bootstrapLib.Carousel;
        } catch (e) {
          // No Bootstrap JS found
        }
      }
      if (BootstrapCarousel) {
        carouselInstance = new BootstrapCarousel(carouselEl, {
          interval: 5000,
          ride: 'carousel',
          pause: false,
          wrap: true
        });
      }
    })();
    return () => {
      if (carouselInstance && carouselInstance.dispose) carouselInstance.dispose();
    };
  }, []);

  useEffect(() => {
    // Traer productos de la API
    fetch("/api/produtos")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setProdutos(data);
        } else {
          setProdutos(produtosFallback);
        }
      })
      .catch(() => setProdutos(produtosFallback));
  }, []);

  const handleVerProduto = (produto) => {
    navigate("/produto", { state: { produto } });
  };

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <div className="container py-4">
        {/* Carrusel próprio com imagens de assets */}
        <div className="row align-items-center mb-4">
          <div className="col-12 col-md-10 mx-auto">
            <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false">
              <div className="carousel-inner rounded-4 shadow">
                {carouselImages.map((img, idx) => (
                  <div className={`carousel-item${idx === 0 ? " active" : ""}`} key={idx}>
                    <img src={img} className="d-block w-100" alt={`slide-${idx}`} style={{ height: 320, objectFit: 'cover', borderRadius: 24 }} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* Título de promoções */}
        <h2 className="text-center mb-4" style={{ color: "#d90000", fontWeight: 700, fontSize: 32, fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Promoções Imperdíveis!!!
        </h2>
        {/* Cards de produtos em destaque */}
        <div className="row justify-content-center g-4 mb-5">
          {produtos.map((produto, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={idx}>
              <div className="card shadow-sm border-0 position-relative" style={{ width: "18rem", borderRadius: 16 }}>
                <span className="badge bg-danger position-absolute" style={{ top: 10, left: 10, fontSize: 14 }}>{produto.desconto || produto.promotionalPrice ? "Oferta" : ""}</span>
                <img src={produto.img || produto.image} className="card-img-top" alt={produto.title || produto.name} style={{ height: 180, objectFit: "cover", borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />
                <div className="card-body" style={{ background: "#fff", borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
                  <div className="mb-2">
                    {Array.from({ length: produto.stars || 5 }).map((_, i) => (
                      <span key={i} style={{ color: "#FFD700", fontSize: 18 }}>★</span>
                    ))}
                  </div>
                  <h5 className="card-title" style={{ color: "#8439CC", fontWeight: 600 }}>{produto.title || produto.name}</h5>
                  <p className="card-text" style={{ color: "#333", minHeight: 40 }}>{produto.description}</p>
                  <div className="fw-bold text-danger mb-2" style={{ fontSize: 20 }}>{produto.price || (produto.promotionalPrice ? `R$ ${produto.promotionalPrice}` : `R$ ${produto.price}`)}</div>
                  <button className="btn w-100" style={{ background: "#3FD37D", color: "#fff", fontWeight: 600, borderRadius: 8 }} onClick={() => handleVerProduto(produto)}>
                    Ver produto
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Seção de app */}
        <div className="text-center my-5">
          <h3 className="mb-3" style={{ color: "#d90000", fontWeight: 700 }}>Baixe nosso Aplicativo</h3>
          <div className="d-flex justify-content-center gap-3">
            <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ height: 50 }} /></a>
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: 50 }} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;