import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const SuperUser = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState("");
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [isOferta, setIsOferta] = useState(false);
    const [categoria, setCategoria] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setMessage("Selecione uma imagem para enviar.");
            return;
        }
        if (!nome || !valor || !categoria) {
            setMessage("Preencha todos os campos obrigatórios.");
            return;
        }
        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("nome", nome);
        formData.append("valor", valor);
        formData.append("oferta", isOferta);
        formData.append("categoria", categoria);

        try {
            await axios.post("http://localhost:5000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage("Imagem enviada com sucesso!");
            setSelectedFile(null);
            setPreview(null);
            setNome("");
            setValor("");
            setIsOferta(false);
            setCategoria("");
        } catch (error) {
            setMessage("Erro ao enviar imagem.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-body">
                    <h1 className="card-title text-center mb-4">Painel do Super Usuário</h1>
                    <p className="text-center">Bem-vindo ao painel de controle do super usuário!</p>
                    <form onSubmit={handleSubmit} className="text-center">
                        <div className="mb-3">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nome do produto"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Valor"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                                required
                                min="0"
                                step="0.01"
                            />
                        </div>
                        <div className="mb-3 form-check text-start">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="ofertaCheck"
                                checked={isOferta}
                                onChange={(e) => setIsOferta(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="ofertaCheck">
                                Oferta
                            </label>
                        </div>
                        <div className="mb-3">
                            <select
                                className="form-select"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                required
                            >
                                <option value="">Selecione a categoria</option>
                                <option value="bebidas">Bebidas</option>
                                <option value="lanches">Lanches</option>
                                <option value="sobremesas">Sobremesas</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                        {preview && (
                            <div className="mb-3">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="img-thumbnail"
                                    style={{ maxWidth: "200px" }}
                                />
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary">
                            Enviar Imagem
                        </button>
                    </form>
                    {message && (
                        <div className="alert alert-info mt-3" role="alert">
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SuperUser;
