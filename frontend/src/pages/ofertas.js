import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ofertas = [
    {
        
        id: 1,
        titulo: "Oferta 1",
        descricao: "Descrição da oferta 1.",
        preco: "R$ 100,00"
    },
    {
        id: 2,
        titulo: "Oferta 2",
        descricao: "Descrição da oferta 2.",
        preco: "R$ 200,00"
    },
    {
        id: 3,
        titulo: "Oferta 3",
        descricao: "Descrição da oferta 3.",
        preco: "R$ 300,00"
    }
];

const Ofertas = () => {
    return (
        <div className="container mt-5">
            <h1>Ofertas</h1>
            <p>Aqui estão algumas ofertas disponíveis:</p>
            <div className="row">
                {ofertas.map((oferta) => (
                    <div className="col-md-4 mb-4" key={oferta.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{oferta.titulo}</h5>
                                <p className="card-text">{oferta.descricao}</p>
                                <p className="card-text"><strong>{oferta.preco}</strong></p>
                                <Link to={`/oferta/${oferta.id}`} className="btn btn-primary">
                                    Ver detalhes
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ofertas;
