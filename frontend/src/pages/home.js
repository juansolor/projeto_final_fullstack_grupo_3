import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

const produtos = [
  {
    title: "Auragear Headset",
    description: "Headset gamer RGB com som surround.",
    nome: "Auragear",
    img: require("../assets/Auragear-produto2.jpg"),
    price: "R$ 1.049,99",
    desconto: "20% Desconto",
    stars: 5,
    details: "Headset gamer RGB, som surround, microfone removível, conexão USB.",
    info: "Compatível com PC, PS4, Xbox. Garantia 1 ano."
  },
  {
    title: "Projetor portátil",
    description: "Projetor de holograma de alta definição.",
    nome: "Byteware",
    img: require("../assets/Byteware-produto1.jpg"),
    price: "R$ 6.659,00",
    desconto: "47% Desconto",
    stars: 4,
    details: "Hologramas em 2 e 3D, conectividade via USB.",
    info: "Compatível com Windows, Mac. Garantia 1 ano."
  },
  {
    title: "Motherboard",
    description: "Motherboard de alta eficiência.",
    nome: "NexaCore",
    img: require("../assets/NexaCore - produto1.jpg"),
    price: "R$ 2.859,00",
    desconto: "50% Desconto",
    stars: 5,
    details: "Suporte para memórias DDR5 com altas frequências e velocidades, slots PCIe 5.0 para placas de vídeo e SSDs, múltiplos slots M.2 para armazenamento de alta velocidade.",
    info: "Compatível com Windows, Mac. Garantia 1 ano."
  },
  {
    title: "Soundpulse Speaker",
    description: "Caixa de som bluetooth potente.",
    nome: "Soundpulse",
    img: require("../assets/soundpulse-produto1.jpg"),
    price: "R$ 1.049,99",
    desconto: "27% Desconto",
    stars: 4,
    details: "Bluetooth 5.0, bateria 12h, à prova d'água.",
    info: "Compatível com todos dispositivos bluetooth. Garantia 1 ano."
  }
];

const carouselImages = [
  require("../assets/Auragear-produto2.jpg"),
  require("../assets/Byteware-produto1.jpg"),
  require("../assets/NexaCore - produto1.jpg"),
  require("../assets/soundpulse-produto1.jpg"),
  require("../assets/Auragear-produto3.jpg"),
  require("../assets/Byteware-produto2.jpg"),
  require("../assets/NexaCore-produto3.jpg"),
  require("../assets/soundpulse-logo.jpg"),
  require("../assets/PeriTech-produto1.jpg"),
  require("../assets/Quanttum-produto1.jpg"),
  require("../assets/PeriTech-produto2.jpg"),
  require("../assets/Quanttum-produto2.jpg"),
  require("../assets/NexaCore-produto4.jpg"),
  require("../assets/Aureagerar-produto1.jpg")
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Inicializa el carrusel manualmente para asegurar el autoplay
    let carouselInstance = null;
    (async () => {
      const carouselEl = document.getElementById('mainCarousel');
      if (!carouselEl) return;
      let BootstrapCarousel = null;
      if (window.bootstrap && window.bootstrap.Carousel) {
        BootstrapCarousel = window.bootstrap.Carousel;
      } else {
        try {
          const bootstrapLib = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
          BootstrapCarousel = bootstrapLib.Carousel;
        } catch (e) {
          // No Bootstrap JS found
        }
      }
      if (BootstrapCarousel) {
        carouselInstance = new BootstrapCarousel(carouselEl, {
          interval: 5000,
          ride: 'carousel',
          pause: false,
          wrap: true
        });
      }
    })();
    return () => {
      if (carouselInstance && carouselInstance.dispose) carouselInstance.dispose();
    };
  }, []);

  const handleVerProduto = (produto) => {
    navigate("/produto", { state: { produto } });
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div style={{ width: "600px", margin: "40px auto" }}>
        <Carousels>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Ref 1"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </Carousels>
        {/* Puedes agregar más imágenes y lógica de carousel aquí */}
      </div>
    </div>
  );
};

export default Home;