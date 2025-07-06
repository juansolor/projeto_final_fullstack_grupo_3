import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const Produto = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const produto = location.state?.produto;

  const handleComprar = async () => {
    // Extrae y normaliza los datos para el backend
    const novoProduto = {
      title: produto.title,
      img:
        typeof produto.img === "string"
          ? produto.img
          : produto.img?.default || "",
      preco: Number((produto.promotionalPrice || produto.price).replace(/[^\d,]/g, "").replace(",", ".")),
      quantidade: 1,
    };
    try {
      await axios.post(`${API_URL}/api/carrinho`, novoProduto);
      // Redirige al carrinho sin pasar state, para que carrinho.js consuma el backend
      navigate("/carrinho");
    } catch (err) {
      alert("Erro ao adicionar produto ao carrinho");
    }
  };

  if (!produto) {
    return (
      <div className="container py-5">
        <h2>Produto não encontrado.</h2>
      </div>
    );
  }

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <div className="container py-4">
        {/* Breadcrumb */}
        <div className="mb-3" style={{ fontSize: 14, color: "#555" }}>
          Você está em: <b>Categoria</b> &gt; <b>{produto.nome}</b> &gt;{" "}
          <b>{produto.title}</b>
        </div>
        {/* Produto principal */}
        <div className="row bg-white p-4 rounded-3 align-items-center mb-4 shadow-sm">
          <div className="col-md-5 text-center">
            <img
              src={produto.img}
              alt={produto.title}
              style={{ maxWidth: 350, maxHeight: 250, objectFit: "contain" }}
            />
          </div>
          <div className="col-md-7">
            <h2 style={{ fontWeight: 700 }}>{produto.title}</h2>
            <div className="mb-2">
              {Array.from({ length: produto.stars }).map((_, i) => (
                <span key={i} style={{ color: "#FFD700", fontSize: 20 }}>
                  ★
                </span>
              ))}
            </div>
            <div className="fw-bold text-danger mb-2" style={{ fontSize: 28 }}>
              {produto.price}
            </div>
            <button
              className="btn mb-3"
              style={{
                background: "#3FD37D",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 8,
                minWidth: 150,
              }}
              onClick={handleComprar}
            >
              Comprar
            </button>
            
            <div className="mb-2" style={{ color: "#333" }}>
              <b>Pagamento:</b> A vista via PIX ou em até 12x
            </div>
            <div className="mb-2">
              <b>Consultar frete e prazo de entrega</b>
              <br />
              <input
                type="text"
                placeholder="Insira teu CEP"
                className="form-control d-inline-block w-auto me-2"
                style={{ maxWidth: 180, display: "inline-block" }}
              />
              <button className="btn btn-outline-danger">Buscar</button>
            </div>
          </div>
        </div>
        {/* Descrição e informações técnicas */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="bg-light p-4 rounded-3 mb-3">
              <h4 className="mb-2" style={{ fontWeight: 700 }}>
                Descrição do Produto
              </h4>
              <p style={{ color: "#333" }}>{produto.details}</p>
            </div>
            <div className="bg-light p-4 rounded-3">
              <h4 className="mb-2" style={{ fontWeight: 700 }}>
                Informações Técnicas
              </h4>
              <p style={{ color: "#333" }}>{produto.info}</p>
            </div>
          </div>
        </div>
        {/* Seção de app */}
        <div className="text-center my-5">
          <h3 className="mb-3" style={{ color: "#d90000", fontWeight: 700 }}>
            Baixe nosso Aplicativo
          </h3>
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

export default Produto;
