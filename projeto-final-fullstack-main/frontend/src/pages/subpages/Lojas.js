import React from "react";
import { Link } from "react-router-dom";

const Lojas = () => {   
return (
    <div className="p-3">
        <h4 className="mb-3">Lojas</h4>
        <p className="mb-3">
            Aqui você encontrará uma lista de nossas lojas perto de você.
        </p>
        <Link
            to="/ofertas"
            className="btn btn-primary me-2"
        >
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
    </div>
);
}


export default Lojas;
