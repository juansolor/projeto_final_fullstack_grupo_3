import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const Pagamento = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const carrinho = location.state?.carrinho || [];
    const [selectedPayment, setSelectedPayment] = useState('');
    const [cardData, setCardData] = useState({
        numero: '',
        nome: '',
        validade: '',
        cvv: ''
    });

    const handlePaymentSelect = (method) => {
        setSelectedPayment(method);
    };

    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setCardData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Vaciar el carrito en el backend al confirmar el pago
        await fetch(`${API_URL}/api/carrinho`, { method: 'DELETE' });
        alert("Pagamento processado com sucesso!");
        navigate('/', { replace: true }); // Redirigir a home
    };

    // Función para obtener la URL de la imagen
    const getImageUrl = (produto) => {
        if (!produto) return '';
        if (produto.img) return produto.img;
        if (produto.image) return `/uploads/${produto.image}`;
        if (produto.imagem) return `/uploads/${produto.imagem}`;
        return "https://via.placeholder.com/180x180?text=Sem+Imagem";
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="mb-4" style={{ color: '#8439CC' }}>Detalhes do Pagamento</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Método de Pagamento</label>
                                    <select className="form-select" value={selectedPayment} onChange={(e) => handlePaymentSelect(e.target.value)} required>
                                        <option value="">Selecione...</option>
                                        <option value="cartao">Cartão de Crédito</option>
                                        <option value="boleto">Boleto Bancário</option>
                                    </select>
                                </div>
                                {selectedPayment === 'cartao' && (
                                    <div>
                                        <div className="mb-3">
                                            <label className="form-label">Número do Cartão</label>
                                            <input type="text" className="form-control" name="numero" value={cardData.numero} onChange={handleCardChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Nome no Cartão</label>
                                            <input type="text" className="form-control" name="nome" value={cardData.nome} onChange={handleCardChange} required />
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label className="form-label">Validade</label>
                                                <input type="text" className="form-control" name="validade" value={cardData.validade} onChange={handleCardChange} placeholder="MM/AA" required />
                                            </div>
                                            <div className="col">
                                                <label className="form-label">CVV</label>
                                                <input type="text" className="form-control" name="cvv" value={cardData.cvv} onChange={handleCardChange} required />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#8439CC', borderColor: '#8439CC' }}>
                                    Confirmar Pagamento
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Resumo da compra */}
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="text-center mb-3" style={{ color: '#8439CC' }}>Resumo da Compra</h5>
                            {carrinho.length > 0 ? (
                                <>
                                {carrinho.map((produto, idx) => (
                                    <div key={idx} className="d-flex flex-column align-items-center mb-3">
                                        <img src={getImageUrl(produto)} alt={produto.title || produto.name} style={{width: 100, height: 100, objectFit: 'contain', borderRadius: 12, background: '#f8f9fa'}} />
                                        <div className="fw-bold mt-2">{produto.title || produto.name}</div>
                                        <div className="text-muted">{produto.description}</div>
                                        <div className="mb-2">Preço unitário: {produto.preco ? `R$ ${produto.preco.toFixed(2)}` : (produto.price || (produto.promotionalPrice ? `R$ ${produto.promotionalPrice}` : "-"))}</div>
                                        <div className="mb-2">Quantidade: {produto.quantidade || 1}</div>
                                        <div className="mb-2">Subtotal: {produto.preco ? `R$ ${(produto.preco * (produto.quantidade || 1)).toFixed(2)}` : "-"}</div>
                                    </div>
                                ))}
                                <hr />
                                <div className="d-flex justify-content-between mb-3">
                                    <strong>Total:</strong>
                                    <strong>{carrinho.reduce((acc, p) => acc + ((p.preco ? p.preco * (p.quantidade || 1) : (parseFloat((p.price || p.promotionalPrice || '0').toString().replace('R$', '').replace(',', '.')) || 0))), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                                </div>
                                </>
                            ) : (
                                <div className="text-center text-muted">Nenhum produto no carrinho</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagamento;