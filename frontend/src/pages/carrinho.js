import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Carrinho = () => {
  const location = useLocation();
  const produto = location.state?.produto;

  // Simulação de carrito com um único produto
  const subtotal = produto ? Number(produto.price.replace(/[^\d,]/g, '').replace(',', '.')) : 0;
  const taxa = produto ? 24.36 : 0;
  const total = subtotal + taxa;

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <div className="container py-4">
        {/* Progresso de compra */}
        <div className="mb-4 text-center">
          <img src={require("../assets/logo.png")} alt="Progresso" style={{ width: '120px', display: 'block', margin: '0 auto' }} />
        </div>
        <h2 className="mb-4" style={{ color: '#d90000', fontWeight: 700 }}>Meu Carrinho</h2>
        <div className="row">
          <div className="col-md-8">
            <table className="table bg-white rounded-3 shadow-sm">
              <thead>
                <tr>
                  <th></th>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {produto ? (
                  <tr>
                    <td><img src={produto.img} alt={produto.title} style={{ width: 60, height: 40, objectFit: 'contain' }} /></td>
                    <td>{produto.title}</td>
                    <td>{produto.price}</td>
                    <td>01</td>
                    <td>{produto.price}</td>
                  </tr>
                ) : (
                  <tr><td colSpan="5">Seu carrinho está vazio.</td></tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="bg-white rounded-3 shadow-sm p-3 mb-4">
              <h5 className="mb-3" style={{ color: '#d90000', fontWeight: 700 }}>Resumo de Compra</h5>
              <div className="d-flex justify-content-between border-bottom py-2">
                <span>Subtotal:</span>
                <span>R${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <span>Taxa de serviços:</span>
                <span>R${taxa.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <span>Entrega:</span>
                <span>-</span>
              </div>
              <div className="d-flex justify-content-between py-2 fw-bold">
                <span>Total:</span>
                <span>R${total.toFixed(2)} + Entrega</span>
              </div>
            </div>
          </div>
        </div>
        {/* Seção de app */}
        <div className="text-center my-5">
          <h3 className="mb-3" style={{ color: "#d90000", fontWeight: 700 }}>Baixe nosso Aplicativo</h3>
          <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ height: 50 }} /></a>
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: 50 }} /></a>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
