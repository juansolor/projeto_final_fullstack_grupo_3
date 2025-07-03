<<<<<<< HEAD
import React from 'react';

const HistoricoCompras = () => {
  return (
    <div className="container mt-5">
      <h2>Histórico de Compras</h2>
      <p>Aqui você verá seu histórico de compras.</p>
=======
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const HistoricoCompras = ({ usuarioId }) => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/pedidos/${usuarioId}`);
        setPedidos(res.data);
      } catch (err) {
        setError("Erro ao carregar histórico de compras");
      } finally {
        setLoading(false);
      }
    };
    if (usuarioId) fetchPedidos();
  }, [usuarioId]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container py-4">
      <h2 className="mb-4" style={{ color: '#d90000', fontWeight: 700 }}>Histórico de Compras</h2>
      {pedidos.length === 0 ? (
        <div>Você ainda não realizou compras.</div>
      ) : (
        pedidos.map((pedido) => (
          <div key={pedido.id} className="mb-4 p-3 bg-white rounded-3 shadow-sm">
            <div className="mb-2"><b>Data:</b> {new Date(pedido.data).toLocaleString()}</div>
            <div className="mb-2"><b>Total:</b> R${pedido.total.toFixed(2)}</div>
            <div><b>Produtos:</b>
              <ul>
                {pedido.produtos.map((prod, idx) => (
                  <li key={idx}>{prod.title} - {prod.quantidade} x R${prod.preco.toFixed(2)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default HistoricoCompras;
=======
export default HistoricoCompras;
>>>>>>> origin/main
