import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useNavigate, useSearchParams } from "react-router-dom";

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

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const produtosFallback = ofertasFallback.map((img, idx) => {
  const originalPrice = parseFloat((`R$ ${(Math.random() * 2000 + 100).toFixed(2)}`).replace('R$ ', '').replace(',', '.'));
  const discountString = randomFrom(descontos);
  const discountPercentage = parseFloat(discountString.replace('% Desconto', ''));

  let promotionalPrice = null;
  if (!isNaN(discountPercentage) && discountPercentage > 0) {
    promotionalPrice = originalPrice * (1 - discountPercentage / 100);
  }

  return {
    title: titulos[idx % titulos.length],
    description: randomFrom(descricoes),
    nome: titulos[idx % titulos.length].split(' ')[0],
    img: require(`../assets/${img}`),
    price: `R$ ${originalPrice.toFixed(2)}`.replace('.', ','),
    promotionalPrice: promotionalPrice ? `R$ ${promotionalPrice.toFixed(2)}`.replace('.', ',') : null,
    discountPercentage: discountPercentage,
    stars: 5,
    details: "Detalhes do produto aqui.",
    info: "Informações adicionais aqui."
  };
});

const carouselImages = [
  require("../assets/Auragear-produto2.jpg"),
  require("../assets/Byteware-produto1.jpg"),
  require("../assets/NexaCore - produto1.jpg"),
  require("../assets/soundpulse-produto1.jpg"),
  require("../assets/Auragear-produto3.jpg"),
  require("../assets/Byteware-produto2.jpg"),
  require("../assets/NexaCore-produto3.jpg"),
  require("../assets/soundpulse-logo.jpg"),
  require("../assets/PeriTech-produto1.jpg"),
  require("../assets/Quanttum-produto1.jpg"),
  require("../assets/PeriTech-produto2.jpg"),
  require("../assets/Quanttum-produto2.jpg"),
  require("../assets/NexaCore-produto4.jpg"),
  require("../assets/Aureagerar-produto1.jpg")
];

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [produtos, setProdutos] = useState([]);
  const [filteredProdutos, setFilteredProdutos] = useState([]);
  const [promotionalProducts, setPromotionalProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [priceRange, setPriceRange] = useState(2000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    fetch("/api/produtos")
      .then(res => res.json())
      .then(data => {
        const products = (Array.isArray(data) && data.length > 0) ? data : produtosFallback;
        setProdutos(products);
        setFilteredProdutos(products);
      })
      .catch(() => {
        setProdutos(produtosFallback);
        setFilteredProdutos(produtosFallback);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/produtos")
      .then(res => res.json())
      .then(data => {
        const productsWithFullImageUrl = data.map(product => {
          let category = "periferico";
          const productNameLower = product.name.toLowerCase();

          if (productNameLower.includes("notebook") || productNameLower.includes("laptop")) {
            category = "notebook";
          } else if (productNameLower.includes("monitor")) {
            category = "monitor";
          } else if (productNameLower.includes("impressora")) {
            category = "impressora";
          }

          return {
            ...product,
            image: `http://localhost:3001/uploads/produtos/${product.image}`,
            category: category
          };
        });
        setNewProducts(productsWithFullImageUrl);
      })
      .catch(error => {
        console.error("Erro ao buscar novos produtos da API:", error);
      });
  }, []);

  useEffect(() => {
    let filtered = [...produtos];

    const searchTerm = searchParams.get('search');
    if (searchTerm) {
      filtered = filtered.filter(p =>
        (p.title || p.name).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(p => (p.title || p.name).toLowerCase().includes(selectedCategory));
    }

    const parsePrice = (priceString) => {
      if (!priceString) return 0;
      if (typeof priceString === 'number') return priceString;
      return parseFloat(priceString.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
    };

    filtered = filtered.filter(p => {
      const price = parsePrice(p.price || p.promotionalPrice);
      return price <= priceRange;
    });

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.nome));
    }

    setFilteredProdutos(filtered);
    setCurrentPage(1);
  }, [produtos, selectedCategory, priceRange, selectedBrands, searchParams]);

  useEffect(() => {
    const promoProducts = produtos.slice(0, 4).map(product => {
      const originalPrice = parseFloat((product.price || product.promotionalPrice).replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
      const discountString = randomFrom(descontos);
      const discountPercentage = parseFloat(discountString.replace('% Desconto', ''));

      let promotionalPrice = null;
      if (!isNaN(discountPercentage) && discountPercentage > 0) {
        promotionalPrice = originalPrice * (1 - discountPercentage / 100);
      }

      return {
        ...product,
        price: `R$ ${originalPrice.toFixed(2)}`.replace('.', ','),
        promotionalPrice: promotionalPrice ? `R$ ${promotionalPrice.toFixed(2)}`.replace('.', ',') : null,
        discountPercentage: discountPercentage,
      };
    });
    setPromotionalProducts(promoProducts);
  }, [produtos]);

  const handleVerProduto = (produto) => {
    navigate("/produto", { state: { produto } });
  };

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handlePriceChange = (e) => setPriceRange(e.target.value);
  const handleBrandChange = (e) => {
    const { value, checked } = e.target;
    setSelectedBrands(prev =>
      checked ? [...prev, value] : prev.filter(brand => brand !== value)
    );
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProdutos.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProdutos.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ background: "#90EE90", minHeight: "100vh" }}>
      <div className="container py-4" style={{ background: "#FFFFFF" }}>
        {/* Carrossel */}
        <div className="row align-items-center mb-4">
          <div className="col-12 col-md-10 mx-auto">
            <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false">
              <div className="carousel-inner rounded-4 shadow">
                {carouselImages.map((img, idx) => (
                  <div className={`carousel-item${idx === 0 ? " active" : ""}`} key={idx}>
                    <img src={img} className="d-block w-100" alt={`slide-${idx}`} style={{ objectFit: "cover", borderRadius: 24 }} />
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

        {/* Seção de Destaques */}
        <h2 className="text-center mb-4" style={{ color: "#d90000", fontWeight: 700, fontSize: 32 }}>Promoções Imperdíveis!!!</h2>
        <div className="row justify-content-center g-4 mb-5">
          {promotionalProducts.map((produto, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={idx}>
              <div className="card shadow-sm border-0 position-relative" style={{ borderRadius: 16 }}>
                {produto.discountPercentage > 0 && (
                  <span className="badge bg-danger position-absolute" style={{ top: 10, left: 10 }}>-{produto.discountPercentage}%</span>
                )}
                <img src={produto.img || produto.image} className="card-img-top" alt={produto.title || produto.name} style={{ objectFit: "cover" }} />
                <div className="card-body">
                  <div className="mb-2">
                    {Array.from({ length: produto.stars || 5 }).map((_, i) => (
                      <span key={i} style={{ color: "#FFD700", fontSize: 18 }}>★</span>
                    ))}
                  </div>
                  <h5 className="card-title" style={{ color: "#8439CC" }}>{produto.title || produto.name}</h5>
                  <p className="card-text">{produto.description}</p>
                  <div className="mb-2">
                    {produto.promotionalPrice && (
                      <span className="text-muted text-decoration-line-through me-2">{produto.price}</span>
                    )}
                    <span className="fw-bold text-danger">{produto.promotionalPrice || produto.price}</span>
                  </div>
                  <button className="btn w-100" style={{ background: "#3FD37D", color: "#fff" }} onClick={() => handleVerProduto(produto)}>
                    Ver produto
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banners de Promoção */}
        <div className="row justify-content-center g-4 mb-5">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <a href="/user">
              <img src="http://localhost:3001/uploads/Promo/2.png" alt="Promo Banner 1" className="img-fluid rounded-4 shadow" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
            </a>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <a href="/user">
              <img src="http://localhost:3001/uploads/Promo/3.png" alt="Promo Banner 2" className="img-fluid rounded-4 shadow" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
            </a>
          </div>
        </div>

        {/* Seção de Filtros + Produtos */}
        <h2 className="text-center mb-4" style={{ color: "#d90000", fontWeight: 700, fontSize: 32 }}>Nossos Produtos</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card shadow-sm border-0 p-3">
              <h5 style={{ color: "#8439CC" }}>Filtros</h5>
              <label className="form-label mt-2">Categoria</label>
              <select className="form-select mb-3" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="Todas">Todas</option>
                <option value="headset">Headsets</option>
                <option value="mouse">Mouses</option>
                <option value="teclado">Teclados</option>
                <option value="speaker">Caixas de Som</option>
              </select>

              <label className="form-label">Preço: R$ {priceRange}</label>
              <input type="range" className="form-range mb-3" min="0" max="2000" value={priceRange} onChange={handlePriceChange} />

              <label className="form-label">Marca</label>
              {["Auragear", "Byteware", "NexaCore"].map((brand, i) => (
                <div className="form-check" key={i}>
                  <input className="form-check-input" type="checkbox" value={brand} id={`brand-${brand}`} onChange={handleBrandChange} />
                  <label className="form-check-label" htmlFor={`brand-${brand}`}>{brand}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-9">
            <div className="row g-4">
              {currentProducts.map((produto, idx) => (
                <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center" key={idx}>
                  <div className="card shadow-sm border-0" style={{ borderRadius: 16 }}>
                    <img src={produto.img || produto.image} className="card-img-top" alt={produto.title || produto.name} style={{ objectFit: "cover" }} />
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "#8439CC" }}>{produto.title || produto.name}</h5>
                      <p className="card-text">{produto.description}</p>
                      <div className="fw-bold text-danger mb-2">{produto.price || `R$ ${produto.promotionalPrice}`}</div>
                      <button className="btn w-100" style={{ background: "#3FD37D", color: "#fff" }} onClick={() => handleVerProduto(produto)}>
                        Ver produto
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginação */}
            <nav className="d-flex justify-content-center mt-4">
              <ul className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                    <a onClick={() => paginate(number)} href="#!" className="page-link">
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Aplicativo */}
        <div className="text-center my-5">
          <h3 className="mb-3" style={{ color: "#d90000", fontWeight: 700 }}>Baixe nosso Aplicativo</h3>
          <div className="d-flex justify-content-center gap-3">
            <a href="#">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ height: 50 }} />
            </a>
            <a href="#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: 50 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
