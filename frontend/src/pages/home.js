import React from "react";
import Carousels from "../components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
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