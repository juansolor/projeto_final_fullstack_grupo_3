import React from "react";


const Carrinho = () => {
return (
    <div>
        <h1>Carrinho de Compras</h1>
        <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="Carrinho de Compras"
            style={{ width: "100px", marginBottom: "20px" }}
        />
        <p>Seu carrinho está vazio.</p>
        <p>Adicione produtos para começar a comprar!</p>
        <ul className="list-group">
            <li className="list-group-item active" aria-current="true">An active item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    </div>
);
}
export default Carrinho;
