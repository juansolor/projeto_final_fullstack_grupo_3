import React from "react";


const Produto = () => {
// Exemplo simples de carousel de imagens usando estado local
const [currentIndex, setCurrentIndex] = React.useState(0);
const images = [
    "https://via.placeholder.com/400x200?text=Imagem+1",
    "https://via.placeholder.com/400x200?text=Imagem+2",
    "https://via.placeholder.com/400x200?text=Imagem+3"
];

const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
};

return (
    <div>
        <h1>Detalhes do Produto</h1>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <button onClick={prevImage}>{"<"}</button>
            <img
                src={images[currentIndex]}
                alt={`Produto ${currentIndex + 1}`}
                style={{ width: "400px", height: "200px", margin: "0 16px" }}
            />
            <button onClick={nextImage}>{">"}</button>
        </div>
        <p>Descrição do produto...</p>
    </div>
);
};

export default Produto;
