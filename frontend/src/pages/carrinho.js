import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarrinho = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/carrinho");
        setCarrinho(res.data);
      } catch (err) {
        setError("Erro ao carregar o carrinho");
      } finally {
        setLoading(false);
      }
    };
    fetchCarrinho();
  }, []);

  // Actualizar cantidad
  const handleUpdate = async (id, quantidade) => {
    if (quantidade < 1) return;
    try {
      await axios.patch(`http://localhost:3001/api/carrinho/${id}`, { quantidade });
      setCarrinho((prev) => prev.map(item => item.id === id ? { ...item, quantidade } : item));
    } catch (err) {
      alert("Erro ao atualizar quantidade");
    }
  };

  // Eliminar producto
  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja remover este produto do carrinho?")) return;
    try {
      await axios.delete(`http://localhost:3001/api/carrinho/${id}`);
      setCarrinho((prev) => prev.filter(item => item.id !== id));
      window.alert("Produto removido do carrinho!");
    } catch (err) {
      alert("Erro ao deletar produto");
    }
  };

  const subtotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  const taxa = carrinho.length > 0 ? 24.36 : 0;
  const total = subtotal + taxa;

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <div className="container py-4">
        {/* Progresso de compra */}
        <div className="mb-4 text-center">
          <img src={require("../assets/logo.png")} alt="Progresso" style={{ width: '120px', display: 'block', margin: '0 auto' }} />
        </div>
        <h2 className="mb-4" style={{ color: '#d90000', fontWeight: 700 }}>Meu Carrinho</h2>
        {loading ? <div>Carregando...</div> : error ? <div>{error}</div> : (
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
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {carrinho.length > 0 ? carrinho.map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.img} alt={item.title} style={{ width: 60, height: 40, objectFit: 'contain' }} /></td>
                    <td>{item.title}</td>
                    <td>R${item.preco.toFixed(2)}</td>
                    <td>
                      <input type="number" min="1" value={item.quantidade} style={{ width: 60 }}
                        onChange={e => handleUpdate(item.id, Number(e.target.value))} />
                    </td>
                    <td>R${(item.preco * item.quantidade).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-outline-danger btn-sm" style={{transition: 'background 0.2s'}} onClick={() => handleDelete(item.id)}>
                        Deletar
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan="6">Seu carrinho está vazio.</td></tr>
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
              <button className="btn btn-success w-100 mt-3" style={{fontWeight: 700, fontSize: 18}}>Pagar Produto</button>
            </div>
          </div>
        </div>
        )}
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
