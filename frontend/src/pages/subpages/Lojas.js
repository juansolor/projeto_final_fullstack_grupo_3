import React from "react";
import { Link } from "react-router-dom";

const Lojas = () => {
  return (
    <div className="p-3">
      <h4 className="mb-3">Lojas</h4>
      <p className="mb-3">
        Aqui você encontrará uma lista de nossas lojas perto de você.
      </p>
      <Link to="/ofertas" className="btn btn-primary me-2">
        Ver Ofertas
      </Link>
      <button
        type="button"
        className="btn btn-outline-secondary me-2"
        onClick={() => {
          const cep = prompt("Digite seu CEP:");
          if (cep) {
            window.open(`https://www.google.com/maps/search/${cep}`, "_blank");
          }
        }}
      >
        Buscar por CEP no Google Maps
      </button>
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

export default Lojas;
