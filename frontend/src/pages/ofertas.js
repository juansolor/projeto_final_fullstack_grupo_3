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
      <h1 className="text-center mb-4" style={{ color: "#d90000", fontWeight: 700, fontSize: 42, fontFamily: 'Montserrat, Arial, sans-serif' }}>Ofertas! </h1>
      <p>Aproveite as seguintes Promoções:</p>
      <div className="row">
        {ofertas.map((oferta, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100">
              <img src={oferta.img} className="card-img-top" alt={oferta.title} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#8439CC", fontWeight: 600 }}>{oferta.title}</h5>
                <p className="card-text">{oferta.description}</p>
                <p className="card-text" >
                  <strong>{oferta.price}</strong>
                </p>
                <span className="badge bg-success mb-2" style={{ background: "#3FD37D", color: "#fff"}}>{oferta.desconto}</span>
                <Link to={`/oferta/${idx}`} className="btn btn-primary" style={{ background: "#3FD37D", color: "#fff", fontWeight: 600, borderRadius: 8 }}>
                  Ver detalhes
                </Link>
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
