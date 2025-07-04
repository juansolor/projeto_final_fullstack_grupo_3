import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ofertas = [
  {
    title: "Auragear Headset",
    description: "Headset gamer RGB com som surround.",
    nome: "Auragear",
    img: require("../assets/Quanttum-produto1.jpg"),
    price: "R$ 5.000,99",
    desconto: "20% Desconto",
    stars: 5,
    details: "Headset gamer RGB, som surround, microfone removível, conexão USB.",
    info: "Compatível com PC, PS4, Xbox. Garantia 1 ano."
  },
  {
    
    title: "Auragear Headset",
    description: "Headset gamer RGB com som surround.",
    nome: "Auragear",
    img: require("../assets/Quanttum-produto2.jpg"),
    price: "R$ 5.000,99",
    desconto: "20% Desconto",
    stars: 4,
    details: "Headset gamer RGB, som surround, microfone removível, conexão USB.",
    info: "Compatível com PC, PS4, Xbox. Garantia 1 ano."
  },
  {
    
    title: "Auragear Headset",
    description: "Headset gamer RGB com som surround.",
    nome: "Auragear",
    img: require("../assets/quanttum-produto3.jpg"),
    price: "R$ 5.000,99",
    desconto: "20% Desconto",
    stars: 3,
    details: "Headset gamer RGB, som surround, microfone removível, conexão USB.",
    info: "Compatível com PC, PS4, Xbox. Garantia 1 ano."
  },
  {
    
    title: "Auragear Headset",
    description: "Headset gamer RGB com som surround.",
    nome: "Auragear",
    img: require("../assets/optiview-produto1.jpg"),
    price: "R$ 5.000,99",
    desconto: "20% Desconto",
    stars: 2,
    details: "Headset gamer RGB, som surround, microfone removível, conexão USB.",
    info: "Compatível com PC, PS4, Xbox. Garantia 1 ano."
  },
    {
    
    title: "Auragear Headset",
    description: "Headset gamer RGB com som surround.",
    nome: "Auragear",
    img: require("../assets/optiview-produto2.jpg"),
    price: "R$ 5.000,99",
    desconto: "20% Desconto",
    stars: 1,
    details: "Headset gamer RGB, som surround, microfone removível, conexão USB.",
    info: "Compatível com PC, PS4, Xbox. Garantia 1 ano."
  },
];

const carouselImages = [
  require("../assets/Auragear-produto2.jpg"),
  require("../assets/Byteware-produto1.jpg"),
  require("../assets/NexaCore - produto1.jpg"),
  require("../assets/soundpulse-produto1.jpg"),
  require("../assets/Auragear-produto3.jpg"),
  require("../assets/Byteware-produto2.jpg"),
  require("../assets/Byteware-produto3.jpg"),
  require("../assets/gamerlink-logo.jpg"),
  require("../assets/PeriTech-produto1.jpg"),
  require("../assets/Byteware-produto3.jpg"),
  require("../assets/PeriTech-produto2.jpg"),
  require("../assets/Quanttum-produto2.jpg"),
  require("../assets/Quanttum-produto1.jpg"),
  require("../assets/quanttum-produto3.jpg")
];



const Ofertas = () => {
  return (
    <div className="container mt-5">
      <h1>Ofertas</h1>
      <p>Aproveite as seguintes Promoções:</p>
      <div className="row">
        {ofertas.map((oferta, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100">
              <img src={oferta.img} className="card-img-top" alt={oferta.title} />
              <div className="card-body">
                <h5 className="card-title">{oferta.title}</h5>
                <p className="card-text">{oferta.description}</p>
                <p className="card-text">
                  <strong>{oferta.price}</strong>
                </p>
                <span className="badge bg-success mb-2">{oferta.desconto}</span>
                <Link to={`/oferta/${idx}`} className="btn btn-primary">
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
